import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Building2, Sofa, Refrigerator, Trash2, TreePine, CheckCircle, Phone, Calendar, Truck, Sparkles, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Junk Removal Services",
  description: "Comprehensive junk removal services in Anaheim and Southern California. Residential, commercial, furniture, appliance removal and more. Professional, fast, eco-friendly service.",
}

const services = [
  {
    icon: Home,
    title: "Residential Junk Removal",
    id: "residential",
    description: "Complete home cleanout services for homeowners and renters",
    details: [
      "Garage and basement cleanouts",
      "Estate cleanouts",
      "Foreclosure cleanouts",
      "Storage unit cleanouts",
      "General household junk removal",
      "Moving and downsizing assistance"
    ]
  },
  {
    icon: Building2,
    title: "Commercial Junk Removal",
    id: "commercial",
    description: "Professional waste management for businesses and construction sites",
    details: [
      "Office furniture removal",
      "Retail store cleanouts",
      "Construction debris removal",
      "Warehouse cleanouts",
      "Renovation debris",
      "Property management services"
    ]
  },
  {
    icon: Sofa,
    title: "Furniture Removal",
    id: "furniture",
    description: "Safe and efficient removal of all types of furniture",
    details: [
      "Couches and sofas",
      "Beds and mattresses",
      "Tables and chairs",
      "Dressers and cabinets",
      "Office furniture",
      "Outdoor furniture"
    ]
  },
  {
    icon: Refrigerator,
    title: "Appliance Removal",
    id: "appliance",
    description: "Environmentally responsible appliance disposal and recycling",
    details: [
      "Refrigerators and freezers",
      "Washers and dryers",
      "Stoves and ovens",
      "Dishwashers",
      "Water heaters",
      "Air conditioners"
    ]
  },
  {
    icon: TreePine,
    title: "Yard Waste Removal",
    id: "yard",
    description: "Green waste and landscaping debris removal",
    details: [
      "Tree branches and logs",
      "Brush and shrubs",
      "Grass clippings",
      "Leaves and yard debris",
      "Soil and dirt",
      "Landscaping materials"
    ]
  },
  {
    icon: Trash2,
    title: "Estate & Hoarding Cleanouts",
    id: "estate",
    description: "Compassionate and thorough cleanout services",
    details: [
      "Full estate cleanouts",
      "Hoarding situation cleanup",
      "Sensitive item handling",
      "Donation coordination",
      "Respectful service",
      "Complete property clearing"
    ]
  }
]

