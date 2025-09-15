import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Globe,
  Heart,
  Shield,
  Award,
  Users,
} from "lucide-react"

const footerLinks = {
  support: [
    { name: "Help Center", href: "/help" },
    { name: "Safety Information", href: "/safety" },
    { name: "Cancellation Options", href: "/cancellation" },
    { name: "Our COVID-19 Response", href: "/covid-response" },
    { name: "Supporting People with Disabilities", href: "/accessibility" },
    { name: "Report a Concern", href: "/report" },
  ],
  community: [
    { name: "Roomy.org: Disaster Relief Housing", href: "/disaster-relief" },
    { name: "Support Afghan Refugees", href: "/afghan-refugees" },
    { name: "Combating Discrimination", href: "/anti-discrimination" },
    { name: "Invite Friends", href: "/invite" },
    { name: "Gift Cards", href: "/gift-cards" },
  ],
  hosting: [
    { name: "Try Hosting", href: "/become-host" },
    { name: "Roomy Cover: Protection for Hosts", href: "/host-protection" },
    { name: "Explore Hosting Resources", href: "/hosting-resources" },
    { name: "Visit our Community Forum", href: "/community-forum" },
    { name: "How to Host Responsibly", href: "/responsible-hosting" },
  ],
  about: [
    { name: "Newsroom", href: "/newsroom" },
    { name: "Learn about New Features", href: "/new-features" },
    { name: "Letter from our Founders", href: "/founders-letter" },
    { name: "Careers", href: "/careers" },
    { name: "Investors", href: "/investors" },
  ],
}

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://facebook.com/roomy" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/roomy" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/roomy" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/roomy" },
]

const features = [
  {
    icon: Shield,
    title: "Secure Payments",
    description: "Your payment information is always protected",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "All properties are verified and quality checked",
  },
  {
    icon: Users,
    title: "24/7 Support",
    description: "Get help whenever you need it, day or night",
  },
  {
    icon: Heart,
    title: "Trusted Community",
    description: "Join millions of travelers worldwide",
  },
]

function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      {/* Newsletter Section */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated with Roomy</h2>
            <p className="text-lg mb-8 opacity-90">
              Get the latest travel deals, host tips, and destination guides delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email address" className="bg-white text-gray-900 border-0" />
              <Button variant="secondary" className="whitespace-nowrap">
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>
            <p className="text-sm mt-4 opacity-75">
              By subscribing, you agree to receive marketing emails from Roomy. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <feature.icon className="w-8 h-8 mx-auto text-primary mb-4" />
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl font-bold text-primary mb-4 block">
              Roomy
            </Link>
            <p className="text-muted-foreground mb-6">
              Discover amazing places to stay across Uganda. From modern apartments to traditional homes, find your
              perfect accommodation with Roomy.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <MapPin className="w-4 h-4 mr-2 text-primary" />
                <span>Kampala, Uganda</span>
              </div>
              <div className="flex items-center text-sm">
                <Phone className="w-4 h-4 mr-2 text-primary" />
                <span>+256 700 123 456</span>
              </div>
              <div className="flex items-center text-sm">
                <Mail className="w-4 h-4 mr-2 text-primary" />
                <span>hello@roomy.ug</span>
              </div>
              <div className="flex items-center text-sm">
                <Globe className="w-4 h-4 mr-2 text-primary" />
                <span>www.roomy.ug</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-5 h-5" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <h3 className="font-semibold mb-4">Support</h3>
                <ul className="space-y-3">
                  {footerLinks.support.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Community</h3>
                <ul className="space-y-3">
                  {footerLinks.community.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Hosting</h3>
                <ul className="space-y-3">
                  {footerLinks.hosting.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4">About</h3>
                <ul className="space-y-3">
                  {footerLinks.about.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-muted-foreground">
            <span>© 2025 Roomy, Inc. All rights reserved.</span>
            <div className="flex items-center space-x-4">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <span>•</span>
              <Link href="/cookies" className="hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4" />
              <span>English (US)</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>UGX</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
