import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Footer from "@/components/footer"
import {
  Heart,
  Home,
  Users,
  Globe,
  BookOpen,
  Briefcase,
  GraduationCap,
  HandHeart,
  MapPin,
  Phone,
  Mail,
  CheckCircle,
} from "lucide-react"

const programStats = [
  {
    icon: Home,
    label: "Families Housed",
    value: "150+",
    description: "Afghan refugee families provided with housing",
  },
  {
    icon: Users,
    label: "Individuals Supported",
    value: "650+",
    description: "Afghan refugees assisted with accommodation",
  },
  {
    icon: Globe,
    label: "Host Families",
    value: "200+",
    description: "Ugandan families opened their homes",
  },
  {
    icon: Heart,
    label: "Success Stories",
    value: "85%",
    description: "Families successfully integrated into communities",
  },
]

const supportServices = [
  {
    icon: Home,
    title: "Emergency Housing",
    description: "Immediate temporary accommodation for newly arrived refugee families",
    features: [
      "Safe, furnished accommodation",
      "Basic household essentials provided",
      "Family-friendly environments",
      "Cultural sensitivity training for hosts",
    ],
  },
  {
    icon: BookOpen,
    title: "Language Support",
    description: "English and local language classes to help with integration",
    features: [
      "Basic English conversation classes",
      "Luganda language lessons",
      "Cultural orientation sessions",
      "Community integration workshops",
    ],
  },
  {
    icon: Briefcase,
    title: "Employment Assistance",
    description: "Job placement and skills development programs",
    features: [
      "Skills assessment and matching",
      "CV writing and interview preparation",
      "Job placement assistance",
      "Entrepreneurship support programs",
    ],
  },
  {
    icon: GraduationCap,
    title: "Education Support",
    description: "School enrollment and educational support for children",
    features: [
      "School enrollment assistance",
      "Educational material provision",
      "Tutoring and homework support",
      "University scholarship programs",
    ],
  },
]

const successStories = [
  {
    name: "Ahmad Family",
    location: "Kampala",
    story:
      "After fleeing Afghanistan, the Ahmad family found safety and support through Roomy.org. They were housed with the Nakato family in Kampala, where they learned English and the children enrolled in local schools. Ahmad now works as a translator for an NGO.",
    duration: "18 months",
    outcome: "Permanent housing secured, children in school",
    image: "/placeholder.svg?height=200&width=300&text=Ahmad+Family",
  },
  {
    name: "Fatima's Journey",
    location: "Entebbe",
    story:
      "Fatima, a former teacher from Kabul, was matched with a host family in Entebbe. With support from our education program, she now teaches at a local school and has become a bridge between the Afghan and Ugandan communities.",
    duration: "12 months",
    outcome: "Teaching position secured, community leader",
    image: "/placeholder.svg?height=200&width=300&text=Fatima+Teaching",
  },
  {
    name: "Hassan's Business",
    location: "Jinja",
    story:
      "Hassan used his carpentry skills and our entrepreneurship program to start a furniture business in Jinja. He now employs both Afghan refugees and local Ugandans, creating jobs and building community connections.",
    duration: "24 months",
    outcome: "Successful business owner, job creator",
    image: "/placeholder.svg?height=200&width=300&text=Hassan+Carpentry",
  },
]

const partnerOrganizations = [
  {
    name: "UNHCR Uganda",
    role: "Refugee Protection & Coordination",
    description: "Primary UN agency for refugee protection and assistance",
  },
  {
    name: "Office of the Prime Minister",
    role: "Government Coordination",
    description: "Uganda's lead agency for refugee affairs",
  },
  {
    name: "InterAid Uganda",
    role: "Settlement Support",
    description: "Community integration and livelihood programs",
  },
  {
    name: "Windle International Uganda",
    role: "Education Services",
    description: "Educational support and scholarship programs",
  },
  {
    name: "AIRD (Association of Refugees)",
    role: "Community Advocacy",
    description: "Refugee-led advocacy and support organization",
  },
]

