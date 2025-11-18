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
    default: "SoCal Junk Co | Professional Junk Removal Services in Anaheim & Southern California",
    template: "%s | SoCal Junk Co"
  },
  description: "Professional junk removal and hauling services in Anaheim and throughout Southern California. Fast, reliable, eco-friendly junk removal for residential and commercial properties. Get a free quote today!",
  keywords: ["junk removal", "junk hauling", "Anaheim junk removal", "Southern California", "furniture removal", "appliance removal", "residential junk removal", "commercial junk removal"],
  authors: [{ name: "SoCal Junk Co" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://socaljunkco.com",
    siteName: "SoCal Junk Co",
    title: "SoCal Junk Co | Professional Junk Removal Services",
    description: "Professional junk removal and hauling services in Anaheim and throughout Southern California.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
