import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Footer from "@/components/footer"
import {
  TrendingUp,
  DollarSign,
  Users,
  Globe,
  BarChart3,
  FileText,
  Calendar,
  Download,
  Building,
  Target,
  Zap,
} from "lucide-react"

const keyMetrics = [
  {
    label: "Total Revenue",
    value: "UGX 12.5B",
    growth: "+145%",
    period: "YoY 2023",
    icon: DollarSign,
  },
  {
    label: "Active Hosts",
    value: "20,000+",
    growth: "+89%",
    period: "YoY 2023",
    icon: Users,
  },
  {
    label: "Bookings Completed",
    value: "150,000+",
    growth: "+156%",
    period: "YoY 2023",
    icon: BarChart3,
  },
  {
    label: "Market Coverage",
    value: "45 Cities",
    growth: "+67%",
    period: "YoY 2023",
    icon: Globe,
  },
]

const financialHighlights = [
  {
    metric: "Gross Booking Value",
    q4_2023: "UGX 3.2B",
    q4_2022: "UGX 1.8B",
    growth: "+78%",
  },
  {
    metric: "Revenue",
    q4_2023: "UGX 480M",
    q4_2022: "UGX 270M",
    growth: "+78%",
  },
  {
    metric: "Take Rate",
    q4_2023: "15%",
    q4_2022: "15%",
    growth: "Stable",
  },
  {
    metric: "EBITDA Margin",
    q4_2023: "-12%",
    q4_2022: "-28%",
    growth: "+16pp",
  },
]

const investmentRounds = [
  {
    round: "Series B",
    date: "March 2024",
    amount: "$15M",
    leadInvestor: "East Africa Ventures",
    status: "Completed",
    use: "Expansion across East Africa and platform enhancement",
  },
  {
    round: "Series A",
    date: "June 2022",
    amount: "$8M",
    leadInvestor: "Savannah Fund",
    status: "Completed",
    use: "Market expansion and team growth",
  },
  {
    round: "Seed",
    date: "January 2021",
    amount: "$2.5M",
    leadInvestor: "TLcom Capital",
    status: "Completed",
    use: "Product development and initial market entry",
  },
]

const investors = [
  {
    name: "East Africa Ventures",
    type: "Lead Investor",
    round: "Series B",
    logo: "/placeholder.svg?height=60&width=120&text=EAV",
  },
  {
    name: "Savannah Fund",
    type: "Lead Investor",
    round: "Series A",
    logo: "/placeholder.svg?height=60&width=120&text=Savannah",
  },
  {
    name: "TLcom Capital",
    type: "Lead Investor",
    round: "Seed",
    logo: "/placeholder.svg?height=60&width=120&text=TLcom",
  },
  {
    name: "Norrsken Foundation",
    type: "Strategic Investor",
    round: "Series A",
    logo: "/placeholder.svg?height=60&width=120&text=Norrsken",
  },
  {
    name: "Launch Africa Ventures",
    type: "Early Investor",
    round: "Seed",
    logo: "/placeholder.svg?height=60&width=120&text=Launch",
  },
  {
    name: "Future Africa",
    type: "Early Investor",
    round: "Seed",
    logo: "/placeholder.svg?height=60&width=120&text=Future",
  },
]

const reports = [
  {
    title: "Q4 2023 Earnings Report",
    date: "February 15, 2024",
    type: "Quarterly Report",
    description: "Comprehensive financial results and business updates for Q4 2023",
    downloadUrl: "#",
    fileSize: "2.8 MB",
  },
  {
    title: "Annual Report 2023",
    date: "March 1, 2024",
    type: "Annual Report",
    description: "Complete overview of 2023 performance, strategy, and outlook",
    downloadUrl: "#",
    fileSize: "8.5 MB",
  },
  {
    title: "ESG Impact Report 2023",
    date: "March 10, 2024",
    type: "ESG Report",
    description: "Environmental, Social, and Governance impact and initiatives",
    downloadUrl: "#",
    fileSize: "4.2 MB",
  },
  {
    title: "Q3 2023 Earnings Report",
    date: "November 15, 2023",
    type: "Quarterly Report",
    description: "Financial results and business updates for Q3 2023",
    downloadUrl: "#",
    fileSize: "2.6 MB",
  },
]

