"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Footer from "@/components/footer"
import {
  Search,
  MessageCircle,
  Phone,
  Mail,
  Clock,
  ChevronRight,
  BookOpen,
  CreditCard,
  Home,
  Shield,
  Users,
  Calendar,
  HelpCircle,
} from "lucide-react"

const faqCategories = [
  {
    id: "booking",
    title: "Booking & Reservations",
    icon: Calendar,
    questions: [
      {
        question: "How do I make a reservation?",
        answer:
          'To make a reservation, search for your destination, select your dates, choose a property, and click "Reserve". You\'ll need to provide payment information to complete your booking.',
        category: "Booking",
      },
      {
        question: "Can I modify my reservation?",
        answer:
          'Yes, you can modify your reservation depending on the host\'s cancellation policy. Go to "Your Trips" and select "Change reservation" to modify dates or guest count.',
        category: "Booking",
      },
      {
        question: "What happens after I book?",
        answer:
          "After booking, you'll receive a confirmation email with your host's contact information and check-in instructions. Your host may also send you a welcome message.",
        category: "Booking",
      },
      {
        question: "How do I contact my host?",
        answer:
          'You can message your host through the Roomy platform. Go to "Your Trips" and click "Contact Host" to send a message.',
        category: "Booking",
      },
    ],
  },
  {
    id: "payments",
    title: "Payments & Pricing",
    icon: CreditCard,
    questions: [
      {
        question: "When am I charged for my reservation?",
        answer:
          "For most reservations, you're charged immediately upon booking. For longer stays (28+ nights), you may be charged in installments.",
        category: "Payments",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept major credit cards (Visa, Mastercard, American Express), debit cards, PayPal, and mobile money (MTN Mobile Money, Airtel Money) for Uganda.",
        category: "Payments",
      },
      {
        question: "Are there additional fees?",
        answer:
          "Yes, there may be a service fee, cleaning fee, and local taxes. All fees are shown before you complete your booking.",
        category: "Payments",
      },
      {
        question: "How do refunds work?",
        answer:
          "Refunds depend on the host's cancellation policy. You can view the policy on the listing page before booking.",
        category: "Payments",
      },
    ],
  },
  {
    id: "hosting",
    title: "Hosting",
    icon: Home,
    questions: [
      {
        question: "How do I become a host?",
        answer:
          'Click "Become a Host" and follow the steps to list your space. You\'ll add photos, write a description, set your price, and publish your listing.',
        category: "Hosting",
      },
      {
        question: "How much can I earn hosting?",
        answer:
          "Earnings vary by location, property type, and demand. Use our earnings calculator to estimate your potential income.",
        category: "Hosting",
      },
      {
        question: "What are my responsibilities as a host?",
        answer:
          "Hosts should provide accurate listings, maintain clean spaces, communicate promptly with guests, and follow local laws and regulations.",
        category: "Hosting",
      },
      {
        question: "How do I get paid?",
        answer:
          "Payments are released 24 hours after guest check-in. You can choose from various payout methods including bank transfer and mobile money.",
        category: "Hosting",
      },
    ],
  },
  {
    id: "safety",
    title: "Safety & Security",
    icon: Shield,
    questions: [
      {
        question: "How does Roomy verify users?",
        answer:
          "We verify users through government ID, phone number, and email address. We also use secure payment processing and have a review system.",
        category: "Safety",
      },
      {
        question: "What if something goes wrong during my stay?",
        answer:
          "Contact us immediately through our 24/7 support. We have policies in place to help resolve issues and ensure your safety.",
        category: "Safety",
      },
      {
        question: "Is my personal information secure?",
        answer:
          "Yes, we use industry-standard encryption and security measures to protect your personal and payment information.",
        category: "Safety",
      },
      {
        question: "What is Host Guarantee?",
        answer:
          "Host Guarantee provides protection for hosts against property damage caused by guests, up to UGX 50,000,000 per incident.",
        category: "Safety",
      },
    ],
  },
]

const popularArticles = [
  {
    title: "Getting started with Roomy",
    description: "Learn the basics of booking and hosting",
    readTime: "5 min read",
    category: "Getting Started",
    href: "/help/getting-started",
  },
  {
    title: "Understanding cancellation policies",
    description: "Different types of cancellation policies explained",
    readTime: "3 min read",
    category: "Policies",
    href: "/help/cancellation-policies",
  },
  {
    title: "How to be a great host",
    description: "Tips for providing excellent guest experiences",
    readTime: "7 min read",
    category: "Hosting",
    href: "/help/great-host",
  },
  {
    title: "Resolving issues during your stay",
    description: "What to do when problems arise",
    readTime: "4 min read",
    category: "Support",
    href: "/help/resolving-issues",
  },
  {
    title: "Payment and pricing guide",
    description: "Understanding fees, taxes, and payment methods",
    readTime: "6 min read",
    category: "Payments",
    href: "/help/payment-guide",
  },
  {
    title: "Safety tips for travelers",
    description: "How to stay safe while using Roomy",
    readTime: "5 min read",
    category: "Safety",
    href: "/help/safety-tips",
  },
]

