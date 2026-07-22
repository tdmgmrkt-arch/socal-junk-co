import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, ArrowRight, Phone, CheckCircle, BookOpen, Tag } from "lucide-react"
import { getAllPosts, formatPostDate } from "@/lib/blog"

export const metadata: Metadata = {
  title: "Junk Removal Blog | Anaheim & Orange County Tips",
  description:
    "Local junk removal tips, seasonal cleanout guides, and Anaheim & Orange County recycling resources from the SoCal Junk Co team. Written for OC homeowners.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Junk Removal Blog | SoCal Junk Co",
    description:
      "Seasonal cleanout guides, local recycling resources, and OC junk removal tips from the SoCal Junk Co team.",
    url: "https://socaljunkco.com/blog",
    type: "website",
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://socaljunkco.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://socaljunkco.com/blog" },
  ],
}

export default function BlogIndexPage() {
  const posts = getAllPosts()
  const [featured, ...rest] = posts

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": "https://socaljunkco.com/blog#blog",
    name: "SoCal Junk Co Blog",
    description:
      "Junk removal tips, seasonal cleanout guides, and Orange County recycling resources.",
    url: "https://socaljunkco.com/blog",
    publisher: { "@id": "https://socaljunkco.com/#organization" },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      datePublished: p.date,
      dateModified: p.date,
      url: `https://socaljunkco.com/blog/${p.slug}`,
      image: `https://socaljunkco.com${p.image}`,
      author: { "@type": "Organization", name: "SoCal Junk Co" },
      description: p.description,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      {/* Hero */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/hero.webp"
            alt="Junk removal blog"
            fill
            className="object-cover object-[50%_68%]"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm px-4 py-2 rounded-full border border-gold/30 mb-6">
              <BookOpen className="h-4 w-4 text-gold" />
              <span className="text-sm font-semibold text-gold">The SoCal Junk Co Blog</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Junk Removal <span className="text-gold">Tips & Guides</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300">
              Seasonal cleanout guides, local recycling resources, and hard-won tips from a decade of hauling junk across Anaheim and Orange County.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featured && (
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-8 bg-gold rounded-full" />
              <h2 className="text-sm font-bold uppercase tracking-wider text-gold">
                Latest Post
              </h2>
            </div>

            <Link
              href={`/blog/${featured.slug}`}
              className="group block"
            >
              <Card className="border-2 border-gray-200 group-hover:border-gold transition-all duration-300 group-hover:shadow-2xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-64 sm:h-80 lg:h-full min-h-[320px]">
                    <Image
                      src={featured.image}
                      alt={featured.imageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1 bg-gold text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg">
                        <Tag className="h-3 w-3" />
                        {featured.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-8 sm:p-10 flex flex-col justify-center">
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4 text-gold" />
                        {formatPostDate(featured.date)}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4 text-gold" />
                        {featured.readTime} min read
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 group-hover:text-gold transition-colors">
                      {featured.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      {featured.excerpt}
                    </p>
                    <div className="inline-flex items-center gap-2 text-gold font-semibold group-hover:gap-3 transition-all">
                      Read the full post
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </CardContent>
                </div>
              </Card>
            </Link>
          </div>
        </section>
      )}

      {/* All Posts Grid */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              All <span className="text-gold">Articles</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Local tips and guides for keeping your Anaheim home clutter-free year-round
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <Card className="h-full border-2 border-gray-200 group-hover:border-gold transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 overflow-hidden bg-white">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1 bg-black/80 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5 text-gold" />
                        {formatPostDate(post.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5 text-gold" />
                        {post.readTime} min
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-gold transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="inline-flex items-center gap-1.5 text-sm text-gold font-semibold group-hover:gap-2.5 transition-all">
                      Read more
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-br from-black via-gray-980 to-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-dark rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm px-4 py-2 rounded-full border border-gold/30 mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-gold">Ready to Book?</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Skip the DIY. <span className="text-gold">We'll Haul It.</span>
          </h2>
          <p className="text-xl text-gray-300 mb-4 max-w-2xl mx-auto">
            Reading is nice. But the couch, the garage, and the mattress aren't going anywhere without a truck.
          </p>
          <p className="text-base text-gray-400 mb-10 flex flex-wrap justify-center gap-x-6 gap-y-2">
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-gold" />
              Same-Day Available
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-gold" />
              Free Quote
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-gold" />
              75% Diverted from Landfill
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
