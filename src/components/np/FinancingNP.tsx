"use client";

import { Reveal } from "../Reveal";
import { PHONE, PHONE_HREF } from "../Brand";

const POINTS = [
  {
    title: "Most insurances accepted.",
    body:
      "BCBS, Delta Dental, MetLife, Cigna, Aetna and most major plans. We file your claims and explain your benefits in plain English.",
  },
  {
    title: "0% interest financing.",
    body:
      "CareCredit and Sunbit offer 0% promotional rates so a crown or a deep cleaning never has to wait. Approval in minutes.",
  },
  {
    title: "Transparent pricing.",
    body:
      "You&rsquo;ll always see exactly what insurance pays, what you pay, and what each option costs — before any treatment starts.",
  },
];

export function FinancingNP() {
  return (
    <section
      id="financing"
      className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-gradient-to-br from-[var(--color-soft-blue-2)] via-white to-[var(--color-soft-blue)]"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <div className="lg:col-span-5">
          <Reveal>
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[var(--color-primary)]">
              Insurance &amp; Financing
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-text)] leading-[1.1]">
              Great dentistry — within reach for every family.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 text-lg text-[var(--color-text-muted)] leading-relaxed">
              Cost shouldn&rsquo;t stand between you and a healthy smile. We work with most
              major insurance plans and offer 0% financing options for anything insurance
              doesn&rsquo;t cover.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a href="#contact" className="btn-primary">
                Verify My Insurance
              </a>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 text-[var(--color-primary)] font-bold hover:text-[var(--color-primary-dark)] transition"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" />
                </svg>
                Call us: {PHONE}
              </a>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <div className="space-y-4">
            {POINTS.map((p, i) => (
              <Reveal key={p.title} delay={120 + i * 80}>
                <div className="bg-white border border-[var(--color-border)] rounded-2xl p-6 sm:p-7 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3
                        className="text-lg font-bold text-[var(--color-text)] leading-snug"
                        dangerouslySetInnerHTML={{ __html: p.title }}
                      />
                      <p
                        className="mt-1.5 text-[15px] sm:text-base text-[var(--color-text-muted)] leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: p.body }}
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={420}>
              <div className="bg-[var(--color-primary)] text-white rounded-2xl p-6 sm:p-7 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)] flex items-center justify-center shrink-0 text-white">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.4">
                      <path d="M12 8v8M8 12h8" strokeLinecap="round" />
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold leading-snug">
                      Not sure if you&rsquo;re covered? We&rsquo;ll find out — free.
                    </h3>
                    <p className="mt-1.5 text-[15px] sm:text-base text-white/85 leading-relaxed">
                      Send us your insurance info on the form and we&rsquo;ll verify your
                      benefits before your appointment, so you know exactly what&rsquo;s
                      covered before you sit in the chair.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
