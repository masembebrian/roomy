"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Calendar } from "@/components/ui/calendar"
import {
  Star,
  MapPin,
  Users,
  Bed,
  Bath,
  Wifi,
  Coffee,
  Wind,
  Tv,
  Car,
  Shield,
  Heart,
  Share2,
  ChevronLeft,
  ChevronRight,
  CalendarIcon,
  AlertCircle,
} from "lucide-react"
import { useAuth } from "@/lib/auth"
import { supabase } from "@/lib/supabase"
import { format, differenceInDays } from "date-fns"
import type { DateRange } from "react-day-picker"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface Apartment {
  id: string
  title: string
  description: string
  price: number
  location: string
  rating: number
  reviewCount: number
  images: string[]
  bedrooms: number
  bathrooms: number
  guests: number
  amenities: string[]
  hostName: string
  hostImage: string
  hostJoined: string
  instantBook: boolean
}

const apartments: Record<string, Apartment> = {
  "1": {
    id: "1",
    title: "Modern Apartment in Kampala",
    description:
      "Beautiful modern apartment in the heart of Kampala with stunning city views. This spacious 2-bedroom apartment features contemporary furnishings, a fully equipped kitchen, and access to a rooftop terrace. Perfect for both business travelers and tourists looking to explore the vibrant capital city.",
    price: 85,
    location: "Kampala, Uganda",
    rating: 4.8,
    reviewCount: 124,
    images: ["/images/kampala-apartment.png", "/images/entebbe-studio.png", "/images/jinja-family-home.png"],
    bedrooms: 2,
    bathrooms: 1,
    guests: 4,
    amenities: ["WiFi", "Kitchen", "Air conditioning", "TV", "Free parking", "Washer"],
    hostName: "Sarah Johnson",
    hostImage: "/images/host-sarah.png",
    hostJoined: "2020",
    instantBook: true,
  },
  "2": {
    id: "2",
    title: "Cozy Studio in Entebbe",
    description:
      "Charming studio apartment near Entebbe International Airport and Lake Victoria. This compact yet comfortable space is ideal for solo travelers or couples. Enjoy easy access to the beach, botanical gardens, and wildlife sanctuaries.",
    price: 45,
    location: "Entebbe, Uganda",
    rating: 4.6,
    reviewCount: 89,
    images: ["/images/entebbe-studio.png", "/images/kampala-apartment.png", "/images/fort-portal-cottage.png"],
    bedrooms: 1,
    bathrooms: 1,
    guests: 2,
    amenities: ["WiFi", "Kitchen", "Air conditioning", "Beach access"],
    hostName: "John Mugisha",
    hostImage: "/images/host-john.png",
    hostJoined: "2019",
    instantBook: false,
  },
  "3": {
    id: "3",
    title: "Family Home in Jinja",
    description:
      "Spacious family home near the source of the Nile in Jinja. Perfect for adventure seekers and families looking to experience white-water rafting, kayaking, and other water sports. The house features a large garden, multiple bedrooms, and a welcoming atmosphere.",
    price: 120,
    location: "Jinja, Uganda",
    rating: 4.9,
    reviewCount: 156,
    images: ["/images/jinja-family-home.png", "/images/mukono-villa.png", "/images/kampala-apartment.png"],
    bedrooms: 4,
    bathrooms: 3,
    guests: 8,
    amenities: ["WiFi", "Kitchen", "Garden", "Free parking", "Washer", "BBQ grill"],
    hostName: "Emily Nakato",
    hostImage: "/images/host-emily.png",
    hostJoined: "2018",
    instantBook: true,
  },
  "4": {
    id: "4",
    title: "Luxury Villa in Mukono",
    description:
      "Exclusive luxury villa with private pool and garden in Mukono. This elegant property offers privacy, comfort, and modern amenities. Ideal for those seeking a tranquil retreat while still being close to Kampala.",
    price: 200,
    location: "Mukono, Uganda",
    rating: 5.0,
    reviewCount: 67,
    images: ["/images/mukono-villa.png", "/images/fort-portal-cottage.png", "/images/jinja-family-home.png"],
    bedrooms: 3,
    bathrooms: 2,
    guests: 6,
    amenities: ["WiFi", "Kitchen", "Pool", "Garden", "Free parking", "Air conditioning", "Security"],
    hostName: "David Okello",
    hostImage: "/images/host-david.png",
    hostJoined: "2021",
    instantBook: true,
  },
  "5": {
    id: "5",
    title: "Cottage in Fort Portal",
    description:
      "Rustic cottage with mountain views in Fort Portal, gateway to the Rwenzori Mountains and Queen Elizabeth National Park. Experience authentic Ugandan hospitality in this cozy retreat surrounded by nature.",
    price: 65,
    location: "Fort Portal, Uganda",
    rating: 4.7,
    reviewCount: 92,
    images: ["/images/fort-portal-cottage.png", "/images/entebbe-studio.png", "/images/mukono-villa.png"],
    bedrooms: 2,
    bathrooms: 1,
    guests: 4,
    amenities: ["WiFi", "Kitchen", "Mountain view", "Fireplace", "Garden"],
    hostName: "Grace Atim",
    hostImage: "/images/host-grace.png",
    hostJoined: "2020",
    instantBook: false,
  },
}

