import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Dental Implants in Lowell, MA | Lowell Family Dental Practice & Implant Center",
  description:
    "Permanent, natural-looking dental implants in Lowell, MA. Board-certified implant specialist · CT-guided precision · Flexible financing. Book your free consultation today.",
  openGraph: {
    title: "Dental Implants in Lowell, MA | Lowell Family Dental Practice & Implant Center",
    description:
      "Get your confident smile back with custom dental implants from a board-certified specialist. Free consultation, financing available, stress-free experience.",
    type: "website",
    url: "https://lowell-family-dental-landing.vercel.app",
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Real IDs populated after Mega Admin registration
  const SITE_ID = "__SITE_ID__";
  const SITE_KEY = "__SITE_KEY__";

  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <head>
        <meta name="mega-site-id" content={SITE_ID} />
        {/* MegaTag config — set BEFORE optimizer loads */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.MEGA_TAG_CONFIG={siteKey:"${SITE_KEY}",siteId:"${SITE_ID}"};window.API_ENDPOINT="https://optimizer.gomega.ai";window.TRACKING_API_ENDPOINT="https://events-api.gomega.ai";`,
          }}
        />
        <script
          id="optimizer-script"
          src="https://cdn.gomega.ai/scripts/optimizer.min.js"
          data-site-id={SITE_ID}
          async
        />
      </head>
      <body className="min-h-full flex flex-col bg-white">
        {children}
        {/* CTM tracking — Universal Mega CallTrackingMetrics */}
        <Script
          src="https://572388.tctm.co/t.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
