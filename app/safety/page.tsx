"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Shield,
  CheckCircle,
  Phone,
  AlertTriangle,
  Eye,
  CreditCard,
  MessageCircle,
  Home,
  Clock,
  FileText,
  Download,
  Play,
  Star,
  Lock,
  Camera,
  Headphones,
} from "lucide-react"

const safetyFeatures = [
  {
    icon: Shield,
    title: "Identity Verification",
    description: "All users undergo identity verification to ensure authenticity",
    features: [
      "Government ID verification",
      "Phone number confirmation",
      "Email address verification",
      "Social media account linking",
      "Background checks for hosts",
      "Ongoing monitoring systems",
    ],
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "Your financial information is protected with industry-leading security",
    features: [
      "Encrypted payment processing",
      "PCI DSS compliance",
      "Secure payment holding",
      "Fraud detection systems",
      "Chargeback protection",
      "Multiple payment options",
    ],
  },
  {
    icon: Eye,
    title: "24/7 Monitoring",
    description: "Round-the-clock monitoring to detect and prevent issues",
    features: [
      "AI-powered risk detection",
      "Real-time safety alerts",
      "Proactive intervention",
      "Community reporting system",
      "Rapid response protocols",
      "Continuous platform monitoring",
    ],
  },
  {
    icon: Headphones,
    title: "Emergency Support",
    description: "Immediate assistance when you need it most",
    features: [
      "24/7 emergency hotline",
      "Multilingual support team",
      "Local emergency contacts",
      "Crisis intervention protocols",
      "Alternative accommodation assistance",
      "Law enforcement coordination",
    ],
  },
]

const trustIndicators = [
  {
    badge: "Verified Host",
    description: "Host has completed identity verification and property inspection",
    icon: CheckCircle,
    color: "text-green-600",
  },
  {
    badge: "Superhost",
    description: "Exceptional host with outstanding reviews and response rates",
    icon: Star,
    color: "text-yellow-600",
  },
  {
    badge: "Instant Book",
    description: "Property can be booked immediately without host approval",
    icon: Clock,
    color: "text-blue-600",
  },
  {
    badge: "Professional Host",
    description: "Host manages multiple properties with professional standards",
    icon: Home,
    color: "text-purple-600",
  },
  {
    badge: "Secure Property",
    description: "Property has enhanced security features and protocols",
    icon: Lock,
    color: "text-red-600",
  },
  {
    badge: "Photo Verified",
    description: "Property photos have been verified to match actual conditions",
    icon: Camera,
    color: "text-indigo-600",
  },
]

const guestSafetyTips = [
  {
    category: "Before Booking",
    tips: [
      "Read all reviews carefully, especially recent ones",
      "Check the host's verification status and response rate",
      "Review the property's safety features and amenities",
      "Understand the cancellation policy before booking",
      "Verify the exact location and neighborhood safety",
      "Contact the host with any questions before booking",
    ],
  },
  {
    category: "During Your Stay",
    tips: [
      "Keep your booking confirmation and host contact info handy",
      "Document the property condition upon arrival",
      "Follow all house rules and local regulations",
      "Keep emergency contacts easily accessible",
      "Report any safety concerns immediately",
      "Maintain communication with the host as needed",
    ],
  },
  {
    category: "Communication",
    tips: [
      "Keep all communication within the Roomy platform",
      "Never share personal financial information",
      "Be respectful and clear in all communications",
      "Report inappropriate behavior immediately",
      "Save important messages and confirmations",
      "Use the platform's messaging system for documentation",
    ],
  },
]

const hostSafetyTips = [
  {
    category: "Property Preparation",
    tips: [
      "Install smoke and carbon monoxide detectors",
      "Provide clear emergency exit information",
      "Ensure all locks and security systems work properly",
      "Remove or secure valuable personal items",
      "Provide emergency contact information",
      "Maintain property insurance coverage",
    ],
  },
  {
    category: "Guest Screening",
    tips: [
      "Review guest profiles and reviews before accepting",
      "Communicate clearly about house rules and expectations",
      "Verify guest identity through the platform",
      "Set clear check-in and check-out procedures",
      "Document property condition before and after stays",
      "Trust your instincts about potential guests",
    ],
  },
  {
    category: "During Hosting",
    tips: [
      "Be responsive to guest communications",
      "Respect guest privacy while being available for help",
      "Address any issues promptly and professionally",
      "Keep detailed records of all interactions",
      "Report any concerning behavior to Roomy",
      "Follow up after checkout to ensure satisfaction",
    ],
  },
]

