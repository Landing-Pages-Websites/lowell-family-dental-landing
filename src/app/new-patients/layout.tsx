import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "New Patient Dentist in Lowell, MA | Lowell Family Dental Practice",
  description:
    "Accepting new patients of all ages in Lowell, MA. Gentle cleanings, exams, crowns, whitening, family dentistry. Most insurances accepted, evening & Saturday hours, financing available.",
  openGraph: {
    title:
      "New Patient Dentist in Lowell, MA | Lowell Family Dental Practice",
    description:
      "Your family's dental home in Lowell. Cleanings, exams, crowns, whitening, periodontal, family & emergency dental care. Most insurances accepted. Book online.",
    type: "website",
    url: "https://book.lowellfamilydentalpractice.com/new-patients",
  },
  robots: { index: true, follow: true },
};

export default function NewPatientsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
