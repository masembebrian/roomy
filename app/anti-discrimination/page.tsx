import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Footer from "@/components/footer"
import {
  Shield,
  AlertTriangle,
  Users,
  Scale,
  Eye,
  Phone,
  Mail,
  FileText,
  CheckCircle,
  Heart,
  Globe,
  BookOpen,
  UserX,
  MessageSquare,
  Clock,
  Award,
} from "lucide-react"

const policyStats = [
  {
    label: "Zero Tolerance Policy",
    value: "100%",
    description: "Enforcement rate",
    icon: Shield,
  },
  {
    label: "Reports Resolved",
    value: "98%",
    description: "Within 10 business days",
    icon: CheckCircle,
  },
  {
    label: "Users Protected",
    value: "50,000+",
    description: "Active community members",
    icon: Users,
  },
  {
    label: "Training Completed",
    value: "15,000+",
    description: "Hosts educated on policies",
    icon: BookOpen,
  },
]

const protectedCategories = [
  {
    category: "Race & Ethnicity",
    description: "Protection against discrimination based on racial or ethnic background",
    examples: [
      "Refusing bookings based on guest's race",
      "Making racial slurs or comments",
      "Treating guests differently due to ethnicity",
      "Stereotyping based on cultural background",
    ],
    icon: Globe,
  },
  {
    category: "Religion & Beliefs",
    description: "Ensuring respect for all religious and philosophical beliefs",
    examples: [
      "Denying accommodation due to religious practices",
      "Making derogatory comments about beliefs",
      "Refusing dietary or prayer accommodations",
      "Displaying discriminatory religious materials",
    ],
    icon: Heart,
  },
  {
    category: "Gender & Sexual Orientation",
    description: "Equal treatment regardless of gender identity or sexual orientation",
    examples: [
      "Refusing LGBTQ+ guests or hosts",
      "Making inappropriate comments about gender",
      "Discriminating against transgender individuals",
      "Treating couples differently based on orientation",
    ],
    icon: Users,
  },
  {
    category: "Disability & Accessibility",
    description: "Ensuring accessibility and accommodation for people with disabilities",
    examples: [
      "Refusing guests with disabilities",
      "Not providing reasonable accommodations",
      "Making insensitive comments about disabilities",
      "Charging extra fees for accessibility needs",
    ],
    icon: UserX,
  },
  {
    category: "Age Discrimination",
    description: "Fair treatment regardless of age",
    examples: [
      "Refusing bookings from older guests",
      "Age-based pricing discrimination",
      "Making ageist comments or assumptions",
      "Treating young adults unfairly",
    ],
    icon: Clock,
  },
  {
    category: "Nationality & Immigration",
    description: "Equal treatment for all nationalities and immigration statuses",
    examples: [
      "Refusing international guests",
      "Discriminating against refugees or immigrants",
      "Making xenophobic comments",
      "Requiring different documentation based on nationality",
    ],
    icon: Scale,
  },
]

const reportingProcess = [
  {
    step: 1,
    title: "Report the Incident",
    description: "Submit a detailed report through our platform or contact our team directly",
    icon: FileText,
    timeframe: "Immediate",
    actions: ["Online reporting form", "Email discrimination@roomy.ug", "Call our hotline", "In-app reporting"],
  },
  {
    step: 2,
    title: "Initial Review",
    description: "Our specialized team reviews the report and begins investigation",
    icon: Eye,
    timeframe: "Within 24 hours",
    actions: ["Case assignment", "Evidence collection", "Initial contact with parties", "Safety assessment"],
  },
  {
    step: 3,
    title: "Investigation",
    description: "Thorough investigation with interviews and evidence analysis",
    icon: MessageSquare,
    timeframe: "3-7 business days",
    actions: ["Witness interviews", "Evidence review", "Policy violation assessment", "Legal consultation if needed"],
  },
  {
    step: 4,
    title: "Resolution & Action",
    description: "Appropriate action taken based on investigation findings",
    icon: Scale,
    timeframe: "Within 10 business days",
    actions: ["Account suspension/termination", "Mandatory training", "Financial compensation", "Policy updates"],
  },
]

