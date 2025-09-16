import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, Search, Heart, User, Building, MapPin, Shield, Users, FileText, Globe } from "lucide-react"

const sitemapSections = [
  {
    title: "Main Pages",
    icon: Home,
    links: [
      { name: "Home", url: "/", description: "Main landing page with search and featured listings" },
      { name: "Explore", url: "/explore", description: "Browse all available accommodations" },
      { name: "Experiences", url: "/experiences", description: "Discover unique local experiences" },
      { name: "Bookings", url: "/bookings", description: "Manage your current and past bookings" },
      { name: "Favorites", url: "/favorites", description: "Your saved properties and experiences" },
    ],
  },
  {
    title: "User Account",
    icon: User,
    links: [
      { name: "Sign In", url: "/auth/signin", description: "Login to your account" },
      { name: "Sign Up", url: "/auth/signup", description: "Create a new account" },
      { name: "Profile", url: "/profile", description: "Manage your profile and preferences" },
      { name: "Notifications", url: "/notifications", description: "View your notifications and alerts" },
      { name: "Following", url: "/following", description: "Hosts and properties you follow" },
    ],
  },
  {
    title: "Hosting",
    icon: Building,
    links: [
      { name: "List Your Property", url: "/list-property", description: "Start hosting on Roomy" },
      { name: "Host Dashboard", url: "/host-dashboard", description: "Manage your listings and bookings" },
      { name: "Become a Host", url: "/become-host", description: "Learn about hosting opportunities" },
      { name: "Host Protection", url: "/host-protection", description: "Insurance and protection for hosts" },
      { name: "Hosting Resources", url: "/hosting-resources", description: "Guides and tools for hosts" },
      { name: "Responsible Hosting", url: "/responsible-hosting", description: "Sustainable hosting practices" },
    ],
  },
  {
    title: "Community",
    icon: Users,
    links: [
      { name: "Community Forum", url: "/community-forum", description: "Connect with other hosts and guests" },
      { name: "Invite Friends", url: "/invite", description: "Refer friends and earn rewards" },
      { name: "Gift Cards", url: "/gift-cards", description: "Purchase and send gift cards" },
    ],
  },
  {
    title: "Support & Safety",
    icon: Shield,
    links: [
      { name: "Help Center", url: "/help", description: "Find answers to common questions" },
      { name: "Safety Information", url: "/safety", description: "Safety guidelines and resources" },
      { name: "Cancellation Options", url: "/cancellation", description: "Understand cancellation policies" },
      { name: "COVID-19 Response", url: "/covid-response", description: "Health and safety measures" },
      { name: "Accessibility", url: "/accessibility", description: "Accessibility features and support" },
      { name: "Report a Concern", url: "/report", description: "Report safety or policy violations" },
    ],
  },
  {
    title: "Social Impact",
    icon: Heart,
    links: [
      { name: "Disaster Relief Housing", url: "/disaster-relief", description: "Emergency housing support program" },
      { name: "Support Afghan Refugees", url: "/afghan-refugees", description: "Refugee assistance program" },
      {
        name: "Combating Discrimination",
        url: "/anti-discrimination",
        description: "Anti-discrimination policies and support",
      },
    ],
  },
  {
    title: "Company",
    icon: Globe,
    links: [
      { name: "About Us", url: "/about", description: "Learn about Roomy's mission and story" },
      { name: "Newsroom", url: "/newsroom", description: "Latest news and press releases" },
      { name: "Careers", url: "/careers", description: "Join our team and open positions" },
      { name: "Investors", url: "/investors", description: "Investor relations and financial information" },
    ],
  },
  {
    title: "Legal & Policies",
    icon: FileText,
    links: [
      { name: "Terms of Service", url: "/terms-of-service", description: "Terms and conditions for using Roomy" },
      { name: "Privacy Policy", url: "/privacy-policy", description: "How we collect and use your data" },
      { name: "Sitemap", url: "/sitemap", description: "Complete site navigation (current page)" },
    ],
  },
]

const quickStats = [
  { label: "Total Pages", value: "50+", description: "Comprehensive platform coverage" },
  { label: "Main Sections", value: "8", description: "Organized content areas" },
  { label: "User Features", value: "25+", description: "Tools and functionalities" },
  { label: "Support Resources", value: "15+", description: "Help and safety pages" },
]

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 p-4 rounded-full">
              <MapPin className="w-16 h-16 text-green-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sitemap</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Navigate through all pages and features of the Roomy platform. Find exactly what you're looking for with
            our comprehensive site directory.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {quickStats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="font-semibold mb-1">{stat.label}</div>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sitemap Sections */}
        <div className="space-y-12">
          {sitemapSections.map((section, sectionIndex) => (
            <Card key={sectionIndex}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <section.icon className="w-6 h-6 text-primary" />
                  </div>
                  {section.title}
                </CardTitle>
                <CardDescription>
                  {section.links.length} pages in this section
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {section.links.map((link, linkIndex) => (
                    <div key={linkIndex} className="group">
                      <Button
                        variant="ghost"
                        className="w-full h-auto p-4 justify-start text-left hover:bg-primary/5 transition-colors"
                        asChild
                      >
                        <a href={link.url}>
                          <div className="space-y-2">
                            <div className="font-semibold text-primary group-hover:text-primary/80">
                              {link.name}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {link.description}
                            </div>
                            <div className="text-xs text-muted-foreground font-mono">
                              {link.url}
                            </div>
                          </div>
                        </a>
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Search Suggestion */}
        <Card className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
          <CardContent className="text-center py-12">
            <Search\
