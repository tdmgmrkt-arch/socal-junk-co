import type { Metadata } from "next"
import Image from "next/image"
import ContactForm from "@/components/ContactForm"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with SoCal Junk Co for a free quote. Serving Anaheim and Southern California with professional junk removal services. Call us or fill out our contact form today!",
}

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["(310) 218-7822", "(714) 717-2613"],
    link: "tel:+13102187822"
  },
  {
    icon: Mail,
    title: "Email",
    details: "opanuco@yahoo.com",
    link: "mailto:opanuco@yahoo.com"
  },
  {
    icon: MapPin,
    title: "Service Area",
    details: "Anaheim & Southern California",
    link: "/service-areas"
  },
  {
    icon: Clock,
    title: "Hours",
    details: "Mon-Sat: 7AM-7PM, Sun: 8AM-5PM",
    link: null
  }
]

export default function ContactPage() {
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
              Get Your <span className="text-gold">Free Quote</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300">
              Ready to clear out your clutter? Contact us today for fast, reliable junk removal service.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <Card key={index} className="group text-center border-2 border-gray-200 hover:border-gold transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-14 h-14 bg-gradient-to-br from-gold to-gold-dark rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-lg group-hover:text-gold transition-colors duration-300">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {Array.isArray(info.details) ? (
                      <div className="flex flex-col gap-2">
                        <a
                          href="tel:+13102187822"
                          className="text-gray-700 hover:text-gold transition-colors text-sm font-medium"
                        >
                          (310) 218-7822
                        </a>
                        <a
                          href="tel:+17147172613"
                          className="text-gray-700 hover:text-gold transition-colors text-sm font-medium"
                        >
                          (714) 717-2613
                        </a>
                      </div>
                    ) : info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-700 hover:text-gold transition-colors text-sm font-medium"
                      >
                        {info.details}
                      </a>
                    ) : (
                      <p className="text-gray-700 text-sm">{info.details}</p>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Info */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
                Request a Free Quote
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Fill out the form and we'll get back to you within 24 hours with a free, no-obligation quote for your junk removal needs.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gold to-gold-dark rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 group-hover:text-gold transition-colors duration-300">Fast Response</h3>
                    <p className="text-gray-600">
                      We respond to all inquiries within 24 hours, usually much faster.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gold to-gold-dark rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 group-hover:text-gold transition-colors duration-300">Same-Day Service</h3>
                    <p className="text-gray-600">
                      Need immediate assistance? Call us for same-day junk removal (subject to availability).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gold to-gold-dark rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 group-hover:text-gold transition-colors duration-300">Serving All of SoCal</h3>
                    <p className="text-gray-600">
                      We proudly serve Anaheim and surrounding Southern California communities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-gold/5 to-gold/10 rounded-xl shadow-md border border-gold/20 hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-bold text-lg mb-3 text-gray-900">Prefer to Call?</h3>
                <p className="text-gray-700 mb-4">
                  Speak directly with our team for immediate assistance:
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="tel:+13102187822"
                    className="inline-flex items-center gap-2 text-2xl font-bold text-gold hover:text-gold-dark transition-all duration-300 hover:translate-x-1"
                  >
                    <Phone className="h-6 w-6" />
                    (310) 218-7822
                  </a>
                  <a
                    href="tel:+17147172613"
                    className="inline-flex items-center gap-2 text-2xl font-bold text-gold hover:text-gold-dark transition-all duration-300 hover:translate-x-1"
                  >
                    <Phone className="h-6 w-6" />
                    (714) 717-2613
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div>
              <Card className="border-2 border-gray-200 hover:border-gold transition-all duration-300 shadow-lg hover:shadow-2xl">
                <CardHeader className="bg-gradient-to-r from-gray-50 to-white">
                  <CardTitle className="text-2xl text-gray-900">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Common Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-white rounded-lg border-2 border-gray-200 hover:border-gold hover:shadow-lg transition-all duration-300 group">
              <h3 className="font-bold text-lg mb-2 group-hover:text-gold transition-colors duration-300">How quickly can you come?</h3>
              <p className="text-gray-700">
                We offer same-day and next-day service in most areas. Contact us to check availability for your location.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg border-2 border-gray-200 hover:border-gold hover:shadow-lg transition-all duration-300 group">
              <h3 className="font-bold text-lg mb-2 group-hover:text-gold transition-colors duration-300">Do you offer free estimates?</h3>
              <p className="text-gray-700">
                Yes! All estimates are completely free with no obligation. We provide upfront pricing before we begin any work.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg border-2 border-gray-200 hover:border-gold hover:shadow-lg transition-all duration-300 group">
              <h3 className="font-bold text-lg mb-2 group-hover:text-gold transition-colors duration-300">What areas do you serve?</h3>
              <p className="text-gray-700">
                We serve Anaheim and all surrounding Southern California communities. Check our Service Areas page for the complete list.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg border-2 border-gray-200 hover:border-gold hover:shadow-lg transition-all duration-300 group">
              <h3 className="font-bold text-lg mb-2 group-hover:text-gold transition-colors duration-300">Do I need to be present?</h3>
              <p className="text-gray-700">
                While we prefer you to be present for the initial quote, we can often work with property managers or arrange for service when you're not available.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
