"use client";

import { Reveal } from "./Reveal";
import { PHONE, PHONE_HREF } from "./Brand";

const POINTS = [
  {
    title: "Transparent, written treatment plans",
    body:
      "You'll know what every step costs before we start. No surprise bills, no upcharges, no fine-print add-ons.",
  },
  {
    title: "0% interest financing options",
    body:
      "We work with CareCredit, Sunbit and other partners so qualified patients can break treatment into low monthly payments — many with 0% interest.",
  },
  {
    title: "Most insurances accepted",
    body:
      "Including Blue Cross Blue Shield and other major plans. Our team handles the paperwork so you can focus on your smile, not your inbox.",
  },
  {
    title: "Exclusive new-patient discounts",
    body:
      "Ask about our current consultation special — patients who book through this page receive a complimentary 3D CT scan and personalized treatment plan.",
  },
];

export function Financing() {
  return (
    <section id="financing" className="relative py-20 sm:py-24 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[var(--color-soft-blue-2)] via-white to-[var(--color-soft-blue)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <div className="lg:col-span-5">
          <Reveal>
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[var(--color-primary)]">
              Financing &amp; affordability
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-text)] leading-[1.1]">
              Implants are an investment. We make sure they&rsquo;re an{" "}
              <span className="text-[var(--color-primary)]">affordable</span> one.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 text-lg text-[var(--color-text-muted)]">
              The single biggest reason patients put off implants is cost. We&rsquo;ve made
              that excuse obsolete. Between flexible monthly financing, in-network insurance,
              and exclusive new-patient discounts, most of our patients spend less per month
              than their phone bill.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a href="#contact" className="btn-primary">
                Get My Custom Quote
              </a>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 text-[var(--color-primary)] font-bold hover:underline"
              >
                Or call us: {PHONE}
              </a>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            {POINTS.map((p, i) => (
              <Reveal key={p.title} delay={120 + i * 70}>
                <div className="h-full rounded-2xl bg-white border border-[var(--color-border)] p-6 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/15 text-[var(--color-accent-dark)] flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8m-4-4h8M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2s10 4.5 10 10z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[var(--color-text)]">{p.title}</h3>
                      <p className="mt-1.5 text-[15px] text-[var(--color-text-muted)] leading-relaxed">
                        {p.body}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
