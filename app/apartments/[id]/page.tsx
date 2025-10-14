"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ChatBox from "@/components/chat-box"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, Heart, MapPin, Users, Bed, Bath, Wifi, Share, ChevronLeft, ChevronRight } from "lucide-react"
import { useAuth } from "@/lib/auth"
import { supabase } from "@/lib/supabase"
import { useToast } from "@/hooks/use-toast"
import Image from "next/image"
import type { DateRange } from "react-day-picker"

export default function ApartmentDetail({ params }: { params: { id: string } }) {
  const { user } = useAuth()
  const router = useRouter()
  const { toast } = useToast()
  const [dateRange, setDateRange] = useState<DateRange | undefined>()
  const [guests, setGuests] = useState(1)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)
  const [showBookingDialog, setShowBookingDialog] = useState(false)
  const [bookingDetails, setBookingDetails] = useState({
    specialRequests: "",
    arrivalTime: "",
    purpose: "",
  })
  const [property, setProperty] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadProperty()
  }, [params.id])

  const loadProperty = async () => {
    try {
      const mockProperty = {
        id: params.id,
        title: "Modern Apartment in Kampala",
        description: "A beautiful, modern apartment in the heart of Kampala. Perfect for travelers and digital nomads.",
        price: 50,
        images: ["/images/kampala-apartment.png", "/images/entebbe-studio.png", "/images/jinja-family-home.png"],
        location: "Kampala Central, Uganda",
        bedrooms: 2,
        bathrooms: 1,
        guests: 4,
        amenities: ["Wi-Fi", "Air Conditioning", "Kitchen", "Washing Machine", "TV", "Parking", "Balcony"],
        rating: 4.5,
        reviewCount: 32,
        instantBook: true,
        host: {
          id: "host1",
          name: "Sarah M.",
          image: "/images/host-sarah.png",
          superhost: true,
          verified: true,
        },
      }
      setProperty(mockProperty)
      setLoading(false)
    } catch (error) {
      console.error("Error loading property:", error)
      toast({
        title: "Error",
        description: "Failed to load property details",
        variant: "destructive",
      })
      setLoading(false)
    }
  }

  const calculateNights = () => {
    if (dateRange?.from && dateRange?.to) {
      const diffTime = Math.abs(dateRange.to.getTime() - dateRange.from.getTime())
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    }
    return 0
  }

  const calculateTotal = () => {
    const nights = calculateNights()
    const subtotal = nights * (property?.price || 0)
    const serviceFee = Math.round(subtotal * 0.14)
    const cleaningFee = 25
    const taxes = Math.round((subtotal + serviceFee + cleaningFee) * 0.18)
    return {
      nights,
      subtotal,
      serviceFee,
      cleaningFee,
      taxes,
      total: subtotal + serviceFee + cleaningFee + taxes,
    }
  }

  const handleBooking = () => {
    if (!user) {
      router.push("/auth/signin")
      return
    }

    if (!dateRange?.from || !dateRange?.to) {
      toast({
        title: "Missing dates",
        description: "Please select check-in and check-out dates",
        variant: "destructive",
      })
      return
    }

    setShowBookingDialog(true)
  }

  const confirmBooking = async () => {
    if (!user || !property || !dateRange?.from || !dateRange?.to) return

    try {
      const { data, error } = await supabase
        .from("bookings")
        .insert({
          property_id: property.id,
          guest_id: user.id,
          check_in: dateRange.from.toISOString().split("T")[0],
          check_out: dateRange.to.toISOString().split("T")[0],
          guests,
          total_price: calculateTotal().total,
          status: "confirmed",
          special_requests: bookingDetails.specialRequests,
          arrival_time: bookingDetails.arrivalTime,
          purpose: bookingDetails.purpose,
        })
        .select()
        .single()

      if (error) throw error

      toast({
        title: "Booking confirmed!",
        description: "Your booking has been successfully created.",
      })

      setShowBookingDialog(false)
      router.push("/bookings?success=true")
    } catch (error) {
      console.error("Booking error:", error)
      toast({
        title: "Booking failed",
        description: "There was an error creating your booking. Please try again.",
        variant: "destructive",
      })
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center">Loading...</div>
        </main>
        <Footer />
        <ChatBox />
      </div>
    )
  }

  if (!property) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center">Property not found</div>
        </main>
        <Footer />
        <ChatBox />
      </div>
    )
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                <span className="font-medium">{property.rating.toFixed(1)}</span>
                <span className="text-muted-foreground ml-1">({property.reviewCount} reviews)</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{property.location}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" onClick={() => setIsFavorite(!isFavorite)}>
                <Heart className={`w-4 h-4 mr-2 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
                Save
              </Button>
              <Button variant="ghost" size="sm">
                <Share className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>

        <div className="relative rounded-lg overflow-hidden mb-8">
          <Image
            src={property.images[currentImageIndex] || "/placeholder.svg"}
            alt={property.title}
            width={800}
            height={400}
            className="w-full h-[400px] object-cover"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
            onClick={prevImage}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
            onClick={nextImage}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                {property.guests} guests
              </div>
              <div className="flex items-center">
                <Bed className="w-4 h-4 mr-2" />
                {property.bedrooms} bedroom{property.bedrooms > 1 ? "s" : ""}
              </div>
              <div className="flex items-center">
                <Bath className="w-4 h-4 mr-2" />
                {property.bathrooms} bathroom{property.bathrooms > 1 ? "s" : ""}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">About this place</h3>
              <p className="text-muted-foreground">{property.description}</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">What this place offers</h3>
              <div className="grid grid-cols-2 gap-3">
                {property.amenities.map((amenity: string) => (
                  <div key={amenity} className="flex items-center">
                    <Wifi className="w-4 h-4 mr-3" />
                    <span className="text-sm">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold">${property.price}</span>
                    <span className="text-muted-foreground"> night</span>
                  </div>
                  {property.instantBook && <Badge>Instant Book</Badge>}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-xs font-medium mb-2 block">SELECT DATES</Label>
                  <Calendar
                    mode="range"
                    selected={dateRange}
                    onSelect={setDateRange}
                    disabled={(date) => date < new Date()}
                    className="rounded-md border w-full"
                    numberOfMonths={1}
                  />
                </div>

                <div>
                  <Label className="text-xs font-medium">GUESTS</Label>
                  <Select value={guests.toString()} onValueChange={(value) => setGuests(Number.parseInt(value))}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: property.guests }, (_, i) => i + 1).map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} guest{num > 1 ? "s" : ""}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {dateRange?.from && dateRange?.to && (
                  <div className="space-y-2 pt-4 border-t">
                    <div className="flex justify-between text-sm">
                      <span>
                        ${property.price} x {calculateTotal().nights} nights
                      </span>
                      <span>${calculateTotal().subtotal}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Service fee</span>
                      <span>${calculateTotal().serviceFee}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Cleaning fee</span>
                      <span>${calculateTotal().cleaningFee}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Taxes</span>
                      <span>${calculateTotal().taxes}</span>
                    </div>
                    <div className="flex justify-between font-semibold pt-2 border-t">
                      <span>Total</span>
                      <span>${calculateTotal().total}</span>
                    </div>
                  </div>
                )}

                <Button
                  onClick={handleBooking}
                  disabled={!dateRange?.from || !dateRange?.to}
                  className="w-full"
                  size="lg"
                >
                  {property.instantBook ? "Book Now" : "Request to Book"}
                </Button>

                <p className="text-xs text-center text-muted-foreground">You won't be charged yet</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Dialog open={showBookingDialog} onOpenChange={setShowBookingDialog}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Confirm your booking</DialogTitle>
              <DialogDescription>Review your booking details before confirming</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="purpose">Purpose of visit</Label>
                <Select onValueChange={(value) => setBookingDetails({ ...bookingDetails, purpose: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select purpose" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="leisure">Leisure</SelectItem>
                    <SelectItem value="family">Family visit</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="arrival">Estimated arrival time</Label>
                <Input
                  id="arrival"
                  placeholder="e.g., 3:00 PM"
                  value={bookingDetails.arrivalTime}
                  onChange={(e) => setBookingDetails({ ...bookingDetails, arrivalTime: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="requests">Special requests (optional)</Label>
                <Textarea
                  id="requests"
                  placeholder="Any special requests or requirements..."
                  value={bookingDetails.specialRequests}
                  onChange={(e) => setBookingDetails({ ...bookingDetails, specialRequests: e.target.value })}
                />
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <div className="flex justify-between font-semibold">
                  <span>Total: ${calculateTotal().total}</span>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowBookingDialog(false)}>
                Cancel
              </Button>
              <Button onClick={confirmBooking}>Confirm Booking</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </main>
      <Footer />
      <ChatBox />
    </div>
  )
}
