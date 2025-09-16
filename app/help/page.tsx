"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Search,
  MessageCircle,
  Phone,
  Mail,
  Video,
  Star,
  Eye,
  ThumbsUp,
  Clock,
  AlertTriangle,
  BookOpen,
  Users,
  CreditCard,
  Home,
  Shield,
  Settings,
} from "lucide-react"

const faqCategories = [
  {
    id: "booking",
    title: "Booking & Reservations",
    icon: BookOpen,
    questions: [
      {
        question: "How do I make a booking?",
        answer:
          "To make a booking, search for your destination, select your dates and number of guests, browse available properties, and click 'Book Now' on your chosen property. You'll need to create an account and provide payment information to complete your reservation.",
        helpful: 245,
        views: 1200,
      },
      {
        question: "Can I modify or cancel my booking?",
        answer:
          "Yes, you can modify or cancel your booking depending on the property's cancellation policy. Go to 'My Bookings' in your account, select the booking you want to change, and follow the prompts. Cancellation fees may apply based on timing and policy.",
        helpful: 189,
        views: 890,
      },
      {
        question: "What happens if my booking is declined?",
        answer:
          "If your booking is declined, you won't be charged and you'll receive a notification explaining the reason. You can search for alternative properties or contact the host directly to discuss availability.",
        helpful: 156,
        views: 670,
      },
      {
        question: "How do I know my booking is confirmed?",
        answer:
          "You'll receive a confirmation email immediately after booking, and another email once the host accepts your request (for non-instant book properties). You can also check your booking status in the 'My Bookings' section of your account.",
        helpful: 203,
        views: 980,
      },
    ],
  },
  {
    id: "payments",
    title: "Payments & Pricing",
    icon: CreditCard,
    questions: [
      {
        question: "When am I charged for my booking?",
        answer:
          "For instant book properties, you're charged immediately. For request-to-book properties, you're charged only after the host accepts your request. Payment is processed securely through our platform.",
        helpful: 298,
        views: 1450,
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept major credit cards (Visa, Mastercard, American Express), debit cards, PayPal, and mobile money (MTN Mobile Money, Airtel Money) for Uganda-based transactions.",
        helpful: 267,
        views: 1100,
      },
      {
        question: "Are there additional fees?",
        answer:
          "Yes, there may be service fees, cleaning fees, and taxes depending on the property. All fees are clearly displayed before you complete your booking, so there are no surprises.",
        helpful: 178,
        views: 820,
      },
      {
        question: "How do refunds work?",
        answer:
          "Refunds depend on the property's cancellation policy and when you cancel. Refunds are typically processed within 5-10 business days to your original payment method.",
        helpful: 234,
        views: 1050,
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
          "Click 'Become a Host' on our website, create your listing with photos and descriptions, set your pricing and availability, and submit for review. Our team will verify your listing before it goes live.",
        helpful: 312,
        views: 1600,
      },
      {
        question: "How much can I earn as a host?",
        answer:
          "Earnings vary based on location, property type, amenities, and demand. Use our earnings calculator on the 'Become a Host' page to get an estimate for your area.",
        helpful: 289,
        views: 1350,
      },
      {
        question: "What are my responsibilities as a host?",
        answer:
          "As a host, you're responsible for maintaining your property, communicating with guests, ensuring safety standards, and following local regulations. We provide guidelines and support to help you succeed.",
        helpful: 201,
        views: 950,
      },
      {
        question: "How do I handle difficult guests?",
        answer:
          "Contact our support team immediately if you encounter issues with guests. We have protocols in place to mediate disputes and can take action against guests who violate our community standards.",
        helpful: 167,
        views: 780,
      },
    ],
  },
  {
    id: "safety",
    title: "Safety & Security",
    icon: Shield,
    questions: [
      {
        question: "How do you verify hosts and guests?",
        answer:
          "We verify users through ID verification, phone number confirmation, and email verification. Hosts undergo additional property verification, and we have review systems to build trust in our community.",
        helpful: 345,
        views: 1800,
      },
      {
        question: "What if I don't feel safe during my stay?",
        answer:
          "Your safety is our priority. Contact our 24/7 safety hotline immediately if you feel unsafe. We can help relocate you to alternative accommodation and will investigate any safety concerns.",
        helpful: 278,
        views: 1200,
      },
      {
        question: "How are payments protected?",
        answer:
          "All payments are processed securely through encrypted channels. We hold payments until 24 hours after check-in to ensure everything goes smoothly. We also offer payment protection for eligible bookings.",
        helpful: 256,
        views: 1100,
      },
      {
        question: "What is your privacy policy?",
        answer:
          "We protect your personal information and only share necessary details with hosts for your booking. Read our full privacy policy for details on how we collect, use, and protect your data.",
        helpful: 189,
        views: 850,
      },
    ],
  },
  {
    id: "account",
    title: "Account & Profile",
    icon: Settings,
    questions: [
      {
        question: "How do I update my profile information?",
        answer:
          "Go to your account settings, click 'Edit Profile', and update your information. Some changes may require verification for security purposes.",
        helpful: 198,
        views: 920,
      },
      {
        question: "I forgot my password. How do I reset it?",
        answer:
          "Click 'Forgot Password' on the sign-in page, enter your email address, and follow the instructions in the reset email. If you don't receive the email, check your spam folder.",
        helpful: 234,
        views: 1050,
      },
      {
        question: "How do I delete my account?",
        answer:
          "Contact our support team to request account deletion. Note that this action is permanent and cannot be undone. You'll need to cancel any active bookings first.",
        helpful: 145,
        views: 680,
      },
      {
        question: "Can I have multiple accounts?",
        answer:
          "No, each person should have only one account. Having multiple accounts violates our terms of service and may result in account suspension.",
        helpful: 167,
        views: 750,
      },
    ],
  },
]

