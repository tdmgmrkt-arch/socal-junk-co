import Link from "next/link"
import { Sparkles } from "lucide-react"

export default function FloatingQuoteButton() {
  return (
    <Link
      href="/contact#quote-form"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2 rounded-full bg-gold px-4 py-3 sm:px-6 sm:py-4 font-semibold text-white shadow-2xl shadow-gold/30 transition-all duration-300 hover:bg-gold-dark hover:shadow-gold/50 hover:scale-105"
      aria-label="Get a Free Quote"
    >
      <Sparkles className="h-5 w-5 flex-shrink-0" />
      <span className="text-sm sm:text-base">Free Quote</span>
    </Link>
  )
}
