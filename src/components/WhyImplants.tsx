"use client";

import { Reveal } from "./Reveal";

const STATS = [
  { value: "30+", label: "Years serving Lowell" },
  { value: "98%", label: "Implant success rate" },
  { value: "4.9/5", label: "Patient rating (200+ reviews)" },
  { value: "Same week", label: "Consultations available" },
];

const REASONS = [
  {
    title: "Eat anything, again.",
    body:
      "Implants restore 90%+ of natural bite force — so steak, apples and corn on the cob are back on the menu. Dentures and bridges can't match it.",
  },
  {
    title: "They look exactly like your teeth.",
    body:
      "Custom-shaded ceramic crowns are matched to your existing smile. No one will know which tooth is the implant — including you, after a week.",
  },
  {
    title: "They protect your jawbone.",
    body:
      "Missing teeth cause the jaw to shrink and your face to age prematurely. Implants stimulate bone like a natural root — keeping your facial structure intact.",
  },
  {
    title: "They last decades, not years.",
    body:
      "With proper care, an implant is a once-in-a-lifetime fix. Bridges and dentures need replacing every 5–10 years. Implants pay for themselves.",
  },
];

export function WhyImplants() {
  return (
    <section
      id="why-implants"
      className="relative py-20 sm:py-24 lg:py-28 bg-[var(--color-surface-alt)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          <Reveal>
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[var(--color-primary)]">
              Why dental implants
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-text)] leading-[1.1]">
              Stop hiding your smile. Stop avoiding your favorite foods.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 text-lg text-[var(--color-text-muted)]">
              Whether you&rsquo;re missing a single tooth or struggling with loose dentures,
              modern dental implants are the closest thing to growing your real teeth back.
              Here&rsquo;s why patients in Lowell trust us with one of the most important
              decisions they&rsquo;ll make for their health.
            </p>
          </Reveal>
        </div>

        {/* Stats bar */}
        <Reveal delay={220}>
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-white border border-[var(--color-border)] p-5 sm:p-6 shadow-sm"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-[var(--color-primary)] tracking-tight">
                  {s.value}
                </div>
                <div className="mt-1.5 text-sm sm:text-[15px] text-[var(--color-text-muted)] font-medium">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* 4-up benefits grid */}
        <div className="mt-14 grid sm:grid-cols-2 gap-5 sm:gap-7">
          {REASONS.map((r, i) => (
            <Reveal key={r.title} delay={120 + i * 80}>
              <div className="h-full rounded-2xl bg-white border border-[var(--color-border)] p-6 sm:p-7 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-soft-blue)] text-[var(--color-primary)] flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-text)]">{r.title}</h3>
                </div>
                <p className="text-[15px] sm:text-base text-[var(--color-text-muted)] leading-relaxed">
                  {r.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
