import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import Footer from "@/components/footer"
import {
  Shield,
  Users,
  Heart,
  Scale,
  AlertTriangle,
  CheckCircle,
  Phone,
  Mail,
  FileText,
  Eye,
  MessageSquare,
  Gavel,
} from "lucide-react"

const protectedCategories = [
  {
    category: "Race & Ethnicity",
    description: "Protection against discrimination based on race, color, ethnicity, or national origin",
    examples: ["Racial slurs or stereotypes", "Refusing guests based on ethnicity", "Discriminatory pricing"],
  },
  {
    category: "Religion",
    description: "Protection for all religious beliefs and practices",
    examples: ["Religious harassment", "Refusing accommodation based on faith", "Mocking religious practices"],
  },
  {
    category: "Gender & Sexual Orientation",
    description: "Equal treatment regardless of gender identity or sexual orientation",
    examples: ["Gender-based harassment", "LGBTQ+ discrimination", "Unequal treatment based on gender"],
  },
  {
    category: "Disability",
    description: "Ensuring accessibility and equal treatment for people with disabilities",
    examples: ["Refusing service animals", "Inaccessible accommodations", "Disability-based harassment"],
  },
  {
    category: "Age",
    description: "Protection against age-based discrimination",
    examples: ["Refusing elderly guests", "Age-based pricing", "Stereotyping based on age"],
  },
  {
    category: "Family Status",
    description: "Equal treatment for families with children and different family structures",
    examples: ["No children policies", "Family size discrimination", "Single parent bias"],
  },
]

const reportingProcess = [
  {
    step: 1,
    title: "Report the Incident",
    description: "Submit a detailed report through our platform or contact our discrimination hotline",
    icon: FileText,
    timeframe: "Immediate",
  },
  {
    step: 2,
    title: "Initial Review",
    description: "Our specialized team reviews the report and determines the severity and next steps",
    icon: Eye,
    timeframe: "Within 24 hours",
  },
  {
    step: 3,
    title: "Investigation",
    description: "Thorough investigation including interviews with all parties and evidence review",
    icon: MessageSquare,
    timeframe: "3-7 business days",
  },
  {
    step: 4,
    title: "Resolution & Action",
    description: "Appropriate action taken based on findings, including account suspension or termination",
    icon: Gavel,
    timeframe: "Within 10 business days",
  },
]

const preventionMeasures = [
  {
    title: "Host Education",
    description: "Comprehensive training on inclusive hosting and anti-discrimination policies",
    icon: Users,
    features: [
      "Mandatory anti-discrimination training for all hosts",
      "Cultural sensitivity workshops",
      "Inclusive hosting best practices",
      "Regular policy updates and reminders",
    ],
  },
  {
    title: "Guest Protection",
    description: "Multiple layers of protection for guests against discriminatory treatment",
    icon: Shield,
    features: [
      "Anonymous reporting system",
      "24/7 discrimination hotline",
      "Immediate response protocols",
      "Alternative accommodation assistance",
    ],
  },
  {
    title: "Platform Monitoring",
    description: "Advanced systems to detect and prevent discriminatory behavior",
    icon: Eye,
    features: [
      "AI-powered content monitoring",
      "Pattern recognition for discriminatory behavior",
      "Proactive host screening",
      "Regular platform audits",
    ],
  },
  {
    title: "Community Standards",
    description: "Clear guidelines and enforcement of inclusive community standards",
    icon: Heart,
    features: [
      "Zero-tolerance discrimination policy",
      "Community guidelines enforcement",
      "Positive behavior recognition",
      "Inclusive community building initiatives",
    ],
  },
]

const supportResources = [
  {
    title: "Legal Support",
    description: "Access to legal resources and advocacy organizations",
    contacts: [
      "Uganda Human Rights Commission: +256 414 346 867",
      "Equal Opportunities Commission: +256 414 237 827",
      "Legal Aid Service Providers Network: +256 392 174 394",
    ],
  },
  {
    title: "Counseling Services",
    description: "Mental health and emotional support for discrimination victims",
    contacts: [
      "Butabika National Referral Hospital: +256 414 263 901",
      "Mental Health Uganda: +256 772 509 044",
      "Counseling Support Services: +256 700 123 456",
    ],
  },
  {
    title: "Advocacy Organizations",
    description: "Organizations fighting discrimination and promoting equality",
    contacts: [
      "Human Rights Network Uganda: +256 414 270 283",
      "Sexual Minorities Uganda: +256 772 717 285",
      "National Union of Disabled Persons: +256 414 267 153",
    ],
  },
]

