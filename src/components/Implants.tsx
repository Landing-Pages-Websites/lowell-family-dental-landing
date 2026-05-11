"use client";

import Image from "next/image";
import { Reveal } from "./Reveal";
import { PHONE, PHONE_HREF } from "./Brand";

interface ImplantTypeProps {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  bullets: string[];
  reverse?: boolean;
}

function ImplantType({
  id,
  eyebrow,
  title,
  body,
  image,
  imageAlt,
  bullets,
  reverse,
}: ImplantTypeProps) {
  return (
    <section id={id} className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <Reveal variant={reverse ? "right" : "left"} className={reverse ? "lg:order-2" : ""}>
          <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary)]/15 to-transparent" />
          </div>
        </Reveal>
        <Reveal variant={reverse ? "left" : "right"} delay={80}>
          <span className="inline-block text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[var(--color-primary)]">
            {eyebrow}
          </span>
          <h3 className="mt-3 text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold leading-[1.1] text-[var(--color-text)]">
            {title}
          </h3>
          <p className="mt-4 text-lg text-[var(--color-text-muted)] leading-relaxed">{body}</p>
          <ul className="mt-6 space-y-2.5">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-[15px] sm:text-base text-[var(--color-text)]">
                <svg
                  className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-[3px]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <a href="#contact" className="btn-primary">
              Book Free Consultation
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
    </section>
  );
}

export function Implants() {
  return (
    <>
      {/* Section header */}
      <section className="pt-20 sm:pt-24 lg:pt-28 pb-2">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <Reveal>
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[var(--color-primary)]">
              Implant solutions
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-text)] leading-[1.1]">
              The right implant for every smile.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 text-lg text-[var(--color-text-muted)]">
              Whether you&rsquo;re missing one tooth, several teeth, or a whole arch, our
              board-certified specialist designs a treatment plan based on a 3D CT scan of
              your jaw — not a one-size-fits-all template.
            </p>
          </Reveal>
        </div>
      </section>

      <ImplantType
        id="single-tooth-implant"
        eyebrow="Single tooth"
        title="Replace one missing tooth — without touching the healthy ones beside it."
        body="When a tooth is lost or fails, a single implant is the gold-standard fix: a titanium post placed in the jaw, topped with a custom-shaded ceramic crown. Unlike a bridge, it doesn't require grinding down the neighboring teeth, and unlike a partial denture, it stays put when you eat. From start to finished crown, most patients are back to normal in 3–4 months."
        image="/patient-919ed506.webp"
        imageAlt="Patient smiling confidently after a single dental implant in Lowell"
        bullets={[
          "Looks identical to your other teeth",
          "Doesn't damage adjacent teeth (unlike a bridge)",
          "Cleaned exactly like a natural tooth — no special routine",
          "Lasts 25+ years with proper care",
        ]}
      />

      <ImplantType
        id="multi-tooth-implant"
        eyebrow="Multiple teeth"
        title="Implant-supported bridges for two or more missing teeth in a row."
        body="When you're missing two or more adjacent teeth, an implant-supported bridge is more affordable than placing one implant per tooth — and far stronger than a traditional bridge anchored to existing teeth. Two implants support a span of crowns, restoring full bite strength in the area. We plan the placement digitally so the final result fits your bite, your face and your budget."
        image="/patient-6b871b78.webp"
        imageAlt="Patient smiling confidently after implant-supported dental bridge"
        bullets={[
          "Stronger than a traditional tooth-anchored bridge",
          "Preserves bone in the gap — no jaw shrinkage",
          "Fewer implants than one-per-tooth approach",
          "Predictable, dentist-controlled cost",
        ]}
        reverse
      />

      <ImplantType
        id="full-arch-implant"
        eyebrow="Full-arch (All-on-4)"
        title="A new full set of teeth — fixed in place — in as little as one day."
        body="If you wear dentures, hate dentures, or are facing the loss of an entire upper or lower arch, All-on-4 changes everything. Just four strategically placed implants support a full fixed-in-place set of teeth. They never come out at night, never click while you eat, and never need denture adhesive. Many patients walk out the day of surgery with a working temporary set — and a permanent set follows once healing is complete."
        image="/patient-511d661e.webp"
        imageAlt="Patient smiling confidently after full-arch All-on-4 dental implants"
        bullets={[
          "Fixed in place — never comes out",
          "Same-day temporaries for many patients",
          "Eat steak, apples, corn — anything",
          "Eliminates denture adhesive forever",
        ]}
      />
    </>
  );
}
