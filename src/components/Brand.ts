// ─── Single source of truth for all spec-driven values on this LP ───
// Per Standing Rule #4 / mistake-ledger 2026-04-28: form fields, phone,
// pixel/GTM IDs, etc. come from the Atlas task, NOT from the live site.

export const PHONE = "(978) 458-1179";
export const PHONE_HREF = "tel:+19784581179";

export const ADDRESS_LINE1 = "133 Market St.";
export const ADDRESS_LINE2 = "Lowell, MA 01852";

export const HOURS = [
  ["Monday", "8:00 AM – 6:00 PM"],
  ["Tuesday", "8:00 AM – 6:00 PM"],
  ["Wednesday", "8:00 AM – 5:00 PM"],
  ["Thursday", "8:00 AM – 5:30 PM"],
  ["Friday", "8:00 AM – 2:00 PM"],
  ["Saturday", "8:00 AM – 3:00 PM"],
  ["Sunday", "Closed"],
] as const;

// Mega tracking — registered 2026-04-30 via `mega site-tracking enable`.
// status=active, type=EXTERNAL_SITE (Anthony to flip to OWNED_SITE in admin UI).
export const SITE_ID = "f73de92d-2920-49ec-b362-59ab32ad3306";
export const SITE_KEY = "6jwfcm5uszlajeql";
export const CUSTOMER_ID = "9efd2f87-3807-48f7-a43d-0fa834262132";
export const SOURCE_PROVIDER = "lowell-family-dental-landing";

// Form schema — matches Atlas task input_data.form_fields exactly.
export const TIMELINE_OPTIONS = [
  "Within a week",
  "2–4 weeks",
  "1–2 months",
  "Not sure",
] as const;

export type TimelineOption = (typeof TIMELINE_OPTIONS)[number];
