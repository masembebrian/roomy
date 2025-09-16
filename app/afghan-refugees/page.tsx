import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Footer from "@/components/footer"
import {
  Heart,
  Home,
  Users,
  GraduationCap,
  Briefcase,
  Globe,
  HandHeart,
  CheckCircle,
  Building,
  BookOpen,
  UserCheck,
} from "lucide-react"

const programStats = [
  {
    label: "Families Housed",
    value: "150+",
    description: "Afghan refugee families",
    icon: Home,
  },
  {
    label: "Individuals Supported",
    value: "650+",
    description: "Men, women, and children",
    icon: Users,
  },
  {
    label: "Children in School",
    value: "280+",
    description: "Enrolled in education programs",
    icon: GraduationCap,
  },
  {
    label: "Employment Placements",
    value: "95+",
    description: "Jobs secured for refugees",
    icon: Briefcase,
  },
]

const supportServices = [
  {
    title: "Emergency Housing",
    description: "Immediate temporary accommodation for newly arrived families",
    icon: Home,
    features: [
      "Safe, furnished temporary housing",
      "Basic household essentials provided",
      "Location near essential services",
      "Cultural sensitivity training for hosts",
      "24/7 emergency support hotline",
    ],
    beneficiaries: "150 families",
    duration: "3-6 months average",
  },
  {
    title: "Language & Integration",
    description: "English and local language classes plus cultural orientation",
    icon: BookOpen,
    features: [
      "English language classes (beginner to advanced)",
      "Luganda and other local language basics",
      "Ugandan culture and customs orientation",
      "Life skills and civic education",
      "Community integration activities",
    ],
    beneficiaries: "400+ individuals",
    duration: "6-12 months",
  },
  {
    title: "Employment Support",
    description: "Job placement assistance and skills development programs",
    icon: Briefcase,
    features: [
      "Skills assessment and career counseling",
      "CV writing and interview preparation",
      "Job matching with local employers",
      "Vocational training programs",
      "Entrepreneurship support and microfinance",
    ],
    beneficiaries: "200+ adults",
    duration: "Ongoing support",
  },
  {
    title: "Education Programs",
    description: "School enrollment and educational support for children and adults",
    icon: GraduationCap,
    features: [
      "Primary and secondary school enrollment",
      "University scholarship programs",
      "Adult education and literacy classes",
      "Professional certification courses",
      "Educational materials and supplies",
    ],
    beneficiaries: "280+ students",
    duration: "Full academic support",
  },
]

const successStories = [
  {
    name: "Ahmad Hassan",
    age: 35,
    profession: "Former Engineer, now IT Specialist",
    story:
      "When I arrived in Uganda with my family, I thought my engineering career was over. Through Roomy's program, I found temporary housing, learned English, and got retrained in IT. Now I work for a tech company in Kampala and my children are thriving in school.",
    achievements: [
      "Completed IT certification program",
      "Secured full-time employment",
      "Children enrolled in quality schools",
      "Moved to permanent housing",
    ],
    timeInProgram: "18 months",
    currentStatus: "Self-sufficient",
    image: "/placeholder.svg?height=120&width=120&text=Ahmad",
  },
  {
    name: "Fatima Ahmadi",
    age: 28,
    profession: "Teacher turned Small Business Owner",
    story:
      "As a single mother with three children, I was overwhelmed when we first arrived. The host family welcomed us warmly, and the program helped me start a small tailoring business. My children are now fluent in English and doing well in their studies.",
    achievements: [
      "Started successful tailoring business",
      "Children integrated into local schools",
      "Became community volunteer",
      "Achieved financial independence",
    ],
    timeInProgram: "24 months",
    currentStatus: "Community leader",
    image: "/placeholder.svg?height=120&width=120&text=Fatima",
  },
  {
    name: "Dr. Nasir Karimi",
    age: 42,
    profession: "Medical Doctor",
    story:
      "Leaving my medical practice in Afghanistan was heartbreaking, but Uganda gave us hope. With support from the program, I'm now working towards medical license recognition while volunteering at local clinics. My expertise is helping the community that welcomed us.",
    achievements: [
      "Medical credentials under review",
      "Volunteering at 3 local clinics",
      "Training local healthcare workers",
      "Family fully integrated",
    ],
    timeInProgram: "12 months",
    currentStatus: "Contributing professional",
    image: "/placeholder.svg?height=120&width=120&text=Nasir",
  },
]

