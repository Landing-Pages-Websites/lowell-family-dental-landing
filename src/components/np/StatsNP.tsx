"use client";

import { Reveal } from "../Reveal";

const STATS = [
  { value: "30+", label: "Years serving Lowell families" },
  { value: "All ages", label: "Toddlers to grandparents" },
  { value: "4.9/5", label: "Google rating · 200+ reviews" },
  { value: "Same week", label: "New-patient appointments" },
];

export function StatsNP() {
  return (
    <section
      id="stats"
      aria-label="Practice stats"
      className="relative bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-border)] rounded-3xl overflow-hidden shadow-xl -mt-12 sm:-mt-16 lg:-mt-20 mb-12 lg:mb-16 relative z-10 border border-[var(--color-border)]">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="bg-white p-5 sm:p-7 lg:p-8 text-center"
              >
                <div className="text-2xl sm:text-3xl lg:text-[2.2rem] font-extrabold text-[var(--color-primary)] tracking-tight leading-none">
                  {s.value}
                </div>
                <div className="mt-2 text-xs sm:text-sm text-[var(--color-text-muted)] font-semibold uppercase tracking-wider">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
