"use client";

import Image from "next/image";
import { Reveal } from "./Reveal";
import { PHONE, PHONE_HREF } from "./Brand";

const FEATURES = [
  {
    title: "3D CT scan precision",
    body:
      "Every implant case starts with a low-dose 3D cone-beam CT scan of your jaw. We see exactly where the bone is dense, where the nerve runs, and exactly where the implant will live — before we ever pick up a drill.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Digital surgical guides",
    body:
      "We use the CT scan to design and 3D-print a custom surgical guide for your jaw. The implant is placed exactly where it was planned — to a fraction of a millimeter — making the procedure faster, safer, and more comfortable.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 3v18" />
      </svg>
    ),
  },
  {
    title: "Sedation for anxious patients",
    body:
      "Dental anxiety is real and we get it. We offer multiple levels of sedation — from oral relaxation to IV sedation — so you can relax through the entire procedure. Most patients tell us afterward they don't remember a thing.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2C8 8 8 14 12 22M12 2c4 6 4 12 0 20" strokeLinecap="round" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
  {
    title: "Same-day temporary teeth",
    body:
      "For full-arch (All-on-4) cases, you walk out of surgery with a temporary set of fixed teeth that look natural and let you eat soft foods immediately. The final, permanent set follows once your jaw has fully healed.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function Technology() {
  return (
    <section
      id="technology"
      className="relative py-20 sm:py-24 lg:py-28 bg-[var(--color-primary)] text-white overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        aria-hidden
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(closest-side, rgba(231,116,0,0.40), transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: copy */}
          <div className="lg:col-span-7">
            <Reveal>
              <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[var(--color-accent-light)]">
                Technology &amp; Comfort
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1]">
                Implants done right means doing them precisely — and comfortably.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-4 text-lg text-white/85 leading-relaxed">
                Most general dentists eyeball implant placement. We don&rsquo;t. Every implant we
                place is digitally planned from a 3D CT scan, executed with a custom surgical
                guide, and supported by sedation options for patients who&rsquo;d rather not feel
                a thing. This is what &ldquo;stress-free&rdquo; actually looks like.
              </p>
            </Reveal>
          </div>

          {/* Right: CT scan / tech photo */}
          <Reveal variant="right" delay={100} className="lg:col-span-5">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[5/4] ring-4 ring-white/10">
                <Image
                  src="/tech-ct.webp"
                  alt="3D CT scan imaging technology used at Lowell Family Dental Practice"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary-dark)]/40 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-[var(--color-accent)] text-white rounded-2xl px-5 py-3 shadow-2xl">
                <div className="text-[11px] font-bold uppercase tracking-widest text-white/85">
                  Included
                </div>
                <div className="text-lg font-extrabold leading-tight">
                  Free 3D CT Scan
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={120 + i * 80}>
              <div className="h-full rounded-2xl bg-white/5 backdrop-blur-sm border border-white/15 p-6 hover:bg-white/10 transition">
                <div className="w-11 h-11 rounded-xl bg-[var(--color-accent)]/95 flex items-center justify-center text-white">
                  {f.icon}
                </div>
                <h3 className="mt-4 text-xl font-bold leading-tight">{f.title}</h3>
                <p className="mt-2 text-sm sm:text-[15px] text-white/80 leading-relaxed">
                  {f.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <a href="#contact" className="btn-primary">
              See If You&rsquo;re a Candidate
            </a>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 text-white font-bold hover:underline"
            >
              Or call us: {PHONE}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
