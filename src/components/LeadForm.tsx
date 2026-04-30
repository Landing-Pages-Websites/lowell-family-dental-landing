"use client";

import { useState } from "react";
import { useMegaLeadForm } from "@/hooks/useMegaLeadForm";
import {
  CUSTOMER_ID,
  SITE_ID,
  SOURCE_PROVIDER,
  TIMELINE_OPTIONS,
} from "./Brand";

interface LeadFormProps {
  variant?: "hero" | "contact";
  /** Optional headline override (e.g., on the hero) */
  headline?: string;
  /** Optional subheadline override */
  subhead?: string;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  timeline: string;
}

const initial: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  timeline: "",
};

export function LeadForm({
  variant = "hero",
  headline,
  subhead,
}: LeadFormProps) {
  const { status, errorMessage, submitLead } = useMegaLeadForm({
    customerId: CUSTOMER_ID,
    siteId: SITE_ID,
    sourceProvider: SOURCE_PROVIDER,
  });

  const [data, setData] = useState<FormData>(initial);
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const update = <K extends keyof FormData>(k: K, v: FormData[K]) =>
    setData((d) => ({ ...d, [k]: v }));

  const submitting = status === "submitting";
  const success = status === "success" || submitted;

  const formatPhone = (raw: string) => {
    const d = raw.replace(/\D/g, "").slice(0, 10);
    const p = [];
    if (d.length > 0) p.push(d.slice(0, 3));
    if (d.length >= 4) p.push(d.slice(3, 6));
    if (d.length >= 7) p.push(d.slice(6, 10));
    return p.join("-");
  };

  const validate = (): string | null => {
    if (!data.firstName.trim()) return "Please enter your first name.";
    if (!data.lastName.trim()) return "Please enter your last name.";
    if (!data.email.trim() || !/^\S+@\S+\.\S+$/.test(data.email)) return "Please enter a valid email.";
    const digits = data.phone.replace(/\D/g, "");
    if (digits.length !== 10) return "Phone must be a 10-digit number.";
    if (!data.timeline) return "Please select an appointment timeline.";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting || success) return;
    const err = validate();
    if (err) {
      setTouched({ firstName: true, lastName: true, email: true, phone: true, timeline: true });
      return;
    }
    await submitLead({
      firstName: data.firstName.trim(),
      lastName: data.lastName.trim(),
      email: data.email.trim(),
      phone: data.phone.replace(/\D/g, ""),
      timeline: data.timeline,
    });
    setSubmitted(true);
  };

  // ─── Success ───
  if (success) {
    return (
      <div
        className={`rounded-2xl p-8 sm:p-10 ${
          variant === "hero"
            ? "bg-white shadow-xl border border-[var(--color-border)]"
            : "bg-[var(--color-soft-blue)] border border-[var(--color-border)]"
        }`}
      >
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-2">
            Thanks{data.firstName ? `, ${data.firstName}` : ""}!
          </h3>
          <p className="text-[var(--color-text-muted)] max-w-sm">
            We received your request and a member of our team will call you shortly to confirm
            your free consultation. If you&rsquo;d like to talk now, call us at{" "}
            <a className="font-semibold text-[var(--color-primary)]" href="tel:+19784581179">
              (978) 458-1179
            </a>
            .
          </p>
        </div>
      </div>
    );
  }

  const showError = (k: keyof FormData) => touched[k] && !data[k];

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`relative rounded-2xl p-6 sm:p-8 ${
        variant === "hero"
          ? "bg-white shadow-2xl border border-[var(--color-border)]"
          : "bg-white shadow-lg border border-[var(--color-border)]"
      }`}
    >
      {(headline || subhead) && (
        <div className="mb-5 sm:mb-6">
          {headline && (
            <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-primary)] leading-tight">
              {headline}
            </h3>
          )}
          {subhead && (
            <p className="mt-1.5 text-sm text-[var(--color-text-muted)]">{subhead}</p>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label htmlFor="firstName" className="sr-only">
            First name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
            placeholder="First name"
            className={`lp-input ${showError("firstName") ? "border-red-400" : ""}`}
            value={data.firstName}
            onChange={(e) => update("firstName", e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, firstName: true }))}
            disabled={submitting}
          />
        </div>
        <div>
          <label htmlFor="lastName" className="sr-only">
            Last name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            autoComplete="family-name"
            required
            placeholder="Last name"
            className={`lp-input ${showError("lastName") ? "border-red-400" : ""}`}
            value={data.lastName}
            onChange={(e) => update("lastName", e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, lastName: true }))}
            disabled={submitting}
          />
        </div>
      </div>

      <div className="mt-3">
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="Email address"
          className={`lp-input ${showError("email") ? "border-red-400" : ""}`}
          value={data.email}
          onChange={(e) => update("email", e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, email: true }))}
          disabled={submitting}
        />
      </div>

      <div className="mt-3">
        <label htmlFor="phone" className="sr-only">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          inputMode="numeric"
          pattern="[0-9\-]*"
          autoComplete="tel"
          required
          placeholder="Phone number"
          className={`lp-input ${showError("phone") ? "border-red-400" : ""}`}
          value={data.phone}
          onChange={(e) => update("phone", formatPhone(e.target.value))}
          onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
          disabled={submitting}
        />
      </div>

      <div className="mt-3 relative">
        <label htmlFor="timeline" className="sr-only">
          When are you looking to schedule?
        </label>
        <select
          id="timeline"
          name="timeline"
          required
          className={`lp-input appearance-none pr-10 ${
            !data.timeline ? "text-[#6b7280]" : ""
          } ${showError("timeline") ? "border-red-400" : ""}`}
          value={data.timeline}
          onChange={(e) => update("timeline", e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, timeline: true }))}
          disabled={submitting}
        >
          <option value="" disabled>
            How soon would you like to schedule?
          </option>
          {TIMELINE_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <svg className="w-5 h-5 text-[#9CA3AF]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </div>

      {errorMessage && status === "error" && (
        <div className="mt-3 text-sm text-red-600">{errorMessage}</div>
      )}

      <button
        type="submit"
        disabled={submitting || success}
        className="btn-primary w-full mt-5 text-base sm:text-lg py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? "Submitting…" : "Book My Free Consultation"}
      </button>

      <p className="mt-3 text-[11px] sm:text-xs leading-relaxed text-[var(--color-text-muted)] text-center">
        By submitting, you agree to be contacted about your consultation. No obligation,
        no pushy sales — just a friendly call from our team.
      </p>
    </form>
  );
}