const amenityIcons: Record<string, any> = {
  WiFi: Wifi,
  Kitchen: Coffee,
  "Air conditioning": Wind,
  TV: Tv,
  "Free parking": Car,
  Security: Shield,
}

export default function ApartmentDetailsPage() {
  const params = useParams()
  const router = useRouter()
  const { user } = useAuth()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)
  const [dateRange, setDateRange] = useState<DateRange | undefined>()
  const [guests, setGuests] = useState(1)
  const [showBookingForm, setShowBookingForm] = useState(false)
  const [bookingLoading, setBookingLoading] = useState(false)
  const [bookingError, setBookingError] = useState("")
  const [bookingSuccess, setBookingSuccess] = useState(false)

  const apartment = apartments[params.id as string]

  useEffect(() => {
    if (!apartment) {
      router.push("/explore")
    }
  }, [apartment, router])

  if (!apartment) {
    return null
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % apartment.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + apartment.images.length) % apartment.images.length)
  }

  const calculateTotalPrice = () => {
    if (!dateRange?.from || !dateRange?.to) return 0
    const nights = differenceInDays(dateRange.to, dateRange.from)
    return nights * apartment.price
  }

  const handleReserve = async () => {
    if (!user) {
      router.push(`/auth/signin?redirect=/apartments/${apartment.id}`)
      return
    }

    if (!dateRange?.from || !dateRange?.to) {
      setBookingError("Please select check-in and check-out dates")
      return
    }

    setBookingLoading(true)
    setBookingError("")

    try {
      const { data, error } = await supabase.from("bookings").insert({
        property_id: apartment.id,
        guest_id: user.id,
        check_in: format(dateRange.from, "yyyy-MM-dd"),
        check_out: format(dateRange.to, "yyyy-MM-dd"),
        guests: guests,
        total_price: calculateTotalPrice(),
        status: "pending",
      })

      if (error) throw error

      setBookingSuccess(true)
      setTimeout(() => {
        router.push("/bookings")
      }, 2000)
    } catch (error) {
      console.error("Booking error:", error)
      setBookingError("Failed to create booking. Please try again.")
    } finally {
      setBookingLoading(false)
    }
  }

  const totalPrice = calculateTotalPrice()
  const nights = dateRange?.from && dateRange?.to ? differenceInDays(dateRange.to, dateRange.from) : 0

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Image Gallery */}
        <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden mb-8">
          <Image
            src={apartment.images[currentImageIndex] || "/placeholder.svg"}
            alt={apartment.title}
            fill
            className="object-cover"
          />
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {apartment.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentImageIndex ? "bg-white w-8" : "bg-white/50"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Details */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{apartment.title}</h1>
                  <div className="flex items-center gap-4 text-gray-600">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{apartment.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{apartment.rating}</span>
                      <span>({apartment.reviewCount} reviews)</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" onClick={() => setIsFavorite(!isFavorite)}>
                    <Heart className={`w-5 h-5 ${isFavorite ? "fill-pink-500 text-pink-500" : ""}`} />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Share2 className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {apartment.instantBook && (
                <Badge className="bg-pink-600 hover:bg-pink-700">
                  <Star className="w-3 h-3 mr-1" />
                  Instant Book
                </Badge>
              )}
            </div>

            <Separator />

            {/* Property Info */}
            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-gray-600" />
                <span>
                  {apartment.guests} guest{apartment.guests > 1 ? "s" : ""}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Bed className="w-5 h-5 text-gray-600" />
                <span>
                  {apartment.bedrooms} bedroom{apartment.bedrooms > 1 ? "s" : ""}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Bath className="w-5 h-5 text-gray-600" />
                <span>
                  {apartment.bathrooms} bathroom{apartment.bathrooms > 1 ? "s" : ""}
                </span>
              </div>
            </div>

            <Separator />

            {/* Description */}
            <div>
              <h2 className="text-xl font-semibold mb-3">About this place</h2>
              <p className="text-gray-700 leading-relaxed">{apartment.description}</p>
            </div>

            <Separator />

            {/* Amenities */}
            <div>
              <h2 className="text-xl font-semibold mb-4">What this place offers</h2>
              <div className="grid grid-cols-2 gap-4">
                {apartment.amenities.map((amenity) => {
                  const Icon = amenityIcons[amenity] || Wifi
                  return (
                    <div key={amenity} className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-gray-600" />
                      <span>{amenity}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            <Separator />

            {/* Host Info */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Hosted by {apartment.hostName}</h2>
              <div className="flex items-center gap-4">
                <Image
                  src={apartment.hostImage || "/placeholder.svg"}
                  alt={apartment.hostName}
                  width={64}
                  height={64}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold">{apartment.hostName}</p>
                  <p className="text-gray-600">Joined in {apartment.hostJoined}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-2xl font-bold">${apartment.price}</span>
                    <span className="text-gray-600"> / night</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{apartment.rating}</span>
                  </div>
                </div>

                {bookingError && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{bookingError}</AlertDescription>
                  </Alert>
                )}

                {bookingSuccess && (
                  <Alert className="bg-green-50 text-green-900 border-green-200">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>Booking successful! Redirecting to bookings...</AlertDescription>
                  </Alert>
                )}

                {!user ? (
                  <div className="space-y-4">
                    <Alert>
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>You need to sign in before booking this property.</AlertDescription>
                    </Alert>
                    <Button
                      className="w-full"
                      onClick={() => router.push(`/auth/signin?redirect=/apartments/${apartment.id}`)}
                    >
                      Sign in to book
                    </Button>
                  </div>
                ) : (
                  <>
                    <div className="space-y-2">
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
                        className="rounded-md border"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        Guests
                      </label>
                      <select
                        value={guests}
                        onChange={(e) => setGuests(Number(e.target.value))}
                        className="w-full px-3 py-2 border rounded-md"
                      >
                        {Array.from({ length: apartment.guests }, (_, i) => i + 1).map((num) => (
                          <option key={num} value={num}>
                            {num} guest{num > 1 ? "s" : ""}
                          </option>
                        ))}
                      </select>
                    </div>

                    {dateRange?.from && dateRange?.to && (
                      <div className="space-y-2 pt-4 border-t">
                        <div className="flex justify-between text-sm">
                          <span>
                            ${apartment.price} x {nights} night{nights > 1 ? "s" : ""}
                          </span>
                          <span>${totalPrice}</span>
                        </div>
                        <div className="flex justify-between font-semibold">
                          <span>Total</span>
                          <span>${totalPrice}</span>
                        </div>
                      </div>
                    )}

                    <Button className="w-full" size="lg" onClick={handleReserve} disabled={bookingLoading}>
                      {bookingLoading ? "Processing..." : "Reserve"}
                    </Button>

                    <p className="text-xs text-center text-gray-600">{"You won't be charged yet"}</p>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
