"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl font-bold text-primary mb-4 block">
              Roomy
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              Discover amazing accommodations and unique experiences across Uganda. Your home away from home awaits.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/help" className="text-muted-foreground hover:text-primary transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/safety" className="text-muted-foreground hover:text-primary transition-colors">
                  Safety Information
                </Link>
              </li>
              <li>
                <Link href="/cancellation" className="text-muted-foreground hover:text-primary transition-colors">
                  Cancellation Options
                </Link>
              </li>
              <li>
                <Link href="/covid-response" className="text-muted-foreground hover:text-primary transition-colors">
                  Our COVID-19 Response
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className="text-muted-foreground hover:text-primary transition-colors">
                  Supporting People with Disabilities
                </Link>
              </li>
              <li>
                <Link href="/report" className="text-muted-foreground hover:text-primary transition-colors">
                  Report a Concern
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/disaster-relief" className="text-muted-foreground hover:text-primary transition-colors">
                  Roomy.org: Disaster Relief Housing
                </Link>
              </li>
              <li>
                <Link href="/afghan-refugees" className="text-muted-foreground hover:text-primary transition-colors">
                  Supporting Afghan Refugees
                </Link>
              </li>
              <li>
                <Link
                  href="/anti-discrimination"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Combating Discrimination
                </Link>
              </li>
              <li>
                <Link href="/invite" className="text-muted-foreground hover:text-primary transition-colors">
                  Invite Friends
                </Link>
              </li>
              <li>
                <Link href="/gift-cards" className="text-muted-foreground hover:text-primary transition-colors">
                  Gift Cards
                </Link>
              </li>
            </ul>
          </div>

          {/* Hosting */}
          <div>
            <h3 className="font-semibold mb-4">Hosting</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/become-host" className="text-muted-foreground hover:text-primary transition-colors">
                  Become a Host
                </Link>
              </li>
              <li>
                <Link href="/host-protection" className="text-muted-foreground hover:text-primary transition-colors">
                  Host Protection
                </Link>
              </li>
              <li>
                <Link href="/hosting-resources" className="text-muted-foreground hover:text-primary transition-colors">
                  Hosting Resources
                </Link>
              </li>
              <li>
                <Link href="/community-forum" className="text-muted-foreground hover:text-primary transition-colors">
                  Community Forum
                </Link>
              </li>
              <li>
                <Link
                  href="/responsible-hosting"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Responsible Hosting
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Newsletter */}
        <div className="mb-8">
          <h3 className="font-semibold mb-4">Stay Updated</h3>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md">
            <Input placeholder="Enter your email" type="email" />
            <Button>Subscribe</Button>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="hover:text-primary transition-colors">
              Sitemap
            </Link>
            <Link href="/newsroom" className="hover:text-primary transition-colors">
              Newsroom
            </Link>
            <Link href="/careers" className="hover:text-primary transition-colors">
              Careers
            </Link>
            <Link href="/investors" className="hover:text-primary transition-colors">
              Investors
            </Link>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>Kampala, Uganda</span>
            </div>
            <div className="flex items-center gap-1">
              <Phone className="h-4 w-4" />
              <span>+256 700 123 456</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail className="h-4 w-4" />
              <span>hello@roomy.ug</span>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Roomy, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
export { Footer }
