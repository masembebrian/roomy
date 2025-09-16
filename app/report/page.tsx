"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  AlertTriangle,
  Shield,
  MessageCircle,
  CreditCard,
  Home,
  Eye,
  Phone,
  Mail,
  Upload,
  Clock,
  CheckCircle,
  Lock,
  FileText,
} from "lucide-react"

const reportCategories = [
  {
    id: "safety",
    title: "Safety Concerns",
    description: "Property safety issues, dangerous conditions, or emergency situations",
    icon: AlertTriangle,
    color: "text-red-600",
    examples: [
      "Unsafe property conditions",
      "Missing safety equipment",
      "Dangerous neighborhood",
      "Emergency situations",
      "Health hazards",
    ],
    urgency: "High",
  },
  {
    id: "harassment",
    title: "Harassment or Discrimination",
    description: "Inappropriate behavior, discrimination, or harassment by hosts or guests",
    icon: Shield,
    color: "text-purple-600",
    examples: [
      "Discriminatory treatment",
      "Sexual harassment",
      "Threatening behavior",
      "Hate speech",
      "Inappropriate contact",
    ],
    urgency: "High",
  },
  {
    id: "fraud",
    title: "Fraud or Scams",
    description: "Fraudulent listings, payment scams, or deceptive practices",
    icon: CreditCard,
    color: "text-orange-600",
    examples: ["Fake listings", "Payment fraud", "Identity theft", "Bait and switch", "Unauthorized charges"],
    urgency: "Medium",
  },
  {
    id: "property",
    title: "Property Issues",
    description: "Property doesn't match listing, cleanliness issues, or amenity problems",
    icon: Home,
    color: "text-blue-600",
    examples: [
      "Property doesn't match photos",
      "Cleanliness issues",
      "Missing amenities",
      "Maintenance problems",
      "Access issues",
    ],
    urgency: "Medium",
  },
  {
    id: "privacy",
    title: "Privacy Violations",
    description: "Unauthorized recording, privacy breaches, or surveillance concerns",
    icon: Eye,
    color: "text-green-600",
    examples: [
      "Hidden cameras",
      "Unauthorized recording",
      "Privacy invasion",
      "Surveillance without consent",
      "Data misuse",
    ],
    urgency: "High",
  },
]

const reportingProcess = [
  {
    step: 1,
    title: "Submit Report",
    description: "Provide detailed information about the incident",
    icon: FileText,
    timeframe: "Immediate",
  },
  {
    step: 2,
    title: "Initial Review",
    description: "Our team reviews and categorizes your report",
    icon: Eye,
    timeframe: "Within 2 hours",
  },
  {
    step: 3,
    title: "Investigation",
    description: "Thorough investigation with all parties involved",
    icon: MessageCircle,
    timeframe: "1-5 business days",
  },
  {
    step: 4,
    title: "Resolution",
    description: "Action taken and follow-up communication",
    icon: CheckCircle,
    timeframe: "Within 7 business days",
  },
]

const supportChannels = [
  {
    title: "Emergency Hotline",
    description: "For immediate safety concerns and emergencies",
    icon: Phone,
    contact: "+256 700 123 456",
    availability: "24/7",
    responseTime: "Immediate",
    priority: "Emergency",
  },
  {
    title: "Safety Team Email",
    description: "For detailed reports and non-emergency safety issues",
    icon: Mail,
    contact: "safety@roomy.ug",
    availability: "24/7",
    responseTime: "Within 2 hours",
    priority: "High",
  },
  {
    title: "Live Chat Support",
    description: "For general concerns and immediate assistance",
    icon: MessageCircle,
    contact: "Available on platform",
    availability: "24/7",
    responseTime: "Within 5 minutes",
    priority: "Standard",
  },
  {
    title: "Anonymous Reporting",
    description: "Submit reports without revealing your identity",
    icon: Lock,
    contact: "Anonymous form below",
    availability: "Always",
    responseTime: "Within 24 hours",
    priority: "Confidential",
  },
]

