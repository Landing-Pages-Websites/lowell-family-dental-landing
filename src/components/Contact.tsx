"use client";

import { LeadForm } from "./LeadForm";
import { Reveal } from "./Reveal";
import { ADDRESS_LINE1, ADDRESS_LINE2, HOURS, PHONE, PHONE_HREF } from "./Brand";

export function Contact() {
  return (
    <section id="contact" className="relative py-20 sm:py-24 lg:py-28 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-br from-[var(--color-primary)] via-[#1a3a78] to-[var(--color-primary-dark)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        <div className="lg:col-span-6 text-white">
          <Reveal>
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[var(--color-accent-light)]">
              Book your visit
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1]">
              Your new smile starts with a free, no-obligation consultation.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-lg text-white/85 leading-relaxed">
              Tell us a little about your timeline and we&rsquo;ll call you back to schedule.
              You&rsquo;ll meet Dr. Gammas, get a 3D CT scan of your jaw, and walk out with a
              clear plan and a written quote — no pressure, no hidden fees.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 p-5">
                <div className="text-xs font-bold tracking-widest uppercase text-[var(--color-accent-light)]">
                  Visit us
                </div>
                <div className="mt-2 text-lg font-bold leading-tight">{ADDRESS_LINE1}</div>
                <div className="text-white/85">{ADDRESS_LINE2}</div>
                <a
                  href="https://maps.google.com/?q=133+Market+St+Lowell+MA+01852"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-3 text-sm font-semibold text-white hover:underline"
                >
                  Get directions
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
              <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 p-5">
                <div className="text-xs font-bold tracking-widest uppercase text-[var(--color-accent-light)]">
                  Call us
                </div>
                <a
                  href={PHONE_HREF}
                  className="mt-2 block text-2xl sm:text-[1.7rem] font-extrabold leading-tight hover:underline"
                >
                  {PHONE}
                </a>
                <div className="text-white/80 text-sm mt-1">
                  We answer 7 days a week.
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-7 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 p-5">
              <div className="text-xs font-bold tracking-widest uppercase text-[var(--color-accent-light)]">
                Hours
              </div>
              <ul className="mt-3 space-y-1.5">
                {HOURS.map(([day, hours]) => (
                  <li key={day} className="flex justify-between text-[15px]">
                    <span className="font-semibold">{day}</span>
                    <span className="text-white/85">{hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal variant="right" delay={140} className="lg:col-span-6">
          <LeadForm
            variant="contact"
            headline="Book your free implant consultation"
            subhead="It only takes 30 seconds. We'll call you back to confirm a time that works."
          />
        </Reveal>
      </div>
    </section>
  );
}
