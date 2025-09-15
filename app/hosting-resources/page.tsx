import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Footer from "@/components/footer"
import {
  BookOpen,
  Video,
  Users,
  Star,
  TrendingUp,
  DollarSign,
  MessageSquare,
  Download,
  Play,
  Clock,
  Award,
  CheckCircle,
} from "lucide-react"

const resourceCategories = [
  {
    id: "getting-started",
    title: "Getting Started",
    icon: BookOpen,
    description: "Essential guides for new hosts",
  },
  {
    id: "optimization",
    title: "Listing Optimization",
    icon: TrendingUp,
    description: "Improve your listing performance",
  },
  {
    id: "guest-experience",
    title: "Guest Experience",
    icon: Users,
    description: "Create memorable stays",
  },
  {
    id: "business-growth",
    title: "Business Growth",
    icon: DollarSign,
    description: "Scale your hosting business",
  },
]

const guides = {
  "getting-started": [
    {
      title: "Host Onboarding Guide",
      description: "Complete step-by-step guide to setting up your first listing",
      type: "PDF Guide",
      duration: "30 min read",
      difficulty: "Beginner",
      downloads: 2450,
      rating: 4.9,
    },
    {
      title: "Legal Requirements for Hosts in Uganda",
      description: "Understanding licenses, taxes, and regulations",
      type: "PDF Guide",
      duration: "20 min read",
      difficulty: "Beginner",
      downloads: 1890,
      rating: 4.8,
    },
    {
      title: "Setting Up Your Space",
      description: "Essential amenities and safety requirements",
      type: "Checklist",
      duration: "15 min read",
      difficulty: "Beginner",
      downloads: 3200,
      rating: 4.9,
    },
    {
      title: "Your First Guest: What to Expect",
      description: "Preparing for and managing your first booking",
      type: "Video Course",
      duration: "45 min watch",
      difficulty: "Beginner",
      downloads: 1650,
      rating: 4.7,
    },
  ],
  optimization: [
    {
      title: "Photography Guide for Hosts",
      description: "Take stunning photos that attract more bookings",
      type: "Video Course",
      duration: "60 min watch",
      difficulty: "Intermediate",
      downloads: 2890,
      rating: 4.9,
    },
    {
      title: "Writing Compelling Listing Descriptions",
      description: "Craft descriptions that convert browsers to bookers",
      type: "PDF Guide",
      duration: "25 min read",
      difficulty: "Intermediate",
      downloads: 2100,
      rating: 4.8,
    },
    {
      title: "Pricing Strategy Masterclass",
      description: "Optimize your pricing for maximum revenue",
      type: "Video Course",
      duration: "90 min watch",
      difficulty: "Advanced",
      downloads: 1750,
      rating: 4.8,
    },
    {
      title: "SEO for Your Listing",
      description: "Improve your listing's visibility in search results",
      type: "PDF Guide",
      duration: "35 min read",
      difficulty: "Intermediate",
      downloads: 1420,
      rating: 4.7,
    },
    {
      title: "Seasonal Pricing Strategies",
      description: "Adjust pricing for holidays, events, and seasons",
      type: "Webinar",
      duration: "75 min watch",
      difficulty: "Advanced",
      downloads: 980,
      rating: 4.9,
    },
  ],
  "guest-experience": [
    {
      title: "Creating a 5-Star Guest Experience",
      description: "Go above and beyond to delight your guests",
      type: "Video Course",
      duration: "120 min watch",
      difficulty: "Intermediate",
      downloads: 3100,
      rating: 4.9,
    },
    {
      title: "Communication Best Practices",
      description: "Master guest communication from inquiry to checkout",
      type: "PDF Guide",
      duration: "40 min read",
      difficulty: "Beginner",
      downloads: 2650,
      rating: 4.8,
    },
    {
      title: "Handling Difficult Situations",
      description: "Resolve conflicts and manage challenging guests",
      type: "Video Course",
      duration: "85 min watch",
      difficulty: "Advanced",
      downloads: 1890,
      rating: 4.7,
    },
    {
      title: "Local Experience Guide Creation",
      description: "Create personalized guides for your area",
      type: "Template",
      duration: "30 min setup",
      difficulty: "Intermediate",
      downloads: 2200,
      rating: 4.8,
    },
  ],
  "business-growth": [
    {
      title: "Scaling Your Hosting Business",
      description: "Strategies for managing multiple properties",
      type: "Masterclass",
      duration: "180 min watch",
      difficulty: "Advanced",
      downloads: 1200,
      rating: 4.9,
    },
    {
      title: "Tax Planning for Hosts",
      description: "Maximize deductions and stay compliant",
      type: "PDF Guide",
      duration: "50 min read",
      difficulty: "Advanced",
      downloads: 1650,
      rating: 4.8,
    },
    {
      title: "Building a Host Team",
      description: "Hire and manage cleaners, maintenance, and co-hosts",
      type: "Video Course",
      duration: "95 min watch",
      difficulty: "Advanced",
      downloads: 890,
      rating: 4.7,
    },
    {
      title: "Investment Property Analysis",
      description: "Evaluate properties for hosting potential",
      type: "Spreadsheet Tool",
      duration: "45 min setup",
      difficulty: "Advanced",
      downloads: 1100,
      rating: 4.8,
    },
  ],
}

