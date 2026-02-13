import { Metadata } from "next"

export const siteConfig = {
  name: "Roomy",
  description: "Discover and book amazing properties across Uganda. From modern apartments to luxury villas.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://roomy.ug",
  ogImage: "/images/roomy-logo.png",
  twitter: "@roomy_ug",
}

/**
 * Generate metadata for a page
 */
export function generateMetadata(overrides: Partial<Metadata> = {}): Metadata {
  return {
    title: {
      default: "Roomy - Find Your Perfect Stay in Uganda",
      template: "%s | Roomy",
    },
    description:
      "Discover and book amazing properties across Uganda. From modern apartments in Kampala to lakeside villas in Entebbe.",
    keywords: [
      "Uganda accommodation",
      "rent apartment Uganda",
      "Kampala apartments",
      "vacation rentals",
      "property rental Uganda",
    ],
    authors: [{ name: "Roomy" }],
    creator: "Roomy",
    metadataBase: new URL(siteConfig.url),
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_UG",
      url: siteConfig.url,
      siteName: siteConfig.name,
      title: "Roomy - Find Your Perfect Stay in Uganda",
      description: siteConfig.description,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: "Roomy",
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Roomy - Find Your Perfect Stay in Uganda",
      description: siteConfig.description,
      images: [siteConfig.ogImage],
      creator: siteConfig.twitter,
    },
    appleWebApp: {
      capable: true,
      statusBarStyle: "black-translucent",
    },
    ...overrides,
  }
}

/**
 * Generate structured data (JSON-LD) for SEO
 */
export function generateJsonLd(type: string, data: Record<string, any>) {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  }

  return `<script type="application/ld+json">${JSON.stringify(baseSchema)}</script>`
}

/**
 * Property schema for SEO
 */
export function generatePropertySchema(property: {
  id: string
  title: string
  description: string
  location: string
  price: number
  rating: number
  reviews: number
  image: string
  bedrooms: number
  bathrooms: number
}) {
  return generateJsonLd("ApartmentComplex", {
    name: property.title,
    description: property.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: property.location,
      addressLocality: "Uganda",
      addressCountry: "UG",
    },
    priceRange: `$${property.price}`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: property.rating,
      reviewCount: property.reviews,
    },
    image: property.image,
    numberOfRooms: property.bedrooms,
    floorSize: {
      "@type": "QuantitativeValue",
      unitCode: "MTK",
    },
    amenityFeature: [
      { "@type": "Text", name: "WiFi" },
      { "@type": "Text", name: "Kitchen" },
      { "@type": "Text", name: "Parking" },
    ],
  })
}

/**
 * Organization schema for SEO
 */
export function generateOrganizationSchema() {
  return generateJsonLd("Organization", {
    name: "Roomy",
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/roomy-logo.png`,
    description: siteConfig.description,
    sameAs: [
      "https://twitter.com/roomy_ug",
      "https://facebook.com/roomy",
      "https://instagram.com/roomy",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "support@roomy.ug",
      availableLanguage: ["en", "sw"],
    },
  })
}

/**
 * Generate breadcrumb schema
 */
export function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
  const itemListElement = breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: crumb.name,
    item: `${siteConfig.url}${crumb.url}`,
  }))

  return generateJsonLd("BreadcrumbList", {
    itemListElement,
  })
}

/**
 * Format URL for SEO
 */
export function formatSeoUrl(path: string): string {
  return `${siteConfig.url}${path}`
}

/**
 * Get canonical URL
 */
export function getCanonicalUrl(path: string): string {
  return formatSeoUrl(path)
}

/**
 * Generate sitemap entry
 */
export function generateSitemapEntry(path: string, changefreq: string = "weekly", priority: number = 0.8) {
  return {
    url: formatSeoUrl(path),
    lastmod: new Date().toISOString(),
    changefreq,
    priority,
  }
}

/**
 * Slugify text for URLs
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim()
}

/**
 * Extract reading time for articles
 */
export function getReadingTime(text: string): number {
  const wordsPerMinute = 200
  const words = text.trim().split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}
