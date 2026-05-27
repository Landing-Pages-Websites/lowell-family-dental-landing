"use client";

import Script from "next/script";
import { useTracking } from "@/hooks/useTracking";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { QueryParamPersistence } from "@/components/QueryParamPersistence";
import { HeroNP } from "@/components/np/HeroNP";
import { StatsNP } from "@/components/np/StatsNP";
import { Services } from "@/components/np/Services";
import { Welcome } from "@/components/np/Welcome";
import { WhyFamilies } from "@/components/np/WhyFamilies";
import { TestimonialsNP } from "@/components/np/TestimonialsNP";
import { FinancingNP } from "@/components/np/FinancingNP";
import { FAQNP } from "@/components/np/FAQNP";
import { ContactNP } from "@/components/np/ContactNP";
import { SITE_ID, SITE_KEY } from "@/components/Brand";

// Customer's own GTM container (separate from MEGA's optimizer).
// Loads only on the /new-patients route to avoid touching the implants page tracking.
const CUSTOMER_GTM_ID = "GTM-T3N2DX9H";

export default function NewPatientsPage() {
  useTracking({ siteKey: SITE_KEY, siteId: SITE_ID });

  return (
    <main className="bg-white">
      {/* Customer's GTM container — route-scoped so we don't touch the implants page */}
      <Script
        id="gtm-customer"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${CUSTOMER_GTM_ID}');
          `,
        }}
      />
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${CUSTOMER_GTM_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>

      <QueryParamPersistence />
      <Header tone="dark" />
      <HeroNP />
      <StatsNP />
      <Services />
      <Welcome />
      <WhyFamilies />
      <TestimonialsNP />
      <FinancingNP />
      <FAQNP />
      <ContactNP />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
