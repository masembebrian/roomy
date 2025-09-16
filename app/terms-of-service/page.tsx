import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Footer from "@/components/footer"
import { Scale, FileText, Users, Shield, CreditCard, Home, AlertTriangle, Mail, Phone, CheckCircle } from "lucide-react"

export default function TermsOfServicePage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            These terms govern your use of Roomy's platform and services. Please read them carefully before using our
            services.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <Badge variant="outline">Last Updated: March 15, 2024</Badge>
            <Badge variant="outline">Version 4.1</Badge>
          </div>
        </div>

        {/* Agreement Notice */}
        <Alert className="mb-12 border-purple-200 bg-purple-50">
          <Scale className="h-4 w-4 text-purple-600" />
          <AlertDescription className="text-purple-800">
            <strong>By using Roomy:</strong> You agree to these terms, our Privacy Policy, and all applicable laws. If
            you don't agree with these terms, please don't use our services.
          </AlertDescription>
        </Alert>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Acceptance of Terms */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                1. Acceptance of Terms
              </CardTitle>
              <CardDescription>Your agreement to use Roomy's services.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                By accessing or using Roomy's website, mobile application, or services ("Platform"), you agree to be
                bound by these Terms of Service ("Terms") and all applicable laws and regulations. These Terms
                constitute a legally binding agreement between you and Roomy Uganda Ltd. ("Roomy," "we," "us," or
                "our").
              </p>
              <p className="text-sm text-muted-foreground">
                If you do not agree with any part of these Terms, you must not use our Platform. Your continued use of
                the Platform constitutes acceptance of any modifications to these Terms.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Key Points:</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• You must be at least 18 years old to use Roomy</li>
                  <li>• You must provide accurate and complete information</li>
                  <li>• You are responsible for maintaining account security</li>
                  <li>• These Terms may be updated from time to time</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Platform Description */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Home className="w-5 h-5" />
                2. Platform Description
              </CardTitle>
              <CardDescription>What Roomy provides and how it works.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Roomy is an online marketplace that connects people who want to rent lodging ("Guests") with people who
                want to rent out accommodations ("Hosts"). We do not own, operate, manage, or control any accommodations
                listed on our Platform.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">For Guests</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Search and book accommodations</li>
                    <li>• Communicate with Hosts</li>
                    <li>• Leave reviews and ratings</li>
                    <li>• Access customer support</li>
                    <li>• Manage bookings and payments</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">For Hosts</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• List accommodations for rent</li>
                    <li>• Set pricing and availability</li>
                    <li>• Communicate with Guests</li>
                    <li>• Receive payments</li>
                    <li>• Access hosting tools and resources</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* User Accounts */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                3. User Accounts and Eligibility
              </CardTitle>
              <CardDescription>Requirements for creating and maintaining an account.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">Eligibility Requirements</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>You must be at least 18 years old</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>You must provide accurate, current, and complete information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>You must not be prohibited from using our services under applicable law</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>You must not have been previously banned from Roomy</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Account Responsibilities</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span>You are responsible for maintaining the confidentiality of your account credentials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span>You are responsible for all activities that occur under your account</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span>You must notify us immediately of any unauthorized use of your account</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span>You may not transfer your account to another person without our consent</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Identity Verification</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  We may require identity verification for certain activities, including:
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Creating a Host account</li>
                  <li>• Making or receiving payments</li>
                  <li>• Booking high-value accommodations</li>
                  <li>• After certain security incidents</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Booking and Payments */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="w-5 h-5" />
                4. Bookings and Payments
              </CardTitle>
              <CardDescription>How bookings work and payment terms.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">Booking Process</h3>
                <ol className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="bg-primary text-primary-foreground w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">
                      1
                    </span>
                    <span>Guest selects accommodation and submits booking request</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-primary text-primary-foreground w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">
                      2
                    </span>
                    <span>Host has 24 hours to accept or decline the request</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-primary text-primary-foreground w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">
                      3
                    </span>
                    <span>If accepted, booking is confirmed and payment is processed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-primary text-primary-foreground w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">
                      4
                    </span>
                    <span>Guest and Host receive confirmation details</span>
                  </li>
                </ol>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Payment Terms</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">For Guests</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Payment is due at time of booking</li>
                      <li>• We accept major credit cards and mobile money</li>
                      <li>• Service fees are non-refundable</li>
                      <li>• Currency conversion fees may apply</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">For Hosts</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Payment released 24 hours after check-in</li>
                      <li>• Host service fees are deducted</li>
                      <li>• Payouts processed within 3-5 business days</li>
                      <li>• Tax reporting may be required</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Cancellation Policy</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Cancellation terms depend on the Host's selected policy:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <h4 className="font-medium text-green-800 mb-1">Flexible</h4>
                    <p className="text-xs text-green-700">Full refund 1 day prior to arrival</p>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-lg">
                    <h4 className="font-medium text-yellow-800 mb-1">Moderate</h4>
                    <p className="text-xs text-yellow-700">Full refund 5 days prior to arrival</p>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <h4 className="font-medium text-red-800 mb-1">Strict</h4>
                    <p className="text-xs text-red-700">50% refund up to 1 week prior</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* User Conduct */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                5. User Conduct and Prohibited Activities
              </CardTitle>
              <CardDescription>Rules and guidelines for using our platform.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">Acceptable Use</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  You agree to use Roomy in a lawful, respectful, and responsible manner. You must:
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Treat all users with respect and courtesy</li>
                  <li>• Provide accurate information in listings and profiles</li>
                  <li>• Follow all applicable laws and regulations</li>
                  <li>• Respect property and community guidelines</li>
                  <li>• Report any safety concerns or violations</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Prohibited Activities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2 text-red-600">Platform Misuse</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Creating fake accounts or profiles</li>
                      <li>• Manipulating reviews or ratings</li>
                      <li>• Circumventing platform fees</li>
                      <li>• Automated data collection (scraping)</li>
                      <li>• Interfering with platform functionality</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-red-600">Harmful Behavior</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Discrimination or harassment</li>
                      <li>• Fraudulent or deceptive practices</li>
                      <li>• Illegal activities or content</li>
                      <li>• Spam or unsolicited communications</li>
                      <li>• Violating others' privacy or rights</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Alert className="border-red-200 bg-red-50">
                <AlertTriangle className="h-4 w-4 text-red-600" />
                <AlertDescription className="text-red-800">
                  <strong>Violation Consequences:</strong> Violations may result in warnings, account suspension, or
                  permanent bans. Serious violations may be reported to law enforcement.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Host Responsibilities */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Home className="w-5 h-5" />
                6. Host Responsibilities
              </CardTitle>
              <CardDescription>Specific obligations for users who list accommodations.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">Listing Requirements</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Provide accurate descriptions, photos, and amenities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Maintain up-to-date availability calendars</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Disclose any safety hazards or restrictions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Comply with local laws and regulations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Obtain necessary permits and licenses</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Guest Relations</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Respond to inquiries and booking requests within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Provide clear check-in and check-out instructions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Be available for guest questions and emergencies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Treat all guests fairly and without discrimination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Maintain clean and safe accommodations</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Legal Compliance</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Hosts are responsible for understanding and complying with:
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Local zoning and housing laws</li>
                  <li>• Tax obligations and reporting requirements</li>
                  <li>• Safety and building codes</li>
                  <li>• Insurance requirements</li>
                  <li>• Tourism and hospitality regulations</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                7. Intellectual Property
              </CardTitle>
              <CardDescription>Rights and ownership of content and platform materials.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">Roomy's Intellectual Property</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  The Roomy platform, including its design, functionality, trademarks, and content, is owned by Roomy
                  and protected by intellectual property laws. You may not:
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Copy, modify, or distribute our platform or content</li>
                  <li>• Use our trademarks or branding without permission</li>
                  <li>• Reverse engineer or attempt to extract source code</li>
                  <li>• Create derivative works based on our platform</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3">User Content</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  You retain ownership of content you post on Roomy (photos, descriptions, reviews). However, by posting
                  content, you grant Roomy a worldwide, non-exclusive license to:
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Display and distribute your content on our platform</li>
                  <li>• Use your content for marketing and promotional purposes</li>
                  <li>• Modify or adapt your content for technical requirements</li>
                  <li>• Sublicense your content to service providers</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Copyright Infringement</h3>
                <p className="text-sm text-muted-foreground">
                  If you believe your copyright has been infringed, please contact us at{" "}
                  <strong>copyright@roomy.ug</strong> with details of the alleged infringement. We will investigate and
                  take appropriate action under applicable copyright laws.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                8. Limitation of Liability
              </CardTitle>
              <CardDescription>Important limitations on Roomy's liability.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert className="border-yellow-200 bg-yellow-50">
                <AlertTriangle className="h-4 w-4 text-yellow-600" />
                <AlertDescription className="text-yellow-800">
                  <strong>Important:</strong> Please read this section carefully as it limits Roomy's liability to you.
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Platform Role</h3>
                  <p className="text-sm text-muted-foreground">
                    Roomy acts as an intermediary platform connecting Hosts and Guests. We do not own, operate, or
                    control any accommodations. We are not responsible for the actions, errors, omissions, or negligence
                    of Hosts or Guests.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Disclaimer of Warranties</h3>
                  <p className="text-sm text-muted-foreground">
                    Our platform is provided "as is" without warranties of any kind. We do not guarantee that the
                    platform will be error-free, secure, or continuously available.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Limitation of Damages</h3>
                  <p className="text-sm text-muted-foreground">
                    To the maximum extent permitted by law, Roomy's total liability shall not exceed the amount of fees
                    paid by you to Roomy in the 12 months preceding the claim.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dispute Resolution */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scale className="w-5 h-5" />
                9. Dispute Resolution
              </CardTitle>
              <CardDescription>How disputes are handled and resolved.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">Resolution Process</h3>
                <ol className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="bg-primary text-primary-foreground w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">
                      1
                    </span>
                    <span>
                      <strong>Direct Communication:</strong> Try to resolve issues directly with the other party
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-primary text-primary-foreground w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">
                      2
                    </span>
                    <span>
                      <strong>Roomy Mediation:</strong> Contact our support team for assistance
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-primary text-primary-foreground w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">
                      3
                    </span>
                    <span>
                      <strong>Formal Resolution:</strong> Use our Resolution Center for documented disputes
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-primary text-primary-foreground w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">
                      4
                    </span>
                    <span>
                      <strong>Legal Action:</strong> Pursue legal remedies if necessary
                    </span>
                  </li>
                </ol>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Governing Law</h3>
                <p className="text-sm text-muted-foreground">
                  These Terms are governed by the laws of Uganda. Any disputes will be resolved in the courts of
                  Kampala, Uganda, unless otherwise required by applicable consumer protection laws.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Time Limits</h3>
                <p className="text-sm text-muted-foreground">
                  Claims must be filed within one year of the incident or when you reasonably should have known about
                  the issue, whichever is earlier.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                10. Termination
              </CardTitle>
              <CardDescription>How accounts can be terminated and the consequences.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">Termination by You</h3>
                <p className="text-sm text-muted-foreground mb-2">You may terminate your account at any time by:</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Contacting customer support</li>
                  <li>• Using the account deletion feature in your settings</li>
                  <li>• Following the account closure process</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Termination by Roomy</h3>
                <p className="text-sm text-muted-foreground mb-2">We may suspend or terminate your account if you:</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Violate these Terms or our policies</li>
                  <li>• Engage in fraudulent or illegal activities</li>
                  <li>• Harm other users or the platform</li>
                  <li>• Fail to pay fees or charges</li>
                  <li>• Provide false or misleading information</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Effect of Termination</h3>
                <p className="text-sm text-muted-foreground">
                  Upon termination, your access to the platform will cease, but certain provisions of these Terms will
                  survive, including payment obligations, intellectual property rights, and limitation of liability.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Changes to Terms */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                11. Changes to Terms
              </CardTitle>
              <CardDescription>How we handle updates to these terms.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                We may modify these Terms from time to time to reflect changes in our services, legal requirements, or
                business practices. When we make material changes, we will:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Notify you via email or platform notification at least 30 days in advance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Update the "Last Updated" date at the top of these Terms</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Provide a summary of key changes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Give you the opportunity to review and accept the changes</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mt-4">
                Your continued use of the platform after the effective date constitutes acceptance of the modified
                Terms. If you don't agree with the changes, you must stop using our services.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                12. Contact Information
              </CardTitle>
              <CardDescription>How to reach us with questions about these terms.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Legal Department</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-primary" />
                      <span>legal@roomy.ug</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary" />
                      <span>+256 700 123 456</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Business Address</h3>
                  <div className="text-sm text-muted-foreground">
                    <p>Roomy Uganda Ltd.</p>
                    <p>Legal Department</p>
                    <p>Plot 123, Kampala Road</p>
                    <p>Central Division, Kampala</p>
                    <p>Uganda</p>
                  </div>
                </div>
              </div>
              <Alert className="mt-6 border-blue-200 bg-blue-50">
                <Scale className="h-4 w-4 text-blue-600" />
                <AlertDescription className="text-blue-800">
                  <strong>Questions About Terms:</strong> If you have questions about these Terms of Service, please
                  contact our legal team. We're here to help clarify any provisions.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
