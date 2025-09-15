import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Footer from "@/components/footer"
import { Shield, Home, DollarSign, CheckCircle, AlertTriangle, Phone, FileText, Camera, Award } from "lucide-react"

const coverageTypes = [
  {
    title: "Property Damage Protection",
    coverage: "Up to UGX 50,000,000",
    description: "Covers damage to your property caused by guests",
    icon: Home,
    color: "bg-blue-100 text-blue-600",
    includes: [
      "Furniture and appliances damage",
      "Wall and floor damage",
      "Broken windows and doors",
      "Plumbing and electrical damage",
      "Garden and outdoor area damage",
    ],
  },
  {
    title: "Liability Protection",
    coverage: "Up to UGX 100,000,000",
    description: "Protects you from third-party liability claims",
    icon: Shield,
    color: "bg-green-100 text-green-600",
    includes: [
      "Guest injury claims",
      "Third-party property damage",
      "Legal defense costs",
      "Medical expenses coverage",
      "Personal liability protection",
    ],
  },
  {
    title: "Income Protection",
    coverage: "Up to UGX 10,000,000",
    description: "Covers lost income due to property damage",
    icon: DollarSign,
    color: "bg-purple-100 text-purple-600",
    includes: [
      "Lost rental income during repairs",
      "Alternative accommodation costs",
      "Cleaning and restoration expenses",
      "Emergency accommodation for guests",
      "Business interruption coverage",
    ],
  },
]

const claimProcess = [
  {
    step: 1,
    title: "Report the Incident",
    description: "Contact us within 24 hours of discovering damage or incident",
    icon: Phone,
    timeframe: "Within 24 hours",
    actions: ["Call our claims hotline", "Submit online report", "Document the incident"],
  },
  {
    step: 2,
    title: "Document Everything",
    description: "Take photos and gather evidence of the damage or incident",
    icon: Camera,
    timeframe: "Immediately",
    actions: ["Take detailed photos", "Keep receipts and invoices", "Get witness statements if applicable"],
  },
  {
    step: 3,
    title: "Claims Assessment",
    description: "Our team reviews your claim and may arrange an inspection",
    icon: FileText,
    timeframe: "2-5 business days",
    actions: ["Claims adjuster review", "Property inspection if needed", "Damage assessment report"],
  },
  {
    step: 4,
    title: "Resolution & Payment",
    description: "Approved claims are processed and payment is made",
    icon: CheckCircle,
    timeframe: "5-10 business days",
    actions: ["Claim approval notification", "Payment processing", "Repair coordination if needed"],
  },
]

const eligibilityRequirements = [
  {
    category: "Host Requirements",
    requirements: [
      "Active Roomy host with verified listing",
      "Completed host verification process",
      "Maintained minimum 4.0 star rating",
      "No previous fraudulent claims",
      "Compliance with local hosting regulations",
    ],
  },
  {
    category: "Property Requirements",
    requirements: [
      "Property must be accurately described in listing",
      "Basic safety features installed (smoke detectors, etc.)",
      "Property in good condition before hosting",
      "Maximum property value of UGX 500,000,000",
      "Located within Uganda",
    ],
  },
  {
    category: "Booking Requirements",
    requirements: [
      "Guest must be verified Roomy user",
      "Booking made through Roomy platform",
      "Payment processed through Roomy",
      "Check-in and check-out documented",
      "Incident reported within required timeframe",
    ],
  },
]

const exclusions = [
  {
    category: "Not Covered",
    items: [
      "Normal wear and tear",
      "Pre-existing damage",
      "Damage caused by host or host's family",
      "Intentional damage by host",
      "Damage from pets (unless disclosed)",
      "Damage from smoking (in non-smoking properties)",
      "Theft by guests (separate coverage available)",
      "Damage during unauthorized parties",
    ],
  },
  {
    category: "Additional Exclusions",
    items: [
      "Acts of war or terrorism",
      "Natural disasters (separate insurance needed)",
      "Nuclear incidents",
      "Government seizure",
      "Damage from illegal activities",
      "Professional or commercial use damage",
      "Damage from long-term rentals (30+ days)",
      "Currency devaluation losses",
    ],
  },
]

