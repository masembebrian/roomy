import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Footer from "@/components/footer"
import {
  Users,
  Gift,
  Share2,
  DollarSign,
  Star,
  Trophy,
  Copy,
  Mail,
  MessageSquare,
  Facebook,
  Twitter,
  Instagram,
  CheckCircle,
  Crown,
  Zap,
} from "lucide-react"

const referralBenefits = [
  {
    title: "You Get UGX 50,000",
    description: "Earn credits when your friend completes their first booking",
    icon: DollarSign,
    color: "text-green-600",
  },
  {
    title: "Your Friend Gets UGX 25,000",
    description: "They receive a welcome bonus for joining through your invitation",
    icon: Gift,
    color: "text-blue-600",
  },
  {
    title: "Unlimited Invites",
    description: "No limit on how many friends you can invite and earn from",
    icon: Users,
    color: "text-purple-600",
  },
  {
    title: "VIP Status Available",
    description: "Invite 10+ friends to unlock exclusive VIP benefits",
    icon: Crown,
    color: "text-yellow-600",
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
    description: "Your friend creates an account using your referral link",
    icon: Users,
  },
  {
    step: 3,
    title: "First Booking Made",
    description: "Your friend completes their first booking on Roomy",
    icon: CheckCircle,
  },
  {
    step: 4,
    title: "Both Get Rewards",
    description: "You both receive credits automatically added to your accounts",
    icon: Gift,
  },
]

const vipBenefits = [
  {
    title: "Priority Customer Support",
    description: "Skip the queue with dedicated VIP support line",
    icon: Zap,
  },
  {
    title: "Exclusive Property Access",
    description: "Early access to new premium listings",
    icon: Star,
  },
  {
    title: "Higher Referral Bonuses",
    description: "Earn UGX 75,000 per successful referral",
    icon: DollarSign,
  },
  {
    title: "VIP Events & Experiences",
    description: "Invitations to exclusive Roomy events",
    icon: Trophy,
  },
  {
    title: "Personal Account Manager",
    description: "Dedicated support for all your needs",
    icon: Users,
  },
  {
    title: "Special Discounts",
    description: "Additional 15% off all bookings",
    icon: Gift,
  },
  {
    title: "Beta Feature Access",
    description: "First to try new platform features",
    icon: Zap,
  },
  {
    title: "Annual VIP Gift Package",
    description: "Exclusive Roomy merchandise and vouchers",
    icon: Crown,
  },
]

const sharingOptions = [
  {
    platform: "Email",
    icon: Mail,
    color: "bg-gray-100 text-gray-600 hover:bg-gray-200",
    description: "Send personalized invitations",
  },
  {
    platform: "WhatsApp",
    icon: MessageSquare,
    color: "bg-green-100 text-green-600 hover:bg-green-200",
    description: "Share with contacts instantly",
  },
  {
    platform: "Facebook",
    icon: Facebook,
    color: "bg-blue-100 text-blue-600 hover:bg-blue-200",
    description: "Post to your timeline",
  },
  {
    platform: "Twitter",
    icon: Twitter,
    color: "bg-sky-100 text-sky-600 hover:bg-sky-200",
    description: "Tweet to your followers",
  },
  {
    platform: "Instagram",
    icon: Instagram,
    color: "bg-pink-100 text-pink-600 hover:bg-pink-200",
    description: "Share in your stories",
  },
  {
    platform: "Copy Link",
    icon: Copy,
    color: "bg-purple-100 text-purple-600 hover:bg-purple-200",
    description: "Copy to share anywhere",
  },
]

// Mock user data - in real app this would come from API
const userStats = {
  totalInvites: 23,
  successfulReferrals: 8,
  creditsEarned: 400000,
  currentLevel: "Gold Member",
  progressToVIP: 80, // 8 out of 10 needed for VIP
}