const popularArticles = [
  {
    title: "Complete Guide to Booking Your First Stay",
    description: "Everything you need to know about making your first booking on Roomy",
    category: "Getting Started",
    readTime: "5 min read",
    views: 2500,
    rating: 4.8,
  },
  {
    title: "Understanding Cancellation Policies",
    description: "Learn about different cancellation policies and how they affect your booking",
    category: "Booking",
    readTime: "3 min read",
    views: 1800,
    rating: 4.6,
  },
  {
    title: "Safety Tips for Travelers",
    description: "Essential safety guidelines for a secure and enjoyable stay",
    category: "Safety",
    readTime: "7 min read",
    views: 2200,
    rating: 4.9,
  },
  {
    title: "Host Verification Process Explained",
    description: "How we verify hosts and properties to ensure quality and safety",
    category: "Trust & Safety",
    readTime: "4 min read",
    views: 1600,
    rating: 4.7,
  },
  {
    title: "Payment Methods and Security",
    description: "Secure payment options and how we protect your financial information",
    category: "Payments",
    readTime: "6 min read",
    views: 1900,
    rating: 4.5,
  },
  {
    title: "Maximizing Your Host Earnings",
    description: "Tips and strategies to increase your booking rate and revenue",
    category: "Hosting",
    readTime: "8 min read",
    views: 2100,
    rating: 4.8,
  },
]