export default function ServicesPage() {
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
              Our <span className="text-gold">Services</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300">
              Comprehensive junk removal solutions for homes and businesses throughout Southern California
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Card key={service.id} id={service.id} className="group border-2 border-gray-200 hover:border-gold transition-all duration-300 hover:shadow-xl">
                  <CardHeader>
                    <div className="w-14 h-14 bg-linear-to-br from-gold to-gold-dark rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base text-gray-600">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.details.map((detail, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* What We Take Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              What We Take
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We remove almost anything! Here's a comprehensive list of items we handle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-gold transition-all duration-300 hover:shadow-xl">
              <h3 className="font-bold text-lg mb-4 text-gold">Furniture</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Sofas & Chairs</li>
                <li>• Beds & Mattresses</li>
                <li>• Tables & Desks</li>
                <li>• Cabinets & Dressers</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-gold transition-all duration-300 hover:shadow-xl">
              <h3 className="font-bold text-lg mb-4 text-gold">Appliances</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Refrigerators</li>
                <li>• Washers & Dryers</li>
                <li>• Stoves & Ovens</li>
                <li>• Water Heaters</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-gold transition-all duration-300 hover:shadow-xl">
              <h3 className="font-bold text-lg mb-4 text-gold">Electronics</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• TVs & Monitors</li>
                <li>• Computers</li>
                <li>• Printers</li>
                <li>• E-waste</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-gold transition-all duration-300 hover:shadow-xl">
              <h3 className="font-bold text-lg mb-4 text-gold">Other Items</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Yard Waste</li>
                <li>• Construction Debris</li>
                <li>• Boxes & Clutter</li>
                <li>• And Much More!</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-white rounded-lg border-l-4 border-gold">
            <h3 className="font-bold text-lg mb-2">What We Don't Take</h3>
            <p className="text-gray-700">
              Hazardous materials, chemicals, asbestos, medical waste, and radioactive materials.
              Contact us if you have questions about specific items.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple, straightforward, and stress-free — from call to completion
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Desktop connector line */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold to-gold-dark opacity-20" style={{ top: '72px' }}></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
              {/* Step 1 */}
              <div className="relative">
                <Card className="group border-2 border-gray-200 hover:border-gold transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-white relative overflow-hidden h-full">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gold/5 to-transparent rounded-bl-full"></div>
                  <CardHeader className="text-center pb-3 relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-gold to-gold-dark rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <Phone className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -left-2 w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      1
                    </div>
                  </CardHeader>
                  <CardContent className="text-center relative pb-6">
                    <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-gold transition-colors duration-300">
                      Contact Us
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Call or book online for a free estimate
                    </p>
                  </CardContent>
                </Card>
                {/* Arrow for desktop */}
                <div className="hidden lg:flex absolute -right-4 top-16 text-gold-dark z-10">
                  <ArrowRight className="h-8 w-8 animate-pulse" />
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <Card className="group border-2 border-gray-200 hover:border-gold transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-white relative overflow-hidden h-full">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gold/5 to-transparent rounded-bl-full"></div>
                  <CardHeader className="text-center pb-3 relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-gold to-gold-dark rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <Calendar className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -left-2 w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      2
                    </div>
                  </CardHeader>
                  <CardContent className="text-center relative pb-6">
                    <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-gold transition-colors duration-300">
                      Schedule
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      We find a time that works for you
                    </p>
                  </CardContent>
                </Card>
                {/* Arrow for desktop */}
                <div className="hidden lg:flex absolute -right-4 top-16 text-gold-dark z-10">
                  <ArrowRight className="h-8 w-8 animate-pulse" />
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <Card className="group border-2 border-gray-200 hover:border-gold transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-white relative overflow-hidden h-full">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gold/5 to-transparent rounded-bl-full"></div>
                  <CardHeader className="text-center pb-3 relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-gold to-gold-dark rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <Truck className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -left-2 w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      3
                    </div>
                  </CardHeader>
                  <CardContent className="text-center relative pb-6">
                    <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-gold transition-colors duration-300">
                      We Remove
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Our team handles all the heavy lifting
                    </p>
                  </CardContent>
                </Card>
                {/* Arrow for desktop */}
                <div className="hidden lg:flex absolute -right-4 top-16 text-gold-dark z-10">
                  <ArrowRight className="h-8 w-8 animate-pulse" />
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative">
                <Card className="group border-2 border-gray-200 hover:border-gold transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-white relative overflow-hidden h-full">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gold/5 to-transparent rounded-bl-full"></div>
                  <CardHeader className="text-center pb-3 relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-gold to-gold-dark rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <Sparkles className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -left-2 w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      4
                    </div>
                  </CardHeader>
                  <CardContent className="text-center relative pb-6">
                    <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-gold transition-colors duration-300">
                      Clean Sweep
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      We leave your space clean and clear
                    </p>
                  </CardContent>
                </Card>
              </div>
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
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-gold">Available for Same-Day Service</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Get <span className="text-gold">Started?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-4 max-w-2xl mx-auto">
            Contact us today for a free quote on any of our junk removal services
          </p>
          <p className="text-base text-gray-400 mb-10 flex flex-wrap justify-center gap-x-6 gap-y-2">
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-gold" />
              Fast Response
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-gold" />
              No Obligation Quote
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-gold" />
              Licensed & Insured
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="xl" className="text-lg shadow-2xl shadow-gold/20 hover:shadow-gold/40">
              <Link href="/contact" className="flex items-center gap-2">
                Get Free Quote
                <ArrowRight className="h-5 w-5" />
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
