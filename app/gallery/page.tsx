import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Gallery",
  description: "See before-and-after photos of junk removal and property cleanup jobs completed by SoCal Junk Co throughout Southern California.",
}

const galleryPhotos = [
  { file: "riverside-garage-cleanout.png", caption: "Riverside Garage Cleanout" },
  { file: "murrieta-backyard-cleanup.png", caption: "Murrieta Backyard Cleanup" },
  { file: "bloomington-property-prep-before-after.png", caption: "Bloomington Property Prep Before After", contain: true },
  { file: "presale-property-cleanup.png", caption: "Presale Property Cleanup" },
  { file: "long-beach-curb-cleanup.png", caption: "Long Beach Curb Cleanup", contain: true },
  { file: "property-cleanup-prep.png", caption: "Property Cleanup Prep" },
  { file: "bulky-item-pickup.png", caption: "Bulky Item Pickup" },
  { file: "property-prep-blind-removal.jpeg", caption: "Property Prep Blind Removal", contain: true },
  { file: "alleyway-cleanup-before-after.png", caption: "Alleyway Cleanup Before After", contain: true },
  { file: "property-cleanout-complete.png", caption: "Property Cleanout Complete", contain: true },
  { file: "shed-teardown-demolition.png", caption: "Shed Teardown Demolition", contain: true },
  { file: "fence-demo-rebuild.png", caption: "Fence Demo Rebuild", contain: true },
  { file: "big-job-construction-debris.png", caption: "Big Job Construction Debris", contain: true },
  { file: "furniture-haul-away.png", caption: "Furniture Haul Away", contain: true },
  { file: "deck-demo-hauling.png", caption: "Deck Demo Hauling", contain: true },
  { file: "appliance-junk-removal.png", caption: "Appliance Junk Removal", contain: true },
]

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://socaljunkco.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Gallery",
      item: "https://socaljunkco.com/gallery",
    },
  ],
}

export default function GalleryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero Section */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/hero.webp"
            alt="Junk removal services"
            fill
            className="object-cover object-[50%_68%]"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Job <span className="text-gold">Gallery</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300">
              Real before-and-after results from junk removal and property cleanup jobs across Southern California
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryPhotos.map((photo) => (
              <div
                key={photo.file}
                className="group rounded-lg overflow-hidden border shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-square bg-gray-100">
                  <Image
                    src={`/gallery/${photo.file}`}
                    alt={photo.caption}
                    fill
                    className={`group-hover:scale-105 transition-transform duration-300 ${
                      photo.contain ? "object-contain" : "object-cover"
                    }`}
                  />
                </div>
                <div className="p-4 bg-gray-50">
                  <p className="font-medium text-gray-900">{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-br from-black via-gray-980 to-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-dark rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready for Your <span className="text-gold">Before & After?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-4 max-w-2xl mx-auto">
            Get a free, no-obligation quote and see the difference for yourself
          </p>
          <p className="text-base text-gray-400 mb-10 flex flex-wrap justify-center gap-x-6 gap-y-2">
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-gold" />
              Fast Local Service
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-gold" />
              Same-Day Available
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-gold" />
              Free Quotes
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="xl" className="text-lg shadow-2xl shadow-gold/20 hover:shadow-gold/40">
              <Link href="/contact" className="flex items-center gap-2">
                Get Free Quote
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
