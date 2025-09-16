"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Calendar,
  Clock,
  DollarSign,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Phone,
  Mail,
  MessageCircle,
  CreditCard,
  Banknote,
  Smartphone,
  Info,
} from "lucide-react"

const cancellationPolicies = [
  {
    name: "Flexible",
    description: "Full refund 1 day prior to arrival",
    color: "bg-green-100 text-green-800",
    icon: CheckCircle,
    details: {
      fullRefund: "Cancel up to 24 hours before check-in",
      partialRefund: "50% refund if cancelled within 24 hours",
      noRefund: "No refund after check-in",
      serviceFees: "Service fees refunded if cancelled within 48 hours",
    },
    timeline: [
      { period: "More than 24 hours before", refund: "100%", fees: "Refunded" },
      { period: "Less than 24 hours before", refund: "50%", fees: "Not refunded" },
      { period: "After check-in", refund: "0%", fees: "Not refunded" },
    ],
  },
  {
    name: "Moderate",
    description: "Full refund 5 days prior to arrival",
    color: "bg-blue-100 text-blue-800",
    icon: Clock,
    details: {
      fullRefund: "Cancel up to 5 days before check-in",
      partialRefund: "50% refund if cancelled within 5 days",
      noRefund: "No refund after check-in",
      serviceFees: "Service fees refunded if cancelled within 7 days",
    },
    timeline: [
      { period: "More than 5 days before", refund: "100%", fees: "Refunded" },
      { period: "Less than 5 days before", refund: "50%", fees: "Not refunded" },
      { period: "After check-in", refund: "0%", fees: "Not refunded" },
    ],
  },
  {
    name: "Strict",
    description: "Full refund 7 days prior to arrival",
    color: "bg-orange-100 text-orange-800",
    icon: AlertTriangle,
    details: {
      fullRefund: "Cancel up to 7 days before check-in",
      partialRefund: "50% refund if cancelled 7-14 days before",
      noRefund: "No refund if cancelled within 7 days",
      serviceFees: "Service fees refunded if cancelled within 14 days",
    },
    timeline: [
      { period: "More than 14 days before", refund: "100%", fees: "Refunded" },
      { period: "7-14 days before", refund: "50%", fees: "Refunded" },
      { period: "Less than 7 days before", refund: "0%", fees: "Not refunded" },
      { period: "After check-in", refund: "0%", fees: "Not refunded" },
    ],
  },
  {
    name: "Super Strict",
    description: "50% refund up until 1 week prior to arrival",
    color: "bg-red-100 text-red-800",
    icon: XCircle,
    details: {
      fullRefund: "No full refund available",
      partialRefund: "50% refund if cancelled more than 7 days before",
      noRefund: "No refund if cancelled within 7 days",
      serviceFees: "Service fees never refunded",
    },
    timeline: [
      { period: "More than 7 days before", refund: "50%", fees: "Not refunded" },
      { period: "Less than 7 days before", refund: "0%", fees: "Not refunded" },
      { period: "After check-in", refund: "0%", fees: "Not refunded" },
    ],
  },
]

const cancellationSteps = [
  {
    step: 1,
    title: "Go to Your Bookings",
    description: "Navigate to 'My Bookings' in your account menu",
    icon: Calendar,
  },
  {
    step: 2,
    title: "Select Your Booking",
    description: "Find the booking you want to cancel and click on it",
    icon: CheckCircle,
  },
  {
    step: 3,
    title: "Click Cancel Booking",
    description: "Look for the 'Cancel Booking' button and click it",
    icon: XCircle,
  },
  {
    step: 4,
    title: "Review Refund Details",
    description: "Check the refund amount based on the cancellation policy",
    icon: DollarSign,
  },
  {
    step: 5,
    title: "Confirm Cancellation",
    description: "Confirm your cancellation and receive confirmation",
    icon: CheckCircle,
  },
]

const extenuatingCircumstances = [
  {
    category: "Natural Disasters",
    examples: ["Earthquakes", "Floods", "Hurricanes", "Volcanic eruptions", "Severe storms"],
  },
  {
    category: "Government Actions",
    examples: ["Travel bans", "Mandatory evacuations", "Border closures", "Quarantine orders", "Curfews"],
  },
  {
    category: "Health Emergencies",
    examples: ["Serious illness", "Medical emergencies", "Pandemic restrictions", "Hospital admissions"],
  },
  {
    category: "Transportation Issues",
    examples: ["Flight cancellations", "Airport closures", "Public transport strikes", "Road closures"],
  },
  {
    category: "Legal Obligations",
    examples: ["Jury duty", "Court appearances", "Military deployment", "Visa denials"],
  },
]

