import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Footer from "@/components/footer"
import { Shield, Eye, Lock, Users, Globe, Mail, Phone, FileText, Calendar, CheckCircle } from "lucide-react"

export default function PrivacyPolicyPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal
            information.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <Badge variant="outline">Last Updated: March 15, 2024</Badge>
            <Badge variant="outline">Version 3.2</Badge>
          </div>
        </div>

        {/* Quick Summary Alert */}
        <Alert className="mb-12 border-blue-200 bg-blue-50">
          <Eye className="h-4 w-4 text-blue-600" />
          <AlertDescription className="text-blue-800">
            <strong>Quick Summary:</strong> We collect information to provide our services, never sell your data to
            third parties, and give you control over your privacy settings. You can delete your account and data at any
            time.
          </AlertDescription>
        </Alert>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Information We Collect */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                1. Information We Collect
              </CardTitle>
              <CardDescription>
                We collect information you provide directly and automatically when you use our services.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">Information You Provide</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Account Information:</strong> Name, email address, phone number, date of birth, profile
                      photo, and government-issued ID for verification
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Profile Information:</strong> Bio, preferences, languages spoken, and other profile
                      details
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Listing Information:</strong> Property details, photos, descriptions, pricing, and
                      availability (for hosts)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Communication:</strong> Messages between users, reviews, and customer support interactions
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Payment Information:</strong> Credit card details, bank account information, and
                      transaction history (processed securely by our payment partners)
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Information We Collect Automatically</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Usage Data:</strong> Pages visited, features used, time spent on platform, and interaction
                      patterns
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Device Information:</strong> IP address, browser type, operating system, device
                      identifiers, and mobile network information
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Location Data:</strong> Approximate location based on IP address and precise location
                      (with your permission) for location-based features
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Cookies and Tracking:</strong> Cookies, web beacons, and similar technologies to improve
                      user experience and analyze usage
                    </span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="w-5 h-5" />
                2. How We Use Your Information
              </CardTitle>
              <CardDescription>We use your information to provide, improve, and protect our services.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Service Provision</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Create and manage your account</li>
                    <li>• Process bookings and payments</li>
                    <li>• Enable communication between users</li>
                    <li>• Provide customer support</li>
                    <li>• Send booking confirmations and updates</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Platform Improvement</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Analyze usage patterns and preferences</li>
                    <li>• Develop new features and services</li>
                    <li>• Personalize your experience</li>
                    <li>• Conduct research and analytics</li>
                    <li>• Test and optimize platform performance</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Safety & Security</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Verify user identity and prevent fraud</li>
                    <li>• Detect and prevent harmful behavior</li>
                    <li>• Enforce our terms of service Detect and prevent harmful behavior</li>
                    <li>• Enforce our terms of service</li>
                    <li>• Protect against spam and abuse</li>
                    <li>• Maintain platform integrity</li>
                    <li>• Comply with legal requirements</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Communication</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Send important service updates</li>
                    <li>• Notify about booking status changes</li>
                    <li>• Share promotional offers (with consent)</li>
                    <li>• Respond to your inquiries</li>
                    <li>• Send security alerts when necessary</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Information Sharing */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                3. How We Share Your Information
              </CardTitle>
              <CardDescription>
                We only share your information in specific circumstances and with your consent.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">With Other Users</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  When you book or host, certain information is shared to facilitate the transaction:
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Profile information (name, photo, reviews)</li>
                  <li>• Contact information for confirmed bookings</li>
                  <li>• Listing details and photos (for hosts)</li>
                  <li>• Messages and reviews</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3">With Service Providers</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  We work with trusted third-party service providers who help us operate our platform:
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Payment processors (Stripe, PayPal, local banks)</li>
                  <li>• Identity verification services</li>
                  <li>• Cloud hosting providers (AWS, Google Cloud)</li>
                  <li>• Customer support tools</li>
                  <li>• Analytics and marketing platforms</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Legal Requirements</h3>
                <p className="text-sm text-muted-foreground">
                  We may disclose information when required by law, to protect our rights, or in response to legal
                  processes such as court orders or government requests.
                </p>
              </div>

              <Alert className="border-red-200 bg-red-50">
                <Shield className="h-4 w-4 text-red-600" />
                <AlertDescription className="text-red-800">
                  <strong>We Never Sell Your Data:</strong> We do not sell, rent, or trade your personal information to
                  third parties for their marketing purposes.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Data Security */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="w-5 h-5" />
                4. Data Security
              </CardTitle>
              <CardDescription>
                We implement industry-standard security measures to protect your information.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Technical Safeguards</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• SSL/TLS encryption for data transmission</li>
                    <li>• AES-256 encryption for data at rest</li>
                    <li>• Regular security audits and penetration testing</li>
                    <li>• Multi-factor authentication options</li>
                    <li>• Secure cloud infrastructure</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Operational Safeguards</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Limited access to personal data</li>
                    <li>• Employee background checks and training</li>
                    <li>• Regular security awareness programs</li>
                    <li>• Incident response procedures</li>
                    <li>• Data backup and recovery systems</li>
                  </ul>
                </div>
              </div>
              <Alert className="border-yellow-200 bg-yellow-50">
                <Lock className="h-4 w-4 text-yellow-600" />
                <AlertDescription className="text-yellow-800">
                  <strong>Security Notice:</strong> While we implement strong security measures, no system is 100%
                  secure. Please use strong passwords and keep your account information confidential.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Your Rights and Choices */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                5. Your Rights and Choices
              </CardTitle>
              <CardDescription>You have control over your personal information and privacy settings.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Access and Control</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Access:</strong> View and download your personal data
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Update:</strong> Correct or update your information
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Delete:</strong> Request deletion of your account and data
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Portability:</strong> Export your data in a readable format
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Privacy Settings</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Profile Visibility:</strong> Control who can see your profile
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Communication:</strong> Manage email and notification preferences
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Location:</strong> Control location data sharing
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Marketing:</strong> Opt out of promotional communications
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* International Transfers */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                6. International Data Transfers
              </CardTitle>
              <CardDescription>Information about how we handle data across borders.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Roomy operates primarily in Uganda, but we may transfer your information to other countries for
                processing and storage. When we do this, we ensure appropriate safeguards are in place:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Standard contractual clauses approved by data protection authorities</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Adequacy decisions recognizing equivalent protection levels</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Certification schemes and codes of conduct</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Your explicit consent for specific transfers</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Retention */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                7. Data Retention
              </CardTitle>
              <CardDescription>How long we keep your information and why.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  We retain your information for as long as necessary to provide our services and comply with legal
                  obligations:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Active Accounts</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Profile information: Until account deletion</li>
                      <li>• Booking history: 7 years for tax purposes</li>
                      <li>• Messages: 2 years after last activity</li>
                      <li>• Reviews: Permanently (anonymized after deletion)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Deleted Accounts</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Most data: Deleted within 30 days</li>
                      <li>• Financial records: 7 years (legal requirement)</li>
                      <li>• Safety incidents: Up to 10 years</li>
                      <li>• Anonymized analytics: Indefinitely</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Children's Privacy */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                8. Children's Privacy
              </CardTitle>
              <CardDescription>Our policy regarding users under 18 years of age.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Roomy is not intended for children under 18 years of age. We do not knowingly collect personal
                information from children under 18. If we become aware that we have collected information from a child
                under 18, we will take steps to delete such information promptly.
              </p>
              <p className="text-sm text-muted-foreground">
                If you are a parent or guardian and believe your child has provided us with personal information, please
                contact us immediately at <strong>privacy@roomy.ug</strong>.
              </p>
            </CardContent>
          </Card>

          {/* Changes to Policy */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                9. Changes to This Policy
              </CardTitle>
              <CardDescription>How we handle updates to our privacy policy.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                We may update this privacy policy from time to time to reflect changes in our practices, technology, or
                legal requirements. When we make significant changes, we will:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Notify you via email or platform notification</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Update the "Last Updated" date at the top of this policy</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Provide a summary of key changes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Give you time to review changes before they take effect</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                10. Contact Us
              </CardTitle>
              <CardDescription>How to reach us with privacy-related questions or concerns.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Privacy Team</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-primary" />
                      <span>privacy@roomy.ug</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary" />
                      <span>+256 700 123 456</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Mailing Address</h3>
                  <div className="text-sm text-muted-foreground">
                    <p>Roomy Uganda Ltd.</p>
                    <p>Privacy Department</p>
                    <p>Plot 123, Kampala Road</p>
                    <p>Central Division, Kampala</p>
                    <p>Uganda</p>
                  </div>
                </div>
              </div>
              <Alert className="mt-6 border-blue-200 bg-blue-50">
                <Shield className="h-4 w-4 text-blue-600" />
                <AlertDescription className="text-blue-800">
                  <strong>Response Time:</strong> We aim to respond to all privacy-related inquiries within 30 days. For
                  urgent matters, please call our privacy hotline.
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
