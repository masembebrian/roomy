import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Footer from "@/components/footer"
import {
  Briefcase,
  MapPin,
  Clock,
  Users,
  Heart,
  Zap,
  Globe,
  Award,
  Coffee,
  Laptop,
  GraduationCap,
  Search,
  Filter,
  Building,
  TrendingUp,
} from "lucide-react"

const jobOpenings = [
  {
    id: 1,
    title: "Senior Software Engineer",
    department: "Engineering",
    location: "Kampala, Uganda",
    type: "Full-time",
    level: "Senior",
    description:
      "Join our engineering team to build scalable solutions that connect hosts and travelers across Uganda. Work with modern technologies and help shape the future of travel.",
    requirements: [
      "5+ years of software development experience",
      "Proficiency in React, Node.js, and TypeScript",
      "Experience with cloud platforms (AWS/GCP)",
      "Strong problem-solving and communication skills",
    ],
    benefits: ["Competitive salary", "Health insurance", "Flexible hours", "Professional development"],
    posted: "2 days ago",
  },
  {
    id: 2,
    title: "Product Marketing Manager",
    department: "Marketing",
    location: "Kampala, Uganda",
    type: "Full-time",
    level: "Mid-level",
    description:
      "Drive product marketing strategy and go-to-market initiatives. Work closely with product and engineering teams to launch new features and grow our user base.",
    requirements: [
      "3+ years in product marketing or related field",
      "Experience with digital marketing campaigns",
      "Strong analytical and data-driven mindset",
      "Excellent written and verbal communication",
    ],
    benefits: ["Competitive salary", "Health insurance", "Marketing budget", "Conference attendance"],
    posted: "1 week ago",
  },
  {
    id: 3,
    title: "Customer Success Specialist",
    department: "Customer Success",
    location: "Remote (Uganda)",
    type: "Full-time",
    level: "Entry-level",
    description:
      "Help our hosts and guests have amazing experiences on Roomy. Provide support, resolve issues, and contribute to improving our platform based on user feedback.",
    requirements: [
      "1+ years in customer service or support",
      "Excellent communication skills in English and Luganda",
      "Problem-solving mindset",
      "Experience with support tools preferred",
    ],
    benefits: ["Competitive salary", "Remote work", "Training programs", "Career growth"],
    posted: "3 days ago",
  },
  {
    id: 4,
    title: "Data Scientist",
    department: "Data & Analytics",
    location: "Kampala, Uganda",
    type: "Full-time",
    level: "Mid-level",
    description:
      "Analyze user behavior, market trends, and business metrics to drive data-informed decisions. Build predictive models and create insights that shape our product strategy.",
    requirements: [
      "3+ years in data science or analytics",
      "Proficiency in Python, SQL, and statistical analysis",
      "Experience with machine learning frameworks",
      "Strong business acumen and communication skills",
    ],
    benefits: ["Competitive salary", "Health insurance", "Learning budget", "Conference attendance"],
    posted: "5 days ago",
  },
  {
    id: 5,
    title: "UX/UI Designer",
    department: "Design",
    location: "Kampala, Uganda",
    type: "Full-time",
    level: "Mid-level",
    description:
      "Design intuitive and beautiful user experiences for our web and mobile platforms. Collaborate with product and engineering teams to create user-centered solutions.",
    requirements: [
      "3+ years in UX/UI design",
      "Proficiency in Figma, Sketch, or similar tools",
      "Strong portfolio demonstrating design process",
      "Experience with user research and testing",
    ],
    benefits: ["Competitive salary", "Design tools budget", "Flexible hours", "Creative freedom"],
    posted: "1 week ago",
  },
  {
    id: 6,
    title: "Business Development Manager",
    department: "Business Development",
    location: "Kampala, Uganda",
    type: "Full-time",
    level: "Senior",
    description:
      "Drive strategic partnerships and business growth initiatives. Identify new market opportunities and build relationships with key stakeholders in the travel industry.",
    requirements: [
      "5+ years in business development or sales",
      "Experience in travel, hospitality, or tech industry",
      "Strong negotiation and relationship-building skills",
      "MBA or equivalent experience preferred",
    ],
    benefits: ["Competitive salary + commission", "Health insurance", "Travel allowance", "Networking events"],
    posted: "4 days ago",
  },
]