const webinars = [
  {
    title: "Monthly Host Q&A Session",
    date: "Every 2nd Thursday",
    time: "7:00 PM EAT",
    host: "Sarah Nakato, Superhost",
    description: "Live Q&A session with experienced hosts and Roomy team",
    attendees: 150,
    upcoming: "March 14, 2024",
  },
  {
    title: "Photography Workshop",
    date: "March 20, 2024",
    time: "6:00 PM EAT",
    host: "David Okello, Professional Photographer",
    description: "Learn to take professional-quality photos of your space",
    attendees: 85,
    upcoming: "March 20, 2024",
  },
  {
    title: "Pricing Optimization Masterclass",
    date: "March 28, 2024",
    time: "7:30 PM EAT",
    host: "Grace Atim, Revenue Management Expert",
    description: "Advanced strategies for maximizing your rental income",
    attendees: 120,
    upcoming: "March 28, 2024",
  },
]

const tools = [
  {
    title: "Listing Performance Dashboard",
    description: "Track your listing's performance metrics and analytics",
    type: "Web Tool",
    features: ["Booking analytics", "Revenue tracking", "Guest feedback analysis", "Market comparison"],
  },
  {
    title: "Pricing Calculator",
    description: "Calculate optimal pricing based on market data",
    type: "Calculator",
    features: ["Dynamic pricing suggestions", "Seasonal adjustments", "Event-based pricing", "Competitor analysis"],
  },
  {
    title: "Guest Communication Templates",
    description: "Pre-written messages for common guest interactions",
    type: "Templates",
    features: ["Welcome messages", "Check-in instructions", "House rules", "Thank you notes"],
  },
  {
    title: "Expense Tracker",
    description: "Track hosting-related expenses for tax purposes",
    type: "Spreadsheet",
    features: ["Expense categorization", "Receipt storage", "Tax deduction calculator", "Monthly reports"],
  },
]

const communityStats = [
  {
    label: "Active Hosts",
    value: "15,000+",
    description: "Hosts using our resources",
  },
  {
    label: "Resources Downloaded",
    value: "250,000+",
    description: "Total resource downloads",
  },
  {
    label: "Webinar Attendees",
    value: "5,000+",
    description: "Monthly webinar participants",
  },
  {
    label: "Average Rating",
    value: "4.8/5",
    description: "Resource satisfaction rating",
  },
]

export default function HostingResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-purple-100 p-4 rounded-full">
              <BookOpen className="w-16 h-16 text-purple-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hosting Resources</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to become a successful host. From beginner guides to advanced strategies, we've got you
            covered.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {communityStats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="font-semibold mb-1">{stat.label}</div>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Resource Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Browse by Category</h2>
          <Tabs defaultValue="getting-started" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
              {resourceCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex items-center gap-2 text-xs lg:text-sm"
                >
                  <category.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{category.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {resourceCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {guides[category.id].map((guide, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <CardTitle className="text-lg mb-2">{guide.title}</CardTitle>
                            <CardDescription className="mb-3">{guide.description}</CardDescription>
                          </div>
                          <Badge variant="outline">{guide.type}</Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {guide.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            {guide.rating}
                          </div>
                          <div className="flex items-center gap-1">
                            <Download className="w-4 h-4" />
                            {guide.downloads.toLocaleString()}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <Badge
                            variant={
                              guide.difficulty === "Beginner"
                                ? "secondary"
                                : guide.difficulty === "Intermediate"
                                  ? "default"
                                  : "destructive"
                            }
                          >
                            {guide.difficulty}
                          </Badge>
                          <Button>
                            {guide.type.includes("Video") ? (
                              <>
                                <Play className="w-4 h-4 mr-2" />
                                Watch Now
                              </>
                            ) : (
                              <>
                                <Download className="w-4 h-4 mr-2" />
                                Download
                              </>
                            )}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Upcoming Webinars */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Upcoming Webinars</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {webinars.map((webinar, index) => (
              <Card key={index} className="relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <Badge className="bg-red-100 text-red-800">Live</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{webinar.title}</CardTitle>
                  <CardDescription>{webinar.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-muted-foreground">Date</div>
                      <div className="font-medium">{webinar.upcoming}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Time</div>
                      <div className="font-medium">{webinar.time}</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Host</div>
                    <div className="font-medium">{webinar.host}</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">{webinar.attendees} registered</div>
                    <Button>
                      <Video className="w-4 h-4 mr-2" />
                      Register
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tools & Templates */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Tools & Templates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tools.map((tool, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{tool.title}</CardTitle>
                    <Badge variant="outline">{tool.type}</Badge>
                  </div>
                  <CardDescription>{tool.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {tool.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Access Tool
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Community Forum CTA */}
        <Card className="mb-16 bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
          <CardContent className="text-center py-12">
            <MessageSquare className="w-16 h-16 mx-auto mb-6 text-purple-600" />
            <h2 className="text-3xl font-bold mb-4 text-purple-800">Join the Host Community</h2>
            <p className="text-lg mb-8 text-purple-700 max-w-2xl mx-auto">
              Connect with fellow hosts, share experiences, ask questions, and learn from the community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-purple-600 hover:bg-purple-700">
                <Users className="w-5 h-5 mr-2" />
                Join Community Forum
              </Button>
              <Button
                variant="outline"
                className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white bg-transparent"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Ask a Question
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="text-center py-12">
            <Award className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl font-bold mb-4">Ready to Excel as a Host?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Access our complete library of hosting resources and join thousands of successful hosts across Uganda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                <BookOpen className="w-5 h-5 mr-2" />
                Browse All Resources
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Video className="w-5 h-5 mr-2" />
                Watch Getting Started
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  )
}
