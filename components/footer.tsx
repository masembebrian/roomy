"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Globe,
  Heart,
  Shield,
  Award,
  Users,
  CheckCircle,
} from "lucide-react"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  const footerSections = [
    {
      title: "Explore",
      links: [
        { name: "Properties", href: "/explore" },
        { name: "Experiences", href: "/experiences" },
        { name: "Destinations", href: "/destinations" },
        { name: "Last Minute Deals", href: "/deals" },
        { name: "Gift Cards", href: "/gift-cards" },
      ],
    },
    {
      title: "Hosting",
      links: [
        { name: "Become a Host", href: "/become-host" },
        { name: "List Your Property", href: "/list-property" },
        { name: "Host Dashboard", href: "/host-dashboard" },
        { name: "Host Protection", href: "/host-protection" },
        { name: "Hosting Resources", href: "/hosting-resources" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "Safety Information", href: "/safety" },
        { name: "Cancellation Options", href: "/cancellation" },
        { name: "Report a Concern", href: "/report" },
        { name: "Contact Us", href: "/contact" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Newsroom", href: "/newsroom" },
        { name: "Careers", href: "/careers" },
        { name: "Investors", href: "/investors" },
        { name: "Letter from Founders", href: "/founders-letter" },
      ],
    },
    {
      title: "Community",
      links: [
        { name: "Disaster Relief", href: "/disaster-relief" },
        { name: "Afghan Refugees", href: "/afghan-refugees" },
        { name: "Anti-Discrimination", href: "/anti-discrimination" },
        { name: "Accessibility", href: "/accessibility" },
        { name: "Invite Friends", href: "/invite" },
      ],
    },
  ]

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/roomy.ug" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/roomy_ug" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/roomy.ug" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/roomy-ug" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com/@roomy-ug" },
  ]

  const trustIndicators = [
    { icon: Shield, text: "Secure Payments" },
    { icon: Award, text: "Verified Hosts" },
    { icon: Users, text: "24/7 Support" },
    { icon: Heart, text: "100K+ Happy Guests" },
  ]

  return (
    <footer className="bg-muted/30 border-t">
      {/* Newsletter Section */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with Roomy</h3>
            <p className="text-muted-foreground mb-6">
              Get the latest travel tips, exclusive deals, and new feature announcements delivered to your inbox.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
              <Button type="submit" disabled={isSubscribed}>
                {isSubscribed ? (
                  <>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Subscribed!
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4 mr-2" />
                    Subscribe
                  </>
                )}
              </Button>
            </form>
            {isSubscribed && (
              <p className="text-sm text-green-600 mt-2">Thank you for subscribing to our newsletter!</p>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image src="/images/roomy-logo.png" alt="Roomy" width={32} height={32} className="w-8 h-8" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Roomy
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Uganda's leading accommodation booking platform. Discover authentic stays and experiences across the Pearl
              of Africa.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Kampala, Uganda</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+256 700 123 456</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>hello@roomy.ug</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title} className="col-span-1">
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 pt-8 border-t">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="flex items-center space-x-2 text-sm">
                <indicator.icon className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">{indicator.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Social Links & App Downloads */}
        <div className="mt-8 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium">Follow us:</span>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="sr-only">{social.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium">Get the app:</span>
              <div className="flex space-x-2">
                <Link href="#" className="block">
                  <Image
                    src="/images/app-store-badge.png"
                    alt="Download on App Store"
                    width={120}
                    height={40}
                    className="h-10 w-auto"
                  />
                </Link>
                <Link href="#" className="block">
                  <Image
                    src="/images/google-play-badge.png"
                    alt="Get it on Google Play"
                    width={120}
                    height={40}
                    className="h-10 w-auto"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t bg-muted/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span>© 2024 Roomy Uganda. All rights reserved.</span>
              <Separator orientation="vertical" className="h-4" />
              <Link href="/privacy-policy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Separator orientation="vertical" className="h-4" />
              <Link href="/terms-of-service" className="hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Separator orientation="vertical" className="h-4" />
              <Link href="/sitemap" className="hover:text-foreground transition-colors">
                Sitemap
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Globe className="w-4 h-4" />
                <span>English (US)</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span>UGX</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Named export for compatibility
export { Footer }
