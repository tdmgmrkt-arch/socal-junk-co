import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck, Recycle, Clock, DollarSign, CheckCircle, Star, Phone, ArrowRight, Sparkles, Shield, BadgeCheck, Users } from "lucide-react"

export default function Home() {
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
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            {/* Trust Badge */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="flex items-center gap-2 bg-gold/20 backdrop-blur-sm px-4 py-2 rounded-full border border-gold/30">
                <Star className="h-4 w-4 text-gold fill-gold" />
                <span className="text-sm font-semibold">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Users className="h-4 w-4 text-gold" />
                <span className="text-sm font-semibold">5,000+ Customers</span>
              </div>
              <div className="flex items-center gap-2 bg-green-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-green-500/30">
                <BadgeCheck className="h-4 w-4 text-green-400" />
                <span className="text-sm font-semibold">Licensed & Insured</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Professional Junk Removal in{" "}
              <span className="text-gold">Southern California</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-6">
              Fast, reliable, and eco-friendly junk hauling services for your home or business.
            </p>

            {/* Key Features */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-gold" />
                <span className="text-base">Same-Day Available</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-gold" />
                <span className="text-base">No Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-gold" />
                <span className="text-base">Eco-Friendly</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="xl" className="text-lg">
                <Link href="/contact">Get Free Quote</Link>
              </Button>
              <Button asChild size="xl" variant="outline" className="text-lg bg-transparent text-white border-white hover:bg-white hover:text-black">
                <a href="tel:+13102187822" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call (310) 218-7822
                </a>
              </Button>
            </div>

            {/* Availability Banner */}
            <div className="mt-8 inline-flex items-center gap-2 bg-gold/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-gold/30">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-semibold text-gold">Available Today</span>
              </div>
              <span className="text-gray-300">•</span>
              <span className="text-sm text-gray-300">Mon-Fri: 7AM-7PM • Sat-Sun: 8AM-5PM</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us & Social Proof */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Why <span className="text-gold">5,000+ Customers</span> Trust Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional, reliable, and eco-friendly junk removal since 2015
            </p>
          </div>

          {/* Stats Counter */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-6 bg-gradient-to-br from-gold/5 to-gold/10 rounded-xl border border-gold/20 hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl font-bold text-gold mb-2">5,000+</div>
              <p className="text-sm font-medium text-gray-700">Happy Customers</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-gold/5 to-gold/10 rounded-xl border border-gold/20 hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl font-bold text-gold mb-2">10,000+</div>
              <p className="text-sm font-medium text-gray-700">Jobs Completed</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-gold/5 to-gold/10 rounded-xl border border-gold/20 hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl font-bold text-gold mb-2">75%</div>
              <p className="text-sm font-medium text-gray-700">Recycled/Donated</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-gold/5 to-gold/10 rounded-xl border border-gold/20 hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl font-bold text-gold mb-2">98%</div>
              <p className="text-sm font-medium text-gray-700">Satisfaction Rate</p>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="group border-2 border-gray-200 hover:border-gold transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-dark rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Truck className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Same-Day Service</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600">
                  Available today! Fast appointments that work around your schedule.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group border-2 border-gray-200 hover:border-gold transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-dark rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Licensed & Insured</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600">
                  Fully protected service with comprehensive liability coverage.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group border-2 border-gray-200 hover:border-gold transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-dark rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Recycle className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Eco-Friendly</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600">
                  We recycle & donate 75% of items to minimize landfill impact.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group border-2 border-gray-200 hover:border-gold transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-dark rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">No Hidden Fees</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600">
                  Transparent upfront pricing. The quote we give is what you pay.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Remove */}
      <section className="py-16 bg-gradient-to-r from-black to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              What We <span className="text-gold">Remove</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              From furniture to construction debris - we handle it all
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {[
              "Furniture",
              "Appliances",
              "Electronics",
              "Mattresses",
              "Construction Debris",
              "Yard Waste",
              "Office Equipment",
              "Hot Tubs",
              "Exercise Equipment",
              "Estate Cleanouts",
              "Garage Cleanouts",
              "Storage Units"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 p-3 bg-white/5 rounded-lg border border-white/10 hover:border-gold/50 hover:bg-white/10 transition-all duration-300">
                <CheckCircle className="h-5 w-5 text-gold flex-shrink-0" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="xl" variant="outline" className="bg-transparent text-white border-white hover:bg-gold hover:border-gold hover:text-black text-lg">
              <Link href="/services">See All Services →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple, fast, and hassle-free junk removal in 3 easy steps
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Desktop connector line */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold to-gold-dark opacity-20" style={{ top: '80px' }}></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
              {/* Step 1 */}
              <div className="relative">
                <Card className="group border-2 border-gray-200 hover:border-gold transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gold/5 to-transparent rounded-bl-full"></div>
                  <CardHeader className="text-center pb-4 relative">
                    <div className="w-24 h-24 bg-gradient-to-br from-gold to-gold-dark rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <Phone className="h-12 w-12 text-white" />
                    </div>
                    <div className="absolute -top-3 -left-3 w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      1
                    </div>
                  </CardHeader>
                  <CardContent className="text-center relative">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-gold transition-colors duration-300">
                      Book Online or Call
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      Schedule your appointment online or give us a call. We offer flexible time slots to fit your schedule.
                    </p>
                  </CardContent>
                </Card>
                {/* Arrow for desktop */}
                <div className="hidden md:flex absolute -right-6 top-20 text-gold-dark z-10">
                  <ArrowRight className="h-12 w-12 animate-pulse" />
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <Card className="group border-2 border-gray-200 hover:border-gold transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gold/5 to-transparent rounded-bl-full"></div>
                  <CardHeader className="text-center pb-4 relative">
                    <div className="w-24 h-24 bg-gradient-to-br from-gold to-gold-dark rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <Truck className="h-12 w-12 text-white" />
                    </div>
                    <div className="absolute -top-3 -left-3 w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      2
                    </div>
                  </CardHeader>
                  <CardContent className="text-center relative">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-gold transition-colors duration-300">
                      We Haul It Away
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      Our professional team arrives on time, provides an upfront quote, and removes all your unwanted items.
                    </p>
                  </CardContent>
                </Card>
                {/* Arrow for desktop */}
                <div className="hidden md:flex absolute -right-6 top-20 text-gold-dark z-10">
                  <ArrowRight className="h-12 w-12 animate-pulse" />
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <Card className="group border-2 border-gray-200 hover:border-gold transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gold/5 to-transparent rounded-bl-full"></div>
                  <CardHeader className="text-center pb-4 relative">
                    <div className="w-24 h-24 bg-gradient-to-br from-gold to-gold-dark rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <Sparkles className="h-12 w-12 text-white" />
                    </div>
                    <div className="absolute -top-3 -left-3 w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      3
                    </div>
                  </CardHeader>
                  <CardContent className="text-center relative">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-gold transition-colors duration-300">
                      Relax & Enjoy
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      We handle all the heavy lifting and proper disposal. You just sit back and enjoy your clutter-free space!
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              What Our Customers Say
            </h2>
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-gold text-gold" />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group border-2 border-gray-200 hover:border-gold transition-all duration-300 hover:shadow-xl bg-white">
              <CardHeader>
                <div className="flex justify-between items-start mb-3">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-full">
                    <BadgeCheck className="h-4 w-4 text-green-600" />
                    <span className="text-xs font-medium text-green-700">Verified</span>
                  </div>
                </div>
                <CardTitle className="text-xl">Fast and Professional Service</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-700 leading-relaxed italic mb-4">
                  "The team arrived on time and removed all our old furniture in under an hour. Very professional and courteous. They even swept up afterwards! Highly recommend!"
                </CardDescription>
                <div className="border-t pt-3">
                  <p className="text-sm font-semibold text-gray-900">Sarah Martinez</p>
                  <p className="text-xs text-gray-500">Homeowner • Anaheim, CA</p>
                  <p className="text-xs text-gray-400 mt-1">January 15, 2024</p>
                </div>
              </CardContent>
            </Card>

            <Card className="group border-2 border-gray-200 hover:border-gold transition-all duration-300 hover:shadow-xl bg-white">
              <CardHeader>
                <div className="flex justify-between items-start mb-3">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-full">
                    <BadgeCheck className="h-4 w-4 text-green-600" />
                    <span className="text-xs font-medium text-green-700">Verified</span>
                  </div>
                </div>
                <CardTitle className="text-xl">Excellent Value & Service</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-700 leading-relaxed italic mb-4">
                  "Fair and transparent pricing with no surprises. They beat two other quotes and did an excellent job clearing out our garage. Will definitely use again!"
                </CardDescription>
                <div className="border-t pt-3">
                  <p className="text-sm font-semibold text-gray-900">Michael Thompson</p>
                  <p className="text-xs text-gray-500">Business Owner • Orange, CA</p>
                  <p className="text-xs text-gray-400 mt-1">December 8, 2023</p>
                </div>
              </CardContent>
            </Card>

            <Card className="group border-2 border-gray-200 hover:border-gold transition-all duration-300 hover:shadow-xl bg-white">
              <CardHeader>
                <div className="flex justify-between items-start mb-3">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-full">
                    <BadgeCheck className="h-4 w-4 text-green-600" />
                    <span className="text-xs font-medium text-green-700">Verified</span>
                  </div>
                </div>
                <CardTitle className="text-xl">Environmentally Responsible</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-700 leading-relaxed italic mb-4">
                  "I love that they recycle and donate items instead of just hauling everything to the dump. They told me exactly where my old couch was donated. Responsible and reliable!"
                </CardDescription>
                <div className="border-t pt-3">
                  <p className="text-sm font-semibold text-gray-900">Jennifer Lopez</p>
                  <p className="text-xs text-gray-500">Property Manager • Fullerton, CA</p>
                  <p className="text-xs text-gray-400 mt-1">February 22, 2024</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Our <span className="text-gold">Guarantee</span> To You
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your satisfaction is our top priority. We stand behind our service 100%.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center border-2 hover:border-gold transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg">Satisfaction Guaranteed</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  If you're not completely satisfied, we'll make it right or refund your money.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-gold transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg">No Hidden Fees</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  The price we quote is the price you pay. No surprises, no hidden charges.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-gold transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg">Fully Insured</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  Full liability insurance protects your property during removal process.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-gold transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg">On-Time Arrival</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  We arrive on time, every time. We'll call 30 minutes before arrival.
                </CardDescription>
              </CardContent>
            </Card>
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
