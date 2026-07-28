import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import {
  MapPin,
  CheckCircle,
  Phone,
  Home,
  Building2,
  Sofa,
  Refrigerator,
  TreePine,
  Trash2,
} from "lucide-react"
import { cities } from "@/lib/cities"

export async function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }))
}

function joinLandmarks(landmarks: string[]) {
  if (landmarks.length === 0) return ""
  if (landmarks.length === 1) return landmarks[0]
  return `${landmarks.slice(0, -1).join(", ")}, or ${landmarks[landmarks.length - 1]}`
}

const services = [
  { icon: Home, name: "Residential Junk Removal", href: "/services#residential" },
  { icon: Building2, name: "Commercial Junk Removal", href: "/services#commercial" },
  { icon: Sofa, name: "Furniture Removal", href: "/services#furniture" },
  { icon: Refrigerator, name: "Appliance Removal", href: "/services#appliance" },
  { icon: TreePine, name: "Yard Waste Removal", href: "/services" },
  { icon: Trash2, name: "Estate & Garage Cleanouts", href: "/services" },
]

const whyChooseUs = [
  "Licensed and insured",
  "Same-day service available",
  "Transparent, upfront pricing",
  "~75% of items recycled or donated",
  "Residential and commercial",
  "Free, no-obligation quotes",
]

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city: slug } = await params
  const city = cities.find((c) => c.slug === slug)
  if (!city) return {}
  return {
    title: `Junk Removal in ${city.name}, CA`,
    description: `Fast, eco-friendly junk removal in ${city.name}, CA. Residential and commercial hauling, furniture and appliance removal, and same-day service. Licensed, insured, free quotes.`,
    alternates: {
      canonical: `/service-areas/${city.slug}`,
    },
  }
}

export default async function CityJunkRemovalPage({ params }: { params: Promise<{ city: string }> }) {
  const { city: slug } = await params
  const city = cities.find((c) => c.slug === slug)
  if (!city) notFound()

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://socaljunkco.com" },
      { "@type": "ListItem", position: 2, name: "Service Areas", item: "https://socaljunkco.com/service-areas" },
      { "@type": "ListItem", position: 3, name: city.name, item: `https://socaljunkco.com/service-areas/${city.slug}` },
    ],
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Junk Removal",
    provider: {
      "@type": "LocalBusiness",
      name: "SoCal Junk Co",
      telephone: "(310) 218-7822",
      url: "https://socaljunkco.com",
    },
    areaServed: {
      "@type": "City",
      name: city.name,
      containedInPlace: { "@type": "AdministrativeArea", name: city.county },
    },
    url: `https://socaljunkco.com/service-areas/${city.slug}`,
  }

  return (
    <>
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero Section */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="/hero.webp"
            alt={`Junk removal in ${city.name}, CA`}
            fill
            className="object-cover object-[50%_68%]"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm px-4 py-2 rounded-full border border-gold/30 mb-6">
              <MapPin className="h-4 w-4 text-gold" />
              <span className="text-sm font-semibold text-gold">Serving {city.name}, CA</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Junk Removal in <span className="text-gold">{city.name}, CA</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8">
              Fast, eco-friendly junk hauling for {city.name} homes and businesses. Same-day appointments, upfront pricing, and a truck nearby.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="xl" className="text-lg shadow-2xl shadow-gold/20 hover:shadow-gold/40">
                <Link href="/contact" className="flex items-center gap-2">
                  Get Free Quote
                </Link>
              </Button>
              <Button asChild size="xl" variant="outline" className="text-lg bg-transparent text-white border-2 border-white hover:bg-white hover:text-black">
                <a href="tel:+13102187822" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call (310) 218-7822
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Local Intro */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
            {city.name}&apos;s Local Junk Removal Team
          </h2>
          <div className="space-y-4 text-gray-700 text-lg">
            <p>
              As one of our primary {city.county} service areas, {city.name} gets fast turnaround from our Anaheim-based team — often with same-day availability. Whether you&apos;re near {joinLandmarks(city.landmarks)}, we bring the truck and the crew to you.
            </p>
            <p>
              We handle everything from single-item pickups to full property cleanouts, and we recycle or donate roughly 75% of what we collect instead of sending it straight to a landfill.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Services Available in {city.name}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every service we offer, available throughout {city.name} and the surrounding area
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Link key={index} href={service.href}>
                  <Card className="text-center h-full border-2 hover:border-gold transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
                    <CardHeader className="pb-3">
                      <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-gold flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-lg group-hover:text-gold transition-colors duration-300">
                        {service.name}
                      </CardTitle>
                    </CardHeader>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Why {city.name} Chooses SoCal Junk Co
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((feature, index) => (
              <div key={index}
                className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group border border-transparent hover:border-gold"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gold rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <span className="text-gray-900 font-medium group-hover:text-gold transition-colors duration-300">{feature}</span>
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
          <div className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm px-4 py-2 rounded-full border border-gold/30 mb-6">
            <MapPin className="h-4 w-4 text-gold" />
            <span className="text-sm font-semibold text-gold">Serving {city.name}, CA</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Clear the <span className="text-gold">Clutter?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Get a free, no-obligation quote for your {city.name} junk removal job today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="xl" className="text-lg shadow-2xl shadow-gold/20 hover:shadow-gold/40">
              <Link href="/contact" className="flex items-center gap-2">
                Get Free Quote
                <MapPin className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="xl" variant="outline" className="text-lg bg-transparent text-white border-2 border-white hover:bg-white hover:text-black">
              <a href="tel:+13102187822" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call (310) 218-7822
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
