import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Footer from "@/components/footer"
import {
  MessageSquare,
  Users,
  ThumbsUp,
  Reply,
  Search,
  Plus,
  Clock,
  Eye,
  Award,
  Heart,
  HelpCircle,
  Lightbulb,
  AlertTriangle,
  BookOpen,
} from "lucide-react"

const forumCategories = [
  {
    id: "general",
    title: "General Discussion",
    description: "General hosting topics and community chat",
    icon: MessageSquare,
    posts: 1250,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: "getting-started",
    title: "Getting Started",
    description: "Questions and tips for new hosts",
    icon: HelpCircle,
    posts: 890,
    color: "bg-green-100 text-green-600",
  },
  {
    id: "tips-tricks",
    title: "Tips & Tricks",
    description: "Share your hosting wisdom",
    icon: Lightbulb,
    posts: 650,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    id: "issues-support",
    title: "Issues & Support",
    description: "Get help with hosting challenges",
    icon: AlertTriangle,
    posts: 420,
    color: "bg-red-100 text-red-600",
  },
]

const featuredPosts = [
  {
    id: 1,
    title: "How I increased my bookings by 300% in 6 months",
    author: "Sarah Nakato",
    authorAvatar: "/placeholder.svg?height=40&width=40&text=SN",
    category: "Tips & Tricks",
    replies: 45,
    likes: 128,
    views: 2340,
    timeAgo: "2 days ago",
    excerpt:
      "I want to share the strategies that helped me transform my hosting business from struggling to thriving...",
    isPinned: true,
    authorBadge: "Superhost",
  },
  {
    id: 2,
    title: "Best practices for guest communication in Uganda",
    author: "David Okello",
    authorAvatar: "/placeholder.svg?height=40&width=40&text=DO",
    category: "General Discussion",
    replies: 32,
    likes: 89,
    views: 1560,
    timeAgo: "1 day ago",
    excerpt:
      "Cultural considerations and communication tips that have worked well for me with both local and international guests...",
    isPinned: false,
    authorBadge: "Expert Host",
  },
  {
    id: 3,
    title: "Dealing with difficult guests - need advice",
    author: "Grace Atim",
    authorAvatar: "/placeholder.svg?height=40&width=40&text=GA",
    category: "Issues & Support",
    replies: 28,
    likes: 67,
    views: 980,
    timeAgo: "3 hours ago",
    excerpt: "I'm dealing with a challenging situation and would appreciate advice from experienced hosts...",
    isPinned: false,
    authorBadge: "New Host",
  },
]

const recentPosts = [
  {
    id: 4,
    title: "Photography tips for small spaces",
    author: "John Mukasa",
    authorAvatar: "/placeholder.svg?height=32&width=32&text=JM",
    category: "Tips & Tricks",
    replies: 15,
    likes: 34,
    views: 450,
    timeAgo: "4 hours ago",
    authorBadge: "Host",
  },
  {
    id: 5,
    title: "Tax implications of hosting in Uganda",
    author: "Mary Nambi",
    authorAvatar: "/placeholder.svg?height=32&width=32&text=MN",
    category: "General Discussion",
    replies: 22,
    likes: 56,
    views: 780,
    timeAgo: "6 hours ago",
    authorBadge: "Expert Host",
  },
  {
    id: 6,
    title: "First booking anxiety - is this normal?",
    author: "Peter Ssali",
    authorAvatar: "/placeholder.svg?height=32&width=32&text=PS",
    category: "Getting Started",
    replies: 18,
    likes: 41,
    views: 320,
    timeAgo: "8 hours ago",
    authorBadge: "New Host",
  },
  {
    id: 7,
    title: "Seasonal pricing strategies for Kampala",
    author: "Rose Nakato",
    authorAvatar: "/placeholder.svg?height=32&width=32&text=RN",
    category: "Tips & Tricks",
    replies: 12,
    likes: 29,
    views: 290,
    timeAgo: "12 hours ago",
    authorBadge: "Superhost",
  },
  {
    id: 8,
    title: "Guest left property damaged - what now?",
    author: "James Okwi",
    authorAvatar: "/placeholder.svg?height=32&width=32&text=JO",
    category: "Issues & Support",
    replies: 35,
    likes: 78,
    views: 1200,
    timeAgo: "1 day ago",
    authorBadge: "Host",
  },
]

const topContributors = [
  {
    name: "Sarah Nakato",
    avatar: "/placeholder.svg?height=48&width=48&text=SN",
    badge: "Superhost",
    posts: 156,
    helpfulAnswers: 89,
    reputation: 2450,
  },
  {
    name: "David Okello",
    avatar: "/placeholder.svg?height=48&width=48&text=DO",
    badge: "Expert Host",
    posts: 134,
    helpfulAnswers: 76,
    reputation: 2100,
  },
  {
    name: "Grace Atim",
    avatar: "/placeholder.svg?height=48&width=48&text=GA",
    badge: "Community Moderator",
    posts: 98,
    helpfulAnswers: 65,
    reputation: 1890,
  },
  {
    name: "John Mukasa",
    avatar: "/placeholder.svg?height=48&width=48&text=JM",
    badge: "Host",
    posts: 87,
    helpfulAnswers: 52,
    reputation: 1650,
  },
]

