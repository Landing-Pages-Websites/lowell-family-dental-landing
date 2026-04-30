"use client";

import { useTracking } from "@/hooks/useTracking";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhyImplants } from "@/components/WhyImplants";
import { Implants } from "@/components/Implants";
import { Technology } from "@/components/Technology";
import { Financing } from "@/components/Financing";
import { Doctor } from "@/components/Doctor";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { QueryParamPersistence } from "@/components/QueryParamPersistence";
import { SITE_ID, SITE_KEY } from "@/components/Brand";

export default function LowellFamilyDentalPage() {
  useTracking({ siteKey: SITE_KEY, siteId: SITE_ID });

  return (
    <main className="bg-white">
      <QueryParamPersistence />
      <Header />
      <Hero />
      <WhyImplants />
      <Implants />
      <Technology />
      <Financing />
      <Doctor />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
