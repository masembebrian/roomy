import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Heart, Users, Eye, Ear, Armchair as Wheelchair, Brain, Phone, Mail } from "lucide-react"

const accessibilityFeatures = [
  {
    icon: Wheelchair,
    title: "Mobility Accessibility",
    description: "Features for guests with mobility needs",
    features: [
      "Step-free access to property",
      "Wide doorways (32+ inches)",
      "Accessible parking spaces",
      "Ramps and elevators",
      "Roll-in showers",
      "Grab bars in bathrooms",
      "Accessible height beds",
      "Clear pathways throughout",
    ],
  },
  {
    icon: Eye,
    title: "Vision Accessibility",
    description: "Support for guests with visual impairments",
    features: [
      "High contrast lighting",
      "Braille signage available",
      "Audio descriptions provided",
      "Large print materials",
      "Voice-guided navigation",
      "Tactile indicators",
      "Screen reader compatibility",
      "Clear visual markers",
    ],
  },
  {
    icon: Ear,
    title: "Hearing Accessibility",
    description: "Features for guests with hearing needs",
    features: [
      "Visual alert systems",
      "Vibrating alarm clocks",
      "Closed captioning on TVs",
      "Sign language interpretation",
      "Text-based communication",
      "Hearing loop systems",
      "Visual doorbells",
      "Written emergency procedures",
    ],
  },
  {
    icon: Brain,
    title: "Cognitive Accessibility",
    description: "Support for cognitive and neurological needs",
    features: [
      "Clear, simple instructions",
      "Quiet spaces available",
      "Flexible check-in times",
      "Sensory-friendly environments",
      "Easy-to-navigate layouts",
      "Consistent room organization",
      "Reduced sensory stimulation",
      "Patient, understanding hosts",
    ],
  },
]

const platformFeatures = [
  {
    title: "Accessible Search Filters",
    description: "Find properties that meet your specific accessibility needs",
    icon: Eye,
    details: [
      "Filter by accessibility features",
      "Detailed accessibility descriptions",
      "Photo verification of features",
      "Host accessibility ratings",
      "Guest accessibility reviews",
    ],
  },
  {
    title: "Communication Support",
    description: "Multiple ways to communicate with hosts and support",
    icon: Phone,
    details: [
      "Text-based messaging",
      "Video call options",
      "Sign language interpretation",
      "Multi-language support",
      "24/7 accessibility support line",
    ],
  },
  {
    title: "Booking Assistance",
    description: "Personalized help with your booking process",
    icon: Heart,
    details: [
      "Dedicated accessibility team",
      "Custom booking assistance",
      "Property verification calls",
      "Special request coordination",
      "Travel planning support",
    ],
  },
]

const hostResources = [
  {
    title: "Accessibility Training",
    description: "Education for hosts on disability awareness and accommodation",
    topics: [
      "Disability etiquette and language",
      "Understanding different accessibility needs",
      "Making properties more accessible",
      "Communication best practices",
      "Legal requirements and guidelines",
    ],
  },
  {
    title: "Property Assessment",
    description: "Help hosts evaluate and improve their property's accessibility",
    services: [
      "Free accessibility audits",
      "Improvement recommendations",
      "Cost-effective modification ideas",
      "Accessibility feature verification",
      "Professional consultation services",
    ],
  },
  {
    title: "Support Network",
    description: "Connect with other inclusive hosts and accessibility experts",
    benefits: [
      "Host community forums",
      "Best practice sharing",
      "Expert guest speakers",
      "Accessibility certification programs",
      "Recognition for inclusive hosting",
    ],
  },
]

const partnerships = [
  {
    name: "Uganda National Association of the Deaf",
    description: "Promoting deaf awareness and sign language accessibility",
    focus: "Hearing accessibility",
  },
  {
    name: "National Union of Disabled Persons of Uganda",
    description: "Advocating for disability rights and inclusion",
    focus: "General disability advocacy",
  },
  {
    name: "Sight Savers Uganda",
    description: "Supporting people with visual impairments",
    focus: "Vision accessibility",
  },
  {
    name: "Uganda Society for Disabled Children",
    description: "Supporting families with disabled children",
    focus: "Family accessibility",
  },
]

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-primary/10 p-4 rounded-full">
              <Heart className="w-16 h-16 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Accessibility & Inclusion</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We believe travel should be accessible to everyone. Learn about our commitment to creating inclusive
            experiences for all guests and hosts.
          </p>
        </div>

        {/* Accessibility Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Accessibility Features</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {accessibilityFeatures.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{category.title}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {category.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Platform Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">How We Support You</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {platformFeatures.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-left">
                    {feature.details.map((detail, detailIndex) => (
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

        {/* Host Resources */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Resources for Hosts</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            We provide comprehensive support to help hosts create more accessible and inclusive experiences
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {hostResources.map((resource, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {(resource.topics || resource.services || resource.benefits).map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Partnerships */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Partners</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            We work with leading disability organizations in Uganda to improve accessibility and inclusion
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partnerships.map((partner, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{partner.name}</CardTitle>
                    <Badge variant="outline">{partner.focus}</Badge>
                  </div>
                  <CardDescription>{partner.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full bg-transparent">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Get Accessibility Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Phone className="w-6 h-6 text-primary" />
                  <CardTitle>Phone Support</CardTitle>
                </div>
                <CardDescription>Speak with our accessibility specialists</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold">Accessibility Hotline</p>
                    <p className="text-2xl font-bold text-primary">+256 700 123 456</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Available 24/7</p>
                    <p className="text-sm text-muted-foreground">Sign language interpretation available</p>
                  </div>
                  <Button className="w-full">Call Now</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Mail className="w-6 h-6 text-primary" />
                  <CardTitle>Email Support</CardTitle>
                </div>
                <CardDescription>Send us your accessibility questions or requests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold">Accessibility Team</p>
                    <p className="text-lg text-primary">accessibility@roomy.ug</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Response within 24 hours</p>
                    <p className="text-sm text-muted-foreground">Available in multiple formats</p>
                  </div>
                  <Button className="w-full">Send Email</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Commitment Statement */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="text-center py-12">
            <Users className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl font-bold mb-4">Our Accessibility Commitment</h2>
            <p className="text-lg mb-8 opacity-90 max-w-3xl mx-auto">
              We're committed to making travel accessible for everyone. We continuously work to improve our platform,
              support our community, and break down barriers to travel. Your feedback helps us create a more inclusive
              experience for all.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Share Feedback
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Browse Accessible Properties
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  )
}
