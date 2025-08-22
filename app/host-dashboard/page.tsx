"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useAuth } from "@/lib/auth"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Calendar, DollarSign, Star, MessageCircle, Home, TrendingUp, CheckCircle } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts"
import Link from "next/link"

const earningsData = [
  { month: "Jan", earnings: 1200 },
  { month: "Feb", earnings: 1800 },
  { month: "Mar", earnings: 2200 },
  { month: "Apr", earnings: 1900 },
  { month: "May", earnings: 2500 },
  { month: "Jun", earnings: 2800 },
]

const bookingsData = [
  { month: "Jan", bookings: 8 },
  { month: "Feb", bookings: 12 },
  { month: "Mar", bookings: 15 },
  { month: "Apr", bookings: 11 },
  { month: "May", bookings: 18 },
  { month: "Jun", bookings: 22 },
]

const recentBookings = [
  {
    id: "1",
    guest: "John Smith",
    avatar: "/placeholder.svg?height=40&width=40",
    property: "Modern Apartment in Kampala",
    checkIn: "2024-02-15",
    checkOut: "2024-02-18",
    status: "confirmed",
    amount: 225,
  },
  {
    id: "2",
    guest: "Sarah Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    property: "Cozy Studio in Entebbe",
    checkIn: "2024-02-20",
    checkOut: "2024-02-22",
    status: "pending",
    amount: 95,
  },
  {
    id: "3",
    guest: "Michael Brown",
    avatar: "/placeholder.svg?height=40&width=40",
    property: "Lakeside Villa in Mukono",
    checkIn: "2024-02-25",
    checkOut: "2024-02-28",
    status: "confirmed",
    amount: 480,
  },
]

const properties = [
  {
    id: 1,
    title: "Modern Apartment in Kampala",
    image: "/placeholder.svg?height=200&width=300",
    status: "active",
    bookings: 15,
    rating: 4.8,
    earnings: 2250,
    occupancyRate: 85,
  },
  {
    id: 2,
    title: "Cozy Studio in Entebbe",
    image: "/placeholder.svg?height=200&width=300",
    status: "active",
    bookings: 8,
    rating: 4.2,
    earnings: 980,
    occupancyRate: 62,
  },
  {
    id: 3,
    title: "Lakeside Villa in Mukono",
    image: "/placeholder.svg?height=200&width=300",
    status: "inactive",
    bookings: 12,
    rating: 4.9,
    earnings: 1800,
    occupancyRate: 78,
  },
]

export default function HostDashboard() {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState("overview")

  if (!user || user.role !== "host") {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
            <p className="text-muted-foreground mb-4">You need to be a host to access this dashboard.</p>
            <Link href="/become-host">
              <Button>Become a Host</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold">Host Dashboard</h1>
              <p className="text-muted-foreground">Welcome back, {user.name}!</p>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/list-property">
                <Button>
                  <Home className="w-4 h-4 mr-2" />
                  Add Property
                </Button>
              </Link>
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="bookings">Bookings</TabsTrigger>
              <TabsTrigger value="properties">Properties</TabsTrigger>
              <TabsTrigger value="earnings">Earnings</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$12,450</div>
                    <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">86</div>
                    <p className="text-xs text-muted-foreground">+12% from last month</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Occupancy Rate</CardTitle>
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">75%</div>
                    <p className="text-xs text-muted-foreground">+5% from last month</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
                    <Star className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">4.7</div>
                    <p className="text-xs text-muted-foreground">Based on 124 reviews</p>
                  </CardContent>
                </Card>
              </div>

              {/* Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Earnings Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={earningsData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="earnings" stroke="#8884d8" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Bookings Trend</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={bookingsData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="bookings" fill="#82ca9d" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Bookings</CardTitle>
                  <CardDescription>Your latest booking requests and confirmations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentBookings.map((booking) => (
                      <div key={booking.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-4">
                          <Avatar>
                            <AvatarImage src={booking.avatar || "/placeholder.svg"} />
                            <AvatarFallback>{booking.guest[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{booking.guest}</p>
                            <p className="text-sm text-muted-foreground">{booking.property}</p>
                            <p className="text-xs text-muted-foreground">
                              {booking.checkIn} - {booking.checkOut}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge className={getStatusColor(booking.status)}>{booking.status}</Badge>
                          <p className="text-sm font-medium mt-1">${booking.amount}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="bookings" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>All Bookings</CardTitle>
                  <CardDescription>Manage your property bookings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentBookings.map((booking) => (
                      <div key={booking.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-4">
                          <Avatar>
                            <AvatarImage src={booking.avatar || "/placeholder.svg"} />
                            <AvatarFallback>{booking.guest[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{booking.guest}</p>
                            <p className="text-sm text-muted-foreground">{booking.property}</p>
                            <p className="text-xs text-muted-foreground">
                              {booking.checkIn} - {booking.checkOut}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <Badge className={getStatusColor(booking.status)}>{booking.status}</Badge>
                          <p className="text-sm font-medium">${booking.amount}</p>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              <MessageCircle className="w-4 h-4 mr-2" />
                              Message
                            </Button>
                            {booking.status === "pending" && (
                              <>
                                <Button size="sm" variant="outline">
                                  <CheckCircle className="w-4 h-4 mr-2" />
                                  Accept
                                </Button>
                                <Button size="sm" variant="destructive">
                                  Decline
                                </Button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="properties" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {properties.map((property) => (
                  <Card key={property.id}>
                    <CardContent className="p-0">
                      <div className="relative">
                        <img
                          src={property.image || "/placeholder.svg"}
                          alt={property.title}
                          className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <Badge
                          className={`absolute top-2 right-2 ${
                            property.status === "active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                          }`}
                        >
                          {property.status}
                        </Badge>
                      </div>
                    </CardContent>
                    <CardHeader>
                      <CardTitle className="text-lg">{property.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Bookings</p>
                          <p className="font-medium">{property.bookings}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Rating</p>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                            <span className="font-medium">{property.rating}</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Earnings</p>
                          <p className="font-medium">${property.earnings}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Occupancy</p>
                          <p className="font-medium">{property.occupancyRate}%</p>
                        </div>
                      </div>
                      <Progress value={property.occupancyRate} className="w-full" />
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                          Edit
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                          View
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="earnings" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>This Month</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">$2,850</div>
                    <p className="text-sm text-muted-foreground">+15% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>This Year</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">$12,450</div>
                    <p className="text-sm text-muted-foreground">+22% from last year</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Pending Payouts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">$485</div>
                    <p className="text-sm text-muted-foreground">Available in 2 days</p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Earnings History</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={earningsData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="earnings" stroke="#8884d8" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Reviews</CardTitle>
                  <CardDescription>What guests are saying about your properties</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">No reviews to display yet</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  )
}
