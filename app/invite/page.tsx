import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Footer from "@/components/footer"
import {
  Users,
  Gift,
  Share2,
  DollarSign,
  Heart,
  Star,
  Copy,
  Mail,
  MessageSquare,
  Facebook,
  Twitter,
  Instagram,
  CheckCircle,
} from "lucide-react"

const referralBenefits = [
  {
    icon: DollarSign,
    title: "UGX 50,000 Travel Credit",
    description: "You get UGX 50,000 credit when your friend completes their first booking",
    forUser: "For You",
  },
  {
    icon: Gift,
    title: "UGX 25,000 Welcome Bonus",
    description: "Your friend gets UGX 25,000 off their first booking of UGX 100,000 or more",
    forUser: "For Your Friend",
  },
  {
    icon: Star,
    title: "VIP Status",
    description: "Refer 10 friends and unlock VIP status with exclusive perks and priority support",
    forUser: "Bonus Reward",
  },
]

const howItWorks = [
  {
    step: 1,
    title: "Share Your Link",
    description: "Send your unique referral link to friends via email, social media, or messaging",
    icon: Share2,
  },
  {
    step: 2,
    title: "Friend Signs Up",
    description: "Your friend creates a Roomy account using your referral link",
    icon: Users,
  },
  {
    step: 3,
    title: "First Booking",
    description: "Your friend completes their first booking of UGX 100,000 or more",
    icon: CheckCircle,
  },
  {
    step: 4,
    title: "Both Get Rewards",
    description: "You both receive your credits within 24 hours of the completed stay",
    icon: Gift,
  },
]

const sharingOptions = [
  {
    platform: "Email",
    icon: Mail,
    description: "Send personalized invitations via email",
    color: "bg-blue-100 text-blue-600",
  },
  {
    platform: "WhatsApp",
    icon: MessageSquare,
    description: "Share with friends on WhatsApp",
    color: "bg-green-100 text-green-600",
  },
  {
    platform: "Facebook",
    icon: Facebook,
    description: "Post on your Facebook timeline",
    color: "bg-blue-100 text-blue-600",
  },
  {
    platform: "Twitter",
    icon: Twitter,
    description: "Tweet to your followers",
    color: "bg-sky-100 text-sky-600",
  },
  {
    platform: "Instagram",
    icon: Instagram,
    description: "Share on your Instagram story",
    color: "bg-pink-100 text-pink-600",
  },
  {
    platform: "Copy Link",
    icon: Copy,
    description: "Copy link to share anywhere",
    color: "bg-gray-100 text-gray-600",
  },
]

const referralStats = [
  {
    label: "Friends Invited",
    value: "0",
    description: "Total friends you've invited",
  },
  {
    label: "Successful Referrals",
    value: "0",
    description: "Friends who completed their first booking",
  },
  {
    label: "Credits Earned",
    value: "UGX 0",
    description: "Total referral credits earned",
  },
  {
    label: "Credits Available",
    value: "UGX 0",
    description: "Available credits to use",
  },
]

const vipPerks = [
  "Priority customer support",
  "Exclusive property previews",
  "Special VIP-only discounts",
  "Free property upgrades when available",
  "Dedicated VIP concierge service",
  "Early access to new features",
  "VIP member events and experiences",
  "Flexible cancellation policies",
]

export default function InvitePage() {
  const referralLink = "https://roomy.ug/invite/USER123ABC"

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 p-4 rounded-full">
              <Users className="w-16 h-16 text-green-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Invite Friends & Earn Rewards</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Share the joy of travel with your friends and family. When they book their first stay, you both get
            rewarded!
          </p>
        </div>

        {/* Referral Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Referral Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {referralBenefits.map((benefit, index) => (
              <Card key={index} className="text-center relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <Badge
                    variant={
                      benefit.forUser === "For You"
                        ? "default"
                        : benefit.forUser === "For Your Friend"
                          ? "secondary"
                          : "outline"
                    }
                  >
                    {benefit.forUser}
                  </Badge>
                </div>
                <CardContent className="p-8">
                  <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-6">
                    <benefit.icon className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Your Referral Stats */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Your Referral Dashboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {referralStats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="font-semibold mb-1">{stat.label}</div>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Share Your Link */}
        <div className="mb-16">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Share Your Referral Link</CardTitle>
              <CardDescription>Copy your unique link or share directly on social media</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Referral Link */}
              <div>
                <label className="text-sm font-medium mb-2 block">Your Referral Link</label>
                <div className="flex gap-2">
                  <Input value={referralLink} readOnly className="font-mono text-sm" />
                  <Button variant="outline">
                    <Copy className="w-4 h-4 mr-2" />
                    Copy
                  </Button>
                </div>
              </div>

              <Separator />

              {/* Sharing Options */}
              <div>
                <h3 className="font-semibold mb-4">Share on Social Media</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {sharingOptions.map((option, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="h-auto p-4 flex flex-col items-center gap-2 bg-transparent"
                    >
                      <div className={`p-2 rounded-full ${option.color}`}>
                        <option.icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-medium">{option.platform}</span>
                    </Button>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Email Invitations */}
              <div>
                <h3 className="font-semibold mb-4">Send Email Invitations</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Friend's Email Addresses</label>
                    <Input placeholder="Enter email addresses separated by commas" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Personal Message (Optional)</label>
                    <Input placeholder="Add a personal message to your invitation" />
                  </div>
                  <Button className="w-full md:w-auto">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Invitations
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <div className="w-6 h-0.5 bg-primary/30"></div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* VIP Status */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Star className="w-12 h-12 text-purple-600" />
                </div>
              </div>
              <CardTitle className="text-2xl text-purple-800">Unlock VIP Status</CardTitle>
              <CardDescription className="text-purple-600">
                Refer 10 friends and enjoy exclusive VIP benefits
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span>Progress to VIP Status</span>
                  <span>0 / 10 referrals</span>
                </div>
                <div className="w-full bg-purple-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: "0%" }}></div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {vipPerks.map((perk, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0" />
                    <span className="text-sm text-purple-800">{perk}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Terms and Conditions */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle>Referral Program Terms</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <ul className="space-y-2">
              <li>• Referral credits are awarded after your friend completes their first stay (not just booking)</li>
              <li>• Minimum booking value of UGX 100,000 required for referral rewards</li>
              <li>• Credits expire 12 months after being awarded</li>
              <li>• Credits cannot be transferred or exchanged for cash</li>
              <li>• Self-referrals and fake accounts are prohibited and will result in account suspension</li>
              <li>• Roomy reserves the right to modify or terminate the referral program at any time</li>
              <li>• Credits may take up to 24 hours to appear in your account after qualifying stay</li>
              <li>• VIP status benefits are subject to availability and may change</li>
            </ul>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="text-center py-12">
            <Heart className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl font-bold mb-4">Start Sharing Today</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              The more friends you invite, the more you earn. Help your friends discover amazing places to stay while
              earning rewards for yourself.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                <Share2 className="w-5 h-5 mr-2" />
                Share Your Link
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Email Invites
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  )
}
