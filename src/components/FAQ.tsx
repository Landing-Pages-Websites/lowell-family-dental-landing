"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";
import { PHONE, PHONE_HREF } from "./Brand";

const FAQS = [
  {
    q: "How much do dental implants cost in Lowell?",
    a: "Implant costs vary based on the number of teeth being replaced, whether you need bone grafting, and which type of crown or bridge is placed on top. We provide a written, all-inclusive treatment plan after your free consultation — no surprise add-ons. Most single implants land in the typical range you'll see online; full-arch (All-on-4) is dramatically less per tooth than placing implants individually. We also offer 0% financing on qualifying treatment plans.",
  },
  {
    q: "Does the procedure hurt?",
    a: "Modern implant placement is far more comfortable than most patients expect. We numb the area thoroughly, and we offer multiple sedation options — from oral relaxation to full IV sedation — for patients who'd rather not be aware during the procedure. Most patients report mild soreness for a day or two, easily managed with over-the-counter medication.",
  },
  {
    q: "How long does the whole process take?",
    a: "From consultation to final crown, single implants usually take 3–4 months — most of that time is the implant fusing with your jawbone. Full-arch (All-on-4) cases often have a same-day temporary set of fixed teeth, with the permanent set delivered after 3–4 months of healing. We'll map out your exact timeline at the consultation.",
  },
  {
    q: "Will my insurance cover dental implants?",
    a: "Many plans, including Blue Cross Blue Shield and other major carriers, now cover at least a portion of implant treatment. We accept most insurances and our team handles all the paperwork to maximize what your plan will pay. Whatever isn't covered can usually be financed at 0% interest.",
  },
  {
    q: "How do I know if I'm a good candidate for implants?",
    a: "The honest answer is: most adults are. The handful of factors that affect candidacy — bone density, gum health, certain medical conditions — are all things we evaluate at your free 3D CT scan consultation. Even patients who've been told elsewhere they 'don't have enough bone' often have great options when we look at their CT scan.",
  },
  {
    q: "Why a board-certified specialist instead of a general dentist?",
    a: "Many general dentists place implants, but the long-term success of an implant comes down to surgical precision, prosthetic planning, and case selection — areas where a board-certified specialist has thousands more hours of focused training. Dr. Gammas does this every day. That's why patients drive in from all over Massachusetts to have their implants done here.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 sm:py-24 lg:py-28 bg-[var(--color-surface-alt)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-10 lg:gap-14">
        <div className="lg:col-span-4">
          <Reveal>
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[var(--color-primary)]">
              Frequently asked
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-text)] leading-[1.1]">
              The questions every implant patient asks us first.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 text-lg text-[var(--color-text-muted)]">
              Don&rsquo;t see your question? Call us — we&rsquo;ll talk you through it on the
              phone with zero pressure to book.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a href="#contact" className="btn-primary">
                Book Free Consultation
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

        <div className="lg:col-span-8 space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={60 * i}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left rounded-2xl bg-white border border-[var(--color-border)] px-5 sm:px-6 py-5 sm:py-6 shadow-sm hover:shadow-md transition cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-base sm:text-lg font-bold text-[var(--color-text)] leading-tight">
                      {f.q}
                    </h3>
                    <span
                      className={`shrink-0 w-8 h-8 rounded-full bg-[var(--color-soft-blue)] text-[var(--color-primary)] flex items-center justify-center transition-transform ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </div>
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr] mt-3 opacity-100" : "grid-rows-[0fr] mt-0 opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-[15px] sm:text-base text-[var(--color-text-muted)] leading-relaxed">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
