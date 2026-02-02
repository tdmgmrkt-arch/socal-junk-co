import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SoCal Junk Co | Junk Removal Anaheim & Orange County",
    template: "%s | SoCal Junk Co"
  },
  description: "Professional junk removal in Anaheim & Southern California. Fast, eco-friendly service for homes and businesses. Free quotes!",
  keywords: ["junk removal", "junk hauling", "Anaheim junk removal", "Southern California", "furniture removal", "appliance removal", "residential junk removal", "commercial junk removal"],
  authors: [{ name: "SoCal Junk Co" }],
  creator: "SoCal Junk Co",
  publisher: "SoCal Junk Co",
  metadataBase: new URL("https://socaljunkco.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://socaljunkco.com",
    siteName: "SoCal Junk Co",
    title: "SoCal Junk Co | Junk Removal Anaheim & Orange County",
    description: "Professional junk removal in Anaheim & Southern California. Fast, eco-friendly service for homes and businesses. Free quotes!",
    images: [
      {
        url: "/socaljunkhero.png",
        width: 1200,
        height: 630,
        alt: "SoCal Junk Co - Professional Junk Removal Services in Southern California",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SoCal Junk Co | Professional Junk Removal Services",
    description: "Professional junk removal and hauling services in Anaheim and throughout Southern California. Get a free quote today!",
    images: ["/socaljunkhero.png"],
  },
  icons: {
    icon: [
      { url: "/socaljunkcologo.png", sizes: "32x32", type: "image/png" },
      { url: "/socaljunkcologo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/socaljunkcologo.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/socaljunkcologo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when you have them
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://socaljunkco.com/#business",
      name: "SoCal Junk Co",
      image: "https://socaljunkco.com/socaljunkcologo.png",
      logo: "https://socaljunkco.com/socaljunkcologo.png",
      description: "Professional junk removal and hauling services in Anaheim and throughout Southern California. Fast, reliable, eco-friendly junk removal for residential and commercial properties.",
      url: "https://socaljunkco.com",
      telephone: ["(310) 218-7822", "(714) 717-2613"],
      email: "opanuco@yahoo.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Anaheim",
        addressRegion: "CA",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 33.8366,
        longitude: -117.9143,
      },
      areaServed: [
        {
          "@type": "State",
          name: "California",
        },
        {
          "@type": "City",
          name: "Anaheim",
        },
        {
          "@type": "City",
          name: "Orange County",
        },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "07:00",
          closes: "19:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Sunday",
          opens: "08:00",
          closes: "17:00",
        },
      ],
      priceRange: "$$",
      serviceType: [
        "Residential Junk Removal",
        "Commercial Junk Removal",
        "Furniture Removal",
        "Appliance Removal",
        "Yard Waste Removal",
        "Estate & Hoarding Cleanouts",
      ],
      sameAs: [],
    },
    {
      "@type": "Organization",
      "@id": "https://socaljunkco.com/#organization",
      name: "SoCal Junk Co",
      url: "https://socaljunkco.com",
      logo: {
        "@type": "ImageObject",
        url: "https://socaljunkco.com/socaljunkcologo.png",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "(310) 218-7822",
        contactType: "customer service",
        areaServed: "US",
        availableLanguage: ["English", "Spanish"],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://socaljunkco.com/#website",
      url: "https://socaljunkco.com",
      name: "SoCal Junk Co",
      publisher: {
        "@id": "https://socaljunkco.com/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