const recentActivity = [
  {
    friend: "Sarah Nakato",
    action: "Signed up",
    date: "2 days ago",
    status: "pending",
    reward: "Pending first booking",
  },
  {
    friend: "David Okello",
    action: "Completed first booking",
    date: "1 week ago",
    status: "completed",
    reward: "UGX 50,000 earned",
  },
  {
    friend: "Grace Atim",
    action: "Completed first booking",
    date: "2 weeks ago",
    status: "completed",
    reward: "UGX 50,000 earned",
  },
  {
    friend: "John Mukasa",
    action: "Signed up",
    date: "3 weeks ago",
    status: "pending",
    reward: "Pending first booking",
  },
]

const testimonials = [
  {
    name: "Mary Nambi",
    referrals: 15,
    earnings: "UGX 750,000",
    quote:
      "I've earned enough from referrals to fund my own travels! It's amazing how sharing something you love can be so rewarding.",
    image: "/placeholder.svg?height=60&width=60&text=Mary",
  },
  {
    name: "Peter Ssali",
    referrals: 12,
    earnings: "UGX 600,000",
    quote:
      "My friends were looking for authentic travel experiences anyway. Now we all benefit from using Roomy together!",
    image: "/placeholder.svg?height=60&width=60&text=Peter",
  },
  {
    name: "Rose Nakato",
    referrals: 20,
    earnings: "UGX 1,000,000",
    quote:
      "Being a VIP member has completely changed my travel experience. The exclusive access and support are incredible.",
    image: "/placeholder.svg?height=60&width=60&text=Rose",
  },
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Invite Friends & Earn</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Share the joy of authentic travel with your friends and earn rewards together. The more you share, the more
            you earn!
          </p>
        </div>

        {/* Benefits Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {referralBenefits.map((benefit, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                  <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                </div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="dashboard">My Dashboard</TabsTrigger>
            <TabsTrigger value="invite">Invite Friends</TabsTrigger>
            <TabsTrigger value="vip">VIP Program</TabsTrigger>
            <TabsTrigger value="terms">Terms</TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard">
            <div className="space-y-8">
              {/* Stats Overview */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{userStats.totalInvites}</div>
                    <div className="text-sm text-muted-foreground">Total Invites Sent</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">{userStats.successfulReferrals}</div>
                    <div className="text-sm text-muted-foreground">Successful Referrals</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      UGX {userStats.creditsEarned.toLocaleString()}
                    </div>
                    <div className="text-sm text-muted-foreground">Credits Earned</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-lg font-bold text-yellow-600 mb-2">{userStats.currentLevel}</div>
                    <div className="text-sm text-muted-foreground">Current Status</div>
                  </CardContent>
                </Card>
              </div>

              {/* VIP Progress */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Crown className="w-5 h-5 text-yellow-600" />
                    VIP Status Progress
                  </CardTitle>
                  <CardDescription>
                    You need {10 - userStats.successfulReferrals} more successful referrals to unlock VIP status
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress to VIP</span>
                      <span>{userStats.successfulReferrals}/10</span>
                    </div>
                    <Progress value={userStats.progressToVIP} className="h-3" />
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Referral Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex-1">
                          <div className="font-medium">{activity.friend}</div>
                          <div className="text-sm text-muted-foreground">{activity.action}</div>
                          <div className="text-xs text-muted-foreground">{activity.date}</div>
                        </div>
                        <div className="text-right">
                          <Badge
                            variant={activity.status === "completed" ? "default" : "secondary"}
                            className={
                              activity.status === "completed"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }
                          >
                            {activity.status === "completed" ? "Completed" : "Pending"}
                          </Badge>
                          <div className="text-sm text-muted-foreground mt-1">{activity.reward}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Invite Tab */}
          <TabsContent value="invite">
            <div className="space-y-8">
              {/* How It Works */}
              <div>
                <h2 className="text-2xl font-bold text-center mb-8">How It Works</h2>
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

              {/* Referral Link */}
              <Card>
                <CardHeader>
                  <CardTitle>Your Referral Link</CardTitle>
                  <CardDescription>Share this link with friends to start earning rewards</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Input value={referralLink} readOnly className="flex-1" />
                    <Button>
                      <Copy className="w-4 h-4 mr-2" />
                      Copy
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Sharing Options */}
              <Card>
                <CardHeader>
                  <CardTitle>Share Your Link</CardTitle>
                  <CardDescription>Choose how you want to share your referral link</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {sharingOptions.map((option, index) => (
                      <Button key={index} variant="outline" className={`h-20 flex-col gap-2 ${option.color}`}>
                        <option.icon className="w-6 h-6" />
                        <div className="text-center">
                          <div className="font-medium text-sm">{option.platform}</div>
                          <div className="text-xs opacity-75">{option.description}</div>
                        </div>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Success Stories */}
              <div>
                <h2 className="text-2xl font-bold text-center mb-8">Success Stories</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {testimonials.map((testimonial, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div>
                            <h3 className="font-semibold">{testimonial.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              {testimonial.referrals} referrals • {testimonial.earnings} earned
                            </p>
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

          {/* VIP Program Tab */}
          <TabsContent value="vip">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">VIP Program Benefits</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Unlock exclusive benefits when you successfully refer 10 or more friends to Roomy. Enjoy premium perks
                  and enhanced rewards.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {vipBenefits.map((benefit, index) => (
                  <Card key={index} className="text-center">
                    <CardContent className="p-6">
                      <div className="bg-yellow-100 p-3 rounded-full w-fit mx-auto mb-4">
                        <benefit.icon className="w-6 h-6 text-yellow-600" />
                      </div>
                      <h3 className="font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
                <CardContent className="text-center py-12">
                  <Crown className="w-16 h-16 mx-auto mb-6 text-yellow-600" />
                  <h2 className="text-3xl font-bold mb-4 text-yellow-800">Ready to Become VIP?</h2>
                  <p className="text-lg mb-8 text-yellow-700 max-w-2xl mx-auto">
                    You're only {10 - userStats.successfulReferrals} successful referrals away from unlocking VIP status
                    and all these exclusive benefits.
                  </p>
                  <Button className="bg-yellow-600 hover:bg-yellow-700">
                    <Share2 className="w-5 h-5 mr-2" />
                    Start Inviting Friends
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Terms Tab */}
          <TabsContent value="terms">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Referral Program Terms & Conditions</h2>
                <div className="prose max-w-none">
                  <Card>
                    <CardContent className="p-6 space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2">Eligibility</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                          <li>Must have an active Roomy account in good standing</li>
                          <li>Referrals must be new users who haven't previously used Roomy</li>
                          <li>Self-referrals and fake accounts are prohibited</li>
                          <li>Program available to users 18 years and older</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2">Reward Structure</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                          <li>Referrer receives UGX 50,000 credit after friend's first completed booking</li>
                          <li>New user receives UGX 25,000 welcome credit upon signup</li>
                          <li>VIP members earn UGX 75,000 per successful referral</li>
                          <li>Credits expire 12 months after being awarded</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2">VIP Program</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                          <li>VIP status achieved after 10 successful referrals</li>
                          <li>VIP benefits are reviewed annually and subject to change</li>
                          <li>VIP status may be revoked for policy violations</li>
                          <li>VIP benefits are non-transferable</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2">General Terms</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                          <li>Roomy reserves the right to modify or terminate the program at any time</li>
                          <li>Fraudulent activity will result in account suspension</li>
                          <li>Credits cannot be exchanged for cash</li>
                          <li>Program subject to applicable laws and regulations</li>
                          <li>Disputes will be resolved according to Roomy's standard terms of service</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2">Contact</h3>
                        <p className="text-sm text-muted-foreground">
                          For questions about the referral program, contact us at{" "}
                          <span className="font-medium">referrals@roomy.ug</span> or call +256 700 123 456.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  )
}