const upcomingEvents = [
  {
    title: "Q1 2024 Earnings Call",
    date: "May 15, 2024",
    time: "10:00 AM EAT",
    type: "Earnings Call",
    description: "Quarterly earnings presentation and Q&A session",
    registrationUrl: "#",
  },
  {
    title: "East Africa Tech Summit",
    date: "June 20, 2024",
    time: "2:00 PM EAT",
    type: "Conference",
    description: "CEO keynote on the future of travel technology in Africa",
    registrationUrl: "#",
  },
  {
    title: "Annual Investor Day",
    date: "September 12, 2024",
    time: "9:00 AM EAT",
    type: "Investor Event",
    description: "Comprehensive business review and strategic outlook",
    registrationUrl: "#",
  },
]

const leadership = [
  {
    name: "Sarah Nakamya",
    role: "Chief Executive Officer",
    bio: "Former VP of Operations at Jumia Uganda. 10+ years in tech and e-commerce across Africa.",
    image: "/placeholder.svg?height=120&width=120&text=CEO",
  },
  {
    name: "David Okello",
    role: "Chief Technology Officer",
    bio: "Former Senior Engineer at Google. Expert in scalable systems and machine learning.",
    image: "/placeholder.svg?height=120&width=120&text=CTO",
  },
  {
    name: "Grace Atim",
    role: "Chief Financial Officer",
    bio: "Former Finance Director at MTN Uganda. CPA with 12+ years in financial management.",
    image: "/placeholder.svg?height=120&width=120&text=CFO",
  },
  {
    name: "John Mukasa",
    role: "Chief Operating Officer",
    bio: "Former Operations Manager at Uber East Africa. Expert in marketplace operations.",
    image: "/placeholder.svg?height=120&width=120&text=COO",
  },
]

const marketOpportunity = [
  {
    title: "Uganda Tourism Market",
    value: "$1.8B",
    description: "Total addressable market size",
    growth: "Growing 8% annually",
  },
  {
    title: "East Africa Expansion",
    value: "$12B",
    description: "Regional market opportunity",
    growth: "Target by 2026",
  },
  {
    title: "Digital Adoption",
    value: "65%",
    description: "Internet penetration in Uganda",
    growth: "Increasing 12% yearly",
  },
  {
    title: "Youth Demographics",
    value: "78%",
    description: "Population under 30 years",
    growth: "Tech-savvy generation",
  },
]