export default function ReportPage() {
  const [selectedCategory, setSelectedCategory] = useState("")
  const [formData, setFormData] = useState({
    category: "",
    urgency: "",
    title: "",
    description: "",
    location: "",
    dateTime: "",
    involvedParties: "",
    evidence: "",
    contactPreference: "",
    anonymous: false,
    followUp: true,
  })
  const [files, setFiles] = useState<File[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setSubmitted(true)
  }

  const selectedCategoryData = reportCategories.find((cat) => cat.id === selectedCategory)

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-6">
              <CheckCircle className="w-16 h-16 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Report Submitted Successfully</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Thank you for reporting this concern. We take all reports seriously and will investigate promptly.
            </p>
            <div className="bg-muted p-6 rounded-lg mb-8">
              <h3 className="font-semibold mb-2">Report ID: RPT-{Date.now().toString().slice(-6)}</h3>
              <p className="text-sm text-muted-foreground">
                Save this ID for your records. You can use it to check the status of your report.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => window.location.reload()}>Submit Another Report</Button>
              <Button variant="outline" onClick={() => (window.location.href = "/")}>
                Return to Home
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-primary/10 p-4 rounded-full">
              <AlertTriangle className="w-16 h-16 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Report a Concern</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your safety and security are our top priorities. Report any concerns, safety issues, or policy violations
            you encounter on our platform.
          </p>
        </div>

        {/* Emergency Alert */}
        <Alert className="mb-12 border-red-200 bg-red-50">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800">
            <strong>Emergency:</strong> If you're in immediate danger or experiencing a safety emergency, call local
            emergency services (999) or our emergency hotline at <strong>+256 700 123 456</strong> immediately.
          </AlertDescription>
        </Alert>

        {/* Report Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">What would you like to report?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reportCategories.map((category) => (
              <Card
                key={category.id}
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  selectedCategory === category.id ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => {
                  setSelectedCategory(category.id)
                  handleInputChange("category", category.id)
                }}
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <category.icon className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{category.title}</CardTitle>
                        <Badge variant={category.urgency === "High" ? "destructive" : "secondary"} className="text-xs">
                          {category.urgency}
                        </Badge>
                      </div>
                      <CardDescription>{category.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="font-medium text-sm mb-2">Examples:</h4>
                    <ul className="space-y-1">
                      {category.examples.slice(0, 3).map((example, index) => (
                        <li key={index} className="text-xs text-muted-foreground">
                          • {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Report Form */}
        {selectedCategory && (
          <div className="mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  {selectedCategoryData && <selectedCategoryData.icon className="w-6 h-6 text-primary" />}
                  Report: {selectedCategoryData?.title}
                </CardTitle>
                <CardDescription>
                  Please provide as much detail as possible to help us investigate your concern effectively.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="urgency">Urgency Level</Label>
                      <Select onValueChange={(value) => handleInputChange("urgency", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select urgency level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low - General concern</SelectItem>
                          <SelectItem value="medium">Medium - Needs attention</SelectItem>
                          <SelectItem value="high">High - Urgent issue</SelectItem>
                          <SelectItem value="emergency">Emergency - Immediate danger</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="dateTime">Date & Time of Incident</Label>
                      <Input
                        id="dateTime"
                        type="datetime-local"
                        value={formData.dateTime}
                        onChange={(e) => handleInputChange("dateTime", e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="title">Brief Summary</Label>
                    <Input
                      id="title"
                      placeholder="Provide a brief summary of the issue"
                      value={formData.title}
                      onChange={(e) => handleInputChange("title", e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="description">Detailed Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Please provide a detailed description of what happened, including any relevant context..."
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      rows={6}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        placeholder="Property address or general location"
                        value={formData.location}
                        onChange={(e) => handleInputChange("location", e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="involvedParties">Involved Parties</Label>
                      <Input
                        id="involvedParties"
                        placeholder="Names or usernames of people involved"
                        value={formData.involvedParties}
                        onChange={(e) => handleInputChange("involvedParties", e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="evidence">Supporting Evidence</Label>
                    <div className="mt-2">
                      <Input
                        id="evidence"
                        type="file"
                        multiple
                        accept="image/*,video/*,.pdf,.doc,.docx"
                        onChange={handleFileUpload}
                        className="mb-2"
                      />
                      <p className="text-xs text-muted-foreground">
                        Upload photos, videos, screenshots, or documents that support your report. Max 10MB per file.
                      </p>
                      {files.length > 0 && (
                        <div className="mt-2">
                          <p className="text-sm font-medium">Selected files:</p>
                          <ul className="text-xs text-muted-foreground">
                            {files.map((file, index) => (
                              <li key={index}>
                                {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="contactPreference">Preferred Contact Method</Label>
                    <Select onValueChange={(value) => handleInputChange("contactPreference", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="How should we contact you?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="phone">Phone</SelectItem>
                        <SelectItem value="platform">Platform messaging</SelectItem>
                        <SelectItem value="none">No contact needed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="anonymous"
                        checked={formData.anonymous}
                        onCheckedChange={(checked) => handleInputChange("anonymous", checked as boolean)}
                      />
                      <Label htmlFor="anonymous" className="text-sm">
                        Submit this report anonymously
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="followUp"
                        checked={formData.followUp}
                        onCheckedChange={(checked) => handleInputChange("followUp", checked as boolean)}
                      />
                      <Label htmlFor="followUp" className="text-sm">
                        I would like to receive updates on the investigation
                      </Label>
                    </div>
                  </div>

                  <Alert>
                    <Lock className="h-4 w-4" />
                    <AlertDescription>
                      Your report will be handled confidentially by our safety team. We take all reports seriously and
                      investigate them thoroughly while protecting your privacy.
                    </AlertDescription>
                  </Alert>

                  <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Clock className="w-5 h-5 mr-2 animate-spin" />
                        Submitting Report...
                      </>
                    ) : (
                      <>
                        <Upload className="w-5 h-5 mr-2" />
                        Submit Report
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Reporting Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Reporting Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <div className="w-6 h-0.5 bg-primary/30"></div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Support Channels */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Additional Support Channels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {supportChannels.map((channel, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <channel.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{channel.title}</h3>
                      <p className="text-sm text-muted-foreground">{channel.description}</p>
                    </div>
                    <Badge
                      variant={
                        channel.priority === "Emergency"
                          ? "destructive"
                          : channel.priority === "High"
                            ? "default"
                            : "secondary"
                      }
                    >
                      {channel.priority}
                    </Badge>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Contact:</span>
                      <span className="font-medium">{channel.contact}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Available:</span>
                      <span className="font-medium">{channel.availability}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Response:</span>
                      <span className="font-medium">{channel.responseTime}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-transparent" variant="outline">
                    {channel.icon === Phone ? (
                      <>
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </>
                    ) : channel.icon === Mail ? (
                      <>
                        <Mail className="w-4 h-4 mr-2" />
                        Send Email
                      </>
                    ) : (
                      <>
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Start Chat
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Privacy & Confidentiality */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="text-center py-12">
            <Lock className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl font-bold mb-4">Privacy & Confidentiality</h2>
            <p className="text-lg mb-8 opacity-90 max-w-3xl mx-auto">
              We take your privacy seriously. All reports are handled confidentially by our trained safety team. Your
              personal information is protected, and we only share details necessary for investigation and resolution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                <Shield className="w-5 h-5 mr-2" />
                Privacy Policy
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <FileText className="w-5 h-5 mr-2" />
                Safety Guidelines
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  )
}
