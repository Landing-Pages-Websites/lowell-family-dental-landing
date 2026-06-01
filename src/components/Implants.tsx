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
  oldPrice: string;
  price: string;
  priceUnit: string;
  priceNote: string;
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
  oldPrice,
  price,
  priceUnit,
  priceNote,
  reverse,
}: ImplantTypeProps) {
  return (
    <section id={id} className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <Reveal variant={reverse ? "right" : "left"} className={reverse ? "lg:order-2" : ""}>
          <div className="relative rounded-3xl overflow-hidden shadow-xl bg-[var(--color-soft-blue)] aspect-[4/3] flex items-center justify-center p-6 sm:p-8">
            <Image
              src={image}
              alt={imageAlt}
              width={1100}
              height={825}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="w-full h-full object-contain"
            />
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

          {/* Pricing — original crossed out, promo price larger below */}
          <div className="mt-7 inline-flex flex-col rounded-2xl bg-white border border-[var(--color-border)] px-6 py-5 shadow-sm">
            <div className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
              {priceNote}
            </div>
            <div className="mt-1.5 text-lg font-medium text-[var(--color-text-muted)] line-through decoration-2">
              {oldPrice}
            </div>
            <div className="flex items-baseline gap-2 leading-none">
              <span className="text-4xl sm:text-5xl font-extrabold text-[var(--color-primary)]">
                {price}
              </span>
              <span className="text-base sm:text-lg font-semibold text-[var(--color-text-muted)]">
                {priceUnit}
              </span>
            </div>
            <div className="mt-2 text-xs text-[var(--color-text-muted)]">
              *Cost depends on actual treatment plan
            </div>
          </div>

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
              Whether you&rsquo;re missing one tooth, want a more stable removable option, or
              need a whole arch, our Board Certified Dental Implant Specialist designs a
              treatment plan based on a 3D CT scan of your jaw — not a one-size-fits-all template.
            </p>
          </Reveal>
        </div>
      </section>

      <ImplantType
        id="single-tooth-implant"
        eyebrow="Single implants"
        title="Replace one missing tooth — without touching the healthy ones beside it."
        body="When a tooth is lost or fails, a single implant is the gold-standard fix: a titanium post placed in the jaw, topped with a custom-shaded ceramic crown. Unlike a bridge, it doesn't require grinding down the neighboring teeth, and unlike a partial floppy denture, it stays put when you eat. From start to finished crown, most patients are back to normal in 3–4 months."
        image="/diagram-single.webp"
        imageAlt="Diagram of a single dental implant — titanium post, abutment, and ceramic crown"
        bullets={[
          "Looks identical to your other teeth",
          "Doesn't damage adjacent teeth (unlike a bridge)",
          "Cleaned exactly like a natural tooth — no special routine",
          "Lasts 25+ years with proper care",
        ]}
        oldPrice="$5,200"
        price="$3,499"
        priceUnit="/ tooth"
        priceNote="Implant + Abutment + Crown"
      />

      <ImplantType
        id="snap-on-dentures"
        eyebrow="Snap-on dentures"
        title="Implant-retained overdentures that snap securely into place."
        body="If you wear floppy dentures, struggle with loose teeth, or want more stability without a full fixed bridge, snap-on dentures offer a comfortable middle ground. Two to four dental implants are placed in the jaw and connected to a removable denture that securely snaps into place. Unlike traditional dentures, they stay stable while eating and speaking — yet can still be removed easily for cleaning."
        image="/diagram-snapon.webp"
        imageAlt="Diagram of a snap-on overdenture retained by dental implants"
        bullets={[
          "More stable than traditional dentures",
          "Snaps securely onto implants — less slipping or movement",
          "Helps preserve jawbone and facial structure",
          "Improved chewing power and everyday comfort",
        ]}
        oldPrice="$19,000"
        price="$14,000"
        priceUnit="/ arch"
        priceNote="Implants + Prosthetics"
        reverse
      />

      <ImplantType
        id="full-arch-implant"
        eyebrow="Fixed full arch (All-on-X)"
        title="Get a full set of new teeth fixed in place."
        body="If you wear floppy dentures, hate dentures, or are facing the loss of an entire upper or lower arch, All-on-X changes everything. Strategically placed implants support a full fixed-in-place set of teeth. They never come out at night, never click while you eat, and never need denture adhesive. A permanent set follows once healing is complete, and our team plans the timeline with you at your consultation."
        image="/diagram-fixedarch.webp"
        imageAlt="Diagram of a fixed full-arch All-on-X dental implant restoration"
        bullets={[
          "Fixed in place — never comes out",
          "Eat steak, apples, corn — anything",
          "Eliminates denture adhesive forever",
          "Restores full bite strength across the arch",
        ]}
        oldPrice="$30,000"
        price="$22,000"
        priceUnit="/ arch"
        priceNote="Implants + Prosthetics"
      />
    </>
  );
}
