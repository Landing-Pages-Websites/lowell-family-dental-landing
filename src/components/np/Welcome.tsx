"use client";

import Image from "next/image";
import { Reveal } from "../Reveal";

const STEPS = [
  {
    n: "1",
    title: "Tell us a bit about you.",
    body:
      "Fill out the short form (or call us). We'll match you with the right appointment slot and confirm your insurance benefits before you arrive.",
  },
  {
    n: "2",
    title: "Comfortable, unrushed first visit.",
    body:
      "Meet your hygienist, get a thorough exam and digital x-rays. We&rsquo;ll walk you through anything we see — no surprises, no scary jargon.",
  },
  {
    n: "3",
    title: "A plan that fits your life.",
    body:
      "We&rsquo;ll lay out your options, what insurance covers, and what financing looks like if you need it. You decide what&rsquo;s next, on your timeline.",
  },
  {
    n: "4",
    title: "Leave smiling — and on schedule.",
    body:
      "Most first visits run 60–75 minutes. You&rsquo;ll leave with cleaner teeth, an honest plan, and your next appointment already booked.",
  },
];

export function Welcome() {
  return (
    <section
      id="welcome"
      className="relative py-20 sm:py-24 lg:py-28 bg-[var(--color-soft-blue)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Photo + reassurance card */}
          <Reveal variant="left" className="lg:col-span-5">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
                <Image
                  src="/clinic.webp"
                  alt="Inside Lowell Family Dental Practice — comfortable, modern operatory"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary)]/15 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-4 sm:-bottom-7 sm:-right-6 bg-white rounded-2xl px-5 py-4 shadow-xl border border-[var(--color-border)] max-w-[280px]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-[var(--color-text-muted)]">
                      No-judgment promise
                    </div>
                    <div className="text-sm font-bold text-[var(--color-text)] leading-snug">
                      Even if it&rsquo;s been a long time.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: Steps */}
          <div className="lg:col-span-7">
            <Reveal>
              <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[var(--color-primary)]">
                What to Expect
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-text)] leading-[1.1]">
                First visit feel awkward? It won&rsquo;t — here&rsquo;s exactly what happens.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-4 text-lg text-[var(--color-text-muted)] leading-relaxed max-w-2xl">
                We know &ldquo;new dentist&rdquo; can feel like a chore. We designed our
                new-patient visit to be the opposite — gentle, honest and on your schedule.
              </p>
            </Reveal>

            <ol className="mt-9 space-y-7">
              {STEPS.map((step, i) => (
                <Reveal key={step.n} delay={120 + i * 80}>
                  <li className="flex items-start gap-5">
                    <span className="shrink-0 w-12 h-12 rounded-2xl bg-[var(--color-primary)] text-white font-extrabold text-lg flex items-center justify-center shadow-md">
                      {step.n}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-[var(--color-text)] leading-snug">
                        {step.title}
                      </h3>
                      <p
                        className="mt-1.5 text-[15px] sm:text-base text-[var(--color-text-muted)] leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: step.body }}
                      />
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
