import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, DollarSign, TrendingUp, Info } from "lucide-react"

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent, affordable junk removal pricing in Anaheim and Southern California. Volume-based pricing with no hidden fees. Get a free quote today!",
}

const pricingTiers = [
  {
    name: "Small Load",
    price: "Contact for Quote",
    priceDetail: "",
    description: "Perfect for small cleanouts and single items",
    volume: "Up to 1/8 truck",
    features: [
      "Single furniture items",
      "Small appliances",
      "Boxes and clutter",
      "Quick pickups",
      "Same-day available"
    ]
  },
  {
    name: "Medium Load",
    price: "Contact for Quote",
    priceDetail: "",
    description: "Great for garage cleanouts and multiple items",
    volume: "Up to 1/4 truck",
    features: [
      "Multiple furniture pieces",
      "Large appliances",
      "Garage cleanouts",
      "Room cleanouts",
      "Same-day available"
    ],
    popular: true
  },
  {
    name: "Large Load",
    price: "Contact for Quote",
    priceDetail: "",
    description: "Ideal for complete home or office cleanouts",
    volume: "Up to 1/2 truck",
    features: [
      "Full room cleanouts",
      "Estate cleanouts",
      "Office furniture",
      "Multiple rooms",
      "Priority scheduling"
    ]
  },
  {
    name: "Full Load",
    price: "Contact for Quote",
    priceDetail: "",
    description: "Maximum capacity for large projects",
    volume: "Full truck",
    features: [
      "Complete home cleanouts",
      "Construction debris",
      "Commercial projects",
      "Property cleanouts",
      "Dedicated crew"
    ]
  }
]

const whatAffectsPricing = [
  {
    title: "Volume",
    description: "The amount of space your items take up in our truck"
  },
  {
    title: "Labor",
    description: "Number of crew members and time required"
  },
  {
    title: "Location",
    description: "Distance from our base and accessibility"
  },
  {
    title: "Item Type",
    description: "Special handling for certain items may apply"
  }
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
      name: "Pricing",
      item: "https://socaljunkco.com/pricing",
    },
  ],
}

export default function PricingPage() {
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
              Simple, <span className="text-gold">Transparent Pricing</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300">
              Volume-based pricing with no hidden fees. Contact us for a free, customized quote.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Our Pricing Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the size that fits your needs. All quotes include labor, transportation, and eco-friendly disposal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingTiers.map((tier, index) => (
              <Card
                key={index}
                className={`relative ${tier.popular ? 'border-gold border-2 shadow-lg' : 'border-2'} hover:shadow-2xl hover:-translate-y-1 transition-all duration-300`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-linear-to-r from-gold to-yellow-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl mb-2">{tier.name}</CardTitle>
                  <div className="mb-2">
                    <div className="text-2xl font-bold text-gold">{tier.price}</div>
                  </div>
                  <div className="text-sm font-semibold text-black mb-2">{tier.volume}</div>
                  <CardDescription className="text-sm">{tier.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full" variant={tier.popular ? "default" : "outline"}>
                    <Link href="/contact">Get Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-6 bg-gray-50 rounded-lg border-l-4 border-gold">
            <div className="flex items-start gap-3">
              <Info className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">How Our Pricing Works</h3>
                <p className="text-gray-700 mb-2">
                  We charge based on the volume of space your items occupy in our truck. Our team will provide an upfront, no-obligation quote before we begin any work.
                </p>
                <p className="text-gray-700">
                  All prices include labor, loading, hauling, eco-friendly disposal, recycling, and donation services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Affects Pricing */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              What Affects Your Price?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Several factors determine your final quote
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whatAffectsPricing.map((factor, index) => (
              <Card key={index} className="text-center border-2 hover:border-gold hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-linear-to-br from-gold to-yellow-600 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-md">
                    <DollarSign className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{factor.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {factor.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Extra services to make your project easier
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-linear-to-br from-gold to-yellow-600 rounded-lg flex items-center justify-center mb-4 shadow-md">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Same-Day Service</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Need it done today? We offer same-day pickup for urgent removals (subject to availability).
                </CardDescription>
                <p className="text-sm font-semibold text-gold">Additional fees may apply</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-linear-to-br from-gold to-yellow-600 rounded-lg flex items-center justify-center mb-4 shadow-md">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Heavy Items</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Extra-heavy items like pianos, safes, or hot tubs may require additional labor and equipment.
                </CardDescription>
                <p className="text-sm font-semibold text-gold">Quote provided on-site</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-linear-to-br from-gold to-yellow-600 rounded-lg flex items-center justify-center mb-4 shadow-md">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Commercial Contracts</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Regular service contracts available for businesses, property managers, and contractors.
                </CardDescription>
                <p className="text-sm font-semibold text-gold">Contact for custom pricing</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our <span className="text-gold">Price Guarantee</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="w-16 h-16 bg-linear-to-br from-gold to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg transition-transform duration-300 group-hover:scale-110">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-2">No Hidden Fees</h3>
              <p className="text-gray-300 text-sm">
                The price we quote is the price you pay. No surprises.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-linear-to-br from-gold to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg transition-transform duration-300 group-hover:scale-110">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-2">Upfront Pricing</h3>
              <p className="text-gray-300 text-sm">
                Get your quote before we start. No obligation to proceed.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-linear-to-br from-gold to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg transition-transform duration-300 group-hover:scale-110">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-2">Best Value</h3>
              <p className="text-gray-300 text-sm">
                Competitive rates with superior service and eco-friendly disposal.
              </p>
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
            <DollarSign className="h-4 w-4 text-gold" />
            <span className="text-sm font-semibold text-gold">Transparent Pricing - No Hidden Fees</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready for Your <span className="text-gold">Free Quote?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-4 max-w-2xl mx-auto">
            Contact us today for an accurate, no-obligation estimate tailored to your needs
          </p>
          <p className="text-base text-gray-400 mb-10 flex flex-wrap justify-center gap-x-6 gap-y-2">
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-gold" />
              Upfront Pricing
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-gold" />
              All Costs Included
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-gold" />
              No Surprises
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="xl" className="text-lg shadow-2xl shadow-gold/20 hover:shadow-gold/40">
              <Link href="/contact" className="flex items-center gap-2">
                Get Free Quote
                <TrendingUp className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="xl" variant="outline" className="text-lg bg-transparent text-white border-2 border-white hover:bg-white hover:text-black">
              <a href="tel:+13102187822" className="flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Call (310) 218-7822
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
