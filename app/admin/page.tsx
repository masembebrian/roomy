"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useAuth } from "@/lib/auth"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { Users, Home, DollarSign, TrendingUp, AlertTriangle, CheckCircle, Eye, Trash2, Ban } from "lucide-react"

export default function AdminPanel() {
  const { user } = useAuth()
  const router = useRouter()
  const [adminData, setAdminData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user || user.id !== "admin-user-id") {
      router.push("/")
      return
    }
    loadAdminData()
  }, [user])

  const loadAdminData = async () => {
    try {
      const response = await fetch("/api/admin/dashboard")
      const data = await response.json()
      setAdminData(data)
    } catch (error) {
      console.error("Error loading admin data:", error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          <p className="mt-4 text-muted-foreground">Loading admin dashboard...</p>
        </div>
      </div>
    )
  }

  if (!user || user.id !== "admin-user-id") {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              You do not have permission to access this page. Only administrators can access the admin panel.
            </AlertDescription>
          </Alert>
        </main>
        <Footer />
      </div>
    )
  }

  const metrics = [
    {
      title: "Total Users",
      value: "2,543",
      change: "+12.5%",
      icon: Users,
      color: "bg-blue-100 dark:bg-blue-900",
    },
    {
      title: "Active Properties",
      value: "1,284",
      change: "+8.2%",
      icon: Home,
      color: "bg-green-100 dark:bg-green-900",
    },
    {
      title: "Total Revenue",
      value: "$145,320",
      change: "+23.1%",
      icon: DollarSign,
      color: "bg-purple-100 dark:bg-purple-900",
    },
    {
      title: "Bookings",
      value: "3,456",
      change: "+15.3%",
      icon: TrendingUp,
      color: "bg-orange-100 dark:bg-orange-900",
    },
  ]

  const revenueData = [
    { month: "Jan", revenue: 12000, bookings: 120 },
    { month: "Feb", revenue: 15000, bookings: 145 },
    { month: "Mar", revenue: 18000, bookings: 170 },
    { month: "Apr", revenue: 22000, bookings: 200 },
    { month: "May", revenue: 25000, bookings: 230 },
    { month: "Jun", revenue: 28000, bookings: 260 },
  ]

  const userStatusData = [
    { name: "Active", value: 2200, color: "#10b981" },
    { name: "Inactive", value: 250, color: "#ef4444" },
    { name: "Pending", value: 93, color: "#f59e0b" },
  ]

  const recentActivities = [
    {
      id: 1,
      type: "new_user",
      message: "New user registration",
      details: "John Doe signed up",
      timestamp: "2 hours ago",
      status: "success",
    },
    {
      id: 2,
      type: "booking",
      message: "New booking created",
      details: "Property: Modern Apartment",
      timestamp: "4 hours ago",
      status: "success",
    },
    {
      id: 3,
      type: "review",
      message: "Negative review flagged",
      details: "1-star review needs review",
      timestamp: "6 hours ago",
      status: "warning",
    },
    {
      id: 4,
      type: "payment",
      message: "Payment processed",
      details: "Transaction: UGX 500,000",
      timestamp: "8 hours ago",
      status: "success",
    },
  ]

  const flaggedContent = [
    {
      id: 1,
      type: "review",
      title: "Inappropriate review",
      reporter: "Sarah M.",
      content: "This review contains offensive language",
      status: "pending",
      date: "2 hours ago",
    },
    {
      id: 2,
      type: "property",
      title: "Suspicious property listing",
      reporter: "Admin Auto-Detection",
      content: "Property contains unverified images",
      status: "reviewing",
      date: "5 hours ago",
    },
    {
      id: 3,
      type: "user",
      title: "Suspicious account activity",
      reporter: "System",
      content: "Multiple failed payment attempts",
      status: "pending",
      date: "1 day ago",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage and monitor your platform</p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => {
              const Icon = metric.icon
              return (
                <Card key={index}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                    <div className={`p-2 rounded-lg ${metric.color}`}>
                      <Icon className="h-4 w-4" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{metric.value}</div>
                    <p className="text-xs text-green-600 mt-1">{metric.change} from last month</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="users">Users</TabsTrigger>
              <TabsTrigger value="moderation">Moderation</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Revenue Chart */}
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle>Revenue & Bookings</CardTitle>
                    <CardDescription>Last 6 months performance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={revenueData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="revenue" stroke="#8884d8" name="Revenue ($)" />
                        <Line type="monotone" dataKey="bookings" stroke="#82ca9d" name="Bookings" />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* User Status */}
                <Card>
                  <CardHeader>
                    <CardTitle>User Status</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie data={userStatusData} cx="50%" cy="50%" labelLine={false} label>
                          {userStatusData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivities.map((activity) => (
                      <div key={activity.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex-1">
                          <p className="font-medium">{activity.message}</p>
                          <p className="text-sm text-muted-foreground">{activity.details}</p>
                        </div>
                        <div className="text-right">
                          <Badge variant={activity.status === "success" ? "outline" : "secondary"}>
                            {activity.status}
                          </Badge>
                          <p className="text-xs text-muted-foreground mt-1">{activity.timestamp}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Users Tab */}
            <TabsContent value="users" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>User Management</CardTitle>
                  <CardDescription>Manage platform users and their accounts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-medium">User #{i + 1}</p>
                          <p className="text-sm text-muted-foreground">user{i + 1}@example.com</p>
                          <div className="flex gap-2 mt-2">
                            <Badge>Active</Badge>
                            <Badge variant="outline">Verified</Badge>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Ban className="w-4 h-4 text-red-500" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Moderation Tab */}
            <TabsContent value="moderation" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Flagged Content</CardTitle>
                  <CardDescription>Review and manage reported content</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {flaggedContent.map((item) => (
                      <div key={item.id} className="flex items-start justify-between p-4 border rounded-lg">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <p className="font-medium">{item.title}</p>
                            <Badge variant={item.status === "pending" ? "destructive" : "secondary"}>
                              {item.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{item.content}</p>
                          <div className="flex gap-4 text-xs text-muted-foreground mt-2">
                            <span>Type: {item.type}</span>
                            <span>Reported by: {item.reporter}</span>
                            <span>{item.date}</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Trash2 className="w-4 h-4 text-red-600" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Platform Analytics</CardTitle>
                  <CardDescription>Detailed insights and metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 border rounded-lg">
                      <p className="text-sm text-muted-foreground mb-2">Avg. Booking Value</p>
                      <p className="text-2xl font-bold">UGX 185,000</p>
                      <p className="text-xs text-green-600 mt-1">+5% from last month</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <p className="text-sm text-muted-foreground mb-2">Occupancy Rate</p>
                      <p className="text-2xl font-bold">78.5%</p>
                      <p className="text-xs text-green-600 mt-1">+2.3% from last month</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <p className="text-sm text-muted-foreground mb-2">Guest Satisfaction</p>
                      <p className="text-2xl font-bold">4.7/5.0</p>
                      <p className="text-xs text-green-600 mt-1">+0.1 from last month</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <p className="text-sm text-muted-foreground mb-2">Return Guests</p>
                      <p className="text-2xl font-bold">42%</p>
                      <p className="text-xs text-green-600 mt-1">+8% from last month</p>
                    </div>
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