const departments = [
  {
    name: "Engineering",
    description: "Build the technology that powers Roomy",
    openPositions: 8,
    icon: Laptop,
    color: "bg-blue-100 text-blue-600",
  },
  {
    name: "Product",
    description: "Shape the future of travel experiences",
    openPositions: 3,
    icon: Zap,
    color: "bg-purple-100 text-purple-600",
  },
  {
    name: "Design",
    description: "Create beautiful and intuitive user experiences",
    openPositions: 2,
    icon: Heart,
    color: "bg-pink-100 text-pink-600",
  },
  {
    name: "Marketing",
    description: "Tell our story and grow our community",
    openPositions: 4,
    icon: TrendingUp,
    color: "bg-green-100 text-green-600",
  },
  {
    name: "Customer Success",
    description: "Ensure amazing experiences for all users",
    openPositions: 5,
    icon: Users,
    color: "bg-orange-100 text-orange-600",
  },
  {
    name: "Operations",
    description: "Keep everything running smoothly",
    openPositions: 3,
    icon: Building,
    color: "bg-gray-100 text-gray-600",
  },
]

const companyValues = [
  {
    title: "Community First",
    description: "We put our community of hosts and guests at the center of everything we do",
    icon: Users,
  },
  {
    title: "Innovation",
    description: "We constantly innovate to solve problems and create better experiences",
    icon: Zap,
  },
  {
    title: "Authenticity",
    description: "We celebrate authentic experiences and genuine connections",
    icon: Heart,
  },
  {
    title: "Growth Mindset",
    description: "We embrace challenges and learn from every experience",
    icon: TrendingUp,
  },
  {
    title: "Global Impact",
    description: "We work to create positive impact in communities worldwide",
    icon: Globe,
  },
  {
    title: "Excellence",
    description: "We strive for excellence in everything we build and deliver",
    icon: Award,
  },
]

const benefits = [
  {
    category: "Health & Wellness",
    items: [
      "Comprehensive health insurance",
      "Mental health support",
      "Gym membership allowance",
      "Annual health checkups",
      "Wellness programs",
    ],
  },
  {
    category: "Work-Life Balance",
    items: [
      "Flexible working hours",
      "Remote work options",
      "25 days paid vacation",
      "Parental leave",
      "Sabbatical opportunities",
    ],
  },
  {
    category: "Professional Development",
    items: [
      "Learning and development budget",
      "Conference attendance",
      "Internal training programs",
      "Mentorship opportunities",
      "Career advancement paths",
    ],
  },
  {
    category: "Financial Benefits",
    items: [
      "Competitive salaries",
      "Performance bonuses",
      "Stock options",
      "Retirement savings plan",
      "Travel allowances",
    ],
  },
  {
    category: "Perks & Culture",
    items: [
      "Free Roomy credits",
      "Team building events",
      "Office snacks and drinks",
      "Flexible dress code",
      "Pet-friendly office",
    ],
  },
]

const officeLocations = [
  {
    city: "Kampala",
    address: "Plot 123, Kampala Road, Central Division",
    description: "Our headquarters in the heart of Uganda's capital",
    employees: 85,
    image: "/placeholder.svg?height=200&width=300&text=Kampala+Office",
  },
  {
    city: "Entebbe",
    address: "Airport Road, Entebbe Municipality",
    description: "Strategic location near the international airport",
    employees: 25,
    image: "/placeholder.svg?height=200&width=300&text=Entebbe+Office",
  },
  {
    city: "Remote",
    address: "Work from anywhere in Uganda",
    description: "Flexible remote work opportunities",
    employees: 40,
    image: "/placeholder.svg?height=200&width=300&text=Remote+Work",
  },
]