export default function InvestorsPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 p-4 rounded-full">
              <TrendingUp className="w-16 h-16 text-green-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Investor Relations</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforming travel in Uganda and beyond. Access our financial reports, key metrics, and investment
            information.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {keyMetrics.map((metric, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <metric.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-green-600 bg-green-100">
                    {metric.growth}
                  </Badge>
                </div>
                <div className="text-2xl font-bold mb-1">{metric.value}</div>
                <div className="text-sm font-medium mb-1">{metric.label}</div>
                <div className="text-xs text-muted-foreground">{metric.period}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="financials">Financials</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="governance">Governance</TabsTrigger>
          </TabsList>

          {/* Overview */}
          <TabsContent value="overview">
            <div className="space-y-12">
              {/* Investment Thesis */}
              <div>
                <h2 className="text-3xl font-bold text-center mb-8">Investment Thesis</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <Card>
                    <CardHeader>
                      <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                        <Target className="w-8 h-8 text-blue-600" />
                      </div>
                      <CardTitle>Market Leadership</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Leading marketplace for authentic travel experiences in Uganda with strong network effects and
                        brand recognition.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <div className="bg-purple-100 p-3 rounded-full w-fit mb-4">
                        <Zap className="w-8 h-8 text-purple-600" />
                      </div>
                      <CardTitle>Technology Innovation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Advanced matching algorithms, mobile-first platform, and AI-powered recommendations driving
                        superior user experience.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <div className="bg-green-100 p-3 rounded-full w-fit mb-4">
                        <Globe className="w-8 h-8 text-green-600" />
                      </div>
                      <CardTitle>Expansion Opportunity</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Clear path to expand across East Africa with proven business model and strong local
                        partnerships.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Market Opportunity */}
              <div>
                <h2 className="text-3xl font-bold text-center mb-8">Market Opportunity</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {marketOpportunity.map((item, index) => (
                    <Card key={index} className="text-center">
                      <CardContent className="p-6">
                        <div className="text-3xl font-bold text-primary mb-2">{item.value}</div>
                        <div className="font-semibold mb-2">{item.title}</div>
                        <p className="text-sm text-muted-foreground mb-1">{item.description}</p>
                        <Badge variant="outline" className="text-xs">
                          {item.growth}
                        </Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Investment History */}
              <div>
                <h2 className="text-3xl font-bold text-center mb-8">Investment History</h2>
                <div className="space-y-4">
                  {investmentRounds.map((round, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-4 mb-2">
                              <h3 className="text-xl font-semibold">{round.round}</h3>
                              <Badge className="bg-green-100 text-green-800">{round.status}</Badge>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                              <div>
                                <span className="text-muted-foreground">Date: </span>
                                <span className="font-medium">{round.date}</span>
                              </div>
                              <div>
                                <span className="text-muted-foreground">Amount: </span>
                                <span className="font-medium">{round.amount}</span>
                              </div>
                              <div>
                                <span className="text-muted-foreground">Lead: </span>
                                <span className="font-medium">{round.leadInvestor}</span>
                              </div>
                            </div>
                            <p className="text-muted-foreground mt-2">{round.use}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Investors */}
              <div>
                <h2 className="text-3xl font-bold text-center mb-8">Our Investors</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {investors.map((investor, index) => (
                    <Card key={index} className="text-center">
                      <CardContent className="p-6">
                        <div className="bg-gray-100 p-4 rounded-lg mb-4">
                          <img
                            src={investor.logo || "/placeholder.svg"}
                            alt={investor.name}
                            className="w-full h-12 object-contain"
                          />
                        </div>
                        <h3 className="font-semibold mb-1">{investor.name}</h3>
                        <p className="text-sm text-muted-foreground mb-1">{investor.type}</p>
                        <Badge variant="outline" className="text-xs">
                          {investor.round}
                        </Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Financials */}
          <TabsContent value="financials">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-center">Financial Performance</h2>

              {/* Financial Highlights Table */}
              <Card>
                <CardHeader>
                  <CardTitle>Key Financial Metrics</CardTitle>
                  <CardDescription>Quarterly comparison and year-over-year growth</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4">Metric</th>
                          <th className="text-right py-3 px-4">Q4 2023</th>
                          <th className="text-right py-3 px-4">Q4 2022</th>
                          <th className="text-right py-3 px-4">YoY Growth</th>
                        </tr>
                      </thead>
                      <tbody>
                        {financialHighlights.map((item, index) => (
                          <tr key={index} className="border-b">
                            <td className="py-3 px-4 font-medium">{item.metric}</td>
                            <td className="py-3 px-4 text-right font-semibold">{item.q4_2023}</td>
                            <td className="py-3 px-4 text-right">{item.q4_2022}</td>
                            <td className="py-3 px-4 text-right">
                              <Badge
                                variant={item.growth.includes("+") ? "default" : "secondary"}
                                className={
                                  item.growth.includes("+")
                                    ? "bg-green-100 text-green-800"
                                    : "bg-gray-100 text-gray-800"
                                }
                              >
                                {item.growth}
                              </Badge>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              {/* Revenue Breakdown */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Revenue Streams</CardTitle>
                    <CardDescription>Q4 2023 breakdown</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span>Host Service Fees</span>
                        <span className="font-semibold">65%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Guest Service Fees</span>
                        <span className="font-semibold">25%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Experience Bookings</span>
                        <span className="font-semibold">8%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Other Services</span>
                        <span className="font-semibold">2%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Geographic Revenue</CardTitle>
                    <CardDescription>Q4 2023 by region</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span>Central Uganda (Kampala)</span>
                        <span className="font-semibold">45%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Eastern Uganda (Jinja)</span>
                        <span className="font-semibold">25%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Western Uganda</span>
                        <span className="font-semibold">20%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Northern Uganda</span>
                        <span className="font-semibold">10%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Reports */}
          <TabsContent value="reports">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-center">Financial Reports & Documents</h2>
              <div className="grid grid-cols-1 gap-6">
                {reports.map((report, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <FileText className="w-5 h-5 text-primary" />
                            <h3 className="text-lg font-semibold">{report.title}</h3>
                            <Badge variant="outline">{report.type}</Badge>
                          </div>
                          <p className="text-muted-foreground mb-2">{report.description}</p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {report.date}
                            </div>
                            <span>{report.fileSize}</span>
                          </div>
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

          {/* Events */}
          <TabsContent value="events">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-center">Upcoming Events</h2>
              <div className="grid grid-cols-1 gap-6">
                {upcomingEvents.map((event, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Calendar className="w-5 h-5 text-primary" />
                            <h3 className="text-lg font-semibold">{event.title}</h3>
                            <Badge variant="outline">{event.type}</Badge>
                          </div>
                          <p className="text-muted-foreground mb-3">{event.description}</p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>{event.date}</span>
                            <span>{event.time}</span>
                          </div>
                        </div>
                        <Button>Register</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Governance */}
          <TabsContent value="governance">
            <div className="space-y-12">
              <h2 className="text-3xl font-bold text-center">Corporate Governance</h2>

              {/* Leadership Team */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Leadership Team</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {leadership.map((leader, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <img
                            src={leader.image || "/placeholder.svg"}
                            alt={leader.name}
                            className="w-20 h-20 rounded-full object-cover"
                          />
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold mb-1">{leader.name}</h4>
                            <p className="text-primary font-medium mb-2">{leader.role}</p>
                            <p className="text-sm text-muted-foreground">{leader.bio}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Board of Directors */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Board of Directors</h3>
                <Card>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">Independent Directors</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Dr. Margaret Nakato - Former CEO, Bank of Uganda</li>
                          <li>• Prof. James Okello - Technology & Innovation Expert</li>
                          <li>• Ms. Grace Atukunda - Former MD, MTN Uganda</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Investor Representatives</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• John Smith - Partner, East Africa Ventures</li>
                          <li>• Sarah Johnson - Managing Director, Savannah Fund</li>
                          <li>• David Wilson - Principal, TLcom Capital</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Governance Documents */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Governance Documents</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold">Articles of Association</h4>
                          <p className="text-sm text-muted-foreground">Company constitution and bylaws</p>
                        </div>
                        <Download className="w-5 h-5 text-muted-foreground" />
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold">Code of Conduct</h4>
                          <p className="text-sm text-muted-foreground">Ethical guidelines and standards</p>
                        </div>
                        <Download className="w-5 h-5 text-muted-foreground" />
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold">Board Charter</h4>
                          <p className="text-sm text-muted-foreground">Board responsibilities and procedures</p>
                        </div>
                        <Download className="w-5 h-5 text-muted-foreground" />
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold">Audit Committee Charter</h4>
                          <p className="text-sm text-muted-foreground">Audit oversight and procedures</p>
                        </div>
                        <Download className="w-5 h-5 text-muted-foreground" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Contact Section */}
        <Card className="mt-16 bg-primary text-primary-foreground">
          <CardContent className="text-center py-12">
            <Building className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl font-bold mb-4">Investor Relations Contact</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              For investor inquiries, financial information, or to schedule meetings with our leadership team.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Grace Atim, Chief Financial Officer</h3>
                <p className="opacity-90">investors@roomy.ug</p>
                <p className="opacity-90">+256 700 123 456</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button variant="secondary" size="lg">
                  <FileText className="w-5 h-5 mr-2" />
                  Download Investor Kit
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Meeting
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  )
}
