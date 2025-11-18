import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, CheckCircle, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Service Areas",
  description: "SoCal Junk Co provides professional junk removal services throughout Anaheim, Orange County, and Southern California. View our complete service area coverage.",
}

const primaryAreas = [
  "Anaheim",
  "Orange",
  "Santa Ana",
  "Fullerton",
  "Garden Grove",
  "Irvine",
  "Huntington Beach",
  "Costa Mesa"
]

const secondaryAreas = [
  "Tustin",
  "Newport Beach",
  "Lake Forest",
  "Mission Viejo",
  "Yorba Linda",
  "Placentia",
  "Brea",
  "La Habra",
  "Buena Park",
  "Cypress",
  "Fountain Valley",
  "Westminster",
  "Seal Beach",
  "Los Alamitos",
  "Laguna Beach",
  "San Clemente",
  "Dana Point",
  "Laguna Niguel",
  "Aliso Viejo",
  "Rancho Santa Margarita"
]

const serviceFeatures = [
  "Same-day service available",
  "No hidden fees or charges",
  "Eco-friendly disposal",
  "Licensed and insured",
  "Residential and commercial",
  "Free, no-obligation quotes"
]

export default function ServiceAreasPage() {
  return (
    <>
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
              Serving <span className="text-gold">Southern California</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300">
              Professional junk removal services throughout Anaheim, Orange County, and surrounding areas
            </p>
          </div>
        </div>
      </section>

      {/* Primary Service Areas */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Primary Service Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive junk removal services in these core areas
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {primaryAreas.map((area, index) => (
              <Card
                key={index}
                className="text-center border-2 hover:border-gold transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
              >
                <CardHeader className="pb-3">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-gold flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-gold transition-colors duration-300">{area}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center p-6 bg-gradient-to-r from-gray-50 to-amber-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gold/20">
            <p className="text-lg text-gray-700">
              Looking for junk removal in{" "}
              <span className="font-semibold text-gold">Anaheim, Orange County,</span> or surrounding areas?{" "}
              <Link href="/contact" className="text-gold hover:underline font-semibold transition-colors duration-300 hover:text-amber-600">
                Contact us today
              </Link>{" "}
              for fast, reliable service!
            </p>
          </div>
        </div>
      </section>

      {/* Extended Service Areas */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Extended Service Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We also serve these additional Southern California communities
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {secondaryAreas.map((area, index) => (
              <div
                key={index}
                className="flex items-center gap-2 p-3 bg-white rounded-lg border hover:border-gold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group"
              >
                <div className="w-8 h-8 rounded-lg bg-gold flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                  <CheckCircle className="h-4 w-4 text-white flex-shrink-0" />
                </div>
                <span className="text-gray-900 font-medium group-hover:text-gold transition-colors duration-300">{area}</span>
              </div>
            ))}
          </div>

          <div className="p-6 bg-white rounded-lg border-l-4 border-gold shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="font-bold text-lg mb-2">Don't See Your Area?</h3>
            <p className="text-gray-700">
              We're constantly expanding our service areas throughout Southern California. If you don't see your city listed, please{" "}
              <Link href="/contact" className="text-gold hover:underline font-semibold transition-colors duration-300">
                contact us
              </Link>{" "}
              - we may still be able to help!
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              What We Offer in Every Service Area
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceFeatures.map((feature, index) => (
              <div
                key={index}
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

      {/* Coverage Details */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
                Comprehensive Coverage Across SoCal
              </h2>
              <div className="space-y-4 text-gray-700 text-lg">
                <p>
                  Based in Anaheim, we're strategically positioned to serve all of Orange County and the greater Southern California region with fast, efficient junk removal services.
                </p>
                <p>
                  Our service radius extends throughout Orange County and into neighboring areas, ensuring that whether you're in a bustling city center or a quiet residential neighborhood, we can reach you quickly.
                </p>
                <p>
                  We understand that every community has unique needs, which is why we tailor our services to meet the specific requirements of each area we serve.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-shadow duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gold flex items-center justify-center flex-shrink-0 shadow-md">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Residential Areas</h3>
                    <p className="text-gray-600">
                      Home cleanouts, furniture removal, appliance disposal, and more
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-shadow duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gold flex items-center justify-center flex-shrink-0 shadow-md">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Commercial Districts</h3>
                    <p className="text-gray-600">
                      Office cleanouts, retail space clearing, construction debris removal
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-shadow duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gold flex items-center justify-center flex-shrink-0 shadow-md">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Industrial Zones</h3>
                    <p className="text-gray-600">
                      Warehouse cleanouts, equipment removal, bulk waste disposal
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-96 lg:h-full min-h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholderimage.webp"
                alt="Southern California service area"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-br from-black via-gray-980 to-black text-white overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-dark rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Urgency badge */}
          <div className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm px-4 py-2 rounded-full border border-gold/30 mb-6">
            <MapPin className="h-4 w-4 text-gold" />
            <span className="text-sm font-semibold text-gold">Serving All of Southern California</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Get <span className="text-gold">Started?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-4 max-w-2xl mx-auto">
            Serving your community with professional junk removal services you can trust
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
