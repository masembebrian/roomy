import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Footer from "@/components/footer"
import {
  Heart,
  Home,
  Users,
  MapPin,
  Clock,
  Phone,
  Mail,
  AlertTriangle,
  CheckCircle,
  Droplets,
  Sun,
  Mountain,
  HandHeart,
  Building,
} from "lucide-react"

const activeReliefPrograms = [
  {
    title: "Eastern Uganda Flood Response",
    location: "Mbale, Bududa, Sironko",
    disaster: "Flooding",
    status: "Active",
    startDate: "March 2024",
    homesProvided: 450,
    peopleHelped: 1800,
    progress: 75,
    urgency: "High",
    description: "Providing emergency housing for families displaced by severe flooding in the Mount Elgon region.",
    needs: ["Temporary shelters", "Clean water access", "Medical supplies", "Food assistance"],
  },
  {
    title: "Karamoja Drought Relief",
    location: "Moroto, Kotido, Kaabong",
    disaster: "Drought",
    status: "Active",
    startDate: "January 2024",
    homesProvided: 320,
    peopleHelped: 1280,
    progress: 60,
    urgency: "Critical",
    description: "Supporting pastoralist communities affected by prolonged drought with temporary accommodation.",
    needs: ["Water storage", "Livestock shelter", "Emergency food", "Healthcare"],
  },
  {
    title: "Bududa Landslide Recovery",
    location: "Bududa District",
    disaster: "Landslides",
    status: "Recovery Phase",
    startDate: "December 2023",
    homesProvided: 180,
    peopleHelped: 720,
    progress: 90,
    urgency: "Medium",
    description: "Long-term housing solutions for families affected by landslides in mountainous areas.",
    needs: ["Permanent housing", "Infrastructure repair", "Livelihood support", "Education facilities"],
  },
]

const impactStats = [
  {
    label: "Emergency Homes Provided",
    value: "2,450+",
    description: "Since program launch",
    icon: Home,
  },
  {
    label: "People Helped",
    value: "12,000+",
    description: "Individuals and families",
    icon: Users,
  },
  {
    label: "Partner Organizations",
    value: "25+",
    description: "NGOs and government agencies",
    icon: HandHeart,
  },
  {
    label: "Response Time",
    value: "< 48 hours",
    description: "Average deployment time",
    icon: Clock,
  },
]

const howItWorks = [
  {
    step: 1,
    title: "Disaster Assessment",
    description: "Our team assesses the situation and identifies immediate housing needs",
    icon: AlertTriangle,
    timeframe: "0-24 hours",
  },
  {
    step: 2,
    title: "Host Mobilization",
    description: "We connect with volunteer hosts and emergency accommodation providers",
    icon: Users,
    timeframe: "24-48 hours",
  },
  {
    step: 3,
    title: "Emergency Placement",
    description: "Displaced families are matched with suitable temporary accommodation",
    icon: Home,
    timeframe: "48-72 hours",
  },
  {
    step: 4,
    title: "Recovery Support",
    description: "Ongoing support until families can return home or find permanent housing",
    icon: CheckCircle,
    timeframe: "Ongoing",
  },
]

const partnerOrganizations = [
  {
    name: "Uganda Red Cross Society",
    role: "Emergency Response Coordination",
    logo: "/placeholder.svg?height=60&width=120&text=Red+Cross",
    contribution: "Disaster assessment and first aid",
  },
  {
    name: "Office of the Prime Minister",
    role: "Government Coordination",
    logo: "/placeholder.svg?height=60&width=120&text=OPM",
    contribution: "Policy support and resource allocation",
  },
  {
    name: "UNHCR Uganda",
    role: "Refugee Support",
    logo: "/placeholder.svg?height=60&width=120&text=UNHCR",
    contribution: "International displacement expertise",
  },
  {
    name: "World Food Programme",
    role: "Food Security",
    logo: "/placeholder.svg?height=60&width=120&text=WFP",
    contribution: "Emergency food assistance",
  },
  {
    name: "Oxfam Uganda",
    role: "Water & Sanitation",
    logo: "/placeholder.svg?height=60&width=120&text=Oxfam",
    contribution: "Clean water and hygiene facilities",
  },
  {
    name: "Save the Children",
    role: "Child Protection",
    logo: "/placeholder.svg?height=60&width=120&text=Save+Children",
    contribution: "Child-friendly spaces and education",
  },
]

const waysToHelp = [
  {
    title: "Become an Emergency Host",
    description: "Open your home to families in need during disasters",
    icon: Home,
    action: "Register as Host",
    benefits: [
      "Make immediate impact in crisis situations",
      "Receive support and resources from our team",
      "Connect with your community during difficult times",
      "Flexible commitment based on your availability",
    ],
  },
  {
    title: "Donate Emergency Supplies",
    description: "Contribute essential items for disaster response",
    icon: HandHeart,
    action: "View Needed Items",
    benefits: [
      "Directly help families with immediate needs",
      "Tax-deductible donations",
      "Regular updates on impact of your contribution",
      "Option for one-time or recurring donations",
    ],
  },
  {
    title: "Volunteer Your Time",
    description: "Join our disaster response volunteer network",
    icon: Users,
    action: "Join Volunteers",
    benefits: [
      "Gain valuable emergency response experience",
      "Receive professional training and certification",
      "Flexible scheduling around your availability",
      "Be part of a dedicated community service team",
    ],
  },
  {
    title: "Corporate Partnership",
    description: "Partner with us for large-scale disaster response",
    icon: Building,
    action: "Contact Us",
    benefits: [
      "Enhance corporate social responsibility profile",
      "Employee volunteer opportunities",
      "Brand visibility in community impact initiatives",
      "Customized partnership packages available",
    ],
  },
]