const emergencyContacts = [
  {
    service: "Police Emergency",
    number: "999",
    description: "For immediate police assistance and criminal emergencies",
  },
  {
    service: "Medical Emergency",
    number: "911",
    description: "For medical emergencies and ambulance services",
  },
  {
    service: "Fire Department",
    number: "999",
    description: "For fire emergencies and rescue services",
  },
  {
    service: "Tourist Police",
    number: "+256 414 344 016",
    description: "Specialized police unit for tourist-related issues",
  },
  {
    service: "Roomy Emergency Line",
    number: "+256 700 123 456",
    description: "24/7 emergency support for Roomy users",
  },
  {
    service: "Uganda Red Cross",
    number: "+256 414 258 701",
    description: "Emergency assistance and disaster response",
  },
]

const safetyResources = [
  {
    title: "Safety Guidelines PDF",
    description: "Comprehensive safety guide for guests and hosts",
    type: "PDF",
    size: "2.5 MB",
    downloads: 15420,
  },
  {
    title: "Emergency Procedures Video",
    description: "What to do in case of emergencies during your stay",
    type: "Video",
    duration: "8 min",
    views: 8750,
  },
  {
    title: "Property Safety Checklist",
    description: "Essential safety items every property should have",
    type: "PDF",
    size: "1.2 MB",
    downloads: 12300,
  },
  {
    title: "Communication Best Practices",
    description: "How to communicate safely on the platform",
    type: "Article",
    readTime: "5 min",
    views: 9800,
  },
  {
    title: "Neighborhood Safety Guide",
    description: "Tips for staying safe in different areas of Uganda",
    type: "PDF",
    size: "3.1 MB",
    downloads: 7650,
  },
  {
    title: "Host Safety Training",
    description: "Complete safety training course for hosts",
    type: "Video Course",
    duration: "45 min",
    completions: 5200,
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
            Learn about our comprehensive safety measures, get important safety tips, and access emergency resources to
            ensure a secure experience on Roomy.
          </p>
        </div>

        {/* Emergency Alert */}
        <Alert className="mb-12 border-red-200 bg-red-50">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800">
            <strong>Emergency Hotline:</strong> If you're experiencing a safety emergency, call our 24/7 emergency line
            at <strong>+256 700 123 456</strong> or contact local emergency services at <strong>999</strong>.
          </AlertDescription>
        </Alert>

        {/* Safety Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">How We Keep You Safe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {safetyFeatures.map((feature, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
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

        {/* Trust Indicators */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Trust & Safety Badges</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Look for these badges when booking to identify verified, trusted hosts and properties
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustIndicators.map((indicator, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <indicator.icon className={`w-6 h-6 ${indicator.color}`} />
                    <Badge variant="outline" className="font-medium">
                      {indicator.badge}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{indicator.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Safety Tips */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Safety Tips</h2>
          <Tabs defaultValue="guests" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="guests">For Guests</TabsTrigger>
              <TabsTrigger value="hosts">For Hosts</TabsTrigger>
            </TabsList>

            <TabsContent value="guests" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {guestSafetyTips.map((category, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{category.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {category.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="hosts" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {hostSafetyTips.map((category, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{category.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {category.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Emergency Contacts */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Emergency Contacts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emergencyContacts.map((contact, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="font-semibold text-lg mb-2">{contact.service}</h3>
                    <div className="text-3xl font-bold text-primary mb-3">{contact.number}</div>
                    <p className="text-sm text-muted-foreground">{contact.description}</p>
                    <Button className="w-full mt-4 bg-transparent" variant="outline">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Safety Resources */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Safety Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safetyResources.map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg line-clamp-2">{resource.title}</CardTitle>
                    <Badge variant="outline">{resource.type}</Badge>
                  </div>
                  <CardDescription className="line-clamp-2">{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    {resource.size && <span>Size: {resource.size}</span>}
                    {resource.duration && <span>Duration: {resource.duration}</span>}
                    {resource.readTime && <span>Read time: {resource.readTime}</span>}
                    <span>
                      {resource.downloads && `${resource.downloads} downloads`}
                      {resource.views && `${resource.views} views`}
                      {resource.completions && `${resource.completions} completed`}
                    </span>
                  </div>
                  <Button className="w-full">
                    {resource.type === "Video" || resource.type === "Video Course" ? (
                      <>
                        <Play className="w-4 h-4 mr-2" />
                        Watch
                      </>
                    ) : resource.type === "PDF" ? (
                      <>
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </>
                    ) : (
                      <>
                        <FileText className="w-4 h-4 mr-2" />
                        Read
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Report Safety Concerns */}
        <Card className="bg-orange-50 border-orange-200">
          <CardContent className="text-center py-12">
            <AlertTriangle className="w-16 h-16 mx-auto mb-6 text-orange-600" />
            <h2 className="text-3xl font-bold mb-4 text-orange-800">Report Safety Concerns</h2>
            <p className="text-lg mb-8 text-orange-700 max-w-2xl mx-auto">
              If you encounter any safety issues or have concerns about a property or host, report it immediately. We
              take all safety reports seriously and investigate promptly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Report Safety Issue
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white bg-transparent"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Safety Team
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  )
}
