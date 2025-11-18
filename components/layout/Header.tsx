"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Pricing", href: "/pricing" },
  { name: "Service Areas", href: "/service-areas" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full shadow-sm">
      {/* Top Bar */}
      <div className="bg-linear-to-r from-gray-50 to-white text-gray-800 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center gap-6 md:gap-8">
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2 text-sm font-medium hover:text-gold transition-all duration-200 group"
              >
                <div className="p-1.5 rounded-full bg-gold/10 group-hover:bg-gold/20 transition-colors">
                  <Phone className="h-3.5 w-3.5 text-gold" />
                </div>
                <span className="hidden sm:inline">(310) 218-7822</span>
              </a>
              <div className="hidden sm:block h-4 w-px bg-gray-300"></div>
              <a
                href="mailto:opanuco@yahoo.com"
                className="flex items-center gap-2 text-sm font-medium hover:text-gold transition-all duration-200 group"
              >
                <div className="p-1.5 rounded-full bg-gold/10 group-hover:bg-gold/20 transition-colors">
                  <Mail className="h-3.5 w-3.5 text-gold" />
                </div>
                <span className="hidden md:inline">opanuco@yahoo.com</span>
              </a>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-600">
              <svg className="h-4 w-4 text-gold hidden sm:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Serving Anaheim & SoCal</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <Image
                src="/socaljunkcologo.png"
                alt="SoCal Junk Co Logo"
                width={180}
                height={60}
                className="h-12 w-auto brightness-0 invert"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-gold font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild size="lg" className="ml-4">
                <Link href="/contact">Get Free Quote</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-800"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black border-t border-gray-800">
          <div className="px-4 pt-4 pb-6 space-y-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-3 rounded-md text-base font-medium text-white hover:bg-gray-800 hover:text-gold transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <Button asChild size="lg" className="w-full">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Get Free Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