const partnerOrganizations = [
  {
    name: "UNHCR Uganda",
    role: "Lead Refugee Agency",
    contribution: "Legal protection and coordination",
    logo: "/placeholder.svg?height=60&width=120&text=UNHCR",
  },
  {
    name: "Office of the Prime Minister",
    role: "Government Partner",
    contribution: "Policy support and documentation",
    logo: "/placeholder.svg?height=60&width=120&text=OPM",
  },
  {
    name: "InterAid Uganda",
    role: "Local Implementation",
    contribution: "Community integration programs",
    logo: "/placeholder.svg?height=60&width=120&text=InterAid",
  },
  {
    name: "Windle International",
    role: "Education Partner",
    contribution: "Educational programs and scholarships",
    logo: "/placeholder.svg?height=60&width=120&text=Windle",
  },
  {
    name: "ALIGHT Uganda",
    role: "Livelihood Support",
    contribution: "Skills training and employment",
    logo: "/placeholder.svg?height=60&width=120&text=ALIGHT",
  },
  {
    name: "Islamic University in Uganda",
    role: "Higher Education",
    contribution: "University scholarships and programs",
    logo: "/placeholder.svg?height=60&width=120&text=IUIU",
  },
]

const currentNeeds = [
  {
    category: "Urgent Housing",
    need: "Host families for 25 newly arrived families",
    priority: "Critical",
    timeframe: "Immediate",
    description: "Families with children need safe temporary accommodation while permanent solutions are arranged.",
  },
  {
    category: "Employment Opportunities",
    need: "Job placements for skilled professionals",
    priority: "High",
    timeframe: "Next 30 days",
    description: "Engineers, teachers, healthcare workers, and business professionals seeking employment.",
  },
  {
    category: "Educational Support",
    need: "School supplies and uniforms for 50 children",
    priority: "High",
    timeframe: "Before new term",
    description: "Children starting new school term need basic educational materials and uniforms.",
  },
  {
    category: "Language Training",
    need: "English teachers and conversation partners",
    priority: "Medium",
    timeframe: "Ongoing",
    description: "Volunteers needed to support English language learning and conversation practice.",
  },
]

