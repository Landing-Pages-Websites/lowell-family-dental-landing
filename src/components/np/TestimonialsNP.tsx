"use client";

import Image from "next/image";
import { Reveal } from "../Reveal";

const QUOTES = [
  {
    quote:
      "I hadn't been to a dentist in eight years and was honestly dreading it. They were so kind about it — no lecture, no shame. Just a plan. I actually look forward to my cleanings now.",
    name: "Maria L.",
    detail: "First-visit patient",
    avatar: "/avatar-maria.webp",
  },
  {
    quote:
      "We bring all three of our kids here. They make my 4-year-old laugh through her cleaning. The Saturday hours are a lifesaver for working parents.",
    name: "Patricia K.",
    detail: "Family of 5",
    avatar: "/avatar-patricia.webp",
  },
  {
    quote:
      "Broke a crown on a Sunday night. They had me in by 9am Monday. Painless, friendly, and they explained every option and what insurance would cover. Highly recommend.",
    name: "Jeff R.",
    detail: "Same-week emergency visit",
    avatar: "/avatar-jeff.webp",
  },
];

export function TestimonialsNP() {
  return (
    <section
      id="testimonials"
      className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-gradient-to-br from-[#0E2858] via-[var(--color-primary-dark)] to-[#0E2858]"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)",
          backgroundSize: "30px 30px",
        }}
      />
      <div
        aria-hidden
        className="absolute -top-40 -right-32 w-[520px] h-[520px] rounded-full opacity-25 pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, rgba(231,116,0,0.55), transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center text-white">
          <Reveal>
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[var(--color-accent-light)]">
              Patient stories
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1]">
              Lowell families say it best.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-5 inline-flex items-center gap-3 text-white/90">
              <span className="flex items-center text-[var(--color-accent-light)]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 1.5l2.6 5.3 5.9.86-4.25 4.14 1 5.86L10 14.9l-5.27 2.77 1-5.86L1.5 7.66l5.9-.86L10 1.5z" />
                  </svg>
                ))}
              </span>
              <span className="text-base sm:text-lg font-bold text-white">
                4.9 / 5
              </span>
              <span className="text-sm text-white/70">200+ Google reviews</span>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid lg:grid-cols-3 gap-6 lg:gap-7">
          {QUOTES.map((q, i) => (
            <Reveal key={q.name} delay={100 + i * 90}>
              <figure className="h-full bg-white/[0.04] backdrop-blur ring-1 ring-white/15 rounded-2xl p-7 flex flex-col">
                <svg
                  className="w-9 h-9 text-[var(--color-accent-light)] mb-3"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V18h6.83v-6.83H5.5A1.67 1.67 0 0 1 7.17 9.5V6zM17.17 6A5.17 5.17 0 0 0 12 11.17V18h6.83v-6.83H15.5a1.67 1.67 0 0 1 1.67-1.67V6z" />
                </svg>
                <blockquote className="flex-1 text-[15px] sm:text-base text-white/90 leading-relaxed">
                  &ldquo;{q.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-white/20 shrink-0">
                    <Image
                      src={q.avatar}
                      alt={`Portrait of ${q.name}`}
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">
                      {q.name}
                    </div>
                    <div className="text-[var(--color-accent-light)] text-xs font-semibold uppercase tracking-wider">
                      {q.detail}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
