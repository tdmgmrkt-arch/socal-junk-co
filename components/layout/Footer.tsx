import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Clock } from "lucide-react"

const navigation = {
  services: [
    { name: "Residential Junk Removal", href: "/services#residential" },
    { name: "Commercial Junk Removal", href: "/services#commercial" },
    { name: "Furniture Removal", href: "/services#furniture" },
    { name: "Appliance Removal", href: "/services#appliance" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "Service Areas", href: "/service-areas" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <Image
              src="/socaljunkcologo.png"
              alt="SoCal Junk Co Logo"
              width={150}
              height={50}
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 text-sm mb-4">
              Professional junk removal services in Anaheim and throughout Southern California. Fast, reliable, and eco-friendly.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-gold font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-gold font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gold font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+13102187822" className="text-gray-400 hover:text-white transition-colors">
                    (310) 218-7822
                  </a>
                  <a href="tel:+17147172613" className="text-gray-400 hover:text-white transition-colors">
                    (714) 717-2613
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <a href="mailto:opanuco@yahoo.com" className="text-gray-400 hover:text-white transition-colors">
                  opanuco@yahoo.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Anaheim, CA<br />Southern California
                </span>
              </li>
              <li className="flex items-start gap-2 mt-4 pt-4 border-t border-gray-800">
                <Clock className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <div className="text-gray-400 text-sm">
                  <p className="font-semibold text-white mb-1">Business Hours</p>
                  <p>Mon-Fri: 7:00 AM - 7:00 PM</p>
                  <p>Saturday: 8:00 AM - 5:00 PM</p>
                  <p>Sunday: 9:00 AM - 3:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} SoCal Junk Co. All rights reserved.
            </p>
            <div className="flex gap-6">
              {navigation.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
