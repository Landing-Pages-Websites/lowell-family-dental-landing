"use client";

import { useState } from "react";
import { Reveal } from "../Reveal";

const FAQS = [
  {
    q: "Does it hurt?",
    a: "Modern dentistry is dramatically more comfortable than it used to be. We use gentle numbing techniques, take time to explain everything, and never start until you&rsquo;re ready. If you have dental anxiety, tell us — we&rsquo;ll go at your pace.",
  },
  {
    q: "How long does a new-patient visit take?",
    a: "Plan for 60–75 minutes. That includes a thorough exam, full digital x-rays, oral cancer screening, a gentle cleaning, and an honest conversation about what you need (and what you don&rsquo;t).",
  },
  {
    q: "Do you take my insurance?",
    a: "We accept BCBS, Delta, MetLife, Cigna, Aetna and most major plans. Even if we&rsquo;re &ldquo;out of network,&rdquo; most patients are surprised by how much their plan still covers. Send us your info on the form and we&rsquo;ll verify it before you arrive.",
  },
  {
    q: "What if I haven&rsquo;t been to a dentist in years?",
    a: "You&rsquo;re not the only one — about 1 in 4 of our new patients hadn&rsquo;t seen a dentist in 5+ years. We don&rsquo;t lecture, shame or rush. We&rsquo;ll meet you exactly where you are and build a plan from there.",
  },
  {
    q: "Can my whole family come here?",
    a: "Yes — we see patients from age 2 through age 90+. Same office, same trusted team, no separate &ldquo;pediatric&rdquo; or &ldquo;senior&rdquo; referral. We love seeing whole families together.",
  },
  {
    q: "What if I have a dental emergency?",
    a: "Call us first thing — (978) 458-1179. We keep same-day slots open for emergencies and we will get you seen, whether you&rsquo;re a current patient or a brand-new one.",
  },
];

export function FAQNP() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative py-20 sm:py-24 lg:py-28 bg-white"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <Reveal>
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[var(--color-primary)]">
              FAQ
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-text)] leading-[1.1]">
              Questions every new patient asks.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 text-lg text-[var(--color-text-muted)] leading-relaxed">
              Don&rsquo;t see your question here? Just call us — we&rsquo;re happy to talk
              through anything before you book.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 space-y-3">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={80 + i * 50}>
              <div className="bg-[var(--color-soft-blue)] rounded-2xl border border-transparent hover:border-[var(--color-primary)]/20 transition-all overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  className="w-full flex items-center justify-between gap-4 text-left px-5 sm:px-7 py-5 sm:py-6"
                >
                  <h3 className="text-base sm:text-lg font-bold text-[var(--color-text)] leading-snug">
                    {f.q}
                  </h3>
                  <span
                    aria-hidden
                    className={`shrink-0 w-9 h-9 rounded-full bg-white border border-[var(--color-border)] flex items-center justify-center transition-transform ${
                      open === i ? "rotate-45" : ""
                    }`}
                  >
                    <svg className="w-4 h-4 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                {open === i && (
                  <div className="px-5 sm:px-7 pb-6">
                    <p
                      className="text-[15px] sm:text-base text-[var(--color-text-muted)] leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: f.a }}
                    />
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
