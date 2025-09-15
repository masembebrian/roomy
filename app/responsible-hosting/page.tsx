import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Footer from "@/components/footer"
import {
  Leaf,
  Users,
  Heart,
  Shield,
  Home,
  Recycle,
  Droplets,
  Zap,
  TreePine,
  HandHeart,
  CheckCircle,
  Star,
  Award,
  Globe,
} from "lucide-react"

const sustainabilityPrinciples = [
  {
    icon: Leaf,
    title: "Environmental Stewardship",
    description: "Minimize environmental impact through sustainable practices",
    practices: [
      "Use renewable energy sources where possible",
      "Implement water conservation measures",
      "Reduce, reuse, and recycle waste",
      "Choose eco-friendly cleaning products",
      "Promote local and organic food options",
    ],
  },
  {
    icon: Users,
    title: "Community Integration",
    description: "Support and respect local communities",
    practices: [
      "Hire local staff and service providers",
      "Source goods from local businesses",
      "Respect local customs and traditions",
      "Contribute to community development",
      "Educate guests about local culture",
    ],
  },
  {
    icon: Heart,
    title: "Social Responsibility",
    description: "Create positive social impact",
    practices: [
      "Ensure fair wages and working conditions",
      "Support local charities and causes",
      "Promote cultural exchange and understanding",
      "Provide accessible accommodations",
      "Foster inclusive environments",
    ],
  },
  {
    icon: Shield,
    title: "Ethical Business Practices",
    description: "Operate with integrity and transparency",
    practices: [
      "Maintain honest and accurate listings",
      "Respect guest privacy and data",
      "Follow all local laws and regulations",
      "Practice fair pricing policies",
      "Provide excellent customer service",
    ],
  },
]

const environmentalTips = [
  {
    category: "Energy Conservation",
    icon: Zap,
    tips: [
      "Install LED lighting throughout your property",
      "Use programmable thermostats for climate control",
      "Provide fans instead of air conditioning when possible",
      "Install solar panels or use renewable energy",
      "Unplug electronics when not in use",
      "Use energy-efficient appliances",
    ],
  },
  {
    category: "Water Conservation",
    icon: Droplets,
    tips: [
      "Install low-flow showerheads and faucets",
      "Fix leaks promptly to prevent water waste",
      "Use drought-resistant plants in landscaping",
      "Collect rainwater for garden irrigation",
      "Provide guests with water conservation tips",
      "Use water-efficient washing machines",
    ],
  },
  {
    category: "Waste Reduction",
    icon: Recycle,
    tips: [
      "Provide recycling bins and clear instructions",
      "Use refillable dispensers for toiletries",
      "Compost organic waste when possible",
      "Avoid single-use plastics and disposables",
      "Donate unused items to local charities",
      "Choose products with minimal packaging",
    ],
  },
  {
    category: "Green Spaces",
    icon: TreePine,
    tips: [
      "Plant native trees and vegetation",
      "Create organic gardens for guests to enjoy",
      "Use natural pest control methods",
      "Maintain green spaces without harmful chemicals",
      "Provide outdoor spaces for relaxation",
      "Support local reforestation efforts",
    ],
  },
]

const communityImpact = [
  {
    title: "Local Economic Support",
    description: "Boost the local economy through responsible hosting",
    actions: [
      "Partner with local tour guides and activity providers",
      "Recommend local restaurants and shops to guests",
      "Source furniture and decor from local artisans",
      "Hire local cleaning and maintenance services",
      "Support local farmers markets and producers",
    ],
    impact: "UGX 2.5M+ contributed to local economy annually per host",
  },
  {
    title: "Cultural Preservation",
    description: "Help preserve and promote Ugandan culture",
    actions: [
      "Display local art and crafts in your property",
      "Provide information about local history and traditions",
      "Organize cultural experiences for guests",
      "Support local cultural events and festivals",
      "Collaborate with cultural centers and museums",
    ],
    impact: "85% of guests report increased cultural appreciation",
  },
  {
    title: "Community Development",
    description: "Contribute to community growth and development",
    actions: [
      "Participate in local community meetings",
      "Support education and healthcare initiatives",
      "Volunteer for community improvement projects",
      "Mentor other aspiring hosts in your area",
      "Advocate for responsible tourism policies",
    ],
    impact: "200+ community projects supported by host network",
  },
]

const certificationProgram = {
  levels: [
    {
      name: "Responsible Host",
      requirements: 5,
      badge: "Bronze",
      color: "bg-orange-100 text-orange-800",
      benefits: ["Recognition badge", "Marketing support", "Resource access"],
    },
    {
      name: "Sustainable Host",
      requirements: 10,
      badge: "Silver",
      color: "bg-gray-100 text-gray-800",
      benefits: ["Priority listing placement", "Sustainability toolkit", "Expert consultation"],
    },
    {
      name: "Community Champion",
      requirements: 15,
      badge: "Gold",
      color: "bg-yellow-100 text-yellow-800",
      benefits: ["Featured host status", "Speaking opportunities", "Annual recognition event"],
    },
  ],
  criteria: [
    "Implement energy conservation measures",
    "Use water-saving fixtures and practices",
    "Provide recycling and waste reduction",
    "Source from local businesses (minimum 50%)",
    "Hire local staff and service providers",
    "Display local art and cultural information",
    "Offer cultural experiences to guests",
    "Maintain transparent and honest listings",
    "Achieve minimum 4.5-star guest rating",
    "Complete responsible hosting training",
    "Participate in community initiatives",
    "Use eco-friendly cleaning products",
    "Provide guests with sustainability information",
    "Support local charities or causes",
    "Implement accessibility features",
  ],
}

