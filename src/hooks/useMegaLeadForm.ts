"use client";

import { useEffect, useCallback, useRef, useState } from "react";

const ENDPOINT = "https://analytics.gomega.ai/submission/submit";

const STORAGE_KEYS = {
  VISITOR_ID: "_mega_vid",
  SESSION_ID: "_mega_sid",
  ATTRIBUTION: "_mega_attr",
};

interface Attribution {
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_term: string | null;
  utm_content: string | null;
  gclid: string | null;
  gbraid: string | null;
  wbraid: string | null;
  fbclid: string | null;
  fbp: string | null;
  fbc: string | null;
}

interface LeadFormConfig {
  siteId: string;
  customerId: string;
  sourceProvider: string;
  pagePath?: string;
}

type Status = "idle" | "submitting" | "success" | "error";

interface FormState {
  status: Status;
  errorMessage: string;
}

const generateId = (prefix: string): string => {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return `${prefix}_${crypto.randomUUID()}`;
  }
  return `${prefix}_${"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  })}`;
};

const getCookie = (name: string): string | null => {
  if (typeof document === "undefined") return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop()?.split(";").shift() || null;
  }
  return null;
};

const getVisitorId = (): string => {
  if (typeof localStorage === "undefined") return generateId("vis");
  let visitorId = localStorage.getItem(STORAGE_KEYS.VISITOR_ID);
  if (!visitorId) {
    visitorId = generateId("vis");
    localStorage.setItem(STORAGE_KEYS.VISITOR_ID, visitorId);
  }
  return visitorId;
};

const getSessionId = (): string => {
  if (typeof sessionStorage === "undefined") return generateId("sess");
  let sessionId = sessionStorage.getItem(STORAGE_KEYS.SESSION_ID);
  if (!sessionId) {
    sessionId = generateId("sess");
    sessionStorage.setItem(STORAGE_KEYS.SESSION_ID, sessionId);
  }
  return sessionId;
};

const captureAttribution = (): Attribution => {
  if (typeof window === "undefined") {
    return {
      utm_source: null, utm_medium: null, utm_campaign: null,
      utm_term: null, utm_content: null, gclid: null,
      gbraid: null, wbraid: null, fbclid: null, fbp: null, fbc: null,
    };
  }
  const url = new URL(window.location.href);
  const params = url.searchParams;
  const attribution: Attribution = {
    utm_source: params.get("utm_source"),
    utm_medium: params.get("utm_medium"),
    utm_campaign: params.get("utm_campaign"),
    utm_term: params.get("utm_term"),
    utm_content: params.get("utm_content"),
    gclid: params.get("gclid"),
    gbraid: params.get("gbraid"),
    wbraid: params.get("wbraid"),
    fbclid: params.get("fbclid"),
    fbp: getCookie("_fbp"),
    fbc: getCookie("_fbc"),
  };
  if (attribution.fbclid && !attribution.fbc) {
    attribution.fbc = `fb.1.${Date.now()}.${attribution.fbclid}`;
  }
  return attribution;
};

const initAttribution = (): Attribution => {
  if (typeof window === "undefined" || typeof localStorage === "undefined") {
    return captureAttribution();
  }
  const trackingParams = ["utm_source", "gclid", "fbclid", "gbraid", "wbraid"];
  const url = new URL(window.location.href);
  const hasTrackingParams = trackingParams.some((p) => url.searchParams.has(p));
  if (hasTrackingParams) {
    const attribution = captureAttribution();
    localStorage.setItem(STORAGE_KEYS.ATTRIBUTION, JSON.stringify(attribution));
    return attribution;
  }
  const stored = localStorage.getItem(STORAGE_KEYS.ATTRIBUTION);
  if (stored) {
    try {
      return JSON.parse(stored) as Attribution;
    } catch {
      // fall through
    }
  }
  const attribution = captureAttribution();
  localStorage.setItem(STORAGE_KEYS.ATTRIBUTION, JSON.stringify(attribution));
  return attribution;
};

type SubmitResult = { ok: true } | { ok: false; error: string };

