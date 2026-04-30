"use client";

import Image from "next/image";
import { LeadForm } from "./LeadForm";
import { Reveal } from "./Reveal";
import { PHONE, PHONE_HREF } from "./Brand";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 lg:pb-20 overflow-hidden"
    >
      {/* Layered background — soft blue gradient + subtle pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-soft-blue-2)] via-white to-[var(--color-soft-blue)]" />
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(30,66,136,0.45) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Soft accent blob */}
        <div
          aria-hidden
          className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full opacity-25"
          style={{
            background:
              "radial-gradient(closest-side, rgba(231,116,0,0.45), transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className="absolute -bottom-40 -left-32 w-[520px] h-[520px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(closest-side, rgba(30,66,136,0.30), transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left: copy column */}
        <div className="lg:col-span-7">
          <Reveal variant="up">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/20 bg-white/80 backdrop-blur px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">
              <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]" />
              Lowell, MA · Implant Center
            </span>
          </Reveal>
          <Reveal variant="up" delay={80}>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-[var(--color-text)]">
              Get a permanent, confident smile with{" "}
              <span className="text-[var(--color-primary)]">dental implants</span> in Lowell.
            </h1>
          </Reveal>
          <Reveal variant="up" delay={160}>
            <p className="mt-5 text-lg sm:text-xl text-[var(--color-text-muted)] max-w-2xl">
              Board-certified implant specialist · 3D CT-guided precision · Flexible financing
              and exclusive new-patient discounts. Eat, smile and laugh again — without
              embarrassment, without dentures, without the run-around.
            </p>
          </Reveal>
          <Reveal variant="up" delay={220}>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 max-w-xl">
              {[
                "Single, multi-tooth & full-arch (All-on-4)",
                "Sedation options for anxious patients",
                "Most insurances accepted, including BCBS",
                "Stress-free, no-pressure consultation",
              ].map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-2 text-[var(--color-text)] text-[15px] sm:text-base font-medium"
                >
                  <svg
                    className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-[2px]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {line}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal variant="up" delay={300}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#contact" className="btn-primary text-base sm:text-lg">
                Book My Free Consultation
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 text-[var(--color-primary)] font-bold hover:underline"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" />
                </svg>
                Or call us: {PHONE}
              </a>
            </div>
          </Reveal>
          <Reveal variant="up" delay={380}>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[var(--color-text-muted)]">
              <div className="flex items-center gap-1.5">
                <Stars />
                <span className="font-semibold text-[var(--color-text)]">4.9</span>
                <span>(200+ patient reviews)</span>
              </div>
              <span aria-hidden className="hidden sm:block w-px h-4 bg-[var(--color-border)]" />
              <span>133 Market St., Lowell, MA</span>
              <span aria-hidden className="hidden sm:block w-px h-4 bg-[var(--color-border)]" />
              <span>BCBS &amp; major insurances accepted</span>
            </div>
          </Reveal>
        </div>

        {/* Right: form */}
        <div className="lg:col-span-5">
          <Reveal variant="right" delay={140}>
            <div className="relative">
              {/* Decorative photo card behind */}
              <div className="hidden lg:block absolute -top-6 -left-6 w-44 h-44 rounded-2xl overflow-hidden shadow-xl rotate-[-4deg] z-0">
                <Image
                  src="/clinic.webp"
                  alt="Lowell Family Dental Practice clinic interior"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10">
                <LeadForm
                  variant="hero"
                  headline="Book your free implant consultation"
                  subhead="No obligation. We'll review your goals, discuss costs and financing, and answer every question."
                />
              </div>
            </div>
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
