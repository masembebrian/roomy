import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Newspaper, Calendar, User, Eye, Share2, Download, Search } from "lucide-react"

const featuredNews = [
  {
    id: 1,
    title: "Roomy Reaches 20,000 Active Hosts Across Uganda",
    excerpt:
      "Platform celebrates major milestone as hosting community continues to grow, contributing over UGX 50 billion to local economy.",
    category: "Company News",
    date: "March 10, 2024",
    author: "Communications Team",
    readTime: "3 min read",
    views: 2450,
    image: "/placeholder.svg?height=300&width=500&text=20K+Hosts+Milestone",
    featured: true,
  },
  {
    id: 2,
    title: "New Safety Features Launched to Protect Hosts and Guests",
    excerpt:
      "Enhanced verification system and 24/7 safety hotline now available to all users, reinforcing our commitment to secure travel.",
    category: "Product Update",
    date: "March 8, 2024",
    author: "Product Team",
    readTime: "4 min read",
    views: 1890,
    image: "/placeholder.svg?height=300&width=500&text=Safety+Features",
    featured: true,
  },
  {
    id: 3,
    title: "Roomy Partners with Uganda Tourism Board for Sustainable Tourism",
    excerpt:
      "Strategic partnership aims to promote responsible tourism practices and support local communities across Uganda.",
    category: "Partnership",
    date: "March 5, 2024",
    author: "Partnership Team",
    readTime: "5 min read",
    views: 1650,
    image: "/placeholder.svg?height=300&width=500&text=UTB+Partnership",
    featured: true,
  },
]

const recentNews = [
  {
    id: 4,
    title: "Roomy Launches Mobile App for iOS and Android",
    excerpt:
      "New mobile application makes booking and hosting easier than ever with enhanced features and improved user experience.",
    category: "Product Update",
    date: "March 3, 2024",
    author: "Tech Team",
    readTime: "2 min read",
    views: 980,
  },
  {
    id: 5,
    title: "Supporting Afghan Refugees: 500 Families Housed Successfully",
    excerpt:
      "Roomy.org program reaches significant milestone in providing temporary housing for Afghan refugee families in Uganda.",
    category: "Social Impact",
    date: "February 28, 2024",
    author: "Social Impact Team",
    readTime: "4 min read",
    views: 1200,
  },
  {
    id: 6,
    title: "Q4 2023 Impact Report: Record Growth and Community Support",
    excerpt: "Annual report highlights platform growth, economic impact, and community initiatives across Uganda.",
    category: "Company News",
    date: "February 25, 2024",
    author: "Executive Team",
    readTime: "6 min read",
    views: 1450,
  },
  {
    id: 7,
    title: "New Host Protection Coverage Increases to UGX 100M",
    excerpt: "Enhanced insurance coverage provides greater peace of mind for hosts with expanded liability protection.",
    category: "Product Update",
    date: "February 20, 2024",
    author: "Insurance Team",
    readTime: "3 min read",
    views: 890,
  },
  {
    id: 8,
    title: "Roomy Wins 'Best Travel Platform' at Uganda Digital Awards",
    excerpt: "Platform recognized for innovation in travel technology and contribution to Uganda's digital economy.",
    category: "Awards",
    date: "February 15, 2024",
    author: "Communications Team",
    readTime: "2 min read",
    views: 750,
  },
]

const pressReleases = [
  {
    title: "Roomy Announces Series B Funding Round of $15M",
    date: "March 12, 2024",
    description: "Funding will accelerate expansion across East Africa and enhance platform features.",
    downloadUrl: "#",
  },
  {
    title: "Roomy.org Disaster Relief Program Launches",
    date: "March 1, 2024",
    description: "New initiative provides emergency housing for disaster-affected communities.",
    downloadUrl: "#",
  },
  {
    title: "Partnership with Mastercard for Secure Payments",
    date: "February 18, 2024",
    description: "Enhanced payment security and new payment options for users.",
    downloadUrl: "#",
  },
  {
    title: "Roomy Achieves Carbon Neutral Operations",
    date: "February 10, 2024",
    description: "Platform commits to environmental sustainability with carbon offset program.",
    downloadUrl: "#",
  },
]

const mediaKit = [
  {
    title: "Company Logo Pack",
    description: "High-resolution logos in various formats and colors",
    fileSize: "2.5 MB",
    format: "ZIP",
    downloadUrl: "#",
  },
  {
    title: "Brand Guidelines",
    description: "Complete brand identity guidelines and usage instructions",
    fileSize: "8.2 MB",
    format: "PDF",
    downloadUrl: "#",
  },
  {
    title: "Executive Photos",
    description: "High-resolution photos of company leadership team",
    fileSize: "15.3 MB",
    format: "ZIP",
    downloadUrl: "#",
  },
  {
    title: "Product Screenshots",
    description: "Latest app and website screenshots for media use",
    fileSize: "12.1 MB",
    format: "ZIP",
    downloadUrl: "#",
  },
  {
    title: "Company Fact Sheet",
    description: "Key statistics, milestones, and company information",
    fileSize: "1.2 MB",
    format: "PDF",
    downloadUrl: "#",
  },
]