export default function AfghanRefugeesPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-100 p-4 rounded-full">
              <Globe className="w-16 h-16 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Supporting Afghan Refugees</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            In partnership with UNHCR and the Government of Uganda, we provide housing and integration support for
            Afghan refugees seeking safety and new beginnings in Uganda.
          </p>
        </div>

        {/* Program Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {programStats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="font-semibold mb-1">{stat.label}</div>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Support Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Support Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {supportServices.map((service, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
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

        {/* Success Stories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Success Stories</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            These stories showcase the resilience of Afghan refugees and the power of community support in Uganda.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video bg-gray-100">
                  <img
                    src={story.image || "/placeholder.svg"}
                    alt={story.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{story.name}</CardTitle>
                    <Badge variant="outline">{story.duration}</Badge>
                  </div>
                  <CardDescription className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {story.location}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{story.story}</p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="font-medium text-sm text-green-800">Outcome</span>
                    </div>
                    <p className="text-sm text-green-700">{story.outcome}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How to Help */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">How You Can Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-6">
                  <Home className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Host a Family</h3>
                <p className="text-muted-foreground mb-6">
                  Open your home to an Afghan refugee family. We provide full support, training, and coordination.
                </p>
                <Button className="w-full">Become a Host</Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-6">
                  <HandHeart className="w-12 h-12 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Volunteer</h3>
                <p className="text-muted-foreground mb-6">
                  Help with language classes, job training, cultural orientation, or administrative support.
                </p>
                <Button className="w-full">Join as Volunteer</Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="bg-purple-100 p-4 rounded-full w-fit mx-auto mb-6">
                  <Briefcase className="w-12 h-12 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Offer Employment</h3>
                <p className="text-muted-foreground mb-6">
                  Provide job opportunities for skilled Afghan refugees in your business or organization.
                </p>
                <Button className="w-full">Post Jobs</Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Partners */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerOrganizations.map((partner, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{partner.name}</CardTitle>
                  <CardDescription>{partner.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Current Needs */}
        <Card className="mb-16 bg-orange-50 border-orange-200">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Current Urgent Needs</CardTitle>
            <CardDescription className="text-center">
              We are actively seeking support in these critical areas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-orange-100 p-3 rounded-full w-fit mx-auto mb-3">
                  <Home className="w-8 h-8 text-orange-600" />
                </div>
                <h4 className="font-semibold mb-2">Host Families</h4>
                <p className="text-sm text-muted-foreground">Need 25 more host families for incoming refugees</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 p-3 rounded-full w-fit mx-auto mb-3">
                  <BookOpen className="w-8 h-8 text-orange-600" />
                </div>
                <h4 className="font-semibold mb-2">English Teachers</h4>
                <p className="text-sm text-muted-foreground">Volunteer teachers for language classes</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 p-3 rounded-full w-fit mx-auto mb-3">
                  <Briefcase className="w-8 h-8 text-orange-600" />
                </div>
                <h4 className="font-semibold mb-2">Job Opportunities</h4>
                <p className="text-sm text-muted-foreground">Employment for skilled professionals</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 p-3 rounded-full w-fit mx-auto mb-3">
                  <Heart className="w-8 h-8 text-orange-600" />
                </div>
                <h4 className="font-semibold mb-2">Donations</h4>
                <p className="text-sm text-muted-foreground">Household items and educational materials</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="text-center py-12">
            <Globe className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl font-bold mb-4">Get Involved Today</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Join us in supporting Afghan refugees as they rebuild their lives in Uganda. Your support makes a real
              difference in their journey to integration and independence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                <Phone className="w-5 h-5 mr-2" />
                Call Program Team
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Coordinator
              </Button>
            </div>
            <p className="text-sm mt-4 opacity-75">Program Hotline: +256 700 123 456 | Email: refugees@roomy.ug</p>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  )
}
