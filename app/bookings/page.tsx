"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useAuth } from "@/lib/auth"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Calendar, MapPin, Users, Star, MessageCircle, Download } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Booking {
  id: string
  apartmentId: number
  apartmentTitle: string
  apartmentImage: string
  location: string
  hostName: string
  checkIn: string
  checkOut: string
  guests: number
  total: number
  status: "upcoming" | "current" | "past" | "cancelled"
  bookingDate: string
  confirmationCode: string
}

const mockBookings: Booking[] = [
  {
    id: "1",
    apartmentId: 1,
    apartmentTitle: "Modern Apartment in Kampala",
    apartmentImage: "/placeholder.svg?height=200&width=300",
    location: "Kampala Central",
    hostName: "Sarah M.",
    checkIn: "2024-02-15",
    checkOut: "2024-02-18",
    guests: 2,
    total: 225,
    status: "upcoming",
    bookingDate: "2024-01-20",
    confirmationCode: "RMY123456",
  },
  {
    id: "2",
    apartmentId: 2,
    apartmentTitle: "Cozy Studio in Entebbe",
    apartmentImage: "/placeholder.svg?height=200&width=300",
    location: "Entebbe",
    hostName: "John D.",
    checkIn: "2024-01-10",
    checkOut: "2024-01-12",
    guests: 1,
    total: 95,
    status: "past",
    bookingDate: "2024-01-05",
    confirmationCode: "RMY789012",
  },
]

export default function BookingsPage() {
  const { user } = useAuth()
  const searchParams = useSearchParams()
  const [bookings, setBookings] = useState<Booking[]>(mockBookings)
  const [activeTab, setActiveTab] = useState("upcoming")
  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
    if (searchParams.get("success") === "true") {
      setShowSuccess(true)
      setTimeout(() => setShowSuccess(false), 5000)
    }
  }, [searchParams])

  if (!user) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Please sign in to view your bookings</h1>
            <Link href="/auth/signin">
              <Button>Sign In</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const filterBookings = (status: string) => {
    return bookings.filter((booking) => booking.status === status)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "bg-blue-100 text-blue-800"
      case "current":
        return "bg-green-100 text-green-800"
      case "past":
        return "bg-gray-100 text-gray-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const cancelBooking = (bookingId: string) => {
    setBookings(
      bookings.map((booking) => (booking.id === bookingId ? { ...booking, status: "cancelled" as const } : booking)),
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">Your Bookings</h1>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>

          {showSuccess && (
            <Alert className="mb-6 border-green-200 bg-green-50">
              <AlertDescription className="text-green-800">
                🎉 Booking confirmed successfully! You'll receive a confirmation email shortly.
              </AlertDescription>
            </Alert>
          )}

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="upcoming">Upcoming ({filterBookings("upcoming").length})</TabsTrigger>
              <TabsTrigger value="current">Current ({filterBookings("current").length})</TabsTrigger>
              <TabsTrigger value="past">Past ({filterBookings("past").length})</TabsTrigger>
              <TabsTrigger value="cancelled">Cancelled ({filterBookings("cancelled").length})</TabsTrigger>
            </TabsList>

            {["upcoming", "current", "past", "cancelled"].map((status) => (
              <TabsContent key={status} value={status} className="space-y-4">
                {filterBookings(status).length === 0 ? (
                  <Card>
                    <CardContent className="text-center py-12">
                      <p className="text-muted-foreground mb-4">No {status} bookings found</p>
                      <Link href="/">
                        <Button>Browse Properties</Button>
                      </Link>
                    </CardContent>
                  </Card>
                ) : (
                  filterBookings(status).map((booking) => (
                    <Card key={booking.id} className="overflow-hidden">
                      <div className="md:flex">
                        <div className="md:w-1/4">
                          <Image
                            src={booking.apartmentImage || "/placeholder.svg"}
                            alt={booking.apartmentTitle}
                            width={300}
                            height={200}
                            className="w-full h-48 md:h-full object-cover"
                          />
                        </div>
                        <div className="md:w-3/4 p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-xl font-semibold mb-2">{booking.apartmentTitle}</h3>
                              <div className="flex items-center text-sm text-muted-foreground mb-2">
                                <MapPin className="w-4 h-4 mr-1" />
                                {booking.location}
                              </div>
                              <p className="text-sm text-muted-foreground">Hosted by {booking.hostName}</p>
                            </div>
                            <Badge className={getStatusColor(booking.status)}>
                              {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                            </Badge>
                          </div>

                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
                            <div>
                              <div className="flex items-center text-muted-foreground mb-1">
                                <Calendar className="w-4 h-4 mr-1" />
                                Check-in
                              </div>
                              <div className="font-medium">{booking.checkIn}</div>
                            </div>
                            <div>
                              <div className="flex items-center text-muted-foreground mb-1">
                                <Calendar className="w-4 h-4 mr-1" />
                                Check-out
                              </div>
                              <div className="font-medium">{booking.checkOut}</div>
                            </div>
                            <div>
                              <div className="flex items-center text-muted-foreground mb-1">
                                <Users className="w-4 h-4 mr-1" />
                                Guests
                              </div>
                              <div className="font-medium">{booking.guests}</div>
                            </div>
                            <div>
                              <div className="text-muted-foreground mb-1">Total</div>
                              <div className="font-bold text-lg">${booking.total}</div>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="text-xs text-muted-foreground">
                              Confirmation: {booking.confirmationCode}
                            </div>
                            <div className="flex items-center gap-2">
                              <Button variant="ghost" size="sm">
                                <MessageCircle className="w-4 h-4 mr-2" />
                                Contact Host
                              </Button>

                              {booking.status === "upcoming" && (
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <Button variant="outline" size="sm">
                                      Cancel
                                    </Button>
                                  </DialogTrigger>
                                  <DialogContent>
                                    <DialogHeader>
                                      <DialogTitle>Cancel Booking</DialogTitle>
                                      <DialogDescription>
                                        Are you sure you want to cancel this booking? Cancellation fees may apply based
                                        on the property's policy.
                                      </DialogDescription>
                                    </DialogHeader>
                                    <DialogFooter>
                                      <Button variant="outline">Keep Booking</Button>
                                      <Button variant="destructive" onClick={() => cancelBooking(booking.id)}>
                                        Cancel Booking
                                      </Button>
                                    </DialogFooter>
                                  </DialogContent>
                                </Dialog>
                              )}

                              {booking.status === "past" && (
                                <Button variant="outline" size="sm">
                                  <Star className="w-4 h-4 mr-2" />
                                  Write Review
                                </Button>
                              )}

                              <Link href={`/apartments/${booking.apartmentId}`}>
                                <Button size="sm">View Property</Button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  )
}
