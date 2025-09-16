"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Shield,
  Droplets,
  Wind,
  Users,
  CheckCircle,
  AlertTriangle,
  Phone,
  Mail,
  Heart,
  Home,
  Stethoscope,
  Info,
  ExternalLink,
} from "lucide-react"

const safetyMeasures = [
  {
    icon: Droplets,
    title: "Enhanced Cleaning Protocols",
    description: "Comprehensive sanitization between stays",
    measures: [
      "Professional-grade disinfectants used throughout property",
      "All high-touch surfaces cleaned and sanitized",
      "Bedding and towels washed at high temperatures",
      "24-hour vacancy period between bookings when possible",
      "Cleaning supplies provided for guest use",
      "Host cleaning certification program available",
    ],
  },
  {
    icon: Shield,
    title: "Safety Supplies Provided",
    description: "Essential health and safety items available",
    measures: [
      "Hand sanitizer in common areas and bedrooms",
      "Disinfectant wipes for guest use",
      "Contactless check-in options available",
      "Face masks available upon request",
      "Thermometers available for guest use",
      "First aid kits updated with health supplies",
    ],
  },
  {
    icon: Wind,
    title: "Improved Ventilation",
    description: "Better air circulation and quality measures",
    measures: [
      "Windows opened regularly for fresh air circulation",
      "Air conditioning filters changed frequently",
      "Air purifiers available in select properties",
      "Outdoor spaces prioritized when available",
      "Ventilation systems inspected and maintained",
      "Guidelines for optimal air circulation provided",
    ],
  },
  {
    icon: Users,
    title: "Social Distancing Support",
    description: "Measures to maintain safe distances",
    measures: [
      "Contactless check-in and check-out procedures",
      "Staggered cleaning schedules to avoid contact",
      "Digital guidebooks and information provided",
      "Reduced capacity in common areas when applicable",
      "Outdoor activity recommendations prioritized",
      "Virtual property tours available",
    ],
  },
]

const healthGuidelines = [
  {
    title: "Before You Travel",
    icon: CheckCircle,
    guidelines: [
      "Check current travel advisories for your destination",
      "Ensure you meet all vaccination requirements",
      "Pack essential health supplies (masks, sanitizer, thermometer)",
      "Review your travel insurance coverage",
      "Monitor your health for symptoms before departure",
      "Research local healthcare facilities at your destination",
    ],
  },
  {
    title: "During Your Stay",
    icon: Shield,
    guidelines: [
      "Follow all local health guidelines and restrictions",
      "Maintain good hygiene practices throughout your stay",
      "Use provided sanitization supplies regularly",
      "Respect social distancing guidelines",
      "Monitor your health and report any symptoms",
      "Keep emergency contact information easily accessible",
    ],
  },
  {
    title: "If You Feel Unwell",
    icon: Stethoscope,
    guidelines: [
      "Contact local healthcare authorities immediately",
      "Inform your host about your condition",
      "Isolate yourself to prevent spread to others",
      "Contact our support team for assistance",
      "Follow local quarantine guidelines if required",
      "Keep detailed records for contact tracing if needed",
    ],
  },
]

const travelAdvisoryLevels = [
  {
    level: "Green",
    title: "Low Risk",
    description: "Normal travel with standard precautions",
    color: "bg-green-100 text-green-800 border-green-200",
    recommendations: [
      "Follow basic hygiene practices",
      "Stay informed about local conditions",
      "Carry hand sanitizer and masks",
      "Respect local guidelines",
    ],
  },
  {
    level: "Yellow",
    title: "Moderate Risk",
    description: "Enhanced precautions recommended",
    color: "bg-yellow-100 text-yellow-800 border-yellow-200",
    recommendations: [
      "Enhanced cleaning and sanitization",
      "Maintain social distancing when possible",
      "Monitor health symptoms closely",
      "Consider travel insurance",
    ],
  },
  {
    level: "Red",
    title: "High Risk",
    description: "Travel not recommended unless essential",
    color: "bg-red-100 text-red-800 border-red-200",
    recommendations: [
      "Reconsider travel plans",
      "Follow strict health protocols if traveling",
      "Quarantine requirements may apply",
      "Consult healthcare providers before travel",
    ],
  },
]

const supportPrograms = [
  {
    title: "Host Relief Program",
    description: "Financial support for hosts affected by travel restrictions",
    icon: Home,
    benefits: [
      "Flexible cancellation policies during restrictions",
      "Reduced service fees for affected bookings",
      "Marketing support to attract local guests",
      "Access to cleaning and safety resources",
      "Extended payment terms when needed",
    ],
    eligibility: "Hosts with verified properties affected by COVID-19 restrictions",
    status: "Active",
  },
  {
    title: "Guest Protection Plan",
    description: "Enhanced protection for travelers during uncertain times",
    icon: Shield,
    benefits: [
      "Flexible rebooking options",
      "Extended cancellation windows",
      "Travel credit for future bookings",
      "24/7 health emergency support",
      "Alternative accommodation assistance",
    ],
    eligibility: "All guests with active bookings during advisory periods",
    status: "Active",
  },
  {
    title: "Community Health Initiative",
    description: "Supporting local communities and healthcare systems",
    icon: Heart,
    benefits: [
      "Free accommodation for healthcare workers",
      "Donations to local health organizations",
      "Community vaccination site partnerships",
      "Health education resource distribution",
      "Support for vulnerable community members",
    ],
    eligibility: "Community-wide program",
    status: "Ongoing",
  },
]

