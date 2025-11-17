# SoCal Junk Co - Professional Junk Removal Website

A modern, fully responsive website for SoCal Junk Co - a professional junk removal and hauling service based in Anaheim, California.

## Features

- **6 Complete Pages**: Home, Services, About, Pricing, Contact, Service Areas
- **Modern Design**: Black, white, and gold color scheme with professional aesthetics
- **Fully Responsive**: Mobile-first design that works perfectly on all devices
- **SEO Optimized**: Proper metadata, semantic HTML, structured headings, and sitemap
- **Performance Optimized**: Next.js Image optimization, fast load times
- **Validated Contact Form**: Built with react-hook-form and Zod validation
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation support

## Tech Stack

- **Framework**: Next.js 16.0.3 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: lucide-react
- **Form Validation**: react-hook-form + Zod
- **Deployment Ready**: Optimized for Vercel, Netlify, or any Node.js hosting

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
socal-junk-co/
├── app/                      # Next.js App Router pages
│   ├── page.tsx             # Home page
│   ├── services/            # Services page
│   ├── about/               # About page
│   ├── pricing/             # Pricing page
│   ├── contact/             # Contact page
│   ├── service-areas/       # Service Areas page
│   ├── layout.tsx           # Root layout with Header/Footer
│   ├── globals.css          # Global styles and theme
│   ├── sitemap.ts           # Dynamic sitemap generation
│   └── robots.ts            # Robots.txt configuration
├── components/              # Reusable components
│   ├── ui/                  # shadcn/ui components
│   ├── layout/              # Layout components (Header, Footer)
│   └── ContactForm.tsx      # Validated contact form
├── lib/                     # Utility functions
│   └── utils.ts             # shadcn/ui utilities
└── public/                  # Static assets
    ├── socaljunkcologo.png
    └── placeholderimage.webp
```

## Pages Overview

### 1. Home (`/`)
- Attention-grabbing hero section with CTA buttons
- "Why Choose Us" feature cards
- Services overview with images
- "How It Works" process steps
- Customer testimonials
- Final CTA section

### 2. Services (`/services`)
- Service offerings grid (6 services)
- "What We Take" comprehensive list
- Process explanation
- Full service descriptions

### 3. About (`/about`)
- Company story and mission
- Key statistics
- Core values
- Why choose us details

### 4. Pricing (`/pricing`)
- 4 pricing tiers (Small, Medium, Large, Full Load)
- Pricing factors explanation
- Additional services
- Price guarantee

### 5. Contact (`/contact`)
- Contact information cards
- Validated contact form (name, email, phone, message)
- Quick contact options
- FAQ section

### 6. Service Areas (`/service-areas`)
- Primary service areas (8 cities)
- Extended service areas (20+ cities)
- Service features
- Coverage details

## SEO Features

- Unique page titles and meta descriptions
- Open Graph tags for social sharing
- Structured heading hierarchy (H1, H2, H3)
- Alt text on all images
- Semantic HTML elements
- XML sitemap at `/sitemap.xml`
- Robots.txt configuration

## Color Palette

- **Primary**: Black (#000000)
- **Secondary**: White (#FFFFFF)
- **Accent/Gold**: #D4AF37
- **Gold Dark**: #B8941F
- **Gold Light**: #F4E5B0

## Customization

### Update Logo
Replace `/public/socaljunkcologo.png` with your company logo

### Update Images
Replace `/public/placeholderimage.webp` with your actual images

### Update Contact Information
Update phone numbers and email addresses in:
- `/components/layout/Header.tsx`
- `/components/layout/Footer.tsx`
- `/app/contact/page.tsx`

### Update Service Areas
Modify city lists in `/app/service-areas/page.tsx`

### Update Sitemap
Edit `/app/sitemap.ts` to update URLs and priorities

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Optimized images with next/image
- Static page generation
- Minimal JavaScript bundle size
- Fast initial page load

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

Built with Next.js, TypeScript, and Tailwind CSS
"# socal-junk-co" 