const successStories = [
  {
    name: "Sarah Nakato",
    location: "Kampala",
    certification: "Community Champion",
    story:
      "Transformed my hosting business into a model of sustainability. I now source 90% of supplies locally, employ 5 community members, and my guests love the authentic cultural experiences I provide.",
    achievements: [
      "Reduced energy consumption by 40%",
      "Supports 3 local artisan families",
      "Hosts monthly cultural evenings",
      "Mentored 12 new hosts",
    ],
    image: "/placeholder.svg?height=200&width=200&text=Sarah+Host",
  },
  {
    name: "David Okello",
    location: "Entebbe",
    certification: "Sustainable Host",
    story:
      "Started with simple changes like LED lights and local sourcing. Now my lakeside property is completely solar-powered and guests often extend their stays to enjoy the peaceful, eco-friendly environment.",
    achievements: [
      "100% renewable energy powered",
      "Zero single-use plastics",
      "Organic garden for guest meals",
      "Rainwater harvesting system",
    ],
    image: "/placeholder.svg?height=200&width=200&text=David+Host",
  },
  {
    name: "Grace Atim",
    location: "Jinja",
    certification: "Responsible Host",
    story:
      "My adventure lodge focuses on responsible tourism. We partner with local communities for authentic experiences while ensuring tourism benefits everyone, not just visitors.",
    achievements: [
      "Partners with 8 local businesses",
      "Employs 15 community members",
      "Funds local school programs",
      "Offers community-led tours",
    ],
    image: "/placeholder.svg?height=200&width=200&text=Grace+Host",
  },
]

export default function ResponsibleHostingPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 p-4 rounded-full">
              <Globe className="w-16 h-16 text-green-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">How to Host Responsibly</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Create positive impact through sustainable, ethical, and community-focused hosting practices that benefit
            everyone.
          </p>
        </div>

        {/* Commitment Alert */}
        <Alert className="mb-12 border-green-200 bg-green-50">
          <Leaf className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-800">
            <strong>Our Commitment:</strong> We're dedicated to promoting responsible hosting practices that protect our
            environment, support local communities, and create authentic experiences for travelers.
          </AlertDescription>
        </Alert>

        {/* Sustainability Principles */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Principles of Responsible Hosting</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sustainabilityPrinciples.map((principle, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <principle.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{principle.title}</CardTitle>
                      <CardDescription>{principle.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {principle.practices.map((practice, practiceIndex) => (
                      <li key={practiceIndex} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{practice}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Environmental Tips */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Environmental Best Practices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {environmentalTips.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <category.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <CardTitle className="text-lg">{category.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
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
        </div>

        {/* Community Impact */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Community Impact</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {communityImpact.map((impact, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{impact.title}</CardTitle>
                  <CardDescription>{impact.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {impact.actions.map((action, actionIndex) => (
                      <li key={actionIndex} className="flex items-start gap-2">
                        <HandHeart className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{action}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="text-sm font-medium text-blue-800">Impact:</div>
                    <div className="text-sm text-blue-700">{impact.impact}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certification Program */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Responsible Host Certification</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Earn recognition for your commitment to responsible hosting practices and gain access to exclusive benefits.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {certificationProgram.levels.map((level, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="bg-primary/10 p-4 rounded-full">
                      <Award className="w-12 h-12 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{level.name}</CardTitle>
                  <Badge className={level.color}>{level.badge}</Badge>
                  <CardDescription className="mt-2">
                    Complete {level.requirements} criteria to earn this certification
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {level.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-500" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Certification Criteria</CardTitle>
              <CardDescription>Meet these requirements to earn your responsible hosting certification</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {certificationProgram.criteria.map((criterion, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{criterion}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
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
                      <Badge className="mt-1 bg-green-100 text-green-800">{story.certification}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground italic">"{story.story}"</p>
                  <div>
                    <h4 className="font-medium text-sm mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {story.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-3 h-3 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-xs text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Getting Started */}
        <Card className="mb-16 bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
          <CardContent className="text-center py-12">
            <Leaf className="w-16 h-16 mx-auto mb-6 text-green-600" />
            <h2 className="text-3xl font-bold mb-4 text-green-800">Start Your Responsible Hosting Journey</h2>
            <p className="text-lg mb-8 text-green-700 max-w-2xl mx-auto">
              Take the first step towards becoming a certified responsible host. Small changes can make a big
              difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-green-600 hover:bg-green-700">
                <Award className="w-5 h-5 mr-2" />
                Start Certification
              </Button>
              <Button
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white bg-transparent"
              >
                <Home className="w-5 h-5 mr-2" />
                Assessment Tool
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="text-center py-12">
            <Globe className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl font-bold mb-4">Make a Positive Impact</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Join the movement of responsible hosts who are creating positive change in their communities while
              building successful hosting businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                <Users className="w-5 h-5 mr-2" />
                Join Community
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <HandHeart className="w-5 h-5 mr-2" />
                Get Resources
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  )
}