const forumStats = [
  {
    label: "Total Posts",
    value: "3,200+",
    description: "Community discussions",
  },
  {
    label: "Active Members",
    value: "1,500+",
    description: "Engaged hosts",
  },
  {
    label: "Questions Answered",
    value: "2,800+",
    description: "Community support",
  },
  {
    label: "Average Response",
    value: "< 2 hours",
    description: "Time to first reply",
  },
]

export default function CommunityForumPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-100 p-4 rounded-full">
              <Users className="w-16 h-16 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Community Forum</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with fellow hosts, share experiences, get advice, and build your hosting knowledge together.
          </p>
        </div>

        {/* Forum Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {forumStats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="font-semibold mb-1">{stat.label}</div>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and New Post */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input placeholder="Search discussions..." className="pl-10" />
              </div>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                New Post
              </Button>
            </div>

            {/* Categories */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Forum Categories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {forumCategories.map((category) => (
                  <Card key={category.id} className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-full ${category.color}`}>
                          <category.icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{category.title}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{category.description}</p>
                          <div className="text-sm text-muted-foreground">{category.posts} posts</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Featured Posts */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Featured Discussions</h2>
              <div className="space-y-4">
                {featuredPosts.map((post) => (
                  <Card key={post.id} className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={post.authorAvatar || "/placeholder.svg"} alt={post.author} />
                          <AvatarFallback>
                            {post.author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            {post.isPinned && (
                              <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                                Pinned
                              </Badge>
                            )}
                            <Badge variant="outline">{post.category}</Badge>
                          </div>
                          <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
                          <p className="text-muted-foreground mb-3">{post.excerpt}</p>
                          <div className="flex items-center gap-6 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <span className="font-medium">{post.author}</span>
                              <Badge variant="outline" className="text-xs">
                                {post.authorBadge}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-1">
                              <Reply className="w-4 h-4" />
                              {post.replies}
                            </div>
                            <div className="flex items-center gap-1">
                              <ThumbsUp className="w-4 h-4" />
                              {post.likes}
                            </div>
                            <div className="flex items-center gap-1">
                              <Eye className="w-4 h-4" />
                              {post.views}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {post.timeAgo}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Recent Discussions</h2>
              <div className="space-y-3">
                {recentPosts.map((post) => (
                  <Card key={post.id} className="hover:shadow-sm transition-shadow cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src={post.authorAvatar || "/placeholder.svg"} alt={post.author} />
                          <AvatarFallback>
                            {post.author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-medium">{post.title}</h3>
                            <Badge variant="outline" className="text-xs">
                              {post.category}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <span>{post.author}</span>
                              <Badge variant="outline" className="text-xs">
                                {post.authorBadge}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-1">
                              <Reply className="w-3 h-3" />
                              {post.replies}
                            </div>
                            <div className="flex items-center gap-1">
                              <ThumbsUp className="w-3 h-3" />
                              {post.likes}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {post.timeAgo}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Top Contributors */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Top Contributors
                </CardTitle>
                <CardDescription>Most helpful community members</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {topContributors.map((contributor, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="relative">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={contributor.avatar || "/placeholder.svg"} alt={contributor.name} />
                        <AvatarFallback>
                          {contributor.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">{contributor.name}</div>
                      <Badge variant="outline" className="text-xs mb-1">
                        {contributor.badge}
                      </Badge>
                      <div className="text-xs text-muted-foreground">
                        {contributor.posts} posts • {contributor.helpfulAnswers} helpful answers
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Forum Guidelines */}
            <Card>
              <CardHeader>
                <CardTitle>Forum Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <Heart className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Be respectful and supportive of fellow hosts</span>
                </div>
                <div className="flex items-start gap-2">
                  <MessageSquare className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Stay on topic and provide helpful contributions</span>
                </div>
                <div className="flex items-start gap-2">
                  <Search className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Search before posting to avoid duplicates</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>Report inappropriate content to moderators</span>
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="ghost" className="w-full justify-start text-sm" asChild>
                  <a href="/hosting-resources">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Hosting Resources
                  </a>
                </Button>
                <Button variant="ghost" className="w-full justify-start text-sm" asChild>
                  <a href="/help">
                    <HelpCircle className="w-4 h-4 mr-2" />
                    Help Center
                  </a>
                </Button>
                <Button variant="ghost" className="w-full justify-start text-sm" asChild>
                  <a href="/become-host">
                    <Users className="w-4 h-4 mr-2" />
                    Become a Host
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
