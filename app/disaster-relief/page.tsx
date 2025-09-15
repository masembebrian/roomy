import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import Footer from "@/components/footer"
import {
  Heart,
  Home,
  Users,
  Globe,
  Shield,
  HandHeart,
  MapPin,
  Calendar,
  DollarSign,
  AlertTriangle,
  Phone,
  Mail,
} from "lucide-react"

const activePrograms = [
  {
    title: "Flood Relief Housing - Eastern Uganda",
    location: "Mbale, Bududa, Sironko",
    status: "Active",
    urgency: "High",
    description: "Providing temporary housing for families displaced by recent flooding in Eastern Uganda.",
    beneficiaries: 450,
    target: 600,
    raised: 75000,
    goal: 100000,
    startDate: "March 2024",
    image: "/placeholder.svg?height=200&width=400&text=Flood+Relief+Housing",
  },
  {
    title: "Drought Response - Karamoja Region",
    location: "Kotido, Moroto, Nakapiripirit",
    status: "Active",
    urgency: "Critical",
    description: "Emergency accommodation for pastoralist communities affected by severe drought conditions.",
    beneficiaries: 320,
    target: 500,
    raised: 45000,
    goal: 80000,
    startDate: "January 2024",
    image: "/placeholder.svg?height=200&width=400&text=Drought+Response+Housing",
  },
  {
    title: "Landslide Recovery - Mount Elgon",
    location: "Bududa, Manafwa",
    status: "Ongoing",
    urgency: "Medium",
    description: "Long-term housing solutions for communities affected by landslides on Mount Elgon slopes.",
    beneficiaries: 180,
    target: 250,
    raised: 30000,
    goal: 60000,
    startDate: "February 2024",
    image: "/placeholder.svg?height=200&width=400&text=Landslide+Recovery+Housing",
  },
]

const impactStats = [
  {
    icon: Home,
    label: "Homes Provided",
    value: "2,450+",
    description: "Emergency housing units provided since 2020",
  },
  {
    icon: Users,
    label: "People Helped",
    value: "12,000+",
    description: "Individuals and families assisted",
  },
  {
    icon: Globe,
    label: "Communities Reached",
    value: "85+",
    description: "Villages and communities supported",
  },
  {
    icon: DollarSign,
    label: "Funds Raised",
    value: "UGX 2.5B+",
    description: "Total funds raised for disaster relief",
  },
]

const howItWorks = [
  {
    step: 1,
    title: "Disaster Assessment",
    description: "Our team rapidly assesses housing needs in disaster-affected areas",
    icon: AlertTriangle,
  },
  {
    step: 2,
    title: "Host Network Activation",
    description: "We mobilize our network of volunteer hosts to provide emergency accommodation",
    icon: Users,
  },
  {
    step: 3,
    title: "Matching & Placement",
    description: "Displaced families are matched with suitable temporary housing options",
    icon: Home,
  },
  {
    step: 4,
    title: "Support & Recovery",
    description: "Ongoing support is provided until families can return to permanent housing",
    icon: Heart,
  },
]

const partnerOrganizations = [
  {
    name: "Uganda Red Cross Society",
    role: "Emergency Response Coordination",
    logo: "/placeholder.svg?height=60&width=120&text=Red+Cross",
  },
  {
    name: "Office of the Prime Minister",
    role: "Government Coordination",
    logo: "/placeholder.svg?height=60&width=120&text=OPM+Uganda",
  },
  {
    name: "UNHCR Uganda",
    role: "Refugee Support Services",
    logo: "/placeholder.svg?height=60&width=120&text=UNHCR",
  },
  {
    name: "World Food Programme",
    role: "Food Security Support",
    logo: "/placeholder.svg?height=60&width=120&text=WFP",
  },
  {
    name: "Oxfam Uganda",
    role: "Community Development",
    logo: "/placeholder.svg?height=60&width=120&text=Oxfam",
  },
  {
    name: "Save the Children Uganda",
    role: "Child Protection Services",
    logo: "/placeholder.svg?height=60&width=120&text=Save+Children",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Roomy.org: Disaster Relief Housing</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            When disasters strike, we mobilize our community to provide emergency housing for those in need. Together,
            we're building resilience across Uganda.
          </p>
        </div>

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

        {/* Active Programs */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Active Relief Programs</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {activePrograms.map((program, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video bg-gray-100 relative">
                  <img
                    src={program.image || "/placeholder.svg"}
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge
                      variant={
                        program.urgency === "Critical"
                          ? "destructive"
                          : program.urgency === "High"
                            ? "default"
                            : "secondary"
                      }
                    >
                      {program.urgency}
                    </Badge>
                    <Badge variant="outline">{program.status}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{program.title}</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {program.location}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{program.description}</p>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>People Helped</span>
                      <span>
                        {program.beneficiaries} / {program.target}
                      </span>
                    </div>
                    <Progress value={(program.beneficiaries / program.target) * 100} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Funds Raised</span>
                      <span>
                        UGX {program.raised.toLocaleString()} / {program.goal.toLocaleString()}
                      </span>
                    </div>
                    <Progress value={(program.raised / program.goal) * 100} className="h-2" />
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    Started {program.startDate}
                  </div>

                  <Button className="w-full">
                    <HandHeart className="w-4 h-4 mr-2" />
                    Support This Program
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">How Our Disaster Relief Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-primary/30"></div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Get Involved */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Get Involved</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-6">
                  <Home className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Become a Relief Host</h3>
                <p className="text-muted-foreground mb-6">
                  Open your home to families in need during emergencies. We provide support and coordination.
                </p>
                <Button className="w-full">Join as Host</Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-6">
                  <DollarSign className="w-12 h-12 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Make a Donation</h3>
                <p className="text-muted-foreground mb-6">
                  Support our disaster relief efforts with a financial contribution. Every amount helps.
                </p>
                <Button className="w-full">Donate Now</Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="bg-purple-100 p-4 rounded-full w-fit mx-auto mb-6">
                  <Users className="w-12 h-12 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Volunteer</h3>
                <p className="text-muted-foreground mb-6">
                  Join our volunteer network to help coordinate relief efforts and support affected communities.
                </p>
                <Button className="w-full">Volunteer</Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Partners */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Partners</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            We work closely with government agencies, NGOs, and international organizations to maximize our impact.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partnerOrganizations.map((partner, index) => (
              <Card key={index} className="p-4 text-center hover:shadow-md transition-shadow">
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  className="w-full h-12 object-contain mb-3"
                />
                <h4 className="font-medium text-sm mb-1">{partner.name}</h4>
                <p className="text-xs text-muted-foreground">{partner.role}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="text-center py-12">
            <Shield className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl font-bold mb-4">Need Emergency Housing?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              If you or your community has been affected by a disaster and need emergency housing assistance, contact us
              immediately.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                <Phone className="w-5 h-5 mr-2" />
                Call Emergency Line
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Relief Team
              </Button>
            </div>
            <p className="text-sm mt-4 opacity-75">Emergency Hotline: +256 700 123 456 (Available 24/7)</p>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  )
}
