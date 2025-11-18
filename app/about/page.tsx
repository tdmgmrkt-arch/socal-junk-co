import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, Leaf, Award, Shield, Clock, CheckCircle, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about SoCal Junk Co - your trusted partner for professional junk removal in Anaheim and Southern California. Locally owned, eco-friendly, and committed to excellent service.",
}

const values = [
  {
    icon: Heart,
    title: "Customer First",
    description: "Your satisfaction is our top priority. We treat every customer with respect and professionalism."
  },
  {
    icon: Leaf,
    title: "Eco-Conscious",
    description: "We recycle, donate, and dispose responsibly to minimize environmental impact."
  },
  {
    icon: Shield,
    title: "Reliable & Insured",
    description: "Fully licensed and insured for your peace of mind. We protect your property."
  },
  {
    icon: Award,
    title: "Quality Service",
    description: "Trained professionals delivering exceptional service on every job, every time."
  }
]

const stats = [
  { number: "10,000+", label: "Jobs Completed" },
  { number: "5,000+", label: "Happy Customers" },
  { number: "75%", label: "Items Recycled" },
  { number: "24/7", label: "Customer Support" }
]

export default function AboutPage() {
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
              About <span className="text-gold">SoCal Junk Co</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300">
              Your trusted local partner for professional junk removal services in Southern California
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Founded in Anaheim, California, SoCal Junk Co was born from a simple mission: to provide honest, reliable, and eco-friendly junk removal services to our community.
                </p>
                <p>
                  As a locally owned and operated business, we understand the unique needs of Southern California residents and businesses. Whether you're decluttering your home, managing a renovation project, or need regular commercial waste services, we're here to help.
                </p>
                <p>
                  What sets us apart is our commitment to sustainability. We don't just haul your junk to the nearest landfill. We carefully sort items to maximize recycling and donation opportunities, ensuring that usable items find new homes and recyclable materials are processed properly.
                </p>
                <p>
                  Over the years, we've built our reputation on professionalism, fair pricing, and exceptional customer service. Our team is trained, insured, and dedicated to making your junk removal experience as smooth and stress-free as possible.
                </p>
              </div>
            </div>
            <div className="relative h-96 lg:h-full min-h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/junk.team.webp"
                alt="SoCal Junk Co team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-gold mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm sm:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="group border-2 border-gray-200 hover:border-gold transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-center bg-white">
                  <CardHeader>
                    <div className="w-14 h-14 bg-linear-to-br from-gold to-gold-dark rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-gray-600 leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 lg:h-full min-h-[400px] rounded-lg overflow-hidden shadow-xl order-2 lg:order-1">
              <Image
                src="/residential-junk-removal.webp"
                alt="Professional junk removal service"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
                Why Choose Us?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-linear-to-br from-gold to-gold-dark rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">Local & Trusted</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We're your neighbors. As a local business, we care about our community and reputation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-linear-to-br from-gold to-gold-dark rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">Fast & Flexible</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Same-day and next-day appointments available. We work around your schedule.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-linear-to-br from-gold to-gold-dark rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Leaf className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">Environmentally Responsible</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We prioritize recycling and donation to reduce landfill waste and help those in need.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-linear-to-br from-gold to-gold-dark rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">Licensed & Insured</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Fully licensed, bonded, and insured for your complete peace of mind.
                    </p>
                  </div>
                </div>
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
            <span className="text-sm font-semibold text-gold">Join 5,000+ Happy Customers</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Experience the <span className="text-gold">SoCal Junk Co</span> Difference
          </h2>
          <p className="text-xl text-gray-300 mb-4 max-w-2xl mx-auto">
            Partner with a team that values professionalism, sustainability, and customer satisfaction
          </p>
          <p className="text-base text-gray-400 mb-10 flex flex-wrap justify-center gap-x-6 gap-y-2">
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-gold" />
              Local & Trusted
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-gold" />
              Eco-Friendly
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-gold" />
              Same-Day Available
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="xl" className="text-lg shadow-2xl shadow-gold/20 hover:shadow-gold/40">
              <Link href="/contact" className="flex items-center gap-2">
                Get Free Quote
                <Phone className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="xl" variant="outline" className="text-lg bg-transparent text-white border-2 border-white hover:bg-white hover:text-black">
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