const companyStats = [
  {
    label: "Active Hosts",
    value: "20,000+",
    description: "Verified hosts across Uganda",
  },
  {
    label: "Bookings Completed",
    value: "150,000+",
    description: "Successful stays facilitated",
  },
  {
    label: "Economic Impact",
    value: "UGX 50B+",
    description: "Contributed to local economy",
  },
  {
    label: "Cities Covered",
    value: "45+",
    description: "Towns and cities with listings",
  },
]

const mediaContacts = [
  {
    name: "Sarah Nakamya",
    title: "Head of Communications",
    email: "press@roomy.ug",
    phone: "+256 700 123 456",
    specialties: ["Company news", "Product launches", "General inquiries"],
  },
  {
    name: "David Okello",
    title: "Social Impact Director",
    email: "impact@roomy.ug",
    phone: "+256 700 123 457",
    specialties: ["Social initiatives", "Community programs", "Sustainability"],
  },
  {
    name: "Grace Atim",
    title: "Partnership Manager",
    email: "partnerships@roomy.ug",
    phone: "+256 700 123 458",
    specialties: ["Strategic partnerships", "Government relations", "Industry collaborations"],
  },
]

export default function NewsroomPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-100 p-4 rounded-full">
              <Newspaper className="w-16 h-16 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Newsroom</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest news, announcements, and stories from Roomy. Access press releases, media
            resources, and company updates.
          </p>
        </div>

        {/* Company Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {companyStats.map((stat, index) => (
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
            {/* Search */}
            <div className="mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input placeholder="Search news and press releases..." className="pl-10" />
              </div>
            </div>

            {/* Content Tabs */}
            <Tabs defaultValue="news" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="news">Latest News</TabsTrigger>
                <TabsTrigger value="press">Press Releases</TabsTrigger>
                <TabsTrigger value="media">Media Kit</TabsTrigger>
              </TabsList>

              {/* Latest News */}
              <TabsContent value="news">
                {/* Featured News */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-6">Featured Stories</h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {featuredNews.slice(0, 2).map((article) => (
                      <Card
                        key={article.id}
                        className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                      >
                        <div className="aspect-video bg-gray-100">
                          <img
                            src={article.image || "/placeholder.svg"}
                            alt={article.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardHeader>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="secondary">{article.category}</Badge>
                            <Badge variant="outline">Featured</Badge>
                          </div>
                          <CardTitle className="text-lg">{article.title}</CardTitle>
                          <CardDescription>{article.excerpt}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {article.date}
                              </div>
                              <div className="flex items-center gap-1">
                                <User className="w-4 h-4" />
                                {article.author}
                              </div>
                            </div>
                            <div className="flex items-center gap-1">
                              <Eye className="w-4 h-4" />
                              {article.views}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Recent News */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">Recent News</h2>
                  <div className="space-y-6">
                    {recentNews.map((article) => (
                      <Card key={article.id} className="hover:shadow-md transition-shadow cursor-pointer">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <Badge variant="outline">{article.category}</Badge>
                              </div>
                              <h3 className="font-semibold text-lg mb-2">{article.title}</h3>
                              <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  {article.date}
                                </div>
                                <div className="flex items-center gap-1">
                                  <User className="w-4 h-4" />
                                  {article.author}
                                </div>
                                <div className="flex items-center gap-1">
                                  <Eye className="w-4 h-4" />
                                  {article.views}
                                </div>
                                <span>{article.readTime}</span>
                              </div>
                            </div>
                            <Button variant="ghost" size="sm">
                              <Share2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Press Releases */}
              <TabsContent value="press">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold">Press Releases</h2>
                  {pressReleases.map((release, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg mb-2">{release.title}</h3>
                            <p className="text-muted-foreground mb-2">{release.description}</p>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Calendar className="w-4 h-4" />
                              {release.date}
                            </div>
                          </div>
                          <Button variant="outline">
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Media Kit */}
              <TabsContent value="media">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold">Media Resources</h2>
                  <p className="text-muted-foreground">
                    Download our media kit for logos, brand guidelines, executive photos, and other resources for media
                    coverage.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {mediaKit.map((item, index) => (
                      <Card key={index} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                          <p className="text-muted-foreground mb-4">{item.description}</p>
                          <div className="flex items-center justify-between">
                            <div className="text-sm text-muted-foreground">
                              {item.fileSize} • {item.format}
                            </div>
                            <Button>
                              <Download className="w-4 h-4 mr-2" />
                              Download
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Media Contacts */}
            <Card>
              <CardHeader>
                <CardTitle>Media Contacts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mediaContacts.map((contact, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{contact.name}</h3>
                        <p className="text-sm text-muted-foreground">{contact.title}</p>
                        <p className="text-sm text-muted-foreground">{contact.email}</p>
                        <p className="text-sm text-muted-foreground">{contact.phone}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          {contact.specialties.map((specialty, i) => (
                            <Badge key={i} variant="outline">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
