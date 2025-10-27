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
  title: "Roomy - Find Your Perfect Stay in Uganda",
  description:
    "Discover unique apartments, homes, and experiences across Uganda. Book verified properties with local hosts.",
  keywords: "Uganda accommodation, apartments Uganda, vacation rentals, Kampala stays",
  authors: [{ name: "Roomy" }],
  creator: "Roomy",
  publisher: "Roomy",
  openGraph: {
    type: "website",
    locale: "en_UG",
    url: "https://roomy.ug",
    title: "Roomy - Find Your Perfect Stay in Uganda",
    description: "Discover unique apartments, homes, and experiences across Uganda",
    siteName: "Roomy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roomy - Find Your Perfect Stay in Uganda",
    description: "Discover unique apartments, homes, and experiences across Uganda",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
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
