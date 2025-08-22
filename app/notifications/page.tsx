"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Bell, Calendar, MessageCircle, Star, Trash2, CheckCheck, MapPin, DollarSign, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const notifications = [
  {
    id: 1,
    type: "booking_confirmed",
    title: "Booking Confirmed",
    message: "Your booking for Modern Apartment in Kampala has been confirmed",
    details: {
      propertyName: "Modern Apartment in Kampala",
      propertyImage: "/images/kampala-apartment.png",
      hostName: "Sarah M.",
      hostImage: "/images/host-sarah.png",
      checkIn: "Dec 15, 2024",
      checkOut: "Dec 18, 2024",
      guests: 2,
      total: "$150",
      bookingId: "BK001",
    },
    timestamp: "2 hours ago",
    read: false,
    category: "bookings",
  },
  {
    id: 2,
    type: "new_message",
    title: "New Message from Host",
    message: "Sarah M. sent you a message about your upcoming stay",
    details: {
      hostName: "Sarah M.",
      hostImage: "/images/host-sarah.png",
      propertyName: "Modern Apartment in Kampala",
      messagePreview: "Hi! Welcome to Kampala. I wanted to share some local recommendations...",
      fullMessage:
        "Hi! Welcome to Kampala. I wanted to share some local recommendations for restaurants and attractions near the apartment. The apartment has everything you need, and I'm available if you have any questions during your stay.",
    },
    timestamp: "5 hours ago",
    read: false,
    category: "messages",
  },
  {
    id: 3,
    type: "host_update",
    title: "Host Update",
    message: "Adventure Uganda added a new experience: Mountain Hiking Adventure",
    details: {
      hostName: "Adventure Uganda",
      hostImage: "/images/adventure-uganda-team.png",
      experienceName: "Mountain Hiking Adventure",
      experienceImage: "/images/fort-portal-cottage.png",
      price: "$75",
      duration: "6 hours",
      location: "Rwenzori Mountains",
    },
    timestamp: "1 day ago",
    read: true,
    category: "host_updates",
  },
  {
    id: 4,
    type: "review_reminder",
    title: "Review Reminder",
    message: "Don't forget to review your recent stay at Cozy Studio in Entebbe",
    details: {
      propertyName: "Cozy Studio in Entebbe",
      propertyImage: "/images/entebbe-studio.png",
      hostName: "John D.",
      hostImage: "/images/host-john.png",
      stayDate: "Nov 20-22, 2024",
    },
    timestamp: "2 days ago",
    read: true,
    category: "reviews",
  },
  {
    id: 5,
    type: "price_drop",
    title: "Price Drop Alert",
    message: "Price dropped for Lakeside Villa in Mukono - Save $30!",
    details: {
      propertyName: "Lakeside Villa in Mukono",
      propertyImage: "/images/mukono-villa.png",
      oldPrice: "$120",
      newPrice: "$90",
      savings: "$30",
      hostName: "David K.",
    },
    timestamp: "3 days ago",
    read: false,
    category: "host_updates",
  },
  {
    id: 6,
    type: "experience_reminder",
    title: "Experience Reminder",
    message: "Your White Water Rafting experience is tomorrow at 9:00 AM",
    details: {
      experienceName: "White Water Rafting on the Nile",
      experienceImage: "/images/white-water-rafting.png",
      hostName: "Adventure Uganda",
      hostImage: "/images/adventure-uganda-team.png",
      date: "Dec 10, 2024",
      time: "9:00 AM",
      location: "Jinja, Uganda",
      meetingPoint: "Adventure Uganda Office, Jinja Town Center",
    },
    timestamp: "1 week ago",
    read: true,
    category: "bookings",
  },
]