interface UseMegaLeadForm extends FormState {
  submitLead: (formData: Record<string, unknown>) => Promise<SubmitResult>;
  reset: () => void;
}

const DUPLICATE_SUBMIT_ERROR = "Submission already in progress or completed";

// Hook-level validation; normalizes formData.phone to digits in place.
const validateLead = (formData: Record<string, unknown>): string | null => {
  if (formData.phone) {
    const phoneDigits = String(formData.phone).replace(/\D/g, "");
    if (phoneDigits.length !== 10) return "Phone must be 10 digits";
    formData.phone = phoneDigits;
  }
  if (!formData.firstName || !formData.email) return "First name and email are required";
  return null;
};

const buildPayload = (config: LeadFormConfig, formData: Record<string, unknown>) => {
  const attribution = initAttribution();
  return {
    customer_id: config.customerId,
    site_id: config.siteId,
    source_provider: config.sourceProvider,
    form_data: formData,
    url: window.location.href,
    referrer_url: document.referrer || null,
    session_id: getSessionId(),
    visitor_id: getVisitorId(),
    utm_source: attribution.utm_source,
    utm_medium: attribution.utm_medium,
    utm_campaign: attribution.utm_campaign,
    utm_term: attribution.utm_term,
    utm_content: attribution.utm_content,
    gclid: attribution.gclid,
    gbraid: attribution.gbraid,
    wbraid: attribution.wbraid,
    fbclid: attribution.fbclid,
    fbp: attribution.fbp,
    fbc: attribution.fbc,
  };
};

const isConfirmedBody = (body: unknown): boolean =>
  typeof body === "object" && body !== null && (body as { ok?: unknown }).ok === true;

// Resolves only when the endpoint confirms the lead: HTTP 2xx AND JSON body { ok: true }.
const postLead = async (payload: ReturnType<typeof buildPayload>): Promise<void> => {
  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!response.ok) {
    throw new Error(`Submission failed: ${response.status}`);
  }
  const body: unknown = await response.json();
  if (!isConfirmedBody(body)) {
    throw new Error("Submission not confirmed by server");
  }
};

const dispatchSubmitEvent = (formData: Record<string, unknown>, pagePath?: string): void => {
  try {
    window.dispatchEvent(
      new CustomEvent("mega:form_submit", {
        detail: { form_data: formData, page_path: pagePath || window.location.pathname },
      })
    );
  } catch {
    // silent
  }
};

export function useMegaLeadForm(config: LeadFormConfig): UseMegaLeadForm {
  const isInitialized = useRef(false);
  // Synchronous lock: React state updates are async, so rapid submits would
  // otherwise all see status "idle" from the same render. Held while a request
  // is in flight and after confirmed success; released only on failure/reset.
  const locked = useRef(false);
  const [state, setState] = useState<FormState>({ status: "idle", errorMessage: "" });

  useEffect(() => {
    if (!isInitialized.current) {
      initAttribution();
      isInitialized.current = true;
    }
  }, []);

  const submitLead = useCallback(
    async (formData: Record<string, unknown>): Promise<SubmitResult> => {
      if (locked.current) return { ok: false, error: DUPLICATE_SUBMIT_ERROR };

      const validationError = validateLead(formData);
      if (validationError) {
        setState({ status: "error", errorMessage: validationError });
        return { ok: false, error: validationError };
      }

      locked.current = true;
      setState({ status: "submitting", errorMessage: "" });
      try {
        await postLead(buildPayload(config, formData));
        dispatchSubmitEvent(formData, config.pagePath);
        setState({ status: "success", errorMessage: "" });
        return { ok: true };
      } catch (error) {
        locked.current = false;
        const errorMessage = error instanceof Error ? error.message : "Something went wrong. Please try again.";
        setState({ status: "error", errorMessage });
        return { ok: false, error: errorMessage };
      }
    },
    [config]
  );

  const reset = useCallback(() => {
    locked.current = false;
    setState({ status: "idle", errorMessage: "" });
  }, []);

  return { ...state, submitLead, reset };
}
