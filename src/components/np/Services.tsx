"use client";

import { Reveal } from "../Reveal";
import { PHONE, PHONE_HREF } from "../Brand";

const SERVICES = [
  {
    title: "Cleanings & Exams",
    body:
      "Twice-a-year hygiene visits with digital x-rays and oral-cancer screening. Most cleanings are covered 100% by insurance.",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2C9 2 7 4 7 7c0 2.5 1.2 4.5 1.2 7.5 0 3.5-.7 5.5 1.3 5.5 1.5 0 1.5-2 1.5-4 0 2 0 4 1.5 4 2 0 1.3-2 1.3-5.5 0-3 1.2-5 1.2-7.5 0-3-2-5-5-5z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Crowns & Fillings",
    body:
      "Tooth-colored fillings and same-day crown options to repair damage without disrupting your smile or your week.",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 3l8 5v8l-8 5-8-5V8l8-5z" strokeLinejoin="round" />
        <path d="M12 3v18M4 8l16 8M20 8L4 16" />
      </svg>
    ),
  },
  {
    title: "Teeth Whitening",
    body:
      "Professional in-office or take-home whitening that&rsquo;s 4–8 shades stronger than anything you&rsquo;ll find at the drugstore.",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2v3M12 19v3M5 12H2M22 12h-3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2" strokeLinecap="round" />
        <circle cx="12" cy="12" r="5" />
      </svg>
    ),
  },
  {
    title: "Periodontal Care",
    body:
      "Gum-disease screening and treatment to stop the silent #1 cause of adult tooth loss before it costs you a smile.",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 17c4-1 6 0 9 0s5-1 9 0" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 17V8a7 7 0 0 1 14 0v9" strokeLinejoin="round" />
        <path d="M9 11h.01M15 11h.01M12 11h.01" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Family Dentistry",
    body:
      "One practice, every age. We see kids as young as age 2 and have decades of experience caring for older adults.",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
        <circle cx="10" cy="7" r="3.5" />
        <path d="M19 8v6M22 11h-6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Emergency Visits",
    body:
      "Toothache, broken crown, knocked-out tooth? Call us first thing — we keep same-day slots open for current and new patients.",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 8v5M12 17h.01" strokeLinecap="round" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-24 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[var(--color-primary)]">
              Family Dental Services
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-text)] leading-[1.1]">
              Everything your family needs — under one roof.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 text-lg text-[var(--color-text-muted)] leading-relaxed">
              From a 6-month cleaning to a same-day crown, you don&rsquo;t need a different
              office for each visit. Here&rsquo;s what we handle in-house for new patients.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {SERVICES.map((svc, i) => (
            <Reveal key={svc.title} delay={120 + i * 60}>
              <div className="h-full bg-white border border-[var(--color-border)] rounded-2xl p-6 sm:p-7 hover:shadow-lg hover:border-[var(--color-primary)]/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-soft-blue)] text-[var(--color-primary)] flex items-center justify-center">
                  <span className="w-6 h-6">{svc.icon}</span>
                </div>
                <h3 className="mt-5 text-xl font-bold text-[var(--color-text)] leading-snug">
                  {svc.title}
                </h3>
                <p
                  className="mt-2 text-[15px] text-[var(--color-text-muted)] leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: svc.body }}
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
