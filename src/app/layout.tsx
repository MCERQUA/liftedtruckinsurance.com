import type { Metadata } from "next";
import { headingFont, bodyFont } from "@/lib/fonts";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { SITE } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Contractors Choice Agency`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "lifted truck insurance",
    "modified truck insurance",
    "agreed value truck insurance",
    "custom parts and accessories coverage",
    "show truck insurance",
    "off-road use rider",
    "lifted truck GAP coverage",
    "lifted truck physical damage",
    "lifted truck liability insurance",
    "non-owner truck insurance",
    "suspension lift kit insurance",
    "oversized tire truck insurance",
  ],
  authors: [{ name: "Contractors Choice Agency" }],
  creator: "Contractors Choice Agency",
  publisher: "Contractors Choice Agency",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | Contractors Choice Agency`,
    description:
      "Specialty insurance for lifted and modified trucks — agreed value, custom parts & accessories, show truck coverage, off-road use rider, GAP, physical damage, liability, and non-owner coverage. Licensed all 50 states. 15-min quotes.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 624, alt: `${SITE.name} — lifted truck coverage` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Contractors Choice Agency`,
    description:
      "Specialty insurance for lifted and modified trucks. Agreed value, custom parts & accessories, show truck coverage, off-road rider, GAP, physical damage, liability, and non-owner coverage. 15-minute quotes.",
    images: ["/images/og-image.jpg"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: SITE.url },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: "+18449675247",
    email: SITE.email,
    image: `${SITE.url}/images/og-image.jpg`,
    logo: `${SITE.url}/images/og-image.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.zip,
      addressCountry: SITE.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: 33.2622, longitude: -111.7826 },
    employee: { "@type": "Person", name: "Josh Cotner", jobTitle: "Founder & Insurance Agent" },
    areaServed: { "@type": "Country", name: "United States" },
    serviceType: [
      "Agreed Value Coverage for Lifted Trucks",
      "Custom Parts & Accessories Coverage",
      "Show Truck Coverage",
      "Off-Road Use Rider",
      "GAP Coverage for Lifted Trucks",
      "Physical Damage Coverage for Lifted Trucks",
      "Liability Coverage for Lifted Trucks",
      "Non-Owner Coverage for Lifted Trucks",
    ],
  };

  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      </head>
      <body className="antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
