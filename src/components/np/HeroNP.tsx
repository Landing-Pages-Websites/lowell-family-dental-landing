"use client";

import { LeadForm } from "../LeadForm";
import { Reveal } from "../Reveal";
import { PHONE, PHONE_HREF } from "../Brand";

const NP_SOURCE = "lowell-family-dental-newpatient-landing";

export function HeroNP() {
  return (
    <section
      id="hero"
      className="relative pt-24 sm:pt-28 lg:pt-32 pb-14 sm:pb-20 lg:pb-24 overflow-hidden bg-gradient-to-br from-[var(--color-soft-blue-2)] via-white to-[var(--color-soft-blue)]"
    >
      {/* Subtle decorative blobs (light, friendly feel) */}
      <div
        aria-hidden
        className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, rgba(30,66,136,0.10), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -bottom-24 -left-24 w-[360px] h-[360px] rounded-full opacity-50 pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, rgba(231,116,0,0.10), transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left: copy */}
        <div className="lg:col-span-7">
          <Reveal variant="up">
            <span className="inline-flex items-center gap-2 rounded-full bg-white border border-[var(--color-border)] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-primary)] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]" />
              Lowell, MA · Accepting New Patients
            </span>
          </Reveal>
          <Reveal variant="up" delay={80}>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.05] text-[var(--color-text)]">
              Your family&rsquo;s{" "}
              <span className="text-[var(--color-primary)]">dental home</span> in Lowell.
            </h1>
          </Reveal>
          <Reveal variant="up" delay={160}>
            <p className="mt-5 text-lg sm:text-xl text-[var(--color-text-muted)] max-w-2xl leading-relaxed">
              Gentle, stress-free dental care for every age — from your child&rsquo;s first
              cleaning to grandma&rsquo;s crown. Convenient Lowell location, evening and
              Saturday hours, most insurances accepted, financing available.
            </p>
          </Reveal>
          <Reveal variant="up" delay={220}>
            <ul className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 max-w-xl">
              {[
                "Cleanings, exams, crowns, fillings, whitening",
                "Patient since age 2 through age 92 — all welcome",
                "Most insurances accepted (including BCBS)",
                "Painless, judgment-free, no-rush appointments",
              ].map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-2.5 text-[var(--color-text)] text-[15px] sm:text-base font-medium"
                >
                  <span className="w-6 h-6 rounded-full bg-[var(--color-primary)] flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {line}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal variant="up" delay={300}>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a href="#contact" className="btn-primary text-base sm:text-lg">
                Book My Appointment
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
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
          <Reveal variant="up" delay={380}>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-[var(--color-text-muted)]">
              <div className="flex items-center gap-2">
                <Stars />
                <span className="font-bold text-[var(--color-text)]">4.9</span>
                <span>(200+ Google reviews)</span>
              </div>
              <span aria-hidden className="hidden sm:block w-px h-4 bg-[var(--color-border)]" />
              <span className="font-medium">133 Market St., Lowell, MA</span>
              <span aria-hidden className="hidden sm:block w-px h-4 bg-[var(--color-border)]" />
              <span className="font-medium">Open Sat 8a–3p</span>
            </div>
          </Reveal>
        </div>

        {/* Right: Form */}
        <div className="lg:col-span-5">
          <Reveal variant="right" delay={140}>
            <LeadForm
              variant="hero"
              headline="Book your new-patient appointment"
              subhead="We'll call you back the same day to confirm a time that works. No phone tag, no sales pressure."
              sourceProvider={NP_SOURCE}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Stars() {
  return (
    <span className="flex items-center text-[var(--color-accent)]">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 1.5l2.6 5.3 5.9.86-4.25 4.14 1 5.86L10 14.9l-5.27 2.77 1-5.86L1.5 7.66l5.9-.86L10 1.5z" />
        </svg>
      ))}
    </span>
  );
}
