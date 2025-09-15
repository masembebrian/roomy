import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Footer from "@/components/footer"
import { Home, DollarSign, Users, Star, Shield, Camera, CheckCircle, TrendingUp, Award, Phone } from "lucide-react"

const hostingBenefits = [
  {
    icon: DollarSign,
    title: "Earn Extra Income",
    description: "Average hosts in Kampala earn UGX 800,000 per month",
    highlight: "UGX 800K/month",
  },
  {
    icon: Users,
    title: "Meet Amazing People",
    description: "Connect with travelers from around the world",
    highlight: "Global Community",
  },
  {
    icon: Shield,
    title: "Host Protection",
    description: "Up to UGX 50M coverage for property damage",
    highlight: "Full Protection",
  },
  {
    icon: Star,
    title: "Build Your Reputation",
    description: "Earn reviews and become a Superhost",
    highlight: "Superhost Status",
  },
]

const hostingSteps = [
  {
    step: 1,
    title: "Tell us about your space",
    description: "Share some basic info, like where it is and how many guests can stay",
    icon: Home,
    timeEstimate: "10 minutes",
  },
  {
    step: 2,
    title: "Make it stand out",
    description: "Add 5 or more photos plus a title and description",
    icon: Camera,
    timeEstimate: "15 minutes",
  },
  {
    step: 3,
    title: "Finish and publish",
    description: "Choose a starting price, verify your identity, and publish your listing",
    icon: CheckCircle,
    timeEstimate: "10 minutes",
  },
]

const propertyTypes = [
  {
    type: "Entire Home",
    description: "Guests have the whole place to themselves",
    earnings: "UGX 120,000/night",
    popularity: "Most Popular",
    image: "/placeholder.svg?height=200&width=300&text=Entire+Home",
  },
  {
    type: "Private Room",
    description: "Guests have their own room in a shared home",
    earnings: "UGX 60,000/night",
    popularity: "Great for Beginners",
    image: "/placeholder.svg?height=200&width=300&text=Private+Room",
  },
  {
    type: "Shared Room",
    description: "Guests sleep in a room shared with others",
    earnings: "UGX 30,000/night",
    popularity: "Budget Friendly",
    image: "/placeholder.svg?height=200&width=300&text=Shared+Room",
  },
]

const hostRequirements = [
  {
    category: "Legal Requirements",
    requirements: [
      "Valid Ugandan ID or passport",
      "Proof of property ownership or rental agreement",
      "Business license (for commercial hosting)",
      "Tax registration number",
    ],
  },
  {
    category: "Property Standards",
    requirements: [
      "Clean and well-maintained space",
      "Basic amenities (bed, bathroom, kitchen access)",
      "Safety features (smoke detectors, first aid kit)",
      "Reliable internet connection",
    ],
  },
  {
    category: "Host Responsibilities",
    requirements: [
      "Respond to inquiries within 24 hours",
      "Provide accurate listing information",
      "Maintain cleanliness standards",
      "Be available for guest support",
    ],
  },
]

const successStories = [
  {
    name: "Sarah Nakato",
    location: "Kampala",
    propertyType: "2-bedroom apartment",
    monthlyEarnings: "UGX 1,200,000",
    story:
      "Started hosting my spare room and now I've expanded to 3 properties. Hosting has given me financial independence and I've met incredible people from around the world.",
    rating: 4.9,
    reviews: 127,
    image: "/placeholder.svg?height=200&width=200&text=Sarah+Host",
  },
  {
    name: "David Okello",
    location: "Entebbe",
    propertyType: "Lakeside cottage",
    monthlyEarnings: "UGX 800,000",
    story:
      "My family cottage was sitting empty most of the year. Now it's booked almost every weekend and helps pay for maintenance and improvements.",
    rating: 4.8,
    reviews: 89,
    image: "/placeholder.svg?height=200&width=200&text=David+Host",
  },
  {
    name: "Grace Atim",
    location: "Jinja",
    propertyType: "Adventure lodge",
    monthlyEarnings: "UGX 1,500,000",
    story:
      "Turned my passion for adventure tourism into a thriving business. My guests love the personalized experience and adventure activities I offer.",
    rating: 5.0,
    reviews: 156,
    image: "/placeholder.svg?height=200&width=200&text=Grace+Host",
  },
]

