"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar } from "@/components/ui/calendar"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useAuth } from "@/lib/auth"
import { useToast } from "@/hooks/use-toast"
import { supabase } from "@/lib/supabase"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ChatBox from "@/components/chat-box"
import {
  MapPin,
  Star,
  Users,
  Home,
  Wifi,
  Car,
  Wind,
  Tv,
  Coffee,
  Dumbbell,
  ShowerHead,
  Heart,
  Share2,
  ChevronLeft,
  ChevronRight,
  Shield,
  CalendarIcon,
  AlertCircle,
  LogIn,
} from "lucide-react"
import type { DateRange } from "react-day-picker"

interface Property {
  id: string
  title: string
  description: string
  price: number
  location: string
  type: string
  bedrooms: number
  bathrooms: number
  guests: number
  images: string[]
  amenities: string[]
  host: {
    name: string
    image: string
    joinDate: string
    responseRate: number
    verified: boolean
  }
  rating: number
  reviews: number
}

export default function ApartmentDetail() {
  const params = useParams()
  const router = useRouter()
  const { user, loading: authLoading } = useAuth()
  const { toast } = useToast()
  const [property, setProperty] = useState<Property | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [dateRange, setDateRange] = useState<DateRange | undefined>()
  const [guests, setGuests] = useState(2)
  const [loading, setLoading] = useState(true)
  const [bookingLoading, setBookingLoading] = useState(false)

  useEffect(() => {
    loadProperty()
  }, [params.id])

  const loadProperty = async () => {
    try {
      const { data, error } = await supabase
        .from("properties")
        .select(
          `
          *,
          profiles:host_id (
            name,
            image,
            join_date,
            verified
          )
        `,
        )
        .eq("id", params.id)
        .single()

      if (error) throw error

      if (data) {
        setProperty({
          id: data.id,
          title: data.title,
          description: data.description,
          price: data.price_per_night,
          location: data.location,
          type: data.property_type,
          bedrooms: data.bedrooms,
          bathrooms: data.bathrooms,
          guests: data.max_guests,
          images: data.images || [],
          amenities: data.amenities || [],
          host: {
            name: data.profiles?.name || "Host",
            image: data.profiles?.image || "/images/default-avatar.png",
            joinDate: data.profiles?.join_date || new Date().toISOString(),
            responseRate: 95,
            verified: data.profiles?.verified || false,
          },
          rating: data.average_rating || 4.8,
          reviews: data.review_count || 0,
        })
      }
    } catch (error) {
      console.error("Error loading property:", error)
      toast({
        title: "Error",
        description: "Failed to load property details",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const calculateNights = () => {
    if (!dateRange?.from || !dateRange?.to) return 0
    const nights = Math.ceil((dateRange.to.getTime() - dateRange.from.getTime()) / (1000 * 60 * 60 * 24))
    return nights
  }

  const calculateTotal = () => {
    if (!property) return { subtotal: 0, serviceFee: 0, total: 0, nights: 0 }
    const nights = calculateNights()
    const subtotal = property.price * nights
    const serviceFee = subtotal * 0.1
    const total = subtotal + serviceFee
    return { subtotal, serviceFee, total, nights }
  }

  const handleBooking = async () => {
    // Require authentication before booking
    if (!user) {
      toast({
        title: "Sign in required",
        description: "Please create an account or sign in to book this property",
        variant: "destructive",
      })
      // Redirect to sign up page with return URL
      router.push(`/auth/signup?redirect=/apartments/${params.id}`)
      return
    }

    if (!dateRange?.from || !dateRange?.to) {
      toast({
        title: "Select dates",
        description: "Please select check-in and check-out dates",
        variant: "destructive",
      })
      return
    }

    setBookingLoading(true)

    try {
      const { subtotal, serviceFee, total, nights } = calculateTotal()

      const { data, error } = await supabase
        .from("bookings")
        .insert({
          property_id: params.id,
          guest_id: user.id,
          check_in: dateRange.from.toISOString(),
          check_out: dateRange.to.toISOString(),
          guests: guests,
          total_price: total,
          status: "confirmed",
        })
        .select()
        .single()

      if (error) throw error

      toast({
        title: "Booking confirmed!",
        description: `Your booking for ${nights} nights has been confirmed.`,
      })

      router.push("/bookings")
    } catch (error) {
      console.error("Booking error:", error)
      toast({
        title: "Booking failed",
        description: "There was an error processing your booking. Please try again.",
        variant: "destructive",
      })
    } finally {
      setBookingLoading(false)
    }
  }

  if (loading || authLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-muted rounded w-1/3" />
            <div className="h-96 bg-muted rounded" />
            <div className="h-32 bg-muted rounded" />
          </div>
        </main>
      </div>
    )
  }

  if (!property) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Property not found</h1>
            <Button onClick={() => router.push("/explore")}>Back to explore</Button>
          </div>
        </main>
      </div>
    )
  }

  const { subtotal, serviceFee, total, nights } = calculateTotal()

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Back button */}
        <Link
          href="/explore"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to explore
        </Link>

        {/* Title and actions */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">{property.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-primary text-primary" />
                <span className="font-semibold">{property.rating}</span>
                <span className="text-muted-foreground">({property.reviews} reviews)</span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                {property.location}
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <Share2 className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Heart className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Images */}
        <div className="relative mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 rounded-lg overflow-hidden">
            <div className="relative h-[300px] md:h-[500px]">
              <Image
                src={property.images[currentImageIndex] || "/placeholder.svg"}
                alt={property.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="hidden md:grid grid-cols-2 gap-2">
              {property.images.slice(1, 5).map((img, idx) => (
                <div key={idx} className="relative h-[245px]">
                  <Image
                    src={img || "/placeholder.svg"}
                    alt={`${property.title} ${idx + 2}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          {property.images.length > 1 && (
            <>
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur"
                onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? property.images.length - 1 : prev - 1))}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur"
                onClick={() => setCurrentImageIndex((prev) => (prev === property.images.length - 1 ? 0 : prev + 1))}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </>
          )}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Property info */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-xl font-semibold mb-1">
                    {property.type} hosted by {property.host.name}
                  </h2>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {property.guests} guests
                    </span>
                    <span className="flex items-center gap-1">
                      <Home className="w-4 h-4" />
                      {property.bedrooms} bedrooms
                    </span>
                    <span>{property.bathrooms} bathrooms</span>
                  </div>
                </div>
                <Avatar className="h-12 w-12">
                  <AvatarImage src={property.host.image || "/placeholder.svg"} />
                  <AvatarFallback>{property.host.name[0]}</AvatarFallback>
                </Avatar>
              </div>

              <Separator className="my-6" />

              {/* Host badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {property.host.verified && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Shield className="w-3 h-3" />
                    Verified Host
                  </Badge>
                )}
                <Badge variant="secondary">{property.host.responseRate}% response rate</Badge>
              </div>

              <Separator className="my-6" />

              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold mb-3">About this place</h3>
                <p className="text-muted-foreground leading-relaxed">{property.description}</p>
              </div>

              <Separator className="my-6" />

              {/* Amenities */}
              <div>
                <h3 className="text-lg font-semibold mb-4">What this place offers</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {property.amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      {amenity === "WiFi" && <Wifi className="w-5 h-5" />}
                      {amenity === "Parking" && <Car className="w-5 h-5" />}
                      {amenity === "Air conditioning" && <Wind className="w-5 h-5" />}
                      {amenity === "TV" && <Tv className="w-5 h-5" />}
                      {amenity === "Kitchen" && <Coffee className="w-5 h-5" />}
                      {amenity === "Gym" && <Dumbbell className="w-5 h-5" />}
                      {amenity === "Hot water" && <ShowerHead className="w-5 h-5" />}
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Booking card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-2xl font-bold">UGX {property.price.toLocaleString()}</span>
                    <span className="text-muted-foreground"> / night</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <span className="font-semibold">{property.rating}</span>
                  </div>
                </div>

                <Separator />

                {/* Authentication Warning */}
                {!user && (
                  <Alert className="border-amber-200 bg-amber-50 dark:bg-amber-950/20">
                    <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                    <AlertDescription className="text-amber-800 dark:text-amber-200">
                      You need to create an account or sign in to book this property
                    </AlertDescription>
                  </Alert>
                )}

                {/* Date picker */}
                <div className="space-y-3">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4" />
                    Select dates
                  </label>
                  <Calendar
                    mode="range"
                    selected={dateRange}
                    onSelect={setDateRange}
                    numberOfMonths={1}
                    disabled={(date) => date < new Date()}
                    className="rounded-md border w-full"
                  />
                </div>

                {/* Guests */}
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Guests
                  </label>
                  <div className="flex items-center justify-between border rounded-md p-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setGuests(Math.max(1, guests - 1))}
                      disabled={guests <= 1}
                    >
                      -
                    </Button>
                    <span className="font-medium">{guests}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setGuests(Math.min(property.guests, guests + 1))}
                      disabled={guests >= property.guests}
                    >
                      +
                    </Button>
                  </div>
                </div>

                {nights > 0 && (
                  <>
                    <Separator />
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          UGX {property.price.toLocaleString()} × {nights} nights
                        </span>
                        <span>UGX {subtotal.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Service fee</span>
                        <span>UGX {serviceFee.toLocaleString()}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between font-semibold text-base">
                        <span>Total</span>
                        <span>UGX {total.toLocaleString()}</span>
                      </div>
                    </div>
                  </>
                )}

                <Button className="w-full" size="lg" onClick={handleBooking} disabled={bookingLoading || nights === 0}>
                  {bookingLoading ? (
                    "Processing..."
                  ) : user ? (
                    "Reserve"
                  ) : (
                    <>
                      <LogIn className="w-4 h-4 mr-2" />
                      Sign in to book
                    </>
                  )}
                </Button>

                {!user && (
                  <p className="text-xs text-center text-muted-foreground">
                    Create an account or sign in to complete your booking
                  </p>
                )}

                {user && nights > 0 && (
                  <p className="text-xs text-center text-muted-foreground">You won't be charged yet</p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
      <ChatBox />
    </div>
  )
}
