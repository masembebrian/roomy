import type { Metadata } from "next"

interface SEOProps {
  title: string
  description: string
  image?: string
  url?: string
  type?: "website" | "article" | "product"
  keywords?: string[]
}

export function generateMetadata({
  title,
  description,
  image = "/images/roomy-logo.png",
  url = "/",
  type = "website",
  keywords = [],
}: SEOProps): Metadata {
  const siteName = "Roomy"
  const fullTitle = `${title} | ${siteName}`
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://roomy.ug"
  const fullUrl = `${baseUrl}${url}`
  const fullImage = image.startsWith("http") ? image : `${baseUrl}${image}`

  return {
    title: fullTitle,
    description,
    keywords,
    openGraph: {
      title: fullTitle,
      description,
      url: fullUrl,
      siteName,
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_UG",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [fullImage],
    },
    alternates: {
      canonical: fullUrl,
    },
  }
}