const supportResources = [
  {
    title: "Host Onboarding",
    description: "Step-by-step guidance to get your listing live",
    features: ["Personal onboarding call", "Listing optimization tips", "Photography guidance", "Pricing strategy"],
  },
  {
    title: "24/7 Host Support",
    description: "Get help whenever you need it",
    features: ["Emergency hotline", "Live chat support", "Email assistance", "Community forums"],
  },
  {
    title: "Host Education",
    description: "Learn best practices and grow your business",
    features: ["Hosting workshops", "Online courses", "Best practice guides", "Legal compliance training"],
  },
  {
    title: "Marketing Tools",
    description: "Promote your listing and attract more guests",
    features: ["Professional photography", "Social media templates", "Listing optimization", "Promotional campaigns"],
  },
]

const earningsCalculator = {
  averageNightlyRate: 100000,
  occupancyRate: 65,
  monthlyNights: 30,
}

export default function BecomeHostPage() {
  const estimatedMonthlyEarnings = Math.round(
    (earningsCalculator.averageNightlyRate * earningsCalculator.monthlyNights * earningsCalculator.occupancyRate) / 100,
  )

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 p-4 rounded-full">
              <Home className="w-16 h-16 text-green-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Become a Roomy Host</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Turn your extra space into extra income. Join thousands of hosts across Uganda who are earning money by
            sharing their homes.
          </p>
          <Button size="lg" className="mr-4">
            <Home className="w-5 h-5 mr-2" />
            Start Hosting
          </Button>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>

        {/* Earnings Calculator */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Estimate Your Earnings</CardTitle>
              <CardDescription>See how much you could earn hosting in Uganda</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-600">
                    UGX {earningsCalculator.averageNightlyRate.toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">Average nightly rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">{earningsCalculator.occupancyRate}%</div>
                  <div className="text-sm text-muted-foreground">Average occupancy rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600">
                    {Math.round((earningsCalculator.monthlyNights * earningsCalculator.occupancyRate) / 100)}
                  </div>
                  <div className="text-sm text-muted-foreground">Booked nights/month</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">UGX {estimatedMonthlyEarnings.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">Estimated monthly earnings</div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <Button>
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Calculate Your Potential
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Hosting Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Why Host with Roomy?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hostingBenefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{benefit.description}</p>
                  <Badge variant="secondary">{benefit.highlight}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Property Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">What Can You Host?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {propertyTypes.map((property, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video bg-gray-100">
                  <img
                    src={property.image || "/placeholder.svg"}
                    alt={property.type}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{property.type}</CardTitle>
                    <Badge variant="outline">{property.popularity}</Badge>
                  </div>
                  <CardDescription>{property.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary mb-4">{property.earnings}</div>
                  <Button className="w-full">Start with {property.type}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How to Get Started */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">How to Get Started</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hostingSteps.map((step, index) => (
              <Card key={index} className="text-center relative">
                <CardContent className="p-8">
                  <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{step.description}</p>
                  <Badge variant="outline">{step.timeEstimate}</Badge>
                </CardContent>
                {index < hostingSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-primary/30"></div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Requirements */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Host Requirements</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {hostRequirements.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.requirements.map((requirement, reqIndex) => (
                      <li key={reqIndex} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Host Success Stories</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <img
                      src={story.image || "/placeholder.svg"}
                      alt={story.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <CardTitle className="text-lg">{story.name}</CardTitle>
                      <CardDescription>{story.location}</CardDescription>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{story.rating}</span>
                        <span className="text-sm text-muted-foreground">({story.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-muted-foreground">Property Type</div>
                      <div className="font-medium">{story.propertyType}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Monthly Earnings</div>
                      <div className="font-medium text-green-600">{story.monthlyEarnings}</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground italic">"{story.story}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Support Resources */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">We Support You Every Step</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {supportResources.map((resource, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {resource.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="text-center py-12">
            <Award className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl font-bold mb-4">Ready to Start Hosting?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of successful hosts across Uganda. Start your hosting journey today and turn your space
              into income.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                <Home className="w-5 h-5 mr-2" />
                List Your Space
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Phone className="w-5 h-5 mr-2" />
                Talk to Host Advisor
              </Button>
            </div>
            <p className="text-sm mt-4 opacity-75">Questions? Call our Host Support: +256 700 123 456</p>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  )
}