const preventionMeasures = [
  {
    title: "Host Education Program",
    description: "Comprehensive training on anti-discrimination policies and inclusive hosting",
    features: [
      "Mandatory anti-discrimination training for all hosts",
      "Cultural sensitivity workshops",
      "Inclusive hosting best practices",
      "Regular policy updates and refreshers",
      "Certification program for inclusive hosts",
    ],
    participants: "15,000+ hosts trained",
  },
  {
    title: "AI-Powered Monitoring",
    description: "Advanced technology to detect and prevent discriminatory behavior",
    features: [
      "Automated screening of messages and reviews",
      "Pattern recognition for discriminatory language",
      "Real-time alerts for potential violations",
      "Predictive analytics for risk assessment",
      "Continuous learning and improvement",
    ],
    participants: "100% platform coverage",
  },
  {
    title: "Community Reporting",
    description: "Empowering the community to report and prevent discrimination",
    features: [
      "Easy-to-use reporting tools",
      "Anonymous reporting options",
      "Community guidelines education",
      "Bystander intervention training",
      "Recognition for inclusive behavior",
    ],
    participants: "50,000+ community members",
  },
  {
    title: "Legal Partnerships",
    description: "Collaboration with legal experts and human rights organizations",
    features: [
      "Legal advice and support for victims",
      "Policy development with human rights experts",
      "Regular legal compliance audits",
      "Advocacy for stronger anti-discrimination laws",
      "Pro bono legal services for serious cases",
    ],
    participants: "12 partner organizations",
  },
]

const supportResources = [
  {
    title: "Legal Aid Services",
    description: "Free legal consultation and representation for discrimination victims",
    contact: "legal-aid@roomy.ug",
    phone: "+256 700 123 457",
    availability: "Monday-Friday, 9 AM - 5 PM",
    services: ["Legal consultation", "Case representation", "Rights education", "Court accompaniment"],
  },
  {
    title: "Counseling Support",
    description: "Professional counseling services for those affected by discrimination",
    contact: "counseling@roomy.ug",
    phone: "+256 700 123 458",
    availability: "24/7 Crisis Support",
    services: ["Individual counseling", "Group therapy", "Crisis intervention", "Trauma support"],
  },
  {
    title: "Advocacy & Rights",
    description: "Human rights advocacy and community organizing support",
    contact: "advocacy@roomy.ug",
    phone: "+256 700 123 459",
    availability: "Monday-Friday, 8 AM - 6 PM",
    services: ["Rights advocacy", "Community organizing", "Policy reform", "Public awareness campaigns"],
  },
]

const caseStudies = [
  {
    title: "Religious Accommodation Success",
    description: "Host initially refused Muslim guests, underwent training, now champions inclusive hosting",
    outcome: "Host became certified inclusive host trainer",
    impact: "Trained 50+ other hosts in religious accommodation",
    timeframe: "6 months resolution",
  },
  {
    title: "Accessibility Improvement",
    description: "Property made fully accessible after discrimination complaint from disabled guest",
    outcome: "Full accessibility renovation completed",
    impact: "Property now serves as accessibility model",
    timeframe: "3 months resolution",
  },
  {
    title: "LGBTQ+ Rights Victory",
    description: "Discriminatory host removed, guest received compensation and support",
    outcome: "Host account permanently suspended",
    impact: "Strengthened LGBTQ+ protection policies",
    timeframe: "2 weeks resolution",
  },
]

