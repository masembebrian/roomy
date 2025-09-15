"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Clock,
  Shield,
  AlertCircle,
  CheckCircle,
  XCircle,
  Calendar,
  MessageSquare,
  Phone,
  Mail,
  Search,
  ArrowRight,
  RefreshCw,
  DollarSign,
  FileText,
  Users,
  Home,
  Star,
} from "lucide-react"
import { Footer } from "@/components/footer"

const cancellationPolicies = [
  {
    type: "Flexible",
    icon: CheckCircle,
    color: "text-green-600",
    bgColor: "bg-green-50",
    description: "Full refund 1 day prior to arrival",
    details: [
      "Cancel up to 24 hours before check-in for a full refund",
      "Cancel within 24 hours and get 50% refund",
      "No refund for no-shows",
      "Service fees are non-refundable",
    ],
    popularity: "Most Popular",
    refundTimeline: "1-3 business days",
  },
  {
    type: "Moderate",
    icon: Clock,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    description: "Full refund 5 days prior to arrival",
    details: [
      "Cancel up to 5 days before check-in for a full refund",
      "Cancel within 5 days and get 50% refund",
      "Cancel within 24 hours and get no refund",
      "Service fees are non-refundable",
    ],
    popularity: "Balanced",
    refundTimeline: "3-5 business days",
  },
  {
    type: "Strict",
    icon: Shield,
    color: "text-red-600",
    bgColor: "bg-red-50",
    description: "50% refund up until 1 week prior to arrival",
    details: [
      "Cancel up to 7 days before check-in for 50% refund",
      "Cancel within 7 days and get no refund",
      "No exceptions for weather or emergencies",
      "Service fees are non-refundable",
    ],
    popularity: "Host Protection",
    refundTimeline: "5-7 business days",
  },
  {
    type: "Super Strict",
    icon: XCircle,
    color: "text-gray-600",
    bgColor: "bg-gray-50",
    description: "50% refund up until 30 days prior to arrival",
    details: [
      "Cancel up to 30 days before check-in for 50% refund",
      "Cancel within 30 days and get no refund",
      "No exceptions under any circumstances",
      "Service fees are non-refundable",
    ],
    popularity: "Maximum Protection",
    refundTimeline: "7-10 business days",
  },
]

const extenuatingCircumstances = [
  {
    category: "Natural Disasters",
    examples: ["Earthquakes", "Floods", "Hurricanes", "Wildfires"],
    icon: AlertCircle,
    color: "text-orange-600",
  },
  {
    category: "Government Actions",
    examples: ["Travel bans", "Mandatory evacuations", "Border closures"],
    icon: Shield,
    color: "text-blue-600",
  },
  {
    category: "Health Emergencies",
    examples: ["Serious illness", "Medical emergencies", "Pandemic restrictions"],
    icon: Users,
    color: "text-red-600",
  },
  {
    category: "Infrastructure Issues",
    examples: ["Airport closures", "Transportation strikes", "Utility failures"],
    icon: Home,
    color: "text-purple-600",
  },
]

const faqData = [
  {
    question: "How do I cancel my reservation?",
    answer:
      "You can cancel your reservation through your Roomy account under 'Your Trips' or by contacting our support team. The refund amount depends on the cancellation policy of your booking.",
  },
  {
    question: "When will I receive my refund?",
    answer:
      "Refund processing times vary by cancellation policy and payment method. Most refunds are processed within 3-10 business days after cancellation approval.",
  },
  {
    question: "What are extenuating circumstances?",
    answer:
      "Extenuating circumstances are unexpected events beyond your control that prevent you from traveling, such as natural disasters, government travel restrictions, or serious medical emergencies.",
  },
  {
    question: "Can I get a full refund for any reason?",
    answer:
      "Full refunds depend on the property's cancellation policy and timing of cancellation. Some flexible policies allow full refunds up to 24 hours before check-in.",
  },
  {
    question: "Are service fees refundable?",
    answer:
      "Service fees are generally non-refundable, except in cases of extenuating circumstances or if the host cancels your reservation.",
  },
  {
    question: "What if the host cancels my booking?",
    answer:
      "If a host cancels your confirmed reservation, you'll receive a full refund including all fees, and we'll help you find alternative accommodations.",
  },
]

