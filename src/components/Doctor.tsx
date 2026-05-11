"use client";

import Image from "next/image";
import { Reveal } from "./Reveal";
import { PHONE, PHONE_HREF } from "./Brand";

const CREDENTIALS = [
  "Board-Certified Implant Specialist",
  "Doctor of Dental Surgery (DDS)",
  "Advanced Surgical &amp; Prosthetic Implant Training",
  "Active Member, American Dental Association",
];

export function Doctor() {
  return (
    <section
      id="meet-dr-gammas"
      className="relative py-20 sm:py-24 lg:py-28 bg-[var(--color-surface-alt)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <Reveal variant="left" className="lg:col-span-5">
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] bg-[var(--color-soft-blue)]">
              <Image
                src="/doctor-portrait.webp"
                alt="Board-certified implant specialist Dr. Iham Gammas, Lowell Family Dental Practice & Implant Center"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 sm:-bottom-7 sm:-right-7 bg-white rounded-2xl shadow-xl px-5 py-4 border border-[var(--color-border)]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15l8.5-8.5a2.5 2.5 0 0 0-3.5-3.5L8.5 11.5M12 15l-3.5 3.5a2.5 2.5 0 0 1-3.5-3.5L8.5 11.5M12 15L8.5 11.5" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                    Board-Certified
                  </div>
                  <div className="text-base font-bold text-[var(--color-primary)]">
                    Implant Specialist
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal delay={80}>
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[var(--color-primary)]">
              Meet your specialist
            </span>
          </Reveal>
          <Reveal delay={140}>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-text)] leading-[1.1]">
              Dr. Iham Gammas, board-certified implant specialist.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-5 text-lg text-[var(--color-text-muted)] leading-relaxed">
              Dr. Gammas has dedicated his career to one of the most life-changing procedures
              in modern dentistry: restoring full, confident smiles with dental implants. His
              advanced surgical and prosthetic training, combined with our in-house 3D CT
              imaging and digital workflow, means your implants are planned to a fraction of
              a millimeter before he ever picks up an instrument.
            </p>
          </Reveal>
          <Reveal delay={260}>
            <p className="mt-4 text-lg text-[var(--color-text-muted)] leading-relaxed">
              Patients describe him as patient, gentle, and genuinely interested in
              understanding what they want from their smile — not just what insurance will
              cover. The only thing he likes more than placing a flawless implant is watching
              a patient smile in the mirror afterward.
            </p>
          </Reveal>

          <Reveal delay={320}>
            <ul className="mt-7 grid sm:grid-cols-2 gap-x-6 gap-y-2.5 max-w-2xl">
              {CREDENTIALS.map((c) => (
                <li key={c} className="flex items-start gap-2 text-[15px] sm:text-base font-medium text-[var(--color-text)]">
                  <svg
                    className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-[2px]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span dangerouslySetInnerHTML={{ __html: c }} />
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={380}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#contact" className="btn-primary">
                Meet Dr. Gammas
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
      </div>
    </section>
  );
}
