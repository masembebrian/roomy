import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/lib/auth"
import { LanguageProvider } from "@/lib/i18n/context"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Roomy - Find Your Perfect Stay in Uganda",
    template: "%s | Roomy",
  },
  description:
    "Discover and book amazing properties across Uganda. From modern apartments in Kampala to lakeside villas in Entebbe. Verified hosts, secure booking, 24/7 support.",
  keywords: [
    "Uganda accommodation",
    "rent apartment Uganda",
    "Kampala apartments",
    "Entebbe hotels",
    "Jinja vacation rentals",
    "Uganda property rental",
    "short-term rental Uganda",
    "vacation homes Uganda",
  ],
  authors: [{ name: "Roomy" }],
  creator: "Roomy",
  publisher: "Roomy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://roomy.ug"),
  openGraph: {
    title: "Roomy - Find Your Perfect Stay in Uganda",
    description: "Discover and book amazing properties across Uganda",
    url: "/",
    siteName: "Roomy",
    images: [
      {
        url: "/images/roomy-logo.png",
        width: 1200,
        height: 630,
        alt: "Roomy - Uganda Property Rentals",
      },
    ],
    locale: "en_UG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roomy - Find Your Perfect Stay in Uganda",
    description: "Discover and book amazing properties across Uganda",
    images: ["/images/roomy-logo.png"],
  },
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
  verification: {
    google: "google-site-verification-code",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Roomy",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#7c3aed",
  colorScheme: "light dark",
  viewportFit: "cover",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#7c3aed" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <AuthProvider>
            <LanguageProvider>
              {children}
              <Toaster />
            </LanguageProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