const refundTimeline = [
  {
    method: "Credit Card",
    timeline: "5-10 business days",
    description: "Refunds appear on your statement within 1-2 billing cycles",
    icon: CreditCard,
  },
  {
    method: "Debit Card",
    timeline: "5-10 business days",
    description: "Refunds typically appear faster than credit cards",
    icon: CreditCard,
  },
  {
    method: "PayPal",
    timeline: "3-5 business days",
    description: "Refunds appear in your PayPal account balance",
    icon: DollarSign,
  },
  {
    method: "Mobile Money",
    timeline: "1-3 business days",
    description: "Refunds sent directly to your mobile money account",
    icon: Smartphone,
  },
  {
    method: "Bank Transfer",
    timeline: "3-7 business days",
    description: "Direct deposit to your bank account",
    icon: Banknote,
  },
]

const faqItems = [
  {
    question: "Can I cancel my booking for free?",
    answer:
      "This depends on the property's cancellation policy and when you cancel. Check your booking details for the specific policy that applies to your reservation.",
  },
  {
    question: "What if I need to cancel due to an emergency?",
    answer:
      "We understand that emergencies happen. Contact our support team immediately to discuss your situation. We may be able to help under our extenuating circumstances policy.",
  },
  {
    question: "How long does it take to receive my refund?",
    answer:
      "Refund timing depends on your payment method. Credit cards take 5-10 business days, while mobile money refunds are typically processed within 1-3 business days.",
  },
  {
    question: "Can I get a full refund if the property doesn't match the listing?",
    answer:
      "Yes, if the property significantly doesn't match the listing or has safety issues, you may be eligible for a full refund. Contact us within 24 hours of check-in.",
  },
  {
    question: "What happens if the host cancels my booking?",
    answer:
      "If a host cancels your booking, you'll receive a full refund including all fees. We'll also help you find alternative accommodation and may provide additional compensation.",
  },
  {
    question: "Can I modify my booking instead of cancelling?",
    answer:
      "Yes, you can often modify your booking dates or guest count. Changes are subject to availability and may affect the total price. Contact the host or our support team for assistance.",
  },
  {
    question: "What if I only want to cancel part of my stay?",
    answer:
      "Partial cancellations may be possible depending on the host's policy. Contact the host directly to discuss shortening your stay and potential refunds.",
  },
  {
    question: "Are service fees refundable?",
    answer:
      "Service fee refunds depend on when you cancel and the property's policy. Generally, service fees are refunded if you cancel within the full refund period.",
  },
]

export default function CancellationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-primary/10 p-4 rounded-full">
              <Calendar className="w-16 h-16 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cancellation Options</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Understand our cancellation policies, learn how to cancel your booking, and find out about refund timelines
            and extenuating circumstances.
          </p>
        </div>

        {/* Important Notice */}
        <Alert className="mb-12 border-blue-200 bg-blue-50">
          <Info className="h-4 w-4 text-blue-600" />
          <AlertDescription className="text-blue-800">
            <strong>Important:</strong> Each property has its own cancellation policy set by the host. Always check the
            specific policy for your booking before making a reservation.
          </AlertDescription>
        </Alert>

        {/* Cancellation Policies Comparison */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Cancellation Policies</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {cancellationPolicies.map((policy, index) => (
              <Card key={index} className="relative">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <policy.icon className="w-6 h-6 text-primary" />
                    <Badge className={policy.color}>{policy.name}</Badge>
                  </div>
                  <CardTitle className="text-lg">{policy.name} Policy</CardTitle>
                  <CardDescription>{policy.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      {policy.timeline.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex justify-between items-center text-sm">
                          <span className="text-muted-foreground">{item.period}:</span>
                          <div className="text-right">
                            <div className="font-medium">{item.refund} refund</div>
                            <div className="text-xs text-muted-foreground">Fees: {item.fees}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How to Cancel */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">How to Cancel Your Booking</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {cancellationSteps.map((step, index) => (
              <Card key={index} className="text-center relative">
                <CardContent className="p-6">
                  <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
                {index < cancellationSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <div className="w-6 h-0.5 bg-primary/30"></div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Extenuating Circumstances */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Extenuating Circumstances</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            We understand that unexpected events can disrupt travel plans. Our extenuating circumstances policy may
            provide additional flexibility in certain situations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {extenuatingCircumstances.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{example}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button size="lg">
              <AlertTriangle className="w-5 h-5 mr-2" />
              Submit Extenuating Circumstances Claim
            </Button>
          </div>
        </div>

        {/* Refund Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Refund Timeline by Payment Method</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {refundTimeline.map((method, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <method.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{method.method}</h3>
                      <Badge variant="outline">{method.timeline}</Badge>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <Card>
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>

        {/* Support Section */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="text-center py-12">
            <MessageCircle className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl font-bold mb-4">Need Help with Cancellation?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Our support team is here to help you understand your options and guide you through the cancellation
              process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                <Phone className="w-5 h-5 mr-2" />
                Call Support
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </Button>
            </div>
            <p className="text-sm mt-4 opacity-75">Support available 24/7 | Phone: +256 700 123 456</p>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  )
}