const volunteerOpportunities = [
  {
    title: "Host Family",
    commitment: "3-6 months",
    description: "Provide temporary housing for refugee families",
    requirements: ["Spare room or separate accommodation", "Cultural sensitivity", "Background check"],
    support: ["Monthly stipend provided", "24/7 program support", "Cultural orientation training"],
  },
  {
    title: "Language Tutor",
    commitment: "2-3 hours/week",
    description: "Teach English or provide conversation practice",
    requirements: ["Basic teaching skills", "Patience and empathy", "Regular availability"],
    support: ["Teaching materials provided", "Training workshops", "Volunteer community"],
  },
  {
    title: "Employment Mentor",
    commitment: "1-2 hours/week",
    description: "Help with job search, CV writing, and interview preparation",
    requirements: ["Professional experience", "Knowledge of local job market", "Mentoring skills"],
    support: ["Mentoring guidelines", "Regular check-ins", "Success tracking tools"],
  },
  {
    title: "Cultural Guide",
    commitment: "Flexible",
    description: "Help families navigate Ugandan culture and systems",
    requirements: ["Local knowledge", "Cultural awareness", "Communication skills"],
    support: ["Orientation materials", "Expense reimbursement", "Recognition events"],
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
            Providing comprehensive support to Afghan refugee families in Uganda through housing, education, employment,
            and integration programs.
          </p>
        </div>

        {/* Program Impact */}
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

        {/* Current Urgent Needs */}
        <Alert className="mb-12 border-orange-200 bg-orange-50">
          <HandHeart className="h-4 w-4 text-orange-600" />
          <AlertDescription className="text-orange-800">
            <strong>Urgent Need:</strong> We currently need host families for 25 newly arrived Afghan families. Your
            support can provide immediate safety and stability.{" "}
            <Button variant="link" className="p-0 h-auto text-orange-800 underline">
              Become a Host
            </Button>
          </AlertDescription>
        </Alert>

        {/* Support Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Support Services</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {supportServices.map((service, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                    <div>
                      <div className="text-sm text-muted-foreground">Beneficiaries</div>
                      <div className="font-semibold">{service.beneficiaries}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Duration</div>
                      <div className="font-semibold">{service.duration}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Success Stories</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <img
                      src={story.image || "/placeholder.svg"}
                      alt={story.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <CardTitle className="text-lg">{story.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">Age {story.age}</p>
                      <p className="text-sm text-primary font-medium">{story.profession}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground italic">"{story.story}"</p>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {story.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-3 h-3 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-xs text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t text-sm">
                    <div>
                      <div className="text-muted-foreground">Time in Program</div>
                      <div className="font-medium">{story.timeInProgram}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Current Status</div>
                      <div className="font-medium text-green-600">{story.currentStatus}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Current Needs */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Current Needs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentNeeds.map((need, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{need.category}</CardTitle>
                    <Badge
                      variant={
                        need.priority === "Critical"
                          ? "destructive"
                          : need.priority === "High"
                            ? "default"
                            : "secondary"
                      }
                    >
                      {need.priority}
                    </Badge>
                  </div>
                  <CardDescription>{need.need}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{need.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <span className="text-muted-foreground">Timeframe: </span>
                      <span className="font-medium">{need.timeframe}</span>
                    </div>
                    <Button size="sm">Help With This</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Partner Organizations */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Partners</h2>
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

        {/* Volunteer Opportunities */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Volunteer Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {volunteerOpportunities.map((opportunity, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{opportunity.title}</CardTitle>
                    <Badge variant="outline">{opportunity.commitment}</Badge>
                  </div>
                  <CardDescription>{opportunity.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {opportunity.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start gap-2">
                          <UserCheck className="w-3 h-3 text-blue-500 mt-1 flex-shrink-0" />
                          <span className="text-xs text-muted-foreground">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Support Provided:</h4>
                    <ul className="space-y-1">
                      {opportunity.support.map((support, supportIndex) => (
                        <li key={supportIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-3 h-3 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-xs text-muted-foreground">{support}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full">Apply to Volunteer</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Employment Posting */}
        <Card className="mb-16 bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
          <CardContent className="text-center py-12">
            <Briefcase className="w-16 h-16 mx-auto mb-6 text-green-600" />
            <h2 className="text-3xl font-bold mb-4 text-green-800">Employers: Hire Skilled Refugees</h2>
            <p className="text-lg mb-8 text-green-700 max-w-2xl mx-auto">
              Our refugee community includes skilled professionals ready to contribute to Uganda's economy. Post job
              opportunities or connect with qualified candidates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-green-600 hover:bg-green-700">
                <Building className="w-5 h-5 mr-2" />
                Post Job Opportunity
              </Button>
              <Button
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white bg-transparent"
              >
                <Users className="w-5 h-5 mr-2" />
                View Candidate Profiles
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="text-center py-12">
            <Heart className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl font-bold mb-4">Get Involved Today</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Every family deserves a chance at a new beginning. Join us in supporting Afghan refugees as they rebuild
              their lives in Uganda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                <Home className="w-5 h-5 mr-2" />
                Become a Host Family
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <HandHeart className="w-5 h-5 mr-2" />
                Volunteer With Us
              </Button>
            </div>
            <div className="mt-8 space-y-2">
              <p className="text-sm opacity-75">Program Contact: refugees@roomy.ug</p>
              <p className="text-sm opacity-75">Emergency Support: +256 700 123 456</p>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  )
}
