import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Footer from "@/components/footer"
import {
  AlertTriangle,
  Shield,
  Phone,
  MessageSquare,
  FileText,
  Camera,
  Clock,
  CheckCircle,
  Users,
  Home,
  CreditCard,
} from "lucide-react"

const reportTypes = [
  {
    value: "safety",
    label: "Safety Concern",
    description: "Report unsafe conditions or behavior",
    icon: Shield,
    urgent: true,
  },
  {
    value: "discrimination",
    label: "Discrimination",
    description: "Report discriminatory behavior or content",
    icon: Users,
    urgent: true,
  },
  {
    value: "property",
    label: "Property Issue",
    description: "Report property misrepresentation or problems",
    icon: Home,
    urgent: false,
  },
  {
    value: "payment",
    label: "Payment Issue",
    description: "Report payment or billing problems",
    icon: CreditCard,
    urgent: false,
  },
  {
    value: "other",
    label: "Other Concern",
    description: "Report other issues not listed above",
    icon: FileText,
    urgent: false,
  },
]

const emergencyContacts = [
  {
    title: "Immediate Safety Emergency",
    description: "If you're in immediate danger",
    contact: "Call 999 (Police) or 911 (Medical)",
    available: "24/7",
    priority: "urgent",
  },
  {
    title: "Roomy Safety Hotline",
    description: "For urgent safety concerns on platform",
    contact: "+256 700 123 456",
    available: "24/7",
    priority: "high",
  },
  {
    title: "General Support",
    description: "For non-urgent issues and questions",
    contact: "support@roomy.ug",
    available: "Response within 24 hours",
    priority: "normal",
  },
]

export default function ReportPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-red-100 p-4 rounded-full">
              <AlertTriangle className="w-16 h-16 text-red-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Report a Concern</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your safety and security are our top priorities. Report any concerns, issues, or violations you encounter on
            our platform.
          </p>
        </div>

        {/* Emergency Alert */}
        <Alert className="mb-8 border-red-200 bg-red-50">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800">
            <strong>Emergency:</strong> If you're in immediate danger, contact local emergency services (999 for police,
            911 for medical) before using this form.
          </AlertDescription>
        </Alert>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Report Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Submit a Report
                </CardTitle>
                <CardDescription>
                  Please provide as much detail as possible to help us investigate your concern effectively.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Report Type */}
                <div>
                  <label className="text-sm font-medium mb-3 block">Type of Concern *</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {reportTypes.map((type) => (
                      <Card key={type.value} className="cursor-pointer hover:shadow-md transition-shadow">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-3">
                            <div
                              className={`p-2 rounded-full ${type.urgent ? "bg-red-100" : "bg-blue-100"} flex-shrink-0`}
                            >
                              <type.icon className={`w-5 h-5 ${type.urgent ? "text-red-600" : "text-blue-600"}`} />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <h3 className="font-medium text-sm">{type.label}</h3>
                                {type.urgent && (
                                  <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Urgent</span>
                                )}
                              </div>
                              <p className="text-xs text-muted-foreground mt-1">{type.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Your Name *</label>
                    <Input placeholder="Enter your full name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email Address *</label>
                    <Input type="email" placeholder="your.email@example.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Phone Number</label>
                    <Input placeholder="+256 700 123 456" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Your Role</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="guest">Guest</SelectItem>
                        <SelectItem value="host">Host</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Incident Details */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Booking/Listing ID (if applicable)</label>
                  <Input placeholder="Enter booking or listing ID" />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">When did this occur? *</label>
                  <Input type="datetime-local" />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Location (if applicable)</label>
                  <Input placeholder="City, address, or property name" />
                </div>

                {/* Description */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Detailed Description *</label>
                  <Textarea
                    placeholder="Please provide a detailed description of what happened, including any relevant context, names, dates, and specific incidents..."
                    rows={6}
                  />
                </div>

                {/* Evidence Upload */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Supporting Evidence</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Camera className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                    <p className="text-sm text-gray-600 mb-2">Upload photos, screenshots, or documents</p>
                    <p className="text-xs text-gray-500">Supported formats: JPG, PNG, PDF (Max 10MB each)</p>
                    <Button variant="outline" className="mt-3 bg-transparent">
                      Choose Files
                    </Button>
                  </div>
                </div>

                {/* Additional Options */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="anonymous" />
                    <label htmlFor="anonymous" className="text-sm">
                      Submit this report anonymously
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="contact" />
                    <label htmlFor="contact" className="text-sm">
                      I consent to being contacted about this report
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label htmlFor="terms" className="text-sm">
                      I confirm this information is accurate to the best of my knowledge *
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button className="w-full md:w-auto" size="lg">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    Submit Report
                  </Button>
                  <p className="text-xs text-muted-foreground mt-2">
                    Reports are reviewed within 24-48 hours. Urgent safety matters are prioritized.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Emergency Contacts */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Emergency Contacts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {emergencyContacts.map((contact, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium text-sm">{contact.title}</h4>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          contact.priority === "urgent"
                            ? "bg-red-100 text-red-800"
                            : contact.priority === "high"
                              ? "bg-orange-100 text-orange-800"
                              : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {contact.priority}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">{contact.description}</p>
                    <p className="font-medium text-sm">{contact.contact}</p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {contact.available}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* What Happens Next */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  What Happens Next
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="bg-primary/10 p-1 rounded-full flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Report Received</h4>
                      <p className="text-xs text-muted-foreground">
                        You'll receive a confirmation email with your report ID
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="bg-primary/10 p-1 rounded-full flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Investigation</h4>
                      <p className="text-xs text-muted-foreground">Our team reviews and investigates your report</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="bg-primary/10 p-1 rounded-full flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Action Taken</h4>
                      <p className="text-xs text-muted-foreground">Appropriate action is taken based on our findings</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="bg-primary/10 p-1 rounded-full flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Follow-up</h4>
                      <p className="text-xs text-muted-foreground">We'll update you on the outcome when possible</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Resources */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Additional Resources</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="ghost" className="w-full justify-start text-sm" asChild>
                  <a href="/safety">
                    <Shield className="w-4 h-4 mr-2" />
                    Safety Guidelines
                  </a>
                </Button>
                <Button variant="ghost" className="w-full justify-start text-sm" asChild>
                  <a href="/help">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Help Center
                  </a>
                </Button>
                <Button variant="ghost" className="w-full justify-start text-sm" asChild>
                  <a href="/anti-discrimination">
                    <Users className="w-4 h-4 mr-2" />
                    Anti-Discrimination Policy
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
