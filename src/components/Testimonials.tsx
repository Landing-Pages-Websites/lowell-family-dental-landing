"use client";

import Image from "next/image";
import { Reveal } from "./Reveal";
import { PHONE, PHONE_HREF } from "./Brand";

const TESTIMONIALS = [
  {
    name: "Maria L.",
    procedure: "All-on-4 full arch",
    avatar: "/avatar-maria.webp",
    body:
      "I cried when I saw myself in the mirror after losing my dentures. Dr. Gammas walked me through every option without pressure. Now I eat steak again. I smile in pictures. I cannot recommend this practice enough.",
  },
  {
    name: "Jeff R.",
    procedure: "Single tooth implant",
    avatar: "/avatar-jeff.webp",
    body:
      "Lost a front tooth playing hockey at 41. Was terrified of looking ridiculous for the rest of my life. Three months later — you cannot tell which one is the implant. Even the dentist who did my cleaning didn't know.",
  },
  {
    name: "Patricia K.",
    procedure: "Multi-tooth bridge",
    avatar: "/avatar-patricia.webp",
    body:
      "I had two missing molars on the same side and was chewing only on the left for years. The team explained the bridge option clearly, the financing made it doable, and the result is rock solid. Worth every penny.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-gradient-to-br from-[#0E2858] via-[var(--color-primary-dark)] to-[#0E2858]">
      {/* Decorative pattern overlay */}
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
        style={{ background: "radial-gradient(closest-side, rgba(231,116,0,0.55), transparent 70%)" }}
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
              Smiles you helped us build.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-5 flex items-center justify-center gap-2 text-white/85">
              <span className="flex text-[var(--color-accent-light)]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 1.5l2.6 5.3 5.9.86-4.25 4.14 1 5.86L10 14.9l-5.27 2.77 1-5.86L1.5 7.66l5.9-.86L10 1.5z" />
                  </svg>
                ))}
              </span>
              <span className="font-bold text-white">4.9 / 5</span>
              <span>· Trusted by 200+ patients in Lowell</span>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid lg:grid-cols-3 gap-5 sm:gap-7">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={120 + i * 100}>
              <div className="relative h-full rounded-2xl bg-white/[0.04] backdrop-blur-sm border border-white/15 p-6 sm:p-7 hover:bg-white/[0.07] transition flex flex-col">
                <svg
                  className="w-10 h-10 text-[var(--color-accent-light)]/35 absolute top-5 right-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M9.4 7.6C7.5 8.6 6 11 6 13.7v3.3c0 1 .8 1.7 1.8 1.7H10c1 0 1.7-.7 1.7-1.7v-3.3c0-1-.7-1.7-1.7-1.7h-1c.3-1 1-1.8 2-2.4l-.7-1.7zm9 0C16.5 8.6 15 11 15 13.7v3.3c0 1 .8 1.7 1.8 1.7H19c1 0 1.7-.7 1.7-1.7v-3.3c0-1-.7-1.7-1.7-1.7h-1c.3-1 1-1.8 2-2.4l-.7-1.7z" />
                </svg>
                <p className="mt-3 text-[15px] sm:text-base text-white/90 leading-relaxed flex-1">
                  &ldquo;{t.body}&rdquo;
                </p>
                <div className="mt-6 pt-6 border-t border-white/15 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-white/20 shrink-0">
                    <Image
                      src={t.avatar}
                      alt={`${t.name} portrait`}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-white">{t.name}</div>
                    <div className="text-sm text-[var(--color-accent-light)] font-semibold">
                      {t.procedure}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <a href="#contact" className="btn-primary">
              Start My Smile Story
            </a>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 text-white font-bold hover:text-[var(--color-accent-light)] transition"
            >
              Or call us: {PHONE}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
