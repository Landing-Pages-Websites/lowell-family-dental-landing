"use client";

import Image from "next/image";
import { Reveal } from "../Reveal";
import { PHONE, PHONE_HREF } from "../Brand";

const REASONS = [
  {
    title: "Right in downtown Lowell.",
    body:
      "Easy parking on Market Street, 5 minutes from the Lowell Connector. No commute to Boston for great care.",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: "Age 2 to 92 — all welcome.",
    body:
      "Same office for the whole family. Pediatric experience, special-needs friendly, and we genuinely love our older patients.",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
        <circle cx="10" cy="7" r="3.5" />
        <path d="M19 8v6M22 11h-6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Gentle &amp; painless.",
    body:
      "We use modern numbing techniques, take time to explain everything, and never rush a kid (or a nervous adult).",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Most insurances accepted.",
    body:
      "BCBS, Delta, MetLife, Cigna, Aetna, and most major plans. We&rsquo;ll verify your benefits before you arrive.",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 12c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V5l8-3 8 3v7z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Evening &amp; Saturday hours.",
    body:
      "Open until 6pm Monday and Tuesday, plus full Saturday hours 8a–3p. No taking a half-day off work for a cleaning.",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Financing &amp; payment plans.",
    body:
      "Got a big-ticket plan? We offer 0% interest CareCredit and Sunbit financing — so cost doesn&rsquo;t stand between you and your smile.",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <path d="M2 10h20" />
        <path d="M7 14h2M13 14h4" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function WhyFamilies() {
  return (
    <section
      id="why"
      className="relative py-20 sm:py-24 lg:py-28 bg-[var(--color-soft-blue)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <Reveal variant="left" className="lg:col-span-6">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[5/4]">
                <Image
                  src="/family-group.webp"
                  alt="Three generations of a family smiling together — kids, parents and grandparents all welcome at Lowell Family Dental Practice"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary)]/15 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-4 sm:-bottom-7 sm:-right-6 bg-[var(--color-primary)] text-white rounded-2xl px-5 py-4 shadow-xl max-w-[260px]">
                <div className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent-light)]">
                  All ages welcome
                </div>
                <div className="mt-1 text-base font-bold leading-snug">
                  From toddlers to grandparents &mdash; one trusted office for everyone.
                </div>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-6">
            <Reveal>
              <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[var(--color-primary)]">
                Why Lowell Families Choose Us
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-text)] leading-[1.1]">
                The dentist your whole family actually looks forward to.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-4 text-lg text-[var(--color-text-muted)] leading-relaxed">
                We&rsquo;ve cared for Lowell families for over 30 years. Here&rsquo;s why
                new patients keep choosing us &mdash; and bringing their kids, parents and friends.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {REASONS.map((r, i) => (
            <Reveal key={r.title} delay={100 + i * 60}>
              <div className="h-full bg-white rounded-2xl p-6 sm:p-7 border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 hover:shadow-lg transition-all">
                <div className="w-11 h-11 rounded-xl bg-[var(--color-soft-blue)] text-[var(--color-primary)] flex items-center justify-center">
                  <span className="w-5 h-5">{r.icon}</span>
                </div>
                <h3
                  className="mt-5 text-lg font-bold text-[var(--color-text)] leading-snug"
                  dangerouslySetInnerHTML={{ __html: r.title }}
                />
                <p
                  className="mt-2 text-[15px] text-[var(--color-text-muted)] leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: r.body }}
                />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-12 flex flex-wrap items-center gap-5">
            <a href="#contact" className="btn-primary">
              Book My Appointment
            </a>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 text-[var(--color-primary)] font-bold hover:text-[var(--color-primary-dark)] transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" />
              </svg>
              Or call us: {PHONE}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