const testimonials = [
  {
    name: "Sarah Nakato",
    role: "Senior Product Manager",
    quote:
      "Working at Roomy has been incredible. The team is passionate about making travel accessible and authentic. I love how my work directly impacts communities across Uganda.",
    image: "/placeholder.svg?height=80&width=80&text=Sarah",
    tenure: "2 years",
  },
  {
    name: "David Okello",
    role: "Lead Software Engineer",
    quote:
      "The technical challenges are exciting, and the company culture is amazing. We're building something that truly matters while working with cutting-edge technology.",
    image: "/placeholder.svg?height=80&width=80&text=David",
    tenure: "3 years",
  },
  {
    name: "Grace Atim",
    role: "Customer Success Manager",
    quote:
      "Every day I help hosts and guests have better experiences. The support from leadership and the growth opportunities have been exceptional.",
    image: "/placeholder.svg?height=80&width=80&text=Grace",
    tenure: "1.5 years",
  },
]

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-purple-100 p-4 rounded-full">
              <Briefcase className="w-16 h-16 text-purple-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Help us build the future of travel in Uganda. Join a passionate team that's creating authentic experiences
            and supporting local communities.
          </p>
        </div>

        {/* Company Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">150+</div>
              <div className="font-semibold mb-1">Team Members</div>
              <p className="text-sm text-muted-foreground">Across all departments</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <div className="font-semibold mb-1">Open Positions</div>
              <p className="text-sm text-muted-foreground">Join us today</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">4.8/5</div>
              <div className="font-semibold mb-1">Employee Rating</div>
              <p className="text-sm text-muted-foreground">Glassdoor rating</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="font-semibold mb-1">Retention Rate</div>
              <p className="text-sm text-muted-foreground">Employees stay with us</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="jobs" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="jobs">Open Positions</TabsTrigger>
            <TabsTrigger value="departments">Departments</TabsTrigger>
            <TabsTrigger value="culture">Culture & Benefits</TabsTrigger>
            <TabsTrigger value="locations">Locations</TabsTrigger>
          </TabsList>

          {/* Open Positions */}
          <TabsContent value="jobs">
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input placeholder="Search jobs..." className="pl-10" />
                </div>
                <Button variant="outline">
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </Button>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {jobOpenings.map((job) => (
                  <Card key={job.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                            <div className="flex items-center gap-1">
                              <Building className="w-4 h-4" />
                              {job.department}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {job.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {job.type}
                            </div>
                            <Badge variant="outline">{job.level}</Badge>
                          </div>
                          <CardDescription className="mb-4">{job.description}</CardDescription>
                        </div>
                        <div className="text-sm text-muted-foreground">{job.posted}</div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="font-semibold mb-2">Requirements:</h4>
                          <ul className="text-sm space-y-1">
                            {job.requirements.map((req, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Benefits:</h4>
                          <ul className="text-sm space-y-1">
                            {job.benefits.map((benefit, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <span className="text-green-500 mt-1">•</span>
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <Button className="w-full sm:w-auto">Apply Now</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Departments */}
          <TabsContent value="departments">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6">Our Departments</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {departments.map((dept, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`p-2 rounded-full ${dept.color}`}>
                          <dept.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{dept.name}</CardTitle>
                          <Badge variant="secondary">{dept.openPositions} open positions</Badge>
                        </div>
                      </div>
                      <CardDescription>{dept.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full bg-transparent">
                        View Positions
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Culture & Benefits */}
          <TabsContent value="culture">
            <div className="space-y-12">
              {/* Company Values */}
              <div>
                <h2 className="text-2xl font-bold text-center mb-8">Our Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {companyValues.map((value, index) => (
                    <Card key={index} className="text-center">
                      <CardContent className="p-6">
                        <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                          <value.icon className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="font-semibold mb-2">{value.title}</h3>
                        <p className="text-sm text-muted-foreground">{value.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-2xl font-bold text-center mb-8">Benefits & Perks</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {benefits.map((category, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="text-lg">{category.category}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {category.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-2">
                              <Coffee className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Employee Testimonials */}
              <div>
                <h2 className="text-2xl font-bold text-center mb-8">What Our Team Says</h2>
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
                            <p className="text-xs text-muted-foreground">{testimonial.tenure} at Roomy</p>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground italic">"{testimonial.quote}"</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Locations */}
          <TabsContent value="locations">
            <div>
              <h2 className="text-2xl font-bold text-center mb-8">Where We Work</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {officeLocations.map((location, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="aspect-video bg-gray-100">
                      <img
                        src={location.image || "/placeholder.svg"}
                        alt={location.city}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{location.city}</CardTitle>
                      <CardDescription>{location.address}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{location.description}</p>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">{location.employees} employees</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <Card className="mt-16 bg-primary text-primary-foreground">
          <CardContent className="text-center py-12">
            <GraduationCap className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl font-bold mb-4">Ready to Join Us?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Be part of a team that's transforming travel in Uganda. We're always looking for passionate people who
              want to make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                <Briefcase className="w-5 h-5 mr-2" />
                View All Jobs
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Users className="w-5 h-5 mr-2" />
                Learn About Culture
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  )
}
