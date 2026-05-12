"use client";

import Image from "next/image";
import { LeadForm } from "./LeadForm";
import { Reveal } from "./Reveal";
import { PHONE, PHONE_HREF } from "./Brand";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 overflow-hidden bg-gradient-to-br from-[var(--color-primary-dark)] via-[var(--color-primary)] to-[#1a3a78]"
    >
      {/* Decorative pattern overlay */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Accent glow */}
      <div
        aria-hidden
        className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full opacity-25 pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, rgba(231,116,0,0.55), transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left: copy column — over the gradient, light text */}
        <div className="lg:col-span-7 text-white">
          <Reveal variant="up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white">
              <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]" />
              Lowell, MA · Board-Certified Implant Center
            </span>
          </Reveal>
          <Reveal variant="up" delay={80}>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-[3.6rem] font-extrabold leading-[1.04]">
              Get a permanent, confident smile with{" "}
              <span className="text-[var(--color-accent-light)]">dental implants</span> in Lowell.
            </h1>
          </Reveal>
          <Reveal variant="up" delay={160}>
            <p className="mt-5 text-lg sm:text-xl text-white/90 max-w-2xl leading-relaxed">
              Board-certified implant specialist. 3D CT-guided precision.
              Flexible financing and exclusive new-patient discounts. Eat, smile and
              laugh again — without dentures, without embarrassment, without the run-around.
            </p>
          </Reveal>
          <Reveal variant="up" delay={220}>
            <ul className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 max-w-xl">
              {[
                "Single, multi-tooth & full-arch (All-on-4)",
                "Sedation options for anxious patients",
                "Most insurances accepted, including BCBS",
                "Stress-free, no-pressure consultation",
              ].map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-2.5 text-white text-[15px] sm:text-base font-medium"
                >
                  <span className="w-6 h-6 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
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
                Book My Free Consultation
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 text-white font-bold hover:text-[var(--color-accent-light)] transition"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" />
                </svg>
                Or call us: {PHONE}
              </a>
            </div>
          </Reveal>
          <Reveal variant="up" delay={380}>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-white/85">
              <div className="flex items-center gap-2">
                <Stars />
                <span className="font-semibold text-white">4.9</span>
                <span>(200+ patient reviews)</span>
              </div>
              <span aria-hidden className="hidden sm:block w-px h-4 bg-white/30" />
              <span className="font-medium">133 Market St., Lowell, MA</span>
              <span aria-hidden className="hidden sm:block w-px h-4 bg-white/30" />
              <span className="font-medium">BCBS &amp; major insurances accepted</span>
            </div>
          </Reveal>
        </div>

        {/* Right: Form */}
        <div className="lg:col-span-5">
          <Reveal variant="right" delay={140}>
            <div className="relative">
              {/* Floating CT-scan badge — visible offset to top-right of form */}
              <div className="hidden lg:flex absolute -top-5 -right-5 z-20 items-center gap-3 bg-[var(--color-accent)] text-white rounded-2xl shadow-2xl px-4 py-3">
                <svg className="w-7 h-7 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-widest font-bold text-white/85 leading-none">
                    Included Free
                  </div>
                  <div className="text-base font-extrabold leading-tight">
                    3D CT Scan
                  </div>
                </div>
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
    <span className="flex items-center text-[var(--color-accent-light)]">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 1.5l2.6 5.3 5.9.86-4.25 4.14 1 5.86L10 14.9l-5.27 2.77 1-5.86L1.5 7.66l5.9-.86L10 1.5z" />
        </svg>
      ))}
    </span>
  );
}