const statistics = [
  {
    label: "Reports Resolved",
    value: "98%",
    description: "Of discrimination reports successfully resolved",
  },
  {
    label: "Response Time",
    value: "< 24hrs",
    description: "Average response time to discrimination reports",
  },
  {
    label: "Hosts Trained",
    value: "15,000+",
    description: "Hosts completed anti-discrimination training",
  },
  {
    label: "Zero Tolerance",
    value: "100%",
    description: "Enforcement rate for confirmed discrimination cases",
  },
]

export default function AntiDiscriminationPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-purple-100 p-4 rounded-full">
              <Scale className="w-16 h-16 text-purple-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Combating Discrimination</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are committed to creating an inclusive platform where everyone feels welcome and respected, regardless of
            who they are or where they come from.
          </p>
        </div>

        {/* Zero Tolerance Alert */}
        <Alert className="mb-12 border-red-200 bg-red-50">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800">
            <strong>Zero Tolerance Policy:</strong> Roomy has a strict zero-tolerance policy for discrimination of any
            kind. Violations result in immediate account suspension or permanent removal from our platform.
          </AlertDescription>
        </Alert>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {statistics.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="font-semibold mb-1">{stat.label}</div>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Protected Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Protected Categories</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            We protect against discrimination based on these characteristics and more. This list is not exhaustive.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {protectedCategories.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{category.category}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="font-medium text-sm mb-2">Examples of prohibited behavior:</h4>
                    <ul className="space-y-1">
                      {category.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-start gap-2">
                          <AlertTriangle className="w-3 h-3 text-red-500 mt-1 flex-shrink-0" />
                          <span className="text-xs text-muted-foreground">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Prevention Measures */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">How We Prevent Discrimination</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {preventionMeasures.map((measure, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <measure.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{measure.title}</CardTitle>
                      <CardDescription>{measure.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {measure.features.map((feature, featureIndex) => (
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

        {/* Reporting Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">How to Report Discrimination</h2>
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
                  <Badge variant="outline" className="text-xs">
                    {step.timeframe}
                  </Badge>
                </CardContent>
                {index < reportingProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <div className="w-6 h-0.5 bg-primary/30"></div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Support Resources */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Support Resources</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            If you've experienced discrimination, these organizations can provide additional support and assistance.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {supportResources.map((resource, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {resource.contacts.map((contact, contactIndex) => (
                      <div key={contactIndex} className="text-sm">
                        <p className="text-muted-foreground">{contact}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Report Discrimination */}
        <Card className="mb-16 bg-red-50 border-red-200">
          <CardContent className="text-center py-12">
            <AlertTriangle className="w-16 h-16 mx-auto mb-6 text-red-600" />
            <h2 className="text-3xl font-bold mb-4 text-red-800">Report Discrimination Now</h2>
            <p className="text-lg mb-8 text-red-700 max-w-2xl mx-auto">
              If you've experienced or witnessed discrimination on our platform, report it immediately. We take every
              report seriously and act swiftly to address violations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                <FileText className="w-5 h-5 mr-2" />
                File a Report
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Hotline
              </Button>
            </div>
            <p className="text-sm mt-4 text-red-600">Discrimination Hotline: +256 700 123 456 (Available 24/7)</p>
          </CardContent>
        </Card>

        {/* Our Commitment */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="text-center py-12">
            <Heart className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl font-bold mb-4">Our Commitment to Equality</h2>
            <p className="text-lg mb-8 opacity-90 max-w-3xl mx-auto">
              We believe that travel should be accessible to everyone, regardless of who they are. Our commitment to
              fighting discrimination is unwavering, and we continuously work to create a more inclusive platform for
              all users.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                <Scale className="w-5 h-5 mr-2" />
                Read Full Policy
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Policy Team
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  )
}
