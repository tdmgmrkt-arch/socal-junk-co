import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Calendar,
  Clock,
  ArrowRight,
  ArrowLeft,
  Phone,
  User,
  Tag,
  ExternalLink,
  BookOpen,
  CheckCircle,
} from "lucide-react"
import {
  blogPosts,
  getPostBySlug,
  getRelatedPosts,
  formatPostDate,
  type ContentBlock,
  type InlineFragment,
} from "@/lib/blog"

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) {
    return { title: "Post Not Found" }
  }
  const url = `https://socaljunkco.com/blog/${post.slug}`
  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url,
      publishedTime: post.date,
      authors: [post.author.name],
      tags: post.tags,
      images: [
        {
          url: `https://socaljunkco.com${post.image}`,
          width: 1200,
          height: 630,
          alt: post.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`https://socaljunkco.com${post.image}`],
    },
  }
}

function renderInline(fragments: InlineFragment[]): React.ReactNode {
  return fragments.map((frag, i) => {
    if (typeof frag === "string") {
      return <span key={i}>{frag}</span>
    }
    if (frag.external) {
      return (
        <a
          key={i}
          href={frag.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold font-medium underline decoration-gold/40 underline-offset-4 hover:decoration-gold hover:decoration-2 transition-all inline-flex items-baseline gap-0.5"
        >
          {frag.text}
          <ExternalLink className="h-3 w-3 inline-block relative top-[2px] opacity-70" />
        </a>
      )
    }
    return (
      <Link
        key={i}
        href={frag.href}
        className="text-gold font-medium underline decoration-gold/40 underline-offset-4 hover:decoration-gold hover:decoration-2 transition-all"
      >
        {frag.text}
      </Link>
    )
  })
}

function renderBlock(block: ContentBlock, idx: number): React.ReactNode {
  switch (block.type) {
    case "h2":
      return (
        <h2
          key={idx}
          className="text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-4 scroll-mt-24"
        >
          {block.text}
        </h2>
      )
    case "h3":
      return (
        <h3
          key={idx}
          className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          {block.text}
        </h3>
      )
    case "p":
      return (
        <p key={idx} className="text-lg text-gray-700 leading-relaxed mb-5">
          {renderInline(block.content)}
        </p>
      )
    case "ul":
      return (
        <ul key={idx} className="mb-6 space-y-2.5">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-lg text-gray-700 leading-relaxed">
              <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-1.5" />
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ul>
      )
    case "ol":
      return (
        <ol key={idx} className="mb-6 space-y-3 counter-reset-list">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-lg text-gray-700 leading-relaxed">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-gold to-gold-dark text-white text-sm font-bold flex items-center justify-center mt-0.5 shadow-sm">
                {i + 1}
              </span>
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ol>
      )
    case "callout":
      return (
        <div
          key={idx}
          className="my-8 p-6 sm:p-7 bg-gradient-to-br from-gold/5 via-gold/10 to-gold/5 border-l-4 border-gold rounded-r-lg shadow-sm"
        >
          <h4 className="font-bold text-lg text-gray-900 mb-2 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            {block.title}
          </h4>
          <p className="text-gray-700 leading-relaxed">{renderInline(block.content)}</p>
        </div>
      )
    case "quote":
      return (
        <blockquote
          key={idx}
          className="my-8 pl-6 border-l-4 border-gold italic text-xl text-gray-700 leading-relaxed"
        >
          "{block.text}"
          {block.cite && (
            <footer className="mt-2 text-sm not-italic text-gray-500">— {block.cite}</footer>
          )}
        </blockquote>
      )
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const related = getRelatedPosts(post.slug, 3)
  const url = `https://socaljunkco.com/blog/${post.slug}`

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    image: [`https://socaljunkco.com${post.image}`],
    url,
    author: {
      "@type": "Organization",
      name: "SoCal Junk Co",
      url: "https://socaljunkco.com",
    },
    publisher: {
      "@type": "Organization",
      name: "SoCal Junk Co",
      logo: {
        "@type": "ImageObject",
        url: "https://socaljunkco.com/socaljunkcologo.png",
      },
    },
    keywords: post.tags.join(", "),
    articleSection: post.category,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://socaljunkco.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://socaljunkco.com/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-gold transition-colors text-sm font-medium mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to All Posts
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 bg-gold text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg">
              <Tag className="h-3 w-3" />
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-sm text-gray-300">
              <Calendar className="h-4 w-4 text-gold" />
              {formatPostDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5 text-sm text-gray-300">
              <Clock className="h-4 w-4 text-gold" />
              {post.readTime} min read
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight">
            {post.title}
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
            {post.excerpt}
          </p>

          <div className="mt-8 flex items-center gap-3 pt-6 border-t border-white/10">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center shadow-lg">
              <User className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">{post.author.name}</p>
              <p className="text-xs text-gray-400">{post.author.role}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
          <article>{post.content.map((block, i) => renderBlock(block, i))}</article>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                Tags
              </span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 bg-gold/10 text-gold text-xs font-semibold px-3 py-1.5 rounded-full border border-gold/20"
                >
                  <Tag className="h-3 w-3" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Sources */}
          {post.externalSources.length > 0 && (
            <div className="mt-10 p-6 sm:p-7 bg-gray-50 border border-gray-200 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-gold" />
                References & Further Reading
              </h3>
              <ul className="space-y-3">
                {post.externalSources.map((src) => (
                  <li key={src.href} className="flex items-start gap-2 text-sm">
                    <ExternalLink className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <a
                        href={src.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-900 font-semibold hover:text-gold transition-colors"
                      >
                        {src.label}
                      </a>
                      <p className="text-gray-500 text-xs mt-0.5">{src.publisher}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
          </div>
        </div>
      </section>

      {/* Related Internal Links */}
      {post.relatedInternal.length > 0 && (
        <section className="py-14 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Explore Related Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {post.relatedInternal.map((link) => (
                <Link key={link.href} href={link.href} className="group">
                  <Card className="h-full border-2 border-gray-200 group-hover:border-gold transition-all duration-300 group-hover:shadow-lg bg-white">
                    <CardContent className="p-5">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gold transition-colors">
                        {link.label}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-3">
                        {link.description}
                      </p>
                      <span className="inline-flex items-center gap-1 text-sm text-gold font-semibold group-hover:gap-2 transition-all">
                        Learn more <ArrowRight className="h-4 w-4" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
                Keep <span className="text-gold">Reading</span>
              </h2>
              <p className="text-lg text-gray-600">
                More local junk removal tips from the SoCal Junk Co team
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {related.map((rp) => (
                <Link key={rp.slug} href={`/blog/${rp.slug}`} className="group block">
                  <Card className="h-full border-2 border-gray-200 group-hover:border-gold transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 overflow-hidden bg-white">
                    <div className="relative h-44 overflow-hidden">
                      <Image
                        src={rp.image}
                        alt={rp.imageAlt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="inline-flex items-center gap-1 bg-black/80 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                          {rp.category}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <div className="flex items-center gap-2 mb-2 text-xs text-gray-500">
                        <Calendar className="h-3.5 w-3.5 text-gold" />
                        {formatPostDate(rp.date)}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight group-hover:text-gold transition-colors line-clamp-2">
                        {rp.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                        {rp.excerpt}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="relative py-20 sm:py-24 bg-gradient-to-br from-black via-gray-980 to-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-dark rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm px-4 py-2 rounded-full border border-gold/30 mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-gold">Ready When You Are</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Book Your Free <span className="text-gold">Quote Today</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Same-day service available across Anaheim and Orange County. No hidden fees, no pressure.
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