const preventionTips = [
  {
    title: "Screen Your Guests",
    tips: [
      "Check guest reviews and ratings",
      "Communicate with guests before arrival",
      "Verify guest identity",
      "Set clear house rules",
      "Trust your instincts about bookings",
    ],
  },
  {
    title: "Protect Your Property",
    tips: [
      "Remove or secure valuable items",
      "Install security cameras in common areas",
      "Provide clear instructions for appliances",
      "Regular property maintenance",
      "Document property condition before guests",
    ],
  },
  {
    title: "Communication Best Practices",
    tips: [
      "Respond promptly to guest messages",
      "Provide detailed check-in instructions",
      "Be available during guest stay",
      "Address issues immediately",
      "Maintain professional communication",
    ],
  },
]

const testimonials = [
  {
    name: "Sarah Nakato",
    location: "Kampala",
    incident: "Guest damaged furniture and TV",
    claimAmount: "UGX 2,500,000",
    story:
      "When guests accidentally damaged my furniture during a party, Roomy Cover handled everything professionally. The claim was processed quickly and I was back to hosting within a week.",
    rating: 5,
  },
  {
    name: "David Okello",
    location: "Entebbe",
    incident: "Water damage from guest negligence",
    claimAmount: "UGX 4,200,000",
    story:
      "A guest left the tap running overnight, causing significant water damage. Roomy Cover not only covered the repairs but also compensated for lost bookings during the restoration.",
    rating: 5,
  },
  {
    name: "Grace Atim",
    location: "Jinja",
    incident: "Kitchen appliance damage",
    claimAmount: "UGX 800,000",
    story:
      "The claims process was straightforward and the support team was very helpful. They guided me through every step and ensured I had everything needed for a successful claim.",
    rating: 5,
  },
]

export default function HostProtectionPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-100 p-4 rounded-full">
              <Shield className="w-16 h-16 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Roomy Cover: Host Protection</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive protection for hosts against property damage, liability claims, and income loss. Host with
            confidence knowing you're covered.
          </p>
        </div>

        {/* Coverage Alert */}
        <Alert className="mb-12 border-green-200 bg-green-50">
          <Shield className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-800">
            <strong>Automatic Coverage:</strong> All verified Roomy hosts are automatically enrolled in our protection
            program at no additional cost.
          </AlertDescription>
        </Alert>

        {/* Coverage Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">What's Covered</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {coverageTypes.map((coverage, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-full ${coverage.color}`}>
                      <coverage.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{coverage.title}</CardTitle>
                      <Badge variant="secondary" className="mt-1">
                        {coverage.coverage}
                      </Badge>
                    </div>
                  </div>
                  <CardDescription>{coverage.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {coverage.includes.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Claims Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">How to File a Claim</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {claimProcess.map((step, index) => (
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
                {index < claimProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <div className="w-6 h-0.5 bg-primary/30"></div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Eligibility Requirements */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Eligibility Requirements</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {eligibilityRequirements.map((category, index) => (
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

        {/* Exclusions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">What's Not Covered</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {exclusions.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-orange-500" />
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Prevention Tips */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Prevention Tips</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            The best protection is prevention. Follow these tips to minimize risks and protect your property.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {preventionTips.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Host Experiences</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.location}</CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">Claim Amount</div>
                      <div className="font-bold text-green-600">{testimonial.claimAmount}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="text-sm font-medium mb-1">Incident:</div>
                    <div className="text-sm text-muted-foreground">{testimonial.incident}</div>
                  </div>
                  <p className="text-sm text-muted-foreground italic">"{testimonial.story}"</p>
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <CheckCircle key={i} className="w-4 h-4 text-green-500" />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">Excellent Experience</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="text-center py-12">
            <Award className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl font-bold mb-4">Need to File a Claim?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Our claims team is available 24/7 to help you through the process. Report incidents quickly to ensure the
              best outcome.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                <Phone className="w-5 h-5 mr-2" />
                Call Claims Hotline
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <FileText className="w-5 h-5 mr-2" />
                File Claim Online
              </Button>
            </div>
            <p className="text-sm mt-4 opacity-75">Claims Hotline: +256 700 123 456 (Available 24/7)</p>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  )
}
