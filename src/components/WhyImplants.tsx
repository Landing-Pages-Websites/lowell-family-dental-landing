"use client";

import Image from "next/image";
import { Reveal } from "./Reveal";

const STATS = [
  { value: "30+", label: "Years serving Lowell" },
  { value: "98%", label: "Implant success rate" },
  { value: "4.9/5", label: "Patient rating · 200+ reviews" },
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
      className="relative py-20 sm:py-24 lg:py-28 bg-white"
    >
      {/* Stat strip — floats UP into hero overlap */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-border)] rounded-3xl overflow-hidden shadow-xl -mt-32 mb-16 lg:mb-20 relative z-10 border border-[var(--color-border)]">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="bg-white p-5 sm:p-7 lg:p-8 text-center"
              >
                <div className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-[var(--color-primary)] tracking-tight leading-none">
                  {s.value}
                </div>
                <div className="mt-2 text-xs sm:text-sm text-[var(--color-text-muted)] font-semibold uppercase tracking-wider">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Photo */}
          <Reveal variant="left" className="lg:col-span-5">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
                <Image
                  src="/clinic.webp"
                  alt="Inside Lowell Family Dental Practice & Implant Center"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary)]/15 to-transparent" />
              </div>
              {/* Floating overlap card */}
              <div className="absolute -bottom-6 -right-4 sm:-bottom-7 sm:-right-6 bg-[var(--color-primary)] text-white rounded-2xl px-5 py-4 shadow-xl max-w-[240px]">
                <div className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent-light)]">
                  Lowell, MA
                </div>
                <div className="mt-1 text-base font-bold leading-snug">
                  Implant-focused care since 1995.
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: Copy + reasons */}
          <div className="lg:col-span-7">
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
              <p className="mt-4 text-lg text-[var(--color-text-muted)] leading-relaxed">
                Whether you&rsquo;re missing a single tooth or struggling with loose dentures,
                modern dental implants are the closest thing to growing your real teeth back.
                Here&rsquo;s why patients in Lowell trust us with one of the most important
                decisions they&rsquo;ll make for their health.
              </p>
            </Reveal>

            <div className="mt-8 grid sm:grid-cols-2 gap-5 sm:gap-6">
              {REASONS.map((r, i) => (
                <Reveal key={r.title} delay={120 + i * 80}>
                  <div className="h-full">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[var(--color-accent)]/15 text-[var(--color-accent-dark)] flex items-center justify-center shrink-0 mt-[2px]">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[var(--color-text)] leading-snug">
                          {r.title}
                        </h3>
                        <p className="mt-1.5 text-[15px] text-[var(--color-text-muted)] leading-relaxed">
                          {r.body}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