const healthResources = [
  {
    organization: "Uganda Ministry of Health",
    contact: "+256 800 100 066",
    website: "health.go.ug",
    services: "Official health information and guidelines",
  },
  {
    organization: "World Health Organization Uganda",
    contact: "+256 414 347 500",
    website: "who.int/uganda",
    services: "International health guidance and resources",
  },
  {
    organization: "Uganda Red Cross Society",
    contact: "+256 414 258 701",
    website: "redcrossug.org",
    services: "Emergency health services and community support",
  },
  {
    organization: "Mulago National Referral Hospital",
    contact: "+256 414 554 000",
    website: "mulago.go.ug",
    services: "Primary healthcare and emergency services",
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
            Your health and safety remain our top priority. Learn about our enhanced safety measures, health guidelines,
            and support programs designed to help you travel safely.
          </p>
        </div>

        {/* Current Status Alert */}
        <Alert className="mb-12 border-blue-200 bg-blue-50">
          <Info className="h-4 w-4 text-blue-600" />
          <AlertDescription className="text-blue-800">
            <strong>Current Status:</strong> We continue to monitor health conditions and adapt our policies
            accordingly. All safety measures remain in effect. Last updated: December 2024.
          </AlertDescription>
        </Alert>

        {/* Enhanced Safety Measures */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Enhanced Safety Measures</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {safetyMeasures.map((measure, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-3">
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
                    {measure.measures.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Health Guidelines */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Health Guidelines for Travelers</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {healthGuidelines.map((guideline, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <guideline.icon className="w-6 h-6 text-primary" />
                    <CardTitle className="text-lg">{guideline.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {guideline.guidelines.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Travel Advisory Levels */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Travel Advisory Levels</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            We monitor health conditions and provide guidance based on current risk levels
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {travelAdvisoryLevels.map((level, index) => (
              <Card key={index} className={`border-2 ${level.color.split(" ")[2]}`}>
                <CardHeader>
                  <div className="text-center">
                    <Badge className={level.color} variant="outline">
                      Level {level.level}
                    </Badge>
                    <CardTitle className="text-xl mt-2">{level.title}</CardTitle>
                    <CardDescription>{level.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {level.recommendations.map((rec, recIndex) => (
                      <li key={recIndex} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Support Programs */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Support Programs</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {supportPrograms.map((program, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <program.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{program.title}</CardTitle>
                        <Badge variant="outline" className="text-green-600 border-green-600">
                          {program.status}
                        </Badge>
                      </div>
                      <CardDescription>{program.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {program.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-3 h-3 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-xs">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Eligibility:</h4>
                    <p className="text-xs text-muted-foreground">{program.eligibility}</p>
                  </div>
                  <Button className="w-full" size="sm">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Health Resources */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Health Resources & Contacts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {healthResources.map((resource, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <h3 className="font-semibold text-lg">{resource.organization}</h3>
                    <p className="text-sm text-muted-foreground">{resource.services}</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">{resource.contact}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ExternalLink className="w-4 h-4 text-primary" />
                        <span className="text-sm text-primary hover:underline cursor-pointer">{resource.website}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Emergency Health Protocol */}
        <Card className="mb-16 bg-red-50 border-red-200">
          <CardContent className="p-8">
            <div className="text-center">
              <AlertTriangle className="w-16 h-16 mx-auto mb-6 text-red-600" />
              <h2 className="text-3xl font-bold mb-4 text-red-800">Health Emergency Protocol</h2>
              <p className="text-lg mb-8 text-red-700 max-w-2xl mx-auto">
                If you experience COVID-19 symptoms or test positive during your stay, follow these immediate steps:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="text-left">
                  <h3 className="font-semibold mb-3 text-red-800">Immediate Actions:</h3>
                  <ul className="space-y-2 text-sm text-red-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Isolate yourself immediately</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Contact local health authorities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Inform your host immediately</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Contact our emergency support line</span>
                    </li>
                  </ul>
                </div>
                <div className="text-left">
                  <h3 className="font-semibold mb-3 text-red-800">We Will Help With:</h3>
                  <ul className="space-y-2 text-sm text-red-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Extended accommodation if needed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Coordination with health authorities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Travel rebooking assistance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Insurance claim support</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                  <Phone className="w-5 h-5 mr-2" />
                  Emergency Health Line: +256 800 100 066
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Health Team
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Commitment Statement */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="text-center py-12">
            <Heart className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl font-bold mb-4">Our Ongoing Commitment</h2>
            <p className="text-lg mb-8 opacity-90 max-w-3xl mx-auto">
              We remain committed to providing safe, clean, and healthy accommodations for all our guests and hosts. Our
              policies and procedures continue to evolve based on the latest health guidance and community needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                <Shield className="w-5 h-5 mr-2" />
                View All Safety Measures
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Support Team
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  )
}