export default function NotificationsPage() {
  const [selectedNotification, setSelectedNotification] = useState<(typeof notifications)[0] | null>(null)
  const [notificationList, setNotificationList] = useState(notifications)
  const [activeTab, setActiveTab] = useState("all")

  const markAsRead = (id: number) => {
    setNotificationList((prev) => prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif)))
  }

  const markAllAsRead = () => {
    setNotificationList((prev) => prev.map((notif) => ({ ...notif, read: true })))
  }

  const deleteNotification = (id: number) => {
    setNotificationList((prev) => prev.filter((notif) => notif.id !== id))
    if (selectedNotification?.id === id) {
      setSelectedNotification(null)
    }
  }

  const openNotification = (notification: (typeof notifications)[0]) => {
    setSelectedNotification(notification)
    if (!notification.read) {
      markAsRead(notification.id)
    }
  }

  const filteredNotifications = notificationList.filter((notif) => {
    if (activeTab === "all") return true
    if (activeTab === "unread") return !notif.read
    return notif.category === activeTab
  })

  const unreadCount = notificationList.filter((notif) => !notif.read).length

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "booking_confirmed":
      case "experience_reminder":
        return <Calendar className="w-5 h-5 text-green-500" />
      case "new_message":
        return <MessageCircle className="w-5 h-5 text-blue-500" />
      case "host_update":
      case "price_drop":
        return <Bell className="w-5 h-5 text-orange-500" />
      case "review_reminder":
        return <Star className="w-5 h-5 text-yellow-500" />
      default:
        return <Bell className="w-5 h-5 text-gray-500" />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Notifications</h1>
            <p className="text-muted-foreground">
              {unreadCount > 0 ? `${unreadCount} unread notifications` : "All caught up!"}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" onClick={markAllAsRead} disabled={unreadCount === 0}>
              <CheckCheck className="w-4 h-4 mr-2" />
              Mark All Read
            </Button>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="unread">
              Unread {unreadCount > 0 && <Badge className="ml-2">{unreadCount}</Badge>}
            </TabsTrigger>
            <TabsTrigger value="bookings">Bookings</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="host_updates">Host Updates</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="mt-6">
            <div className="space-y-4">
              {filteredNotifications.length === 0 ? (
                <Card>
                  <CardContent className="p-8 text-center">
                    <Bell className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">No notifications</h3>
                    <p className="text-muted-foreground">
                      {activeTab === "unread" ? "All notifications have been read" : "You're all caught up!"}
                    </p>
                  </CardContent>
                </Card>
              ) : (
                filteredNotifications.map((notification) => (
                  <Card
                    key={notification.id}
                    className={`cursor-pointer transition-all hover:shadow-md ${
                      !notification.read ? "border-l-4 border-l-primary bg-primary/5" : ""
                    }`}
                    onClick={() => openNotification(notification)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">{getNotificationIcon(notification.type)}</div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h3 className={`font-semibold ${!notification.read ? "text-primary" : ""}`}>
                                {notification.title}
                              </h3>
                              <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{notification.message}</p>
                              <p className="text-xs text-muted-foreground mt-2">{notification.timestamp}</p>
                            </div>
                            <div className="flex items-center gap-2 ml-4">
                              {!notification.read && <div className="w-2 h-2 bg-primary rounded-full"></div>}
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  deleteNotification(notification.id)
                                }}
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>
        </Tabs>

        {/* Notification Detail Modal */}
        <Dialog open={!!selectedNotification} onOpenChange={() => setSelectedNotification(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <div className="flex items-center gap-3">
                {selectedNotification && getNotificationIcon(selectedNotification.type)}
                <DialogTitle>{selectedNotification?.title}</DialogTitle>
              </div>
              <DialogDescription className="text-left">{selectedNotification?.timestamp}</DialogDescription>
            </DialogHeader>

            {selectedNotification && (
              <div className="space-y-6">
                <p className="text-sm">{selectedNotification.message}</p>

                {/* Booking Confirmed Details */}
                {selectedNotification.type === "booking_confirmed" && selectedNotification.details && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Booking Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-4">
                        <Image
                          src={selectedNotification.details.propertyImage || "/placeholder.svg"}
                          alt={selectedNotification.details.propertyName}
                          width={80}
                          height={60}
                          className="rounded-lg object-cover"
                        />
                        <div>
                          <h4 className="font-semibold">{selectedNotification.details.propertyName}</h4>
                          <p className="text-sm text-muted-foreground">
                            Hosted by {selectedNotification.details.hostName}
                          </p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>Check-in: {selectedNotification.details.checkIn}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>Check-out: {selectedNotification.details.checkOut}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>{selectedNotification.details.guests} guests</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4" />
                          <span>Total: {selectedNotification.details.total}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Link href="/bookings">
                          <Button>View Booking</Button>
                        </Link>
                        <Button variant="outline">Contact Host</Button>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* New Message Details */}
                {selectedNotification.type === "new_message" && selectedNotification.details && (
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={selectedNotification.details.hostImage || "/placeholder.svg"} />
                          <AvatarFallback>{selectedNotification.details.hostName[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-lg">{selectedNotification.details.hostName}</CardTitle>
                          <p className="text-sm text-muted-foreground">{selectedNotification.details.propertyName}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm mb-4">{selectedNotification.details.fullMessage}</p>
                      <Button>Reply to Message</Button>
                    </CardContent>
                  </Card>
                )}

                {/* Host Update Details */}
                {selectedNotification.type === "host_update" && selectedNotification.details && (
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4 mb-4">
                        <Avatar>
                          <AvatarImage src={selectedNotification.details.hostImage || "/placeholder.svg"} />
                          <AvatarFallback>{selectedNotification.details.hostName[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold">{selectedNotification.details.hostName}</h4>
                          <p className="text-sm text-muted-foreground">Added a new experience</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Image
                          src={selectedNotification.details.experienceImage || "/placeholder.svg"}
                          alt={selectedNotification.details.experienceName}
                          width={80}
                          height={60}
                          className="rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h5 className="font-semibold">{selectedNotification.details.experienceName}</h5>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                            <span>{selectedNotification.details.price} per person</span>
                            <span>{selectedNotification.details.duration}</span>
                            <span>{selectedNotification.details.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Link href="/experiences">
                          <Button>View Experience</Button>
                        </Link>
                        <Button variant="outline">Follow Host</Button>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Experience Reminder Details */}
                {selectedNotification.type === "experience_reminder" && selectedNotification.details && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Experience Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-4">
                        <Image
                          src={selectedNotification.details.experienceImage || "/placeholder.svg"}
                          alt={selectedNotification.details.experienceName}
                          width={80}
                          height={60}
                          className="rounded-lg object-cover"
                        />
                        <div>
                          <h4 className="font-semibold">{selectedNotification.details.experienceName}</h4>
                          <p className="text-sm text-muted-foreground">
                            Hosted by {selectedNotification.details.hostName}
                          </p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {selectedNotification.details.date} at {selectedNotification.details.time}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{selectedNotification.details.meetingPoint}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Link href="/bookings">
                          <Button>View Booking</Button>
                        </Link>
                        <Button variant="outline">Contact Host</Button>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            )}
          </DialogContent>
        </Dialog>
      </main>
      <Footer />
    </div>
  )
}
