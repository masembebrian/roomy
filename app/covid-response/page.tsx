import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, Shield, Heart, Users, Droplets, Wind, AlertTriangle, Info } from "lucide-react"

const safetyMeasures = [
  {
    icon: Droplets,
    title: "Enhanced Cleaning",
    description: "5-step enhanced cleaning process",
    details: [
      "Sanitize all high-touch surfaces",
      "Use approved disinfectants",
      "Wash all linens in hot water",
      "Allow 24-hour vacancy between guests",
      "Provide cleaning supplies for guests",
    ],
  },
  {
    icon: Wind,
    title: "Improved Ventilation",
    description: "Better air circulation standards",
    details: [
      "Open windows when possible",
      "Use air purifiers where available",
      "Replace HVAC filters regularly",
      "Encourage outdoor spaces usage",
      "Maintain proper air flow",
    ],
  },
  {
    icon: Users,
    title: "Social Distancing",
    description: "Contactless interactions",
    details: [
      "Self check-in options",
      "Digital guidebooks",
      "Contactless payment",
      "Maintain safe distances",
      "Limit group gatherings",
    ],
  },
  {
    icon: Shield,
    title: "Health Monitoring",
    description: "Health and safety protocols",
    details: [
      "Temperature checks when required",
      "Health questionnaires",
      "Mask requirements in common areas",
      "Hand sanitizer availability",
      "Isolation protocols if needed",
    ],
  },
]

const travelGuidelines = [
  {
    category: "Before You Travel",
    guidelines: [
      "Check local travel restrictions and requirements",
      "Verify vaccination or testing requirements",
      "Review property-specific safety measures",
      "Pack personal protective equipment",
      "Consider travel insurance options",
    ],
  },
  {
    category: "During Your Stay",
    guidelines: [
      "Follow all local health guidelines",
      "Maintain social distancing when possible",
      "Use provided sanitization supplies",
      "Report any health concerns immediately",
      "Respect host and community safety measures",
    ],
  },
  {
    category: "If You Feel Unwell",
    guidelines: [
      "Contact local health authorities",
      "Inform your host immediately",
      "Isolate yourself from others",
      "Seek medical attention if needed",
      "Follow local quarantine protocols",
    ],
  },
]

const supportMeasures = [
  {
    title: "Flexible Cancellation",
    description: "Extended cancellation policies for COVID-related issues",
    icon: Heart,
    benefits: [
      "Full refund for COVID-related cancellations",
      "Extended cancellation windows",
      "No penalties for health-related changes",
      "Travel credit options available",
    ],
  },
  {
    title: "Host Support",
    description: "Resources and assistance for hosts",
    icon: Users,
    benefits: [
      "Cleaning supply reimbursements",
      "Enhanced cleaning training",
      "Flexible hosting policies",
      "24/7 support for health concerns",
    ],
  },
  {
    title: "Guest Protection",
    description: "Additional protections for travelers",
    icon: Shield,
    benefits: [
      "Health and safety verification",
      "Alternative accommodation assistance",
      "Medical emergency support",
      "Travel disruption coverage",
    ],
  },
]

export default function CovidResponsePage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our COVID-19 Response</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your health and safety remain our top priority. Learn about our enhanced safety measures and flexible
            policies.
          </p>
        </div>

        {/* Current Status Alert */}
        <Alert className="mb-12 border-blue-200 bg-blue-50">
          <Info className="h-4 w-4 text-blue-600" />
          <AlertDescription className="text-blue-800">
            <strong>Current Status:</strong> We continue to monitor health guidelines and adapt our policies
            accordingly. All safety measures are regularly updated based on local health authority recommendations.
          </AlertDescription>
        </Alert>

        {/* Safety Measures */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Enhanced Safety Measures</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {safetyMeasures.map((measure, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <measure.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{measure.title}</CardTitle>
                      <CardDescription>{measure.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {measure.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Travel Guidelines */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Travel Guidelines</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {travelGuidelines.map((section, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{section.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {section.guidelines.map((guideline, guidelineIndex) => (
                      <li key={guidelineIndex} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{guideline}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Support Measures */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Additional Support</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {supportMeasures.map((support, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                    <support.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{support.title}</CardTitle>
                  <CardDescription className="text-base">{support.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-left">
                    {support.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Health Resources */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Health Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="text-center p-6">
                <Shield className="w-12 h-12 mx-auto text-primary mb-4" />
                <h3 className="font-semibold mb-2">WHO Guidelines</h3>
                <p className="text-sm text-muted-foreground mb-4">Latest health recommendations</p>
                <Button variant="outline" size="sm">
                  View Guidelines
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="text-center p-6">
                <Heart className="w-12 h-12 mx-auto text-primary mb-4" />
                <h3 className="font-semibold mb-2">Local Health Info</h3>
                <p className="text-sm text-muted-foreground mb-4">Uganda health updates</p>
                <Button variant="outline" size="sm">
                  Get Updates
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="text-center p-6">
                <Users className="w-12 h-12 mx-auto text-primary mb-4" />
                <h3 className="font-semibold mb-2">Travel Advisories</h3>
                <p className="text-sm text-muted-foreground mb-4">Current travel restrictions</p>
                <Button variant="outline" size="sm">
                  Check Status
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="text-center p-6">
                <AlertTriangle className="w-12 h-12 mx-auto text-primary mb-4" />
                <h3 className="font-semibold mb-2">Emergency Contacts</h3>
                <p className="text-sm text-muted-foreground mb-4">Health emergency numbers</p>
                <Button variant="outline" size="sm">
                  View Contacts
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Commitment Statement */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="text-center py-12">
            <Heart className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl font-bold mb-4">Our Commitment to You</h2>
            <p className="text-lg mb-8 opacity-90 max-w-3xl mx-auto">
              We're committed to providing a safe environment for all our users. Our policies and safety measures are
              continuously updated based on the latest health guidelines and scientific evidence. Your health and peace
              of mind are our priorities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                View Safety Updates
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Contact Health Support
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  )
}