const contactOptions = [
  {
    title: "Live Chat",
    description: "Get instant help from our support team",
    icon: MessageCircle,
    availability: "24/7",
    responseTime: "< 2 minutes",
    languages: ["English", "Luganda", "Swahili"],
  },
  {
    title: "Phone Support",
    description: "Speak directly with a support specialist",
    icon: Phone,
    availability: "6 AM - 10 PM EAT",
    responseTime: "Immediate",
    languages: ["English", "Luganda"],
  },
  {
    title: "Email Support",
    description: "Send us a detailed message about your issue",
    icon: Mail,
    availability: "24/7",
    responseTime: "< 24 hours",
    languages: ["English", "Luganda", "Swahili", "French"],
  },
  {
    title: "Video Call",
    description: "Schedule a video call for complex issues",
    icon: Video,
    availability: "9 AM - 6 PM EAT",
    responseTime: "Same day",
    languages: ["English", "Luganda"],
  },
]

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("booking")

  const filteredQuestions = faqCategories
    .find((cat) => cat.id === selectedCategory)
    ?.questions.filter(
      (q) =>
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchQuery.toLowerCase()),
    )

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">How can we help you?</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Find answers to common questions, get support, and learn how to make the most of Roomy
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search for help articles, FAQs, and guides..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 py-6 text-lg"
            />
          </div>
        </div>

        {/* Contact Options */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Get Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactOptions.map((option, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                    <option.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{option.title}</CardTitle>
                  <CardDescription>{option.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Available:</span>
                      <span className="font-medium">{option.availability}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Response:</span>
                      <span className="font-medium">{option.responseTime}</span>
                    </div>
                    <div className="pt-2">
                      <p className="text-xs text-muted-foreground">Languages: {option.languages.join(", ")}</p>
                    </div>
                  </div>
                  <Button className="w-full mt-4">Contact Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Emergency Support */}
        <Card className="mb-16 bg-red-50 border-red-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="bg-red-100 p-3 rounded-full">
                <AlertTriangle className="w-8 h-8 text-red-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-red-800 mb-2">Emergency Support</h3>
                <p className="text-red-700 mb-4">
                  If you're experiencing a safety emergency or urgent issue during your stay, contact us immediately.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-red-600 hover:bg-red-700">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Emergency Line: +256 700 123 456
                  </Button>
                  <Button
                    variant="outline"
                    className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Emergency Chat
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>

          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8">
              {faqCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                  <category.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{category.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {faqCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <category.icon className="w-6 h-6 text-primary" />
                      {category.title}
                    </CardTitle>
                    <CardDescription>{filteredQuestions?.length || 0} questions in this category</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {filteredQuestions?.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger className="text-left">
                            <div className="flex items-center justify-between w-full pr-4">
                              <span>{faq.question}</span>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                  <Eye className="w-3 h-3" />
                                  <span>{faq.views}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <ThumbsUp className="w-3 h-3" />
                                  <span>{faq.helpful}</span>
                                </div>
                              </div>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="pt-4">
                              <p className="text-muted-foreground mb-4">{faq.answer}</p>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                  <Button variant="ghost" size="sm">
                                    <ThumbsUp className="w-4 h-4 mr-2" />
                                    Helpful ({faq.helpful})
                                  </Button>
                                  <Button variant="ghost" size="sm">
                                    <MessageCircle className="w-4 h-4 mr-2" />
                                    Still need help?
                                  </Button>
                                </div>
                                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                  <Eye className="w-3 h-3" />
                                  <span>{faq.views} views</span>
                                </div>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Popular Articles */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Popular Help Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularArticles.map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{article.category}</Badge>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{article.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg line-clamp-2">{article.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{article.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      <span>{article.views} views</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-6">
                  <Video className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Video Tutorials</h3>
                <p className="text-muted-foreground mb-6">
                  Watch step-by-step video guides on how to use Roomy effectively
                </p>
                <Button className="w-full">Watch Videos</Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-6">
                  <BookOpen className="w-12 h-12 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">User Guides</h3>
                <p className="text-muted-foreground mb-6">
                  Comprehensive guides covering all aspects of using our platform
                </p>
                <Button className="w-full">Download Guides</Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="bg-purple-100 p-4 rounded-full w-fit mx-auto mb-6">
                  <Users className="w-12 h-12 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Community Forum</h3>
                <p className="text-muted-foreground mb-6">Connect with other users and get help from the community</p>
                <Button className="w-full">Join Forum</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
