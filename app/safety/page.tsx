import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  CheckCircle,
  AlertTriangle,
  Phone,
  Users,
  Lock,
  Eye,
  Heart,
  FileText,
  MessageSquare,
} from "lucide-react"

const safetyFeatures = [
  {
    icon: Shield,
    title: "Verified Hosts & Guests",
    description: "All users must verify their identity with government ID and phone number before booking or hosting.",
  },
  {
    icon: Lock,
    title: "Secure Payments",
    description:
      "Your payment information is encrypted and never shared. We hold payments until 24 hours after check-in.",
  },
  {
    icon: Eye,
    title: "Property Verification",
    description: "Our team verifies property photos and details to ensure accuracy and authenticity.",
  },
  {
    icon: Users,
    title: "Community Reviews",
    description: "Read honest reviews from previous guests and hosts to make informed decisions.",
  },
  {
    icon: Phone,
    title: "24/7 Support",
    description: "Our safety team is available around the clock to help with any concerns or emergencies.",
  },
  {
    icon: Heart,
    title: "Host Protection",
    description: "Comprehensive insurance coverage protects hosts against property damage and liability.",
  },
]

const safetyTips = {
  guests: [
    {
      title: "Before You Book",
      tips: [
        "Read the entire listing description and house rules carefully",
        "Check recent reviews from other guests",
        "Verify the host's profile and response rate",
        "Communicate through Roomy's messaging system",
        "Never send money outside of the Roomy platform",
      ],
    },
    {
      title: "During Your Stay",
      tips: [
        "Follow all house rules and local laws",
        "Treat the property with respect",
        "Report any safety concerns immediately",
        "Keep emergency contact information handy",
        "Document any pre-existing damage with photos",
      ],
    },
    {
      title: "After Your Stay",
      tips: [
        "Leave an honest review for future guests",
        "Report any issues to our support team",
        "Return keys and leave the property as you found it",
        "Contact us if you have any billing questions",
      ],
    },
  ],
  hosts: [
    {
      title: "Preparing Your Space",
      tips: [
        "Install smoke and carbon monoxide detectors",
        "Provide clear emergency exit information",
        "Secure valuable items and personal belongings",
        "Ensure all appliances are in working order",
        "Provide accurate photos and descriptions",
      ],
    },
    {
      title: "Screening Guests",
      tips: [
        "Read guest profiles and reviews carefully",
        "Communicate clearly about house rules",
        "Ask questions if you have concerns",
        "Trust your instincts about potential guests",
        "Use Roomy's messaging system for all communication",
      ],
    },
    {
      title: "During the Stay",
      tips: [
        "Be available for guest questions and concerns",
        "Respect guest privacy and space",
        "Address any issues promptly and professionally",
        "Document any property damage immediately",
        "Contact support for serious problems",
      ],
    },
  ],
}

const emergencyContacts = [
  {
    service: "Roomy Emergency Line",
    number: "+256 700 123 456",
    available: "24/7",
  },
  {
    service: "Uganda Police",
    number: "999",
    available: "24/7",
  },
  {
    service: "Medical Emergency",
    number: "911",
    available: "24/7",
  },
  {
    service: "Fire Department",
    number: "999",
    available: "24/7",
  },
]

export default function SafetyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-primary/10 p-4 rounded-full">
              <Shield className="w-16 h-16 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Your Safety is Our Priority</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're committed to creating a safe and secure platform for all our users. Learn about our safety measures
            and best practices.
          </p>
        </div>

        {/* Safety Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">How We Keep You Safe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safetyFeatures.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Safety Tips */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Safety Tips</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Guest Tips */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold">For Guests</h3>
              </div>

              <div className="space-y-6">
                {safetyTips.guests.map((section, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{section.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {section.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Host Tips */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-100 p-2 rounded-full">
                  <Heart className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold">For Hosts</h3>
              </div>

              <div className="space-y-6">
                {safetyTips.hosts.map((section, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{section.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {section.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contacts */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Emergency Contacts</h2>
          <Card className="bg-red-50 border-red-200">
            <CardHeader>
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-red-600" />
                <CardTitle className="text-red-800">Important Emergency Numbers</CardTitle>
              </div>
              <CardDescription className="text-red-700">
                Save these numbers and keep them accessible during your stay
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {emergencyContacts.map((contact, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg border">
                    <div>
                      <div className="font-semibold">{contact.service}</div>
                      <div className="text-2xl font-bold text-red-600">{contact.number}</div>
                    </div>
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      {contact.available}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Reporting Issues */}
        <div className="mb-16">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="text-center py-12">
              <MessageSquare className="w-16 h-16 mx-auto mb-6 opacity-90" />
              <h2 className="text-3xl font-bold mb-4">Report Safety Concerns</h2>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                If you encounter any safety issues or have concerns about a listing or user, please report it
                immediately. We take all reports seriously and investigate promptly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Report an Issue
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Emergency Contact
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Resources */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-8">Additional Safety Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <FileText className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Safety Guidelines</CardTitle>
                <CardDescription>Comprehensive safety guidelines for hosts and guests</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent">
                  Read Guidelines
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <Shield className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Insurance Coverage</CardTitle>
                <CardDescription>Learn about our host protection and guest coverage</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent">
                  View Coverage
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <Users className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Community Standards</CardTitle>
                <CardDescription>Our community guidelines and standards</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent">
                  Read Standards
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