const contactOptions = [
  {
    title: "Live Chat",
    description: "Get instant help from our support team",
    icon: MessageCircle,
    availability: "Available 24/7",
    action: "Start Chat",
    primary: true,
  },
  {
    title: "Phone Support",
    description: "Speak directly with a support agent",
    icon: Phone,
    availability: "Mon-Sun, 6AM-12AM EAT",
    action: "Call +256 700 123 456",
    primary: false,
  },
  {
    title: "Email Support",
    description: "Send us a detailed message",
    icon: Mail,
    availability: "Response within 24 hours",
    action: "Send Email",
    primary: false,
  },
]

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("booking")

  const filteredQuestions =
    faqCategories
      .find((cat) => cat.id === activeTab)
      ?.questions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchQuery.toLowerCase()),
      ) || []

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">How can we help you?</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Find answers to common questions or get in touch with our support team
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Search for help articles, FAQs, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 text-lg border-2 border-gray-200 focus:border-primary"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Contact Options */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Get Support</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {contactOptions.map((option) => (
                  <Card
                    key={option.title}
                    className={`cursor-pointer transition-all hover:shadow-md ${option.primary ? "ring-2 ring-primary" : ""}`}
                  >
                    <CardContent className="p-6 text-center">
                      <option.icon
                        className={`w-8 h-8 mx-auto mb-4 ${option.primary ? "text-primary" : "text-muted-foreground"}`}
                      />
                      <h3 className="font-semibold mb-2">{option.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{option.description}</p>
                      <div className="flex items-center justify-center text-xs text-muted-foreground mb-4">
                        <Clock className="w-3 h-3 mr-1" />
                        {option.availability}
                      </div>
                      <Button variant={option.primary ? "default" : "outline"} size="sm" className="w-full">
                        {option.action}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>

              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
                  {faqCategories.map((category) => (
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      className="flex items-center gap-2 text-xs lg:text-sm"
                    >
                      <category.icon className="w-4 h-4" />
                      <span className="hidden sm:inline">{category.title}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>

                {faqCategories.map((category) => (
                  <TabsContent key={category.id} value={category.id}>
                    <div className="space-y-4">
                      {filteredQuestions.length > 0 ? (
                        filteredQuestions.map((faq, index) => (
                          <Card key={index} className="hover:shadow-sm transition-shadow">
                            <CardHeader className="pb-3">
                              <div className="flex items-start justify-between">
                                <CardTitle className="text-lg font-medium">{faq.question}</CardTitle>
                                <Badge variant="secondary" className="ml-2 text-xs">
                                  {faq.category}
                                </Badge>
                              </div>
                            </CardHeader>
                            <CardContent className="pt-0">
                              <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                            </CardContent>
                          </Card>
                        ))
                      ) : (
                        <Card>
                          <CardContent className="p-8 text-center">
                            <HelpCircle className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                            <h3 className="font-semibold mb-2">No results found</h3>
                            <p className="text-muted-foreground">
                              Try adjusting your search or browse other categories
                            </p>
                          </CardContent>
                        </Card>
                      )}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Popular Articles */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Popular Articles
                </CardTitle>
                <CardDescription>Most helpful guides and resources</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-0">
                  {popularArticles.map((article, index) => (
                    <div key={index}>
                      <div className="p-4 hover:bg-gray-50 transition-colors cursor-pointer">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-medium text-sm leading-tight">{article.title}</h4>
                          <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0 ml-2" />
                        </div>
                        <p className="text-xs text-muted-foreground mb-2">{article.description}</p>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="text-xs">
                            {article.category}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{article.readTime}</span>
                        </div>
                      </div>
                      {index < popularArticles.length - 1 && <Separator />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <a href="/safety">
                    <Shield className="w-4 h-4 mr-2" />
                    Safety Information
                  </a>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <a href="/cancellation">
                    <Calendar className="w-4 h-4 mr-2" />
                    Cancellation Policies
                  </a>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <a href="/become-host">
                    <Home className="w-4 h-4 mr-2" />
                    Become a Host
                  </a>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <a href="/accessibility">
                    <Users className="w-4 h-4 mr-2" />
                    Accessibility
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