export default function CancellationPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedPolicy, setSelectedPolicy] = useState("all") // Updated default value to 'all'
  const [cancellationReason, setCancellationReason] = useState("")

  const filteredFAQs = faqData.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cancellation Policies & Options</h1>
            <p className="text-xl mb-8 opacity-90">
              Understand your options and get help with cancellations, refunds, and policy changes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-blue-600">
                <Calendar className="w-5 h-5 mr-2" />
                Cancel a Reservation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="p-6">
              <RefreshCw className="w-8 h-8 mx-auto text-blue-600 mb-4" />
              <div className="text-2xl font-bold text-blue-600">24/7</div>
              <p className="text-sm text-muted-foreground">Cancellation Support</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <DollarSign className="w-8 h-8 mx-auto text-green-600 mb-4" />
              <div className="text-2xl font-bold text-green-600">$2.1M+</div>
              <p className="text-sm text-muted-foreground">Refunds Processed</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Clock className="w-8 h-8 mx-auto text-orange-600 mb-4" />
              <div className="text-2xl font-bold text-orange-600">3-5</div>
              <p className="text-sm text-muted-foreground">Days Average Refund</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Star className="w-8 h-8 mx-auto text-purple-600 mb-4" />
              <div className="text-2xl font-bold text-purple-600">4.8/5</div>
              <p className="text-sm text-muted-foreground">Support Rating</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="policies" className="space-y-8">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
            <TabsTrigger value="policies">Cancellation Policies</TabsTrigger>
            <TabsTrigger value="process">Cancellation Process</TabsTrigger>
            <TabsTrigger value="circumstances">Extenuating Circumstances</TabsTrigger>
            <TabsTrigger value="faq">FAQ & Support</TabsTrigger>
          </TabsList>

          {/* Cancellation Policies Tab */}
          <TabsContent value="policies" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Understanding Cancellation Policies</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Each property on Roomy has a cancellation policy set by the host. Here's what each policy means for your
                booking.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cancellationPolicies.map((policy) => (
                <Card key={policy.type} className="relative overflow-hidden">
                  <div className={`absolute top-0 right-0 ${policy.bgColor} px-3 py-1 rounded-bl-lg`}>
                    <span className={`text-xs font-medium ${policy.color}`}>{policy.popularity}</span>
                  </div>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${policy.bgColor}`}>
                        <policy.icon className={`w-6 h-6 ${policy.color}`} />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{policy.type} Policy</CardTitle>
                        <CardDescription>{policy.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {policy.details.map((detail, index) => (
                        <li key={index} className="flex items-start space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>Refund Timeline:</span>
                      <Badge variant="outline">{policy.refundTimeline}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                <strong>Important:</strong> Cancellation policies are set by individual hosts and may vary by property.
                Always check the specific policy for your booking before making a reservation.
              </AlertDescription>
            </Alert>
          </TabsContent>

          {/* Cancellation Process Tab */}
          <TabsContent value="process" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">How to Cancel Your Reservation</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Follow these simple steps to cancel your booking and understand your refund options.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Cancellation Steps */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="w-5 h-5" />
                    <span>Step-by-Step Process</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    {[
                      {
                        step: 1,
                        title: "Log into Your Account",
                        description: "Access your Roomy account and navigate to 'Your Trips'",
                      },
                      {
                        step: 2,
                        title: "Find Your Reservation",
                        description: "Locate the booking you want to cancel",
                      },
                      {
                        step: 3,
                        title: "Review Cancellation Policy",
                        description: "Check the refund amount based on the property's policy",
                      },
                      {
                        step: 4,
                        title: "Confirm Cancellation",
                        description: "Complete the cancellation and receive confirmation",
                      },
                      {
                        step: 5,
                        title: "Receive Refund",
                        description: "Get your refund processed according to the timeline",
                      },
                    ].map((item) => (
                      <div key={item.step} className="flex space-x-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {item.step}
                        </div>
                        <div>
                          <h4 className="font-semibold">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Cancellation Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageSquare className="w-5 h-5" />
                    <span>Need Help Cancelling?</span>
                  </CardTitle>
                  <CardDescription>Fill out this form and our support team will assist you</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="booking-id">Booking ID</Label>
                    <Input id="booking-id" placeholder="Enter your booking ID" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reason">Reason for Cancellation</Label>
                    <Select value={cancellationReason} onValueChange={setCancellationReason}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a reason" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="change-plans">Change of plans</SelectItem>
                        <SelectItem value="emergency">Emergency situation</SelectItem>
                        <SelectItem value="property-issue">Property issue</SelectItem>
                        <SelectItem value="travel-restriction">Travel restrictions</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="details">Additional Details</Label>
                    <Textarea id="details" placeholder="Provide any additional information..." />
                  </div>
                  <Button className="w-full">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Submit Cancellation Request
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Extenuating Circumstances Tab */}
          <TabsContent value="circumstances" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Extenuating Circumstances Policy</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We understand that unexpected events can disrupt travel plans. Our extenuating circumstances policy
                provides additional protection when extraordinary situations occur.
              </p>
            </div>

            <Alert className="mb-8">
              <Shield className="h-4 w-4" />
              <AlertDescription>
                <strong>Coverage:</strong> Extenuating circumstances may allow for full refunds even under strict
                cancellation policies. Each case is reviewed individually with proper documentation required.
              </AlertDescription>
            </Alert>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {extenuatingCircumstances.map((circumstance) => (
                <Card key={circumstance.category}>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <circumstance.icon className={`w-6 h-6 ${circumstance.color}`} />
                      <span>{circumstance.category}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {circumstance.examples.map((example, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>How to File an Extenuating Circumstances Claim</CardTitle>
                <CardDescription>
                  Follow these steps to request a review under our extenuating circumstances policy
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FileText className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="font-semibold mb-2">1. Gather Documentation</h4>
                    <p className="text-sm text-muted-foreground">
                      Collect official documents that verify the extenuating circumstance
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageSquare className="w-6 h-6 text-green-600" />
                    </div>
                    <h4 className="font-semibold mb-2">2. Submit Your Claim</h4>
                    <p className="text-sm text-muted-foreground">
                      Contact our support team with your documentation and booking details
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-6 h-6 text-purple-600" />
                    </div>
                    <h4 className="font-semibold mb-2">3. Await Review</h4>
                    <p className="text-sm text-muted-foreground">Our team will review your case within 24-48 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* FAQ & Support Tab */}
          <TabsContent value="faq" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Find answers to common questions about cancellations, refunds, and policies.
              </p>
            </div>

            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search FAQs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedPolicy} onValueChange={setSelectedPolicy}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Filter by policy" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Policies</SelectItem>
                  <SelectItem value="flexible">Flexible</SelectItem>
                  <SelectItem value="moderate">Moderate</SelectItem>
                  <SelectItem value="strict">Strict</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* FAQ List */}
            <div className="space-y-4 mb-8">
              {filteredFAQs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Support */}
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Still Need Help?</CardTitle>
                <CardDescription className="text-center">
                  Our support team is available 24/7 to assist with your cancellation needs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Phone className="w-8 h-8 mx-auto text-blue-600 mb-4" />
                    <h4 className="font-semibold mb-2">Phone Support</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Speak directly with our cancellation specialists
                    </p>
                    <Button variant="outline" className="w-full bg-transparent">
                      +256 700 123 456
                    </Button>
                  </div>
                  <div className="text-center">
                    <MessageSquare className="w-8 h-8 mx-auto text-green-600 mb-4" />
                    <h4 className="font-semibold mb-2">Live Chat</h4>
                    <p className="text-sm text-muted-foreground mb-4">Get instant help through our chat system</p>
                    <Button variant="outline" className="w-full bg-transparent">
                      Start Chat
                    </Button>
                  </div>
                  <div className="text-center">
                    <Mail className="w-8 h-8 mx-auto text-purple-600 mb-4" />
                    <h4 className="font-semibold mb-2">Email Support</h4>
                    <p className="text-sm text-muted-foreground mb-4">Send us your cancellation questions</p>
                    <Button variant="outline" className="w-full bg-transparent">
                      cancellations@roomy.ug
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  )
}