const testimonials = [
  {
    name: "Sarah Nakato",
    role: "Flood Survivor, Mbale",
    story:
      "When the floods destroyed our home, Roomy found us a safe place to stay within two days. The host family welcomed us like their own, and we felt human again during our darkest time.",
    image: "/placeholder.svg?height=80&width=80&text=Sarah",
    location: "Mbale District",
  },
  {
    name: "David Okello",
    role: "Emergency Host, Kampala",
    story:
      "Hosting a family displaced by landslides was one of the most rewarding experiences. Seeing their children smile again and knowing we provided safety during their crisis was incredible.",
    image: "/placeholder.svg?height=80&width=80&text=David",
    location: "Kampala",
  },
  {
    name: "Grace Atim",
    role: "Volunteer Coordinator",
    story:
      "Working with Roomy's disaster relief program has shown me the power of community. We've helped hundreds of families, and each story reminds me why this work matters.",
    image: "/placeholder.svg?height=80&width=80&text=Grace",
    location: "Jinja",
  },
]

export default function DisasterReliefPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-red-100 p-4 rounded-full">
              <Heart className="w-16 h-16 text-red-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Disaster Relief Housing</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            When disaster strikes, we provide immediate emergency housing for displaced families across Uganda. Every
            home matters, every family counts.
          </p>
        </div>

        {/* Emergency Alert */}
        <Alert className="mb-12 border-red-200 bg-red-50">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800">
            <strong>Active Emergency:</strong> Eastern Uganda flooding requires immediate housing support. 450 families
            still need temporary accommodation.{" "}
            <Button variant="link" className="p-0 h-auto text-red-800 underline">
              Help Now
            </Button>
          </AlertDescription>
        </Alert>

        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impactStats.map((stat, index) => (
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

        {/* Active Relief Programs */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Active Relief Programs</h2>
          <div className="space-y-6">
            {activeReliefPrograms.map((program, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-xl">{program.title}</CardTitle>
                        <Badge
                          variant={program.status === "Active" ? "default" : "secondary"}
                          className={
                            program.urgency === "Critical"
                              ? "bg-red-100 text-red-800"
                              : program.urgency === "High"
                                ? "bg-orange-100 text-orange-800"
                                : "bg-yellow-100 text-yellow-800"
                          }
                        >
                          {program.urgency} Priority
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {program.location}
                        </div>
                        <div className="flex items-center gap-1">
                          {program.disaster === "Flooding" ? (
                            <Droplets className="w-4 h-4" />
                          ) : program.disaster === "Drought" ? (
                            <Sun className="w-4 h-4" />
                          ) : (
                            <Mountain className="w-4 h-4" />
                          )}
                          {program.disaster}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          Since {program.startDate}
                        </div>
                      </div>
                      <CardDescription className="mb-4">{program.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{program.homesProvided}</div>
                      <div className="text-sm text-muted-foreground">Homes Provided</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{program.peopleHelped}</div>
                      <div className="text-sm text-muted-foreground">People Helped</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{program.progress}%</div>
                      <div className="text-sm text-muted-foreground">Progress</div>
                    </div>
                  </div>
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Response Progress</span>
                      <span className="text-sm text-muted-foreground">{program.progress}%</span>
                    </div>
                    <Progress value={program.progress} className="h-2" />
                  </div>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Current Needs:</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.needs.map((need, needIndex) => (
                        <Badge key={needIndex} variant="outline">
                          {need}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full sm:w-auto">Support This Program</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">How Our Emergency Response Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step, index) => (
              <Card key={index} className="text-center relative">
                <CardContent className="p-6">
                  <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{step.description}</p>
                  <Badge variant="outline">{step.timeframe}</Badge>
                </CardContent>
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <div className="w-6 h-0.5 bg-primary/30"></div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Partner Organizations */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Partners</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            We work with leading humanitarian organizations to ensure comprehensive disaster response and recovery
            support.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerOrganizations.map((partner, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <img
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      className="w-full h-12 object-contain"
                    />
                  </div>
                  <h3 className="font-semibold mb-1">{partner.name}</h3>
                  <p className="text-sm text-primary font-medium mb-2">{partner.role}</p>
                  <p className="text-sm text-muted-foreground">{partner.contribution}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Ways to Help */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">How You Can Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {waysToHelp.map((way, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <way.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{way.title}</CardTitle>
                  </div>
                  <CardDescription>{way.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <ul className="space-y-2 mb-6 flex-1">
                    {way.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">{way.action}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Stories of Hope</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground italic">"{testimonial.story}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Emergency Contact */}
        <Card className="bg-red-50 border-red-200">
          <CardContent className="text-center py-12">
            <AlertTriangle className="w-16 h-16 mx-auto mb-6 text-red-600" />
            <h2 className="text-3xl font-bold mb-4 text-red-800">Emergency Housing Needed?</h2>
            <p className="text-lg mb-8 text-red-700 max-w-2xl mx-auto">
              If you or someone you know needs emergency housing due to a disaster, contact us immediately. Our team is
              available 24/7 to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                <Phone className="w-5 h-5 mr-2" />
                Call Emergency Hotline
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Emergency Team
              </Button>
            </div>
            <p className="text-sm mt-4 text-red-600">Emergency Hotline: +256 800 123 456 (Available 24/7)</p>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  )
}