export default function AntiDiscriminationPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-red-100 p-4 rounded-full">
              <Shield className="w-16 h-16 text-red-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Combating Discrimination</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We have zero tolerance for discrimination. Everyone deserves to be treated with dignity and respect,
            regardless of who they are or where they come from.
          </p>
        </div>

        {/* Zero Tolerance Alert */}
        <Alert className="mb-12 border-red-200 bg-red-50">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800">
            <strong>Zero Tolerance Policy:</strong> Any form of discrimination will result in immediate account
            suspension and potential legal action. We are committed to protecting all members of our community.{" "}
            <Button variant="link" className="p-0 h-auto text-red-800 underline">
              Report Discrimination
            </Button>
          </AlertDescription>
        </Alert>

        {/* Policy Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {policyStats.map((stat, index) => (
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

        {/* Main Content Tabs */}
        <Tabs defaultValue="policy" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="policy">Our Policy</TabsTrigger>
            <TabsTrigger value="reporting">Report Discrimination</TabsTrigger>
            <TabsTrigger value="prevention">Prevention</TabsTrigger>
            <TabsTrigger value="support">Support Resources</TabsTrigger>
          </TabsList>

          {/* Policy Tab */}
          <TabsContent value="policy">
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-center mb-8">Protected Categories</h2>
                <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
                  We protect all community members from discrimination based on these characteristics and more.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {protectedCategories.map((category, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="bg-primary/10 p-2 rounded-full">
                            <category.icon className="w-6 h-6 text-primary" />
                          </div>
                          <CardTitle className="text-lg">{category.category}</CardTitle>
                        </div>
                        <CardDescription>{category.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <h4 className="font-semibold mb-2 text-red-600">Prohibited Behaviors:</h4>
                        <ul className="space-y-1">
                          {category.examples.map((example, exampleIndex) => (
                            <li key={exampleIndex} className="flex items-start gap-2">
                              <AlertTriangle className="w-3 h-3 text-red-500 mt-1 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{example}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Case Studies */}
              <div>
                <h2 className="text-3xl font-bold text-center mb-8">Success Stories</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {caseStudies.map((study, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="text-lg">{study.title}</CardTitle>
                        <CardDescription>{study.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div>
                          <div className="text-sm font-medium text-green-600">Outcome:</div>
                          <div className="text-sm text-muted-foreground">{study.outcome}</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-blue-600">Impact:</div>
                          <div className="text-sm text-muted-foreground">{study.impact}</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium">Resolution Time:</div>
                          <div className="text-sm text-muted-foreground">{study.timeframe}</div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Reporting Tab */}
          <TabsContent value="reporting">
            <div className="space-y-12">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">How to Report Discrimination</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  If you experience or witness discrimination, report it immediately. We take every report seriously and
                  act quickly to protect our community.
                </p>
              </div>

              {/* Reporting Process */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {reportingProcess.map((step, index) => (
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
                      <Badge variant="outline" className="mb-3">
                        {step.timeframe}
                      </Badge>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {step.actions.map((action, actionIndex) => (
                          <li key={actionIndex}>• {action}</li>
                        ))}
                      </ul>
                    </CardContent>
                    {index < reportingProcess.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                        <div className="w-6 h-0.5 bg-primary/30"></div>
                      </div>
                    )}
                  </Card>
                ))}
              </div>

              {/* Emergency Reporting */}
              <Card className="bg-red-50 border-red-200">
                <CardContent className="text-center py-8">
                  <Phone className="w-12 h-12 mx-auto mb-4 text-red-600" />
                  <h3 className="text-xl font-bold mb-2 text-red-800">Emergency Discrimination Hotline</h3>
                  <p className="text-red-700 mb-4">
                    For urgent situations requiring immediate attention, call our 24/7 discrimination hotline.
                  </p>
                  <div className="space-y-2">
                    <p className="font-semibold text-red-800">+256 800 123 456</p>
                    <p className="text-sm text-red-600">Available 24/7 • Confidential • Multilingual Support</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Prevention Tab */}
          <TabsContent value="prevention">
            <div className="space-y-12">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">Prevention Measures</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  We proactively work to prevent discrimination through education, technology, and community engagement.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {preventionMeasures.map((measure, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-xl">{measure.title}</CardTitle>
                      <CardDescription>{measure.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-2">
                        {measure.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="text-sm font-medium text-blue-800">Impact:</div>
                        <div className="text-sm text-blue-700">{measure.participants}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Support Resources Tab */}
          <TabsContent value="support">
            <div className="space-y-12">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">Support Resources</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  We provide comprehensive support services for those affected by discrimination, including legal aid,
                  counseling, and advocacy.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {supportResources.map((resource, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{resource.title}</CardTitle>
                      <CardDescription>{resource.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium">{resource.contact}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium">{resource.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-primary" />
                          <span className="text-sm">{resource.availability}</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Services:</h4>
                        <ul className="space-y-1">
                          {resource.services.map((service, serviceIndex) => (
                            <li key={serviceIndex} className="flex items-start gap-2">
                              <CheckCircle className="w-3 h-3 text-green-500 mt-1 flex-shrink-0" />
                              <span className="text-xs text-muted-foreground">{service}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button className="w-full">Contact Support</Button>
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
            <Award className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl font-bold mb-4">Stand Against Discrimination</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Join us in creating a community where everyone feels welcome, safe, and respected. Together, we can build
              a more inclusive world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                <FileText className="w-5 h-5 mr-2" />
                Report Discrimination
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Learn About Our Policies
              </Button>
            </div>
            <p className="text-sm mt-4 opacity-75">Discrimination Hotline: +256 800 123 456 (Available 24/7)</p>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  )
}
