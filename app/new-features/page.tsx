"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import {
  Sparkles,
  Shield,
  Brain,
  Camera,
  MessageSquare,
  Calendar,
  CreditCard,
  Users,
  Bell,
  Search,
  Filter,
  Globe,
  TrendingUp,
  Award,
  CheckCircle,
  Clock,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function NewFeaturesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const featureCategories = [
    { id: "all", name: "All Features", count: 24 },
    { id: "booking", name: "Booking & Payments", count: 6 },
    { id: "discovery", name: "Discovery & Search", count: 5 },
    { id: "host", name: "Host Tools", count: 7 },
    { id: "safety", name: "Safety & Trust", count: 4 },
    { id: "mobile", name: "Mobile Experience", count: 2 },
  ]

  const latestFeatures = [
    {
      id: 1,
      title: "AI-Powered Recommendations",
      description:
        "Get personalized property suggestions based on your preferences, travel history, and behavior patterns.",
      category: "discovery",
      status: "new",
      releaseDate: "2024-01-15",
      image: "/images/feature-ai-recommendations.png",
      icon: Brain,
      benefits: [
        "Personalized property matches",
        "Smart price predictions",
        "Optimal booking timing suggestions",
        "Curated experience recommendations",
      ],
      howItWorks:
        "Our AI analyzes your search patterns, booking history, and preferences to suggest properties you'll love. The more you use Roomy, the smarter our recommendations become.",
      availability: "Available to all users",
    },
    {
      id: 2,
      title: "Instant Photo Verification",
      description:
        "Hosts can now verify their property photos instantly using our advanced image recognition technology.",
      category: "host",
      status: "new",
      releaseDate: "2024-01-10",
      image: "/images/feature-photo-verification.png",
      icon: Camera,
      benefits: ["Faster listing approval", "Increased guest trust", "Reduced photo disputes", "Higher booking rates"],
      howItWorks:
        "Upload your property photos and our AI instantly verifies they match your listing details, ensuring accuracy and building guest confidence.",
      availability: "Available to all hosts",
    },
    {
      id: 3,
      title: "Smart Messaging Assistant",
      description: "AI-powered messaging suggestions help hosts respond to guests quickly and professionally.",
      category: "host",
      status: "new",
      releaseDate: "2024-01-05",
      image: "/images/feature-smart-messaging.png",
      icon: MessageSquare,
      benefits: [
        "Faster response times",
        "Professional communication",
        "Multi-language support",
        "Automated common responses",
      ],
      howItWorks:
        "Our AI suggests contextually appropriate responses to guest messages, helping you maintain quick response times and professional communication.",
      availability: "Available to Superhost+ members",
    },
    {
      id: 4,
      title: "Flexible Payment Options",
      description: "Pay for your stay in installments with our new flexible payment plans and local payment methods.",
      category: "booking",
      status: "updated",
      releaseDate: "2023-12-20",
      image: "/images/feature-flexible-payments.png",
      icon: CreditCard,
      benefits: ["Pay in installments", "Local payment methods", "Currency conversion", "Payment protection"],
      howItWorks:
        "Choose from various payment options including installment plans, mobile money, and local bank transfers to make booking more accessible.",
      availability: "Available for bookings over UGX 200,000",
    },
    {
      id: 5,
      title: "Enhanced Safety Center",
      description:
        "Comprehensive safety features including emergency contacts, check-in verification, and 24/7 support.",
      category: "safety",
      status: "updated",
      releaseDate: "2023-12-15",
      image: "/images/feature-safety-center.png",
      icon: Shield,
      benefits: [
        "Emergency contact system",
        "Real-time check-in tracking",
        "24/7 safety support",
        "Incident reporting tools",
      ],
      howItWorks:
        "Share your trip details with trusted contacts, verify safe check-ins, and access emergency support whenever needed.",
      availability: "Available to all users",
    },
    {
      id: 6,
      title: "Advanced Search Filters",
      description: "Find exactly what you're looking for with our new advanced filtering system and map-based search.",
      category: "discovery",
      status: "updated",
      releaseDate: "2023-12-10",
      image: "/images/feature-advanced-search.png",
      icon: Filter,
      benefits: [
        "Precise property matching",
        "Map-based exploration",
        "Custom filter combinations",
        "Saved search preferences",
      ],
      howItWorks:
        "Use detailed filters including amenities, property type, price range, and location to find your perfect stay quickly.",
      availability: "Available to all users",
    },
  ]

  const upcomingFeatures = [
    {
      title: "Virtual Property Tours",
      description: "Explore properties in 360° virtual reality before booking",
      eta: "Q2 2024",
      icon: Globe,
      category: "discovery",
    },
    {
      title: "Group Booking Management",
      description: "Coordinate bookings for large groups with split payments",
      eta: "Q2 2024",
      icon: Users,
      category: "booking",
    },
    {
      title: "Carbon Footprint Tracking",
      description: "Track and offset the environmental impact of your travels",
      eta: "Q3 2024",
      icon: TrendingUp,
      category: "discovery",
    },
    {
      title: "Host Performance Analytics",
      description: "Detailed insights and recommendations for hosts",
      eta: "Q3 2024",
      icon: Award,
      category: "host",
    },
  ]

  const filteredFeatures = latestFeatures.filter((feature) => {
    const matchesCategory = selectedCategory === "all" || feature.category === selectedCategory
    const matchesSearch =
      feature.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      feature.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "updated":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 px-4 py-2">
                <Sparkles className="w-4 h-4 mr-2" />
                What's New at Roomy
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Discover Our Latest Features
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're constantly innovating to make your travel experience better. Explore our newest features and
              upcoming improvements designed with you in mind.
            </p>
            <div className="flex justify-center">
              <Image
                src="/images/features-hero.png"
                alt="New Features"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Categories and Search */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {featureCategories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className="text-sm"
                >
                  {category.name}
                  <Badge variant="secondary" className="ml-2 text-xs">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search features..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Latest Features & Updates</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover the newest additions to Roomy that enhance your booking and hosting experience
            </p>
          </div>

          <div className="grid gap-8">
            {filteredFeatures.map((feature) => (
              <Card key={feature.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <Image
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      width={400}
                      height={300}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <CardHeader className="p-0 mb-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <feature.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-xl">{feature.title}</CardTitle>
                            <div className="flex items-center space-x-2 mt-1">
                              <Badge className={getStatusColor(feature.status)}>
                                {feature.status === "new" ? "New" : "Updated"}
                              </Badge>
                              <span className="text-sm text-muted-foreground flex items-center">
                                <Calendar className="w-3 h-3 mr-1" />
                                {new Date(feature.releaseDate).toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="p-0">
                      <p className="text-muted-foreground mb-4">{feature.description}</p>

                      <Tabs defaultValue="benefits" className="w-full">
                        <TabsList className="grid w-full grid-cols-3">
                          <TabsTrigger value="benefits">Benefits</TabsTrigger>
                          <TabsTrigger value="how-it-works">How It Works</TabsTrigger>
                          <TabsTrigger value="availability">Availability</TabsTrigger>
                        </TabsList>

                        <TabsContent value="benefits" className="mt-4">
                          <ul className="space-y-2">
                            {feature.benefits.map((benefit, index) => (
                              <li key={index} className="flex items-center text-sm">
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </TabsContent>

                        <TabsContent value="how-it-works" className="mt-4">
                          <p className="text-sm text-muted-foreground">{feature.howItWorks}</p>
                        </TabsContent>

                        <TabsContent value="availability" className="mt-4">
                          <div className="flex items-center text-sm">
                            <Clock className="w-4 h-4 text-blue-500 mr-2" />
                            {feature.availability}
                          </div>
                        </TabsContent>
                      </Tabs>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredFeatures.length === 0 && (
            <div className="text-center py-12">
              <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No features found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Upcoming Features */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Coming Soon</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get a sneak peek at the exciting features we're working on for the future
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingFeatures.map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{feature.description}</p>
                    <Badge variant="outline" className="text-xs">
                      Expected {feature.eta}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Request */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Have a Feature Idea?</h2>
            <p className="text-muted-foreground mb-8">
              We love hearing from our community! Share your ideas and help us build the features you want to see.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Submit Feature Request
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/community-forum">
                  <Users className="w-5 h-5 mr-2" />
                  Join Community Discussion
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Be the first to know about new features, updates, and improvements to Roomy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              placeholder="Enter your email"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
            />
            <Button variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
              <Bell className="w-4 h-4 mr-2" />
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
