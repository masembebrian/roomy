"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Star,
  Heart,
  MapPin,
  Users,
  Bed,
  Bath,
  Wifi,
  Car,
  Waves,
  Dumbbell,
  Shield,
  Award,
  MessageCircle,
  Share,
  ChevronLeft,
  ChevronRight,
  UserPlus,
  UserMinus,
} from "lucide-react"
import { useAuth } from "@/lib/auth"
import Image from "next/image"

const apartmentData = {
  1: {
    id: 1,
    title: "Modern Apartment in Kampala",
    description:
      "A beautiful, modern apartment in the heart of Kampala. Perfect for travelers and digital nomads. This spacious 2-bedroom apartment features contemporary furnishings, high-speed internet, and stunning city views.",
    price: 50,
    images: [
      "/images/kampala-apartment.png",
      "/images/kampala-apartment.png",
      "/images/kampala-apartment.png",
      "/images/kampala-apartment.png",
      "/images/kampala-apartment.png",
    ],
    location: "Kampala Central, Uganda",
    coordinates: { lat: 0.3476, lng: 32.5825 },
    bedrooms: 2,
    bathrooms: 1,
    guests: 4,
    amenities: ["Wi-Fi", "Air Conditioning", "Kitchen", "Washing Machine", "TV", "Parking", "Balcony", "Workspace"],
    rating: 4.5,
    reviewCount: 32,
    host: {
      id: "host1",
      name: "Sarah M.",
      image: "/images/host-sarah.png",
      joinDate: "2022-03-15",
      responseRate: 98,
      responseTime: "within an hour",
      superhost: true,
      verified: true,
      languages: ["English", "Luganda", "Swahili"],
      bio: "Passionate about hospitality and sharing the beauty of Kampala with travelers from around the world.",
      propertyCount: 3,
      following: false,
    },
    houseRules: [
      "Check-in: 3:00 PM - 10:00 PM",
      "Checkout: 11:00 AM",
      "No smoking",
      "No pets",
      "No parties or events",
      "Quiet hours: 10:00 PM - 8:00 AM",
    ],
    cancellationPolicy: "Free cancellation for 48 hours. Cancel before check-in on Nov 28 for a partial refund.",
    instantBook: true,
    reviews: [
      {
        id: 1,
        user: { name: "John D.", image: "/images/host-john.png" },
        rating: 5,
        date: "2024-01-15",
        comment:
          "Excellent apartment, great location! Sarah was very responsive and helpful. The place was exactly as described and very clean.",
        helpful: 12,
      },
      {
        id: 2,
        user: { name: "Emily R.", image: "/images/host-emily.png" },
        rating: 4,
        date: "2024-01-10",
        comment:
          "Very comfortable stay. The apartment is well-equipped and in a great location. Only minor issue was some noise from the street at night.",
        helpful: 8,
      },
      {
        id: 3,
        user: { name: "Michael K.", image: "/images/host-david.png" },
        rating: 5,
        date: "2024-01-05",
        comment:
          "Perfect for business travelers. Fast wifi, comfortable workspace, and excellent communication from the host.",
        helpful: 15,
      },
    ],
  },
}

export default function ApartmentDetail({ params }: { params: { id: string } }) {
  const { user } = useAuth()
  const router = useRouter()
  const [selectedDates, setSelectedDates] = useState<{ from: Date | undefined; to: Date | undefined }>({
    from: undefined,
    to: undefined,
  })
  const [guests, setGuests] = useState(1)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)
  const [isFollowing, setIsFollowing] = useState(false)
  const [showBookingDialog, setShowBookingDialog] = useState(false)
  const [showContactDialog, setShowContactDialog] = useState(false)
  const [message, setMessage] = useState("")
  const [bookingDetails, setBookingDetails] = useState({
    specialRequests: "",
    arrivalTime: "",
    purpose: "",
  })

  const apartment = apartmentData[params.id as keyof typeof apartmentData]

  if (!apartment) {
    return <div>Apartment not found</div>
  }

  const calculateNights = () => {
    if (selectedDates.from && selectedDates.to) {
      const diffTime = Math.abs(selectedDates.to.getTime() - selectedDates.from.getTime())
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    }
    return 0
  }

  const calculateTotal = () => {
    const nights = calculateNights()
    const subtotal = nights * apartment.price
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

    if (!selectedDates.from || !selectedDates.to) {
      alert("Please select check-in and check-out dates")
      return
    }

    setShowBookingDialog(true)
  }

  const confirmBooking = () => {
    const booking = {
      apartmentId: apartment.id,
      dates: selectedDates,
      guests,
      total: calculateTotal().total,
      details: bookingDetails,
    }
    console.log("Booking confirmed:", booking)
    setShowBookingDialog(false)
    router.push("/bookings?success=true")
  }

  const toggleFollow = () => {
    if (!user) {
      router.push("/auth/signin")
      return
    }
    setIsFollowing(!isFollowing)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % apartment.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + apartment.images.length) % apartment.images.length)
  }

  const amenityIcons = {
    "Wi-Fi": Wifi,
    Parking: Car,
    Pool: Waves,
    Gym: Dumbbell,
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">{apartment.title}</h1>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                <span className="font-medium">{apartment.rating.toFixed(1)}</span>
                <span className="text-muted-foreground ml-1">({apartment.reviewCount} reviews)</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{apartment.location}</span>
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

        {/* Image Gallery */}
        <div className="mb-8">
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src={apartment.images[currentImageIndex] || "/placeholder.svg"}
              alt={apartment.title}
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
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {apartment.images.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full ${index === currentImageIndex ? "bg-white" : "bg-white/50"}`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Host Info */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={apartment.host.image || "/placeholder.svg"} />
                  <AvatarFallback>{apartment.host.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">Hosted by {apartment.host.name}</h3>
                    {apartment.host.superhost && (
                      <Badge variant="secondary">
                        <Award className="w-3 h-3 mr-1" />
                        Superhost
                      </Badge>
                    )}
                    {apartment.host.verified && (
                      <Badge variant="outline">
                        <Shield className="w-3 h-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Joined {apartment.host.joinDate} • {apartment.host.responseRate}% response rate
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant={isFollowing ? "default" : "outline"} size="sm" onClick={toggleFollow}>
                  {isFollowing ? (
                    <>
                      <UserMinus className="w-4 h-4 mr-2" />
                      Following
                    </>
                  ) : (
                    <>
                      <UserPlus className="w-4 h-4 mr-2" />
                      Follow
                    </>
                  )}
                </Button>
                <Dialog open={showContactDialog} onOpenChange={setShowContactDialog}>
                  <DialogTrigger asChild>
                    <Button variant="outline">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Contact Host
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Contact {apartment.host.name}</DialogTitle>
                      <DialogDescription>Send a message to the host about this property</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          placeholder="Hi! I'm interested in your property..."
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button onClick={() => setShowContactDialog(false)}>Send Message</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            {/* Property Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  {apartment.guests} guests
                </div>
                <div className="flex items-center">
                  <Bed className="w-4 h-4 mr-2" />
                  {apartment.bedrooms} bedroom{apartment.bedrooms > 1 ? "s" : ""}
                </div>
                <div className="flex items-center">
                  <Bath className="w-4 h-4 mr-2" />
                  {apartment.bathrooms} bathroom{apartment.bathrooms > 1 ? "s" : ""}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">About this place</h3>
                <p className="text-muted-foreground">{apartment.description}</p>
              </div>

              {/* Amenities */}
              <div>
                <h3 className="font-semibold mb-4">What this place offers</h3>
                <div className="grid grid-cols-2 gap-3">
                  {apartment.amenities.map((amenity) => {
                    const Icon = amenityIcons[amenity as keyof typeof amenityIcons]
                    return (
                      <div key={amenity} className="flex items-center">
                        {Icon && <Icon className="w-4 h-4 mr-3" />}
                        <span className="text-sm">{amenity}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Tabs for Reviews, Location, etc. */}
            <Tabs defaultValue="reviews" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="location">Location</TabsTrigger>
                <TabsTrigger value="policies">Policies</TabsTrigger>
              </TabsList>

              <TabsContent value="reviews" className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="text-2xl font-bold">{apartment.rating}</span>
                  </div>
                  <span className="text-muted-foreground">({apartment.reviewCount} reviews)</span>
                </div>

                <div className="space-y-6">
                  {apartment.reviews.map((review) => (
                    <div key={review.id} className="border-b pb-6">
                      <div className="flex items-start gap-4">
                        <Avatar>
                          <AvatarImage src={review.user.image || "/placeholder.svg"} />
                          <AvatarFallback>{review.user.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-medium">{review.user.name}</span>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-3 h-3 ${
                                    i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-muted-foreground">{review.date}</span>
                          </div>
                          <p className="text-sm mb-2">{review.comment}</p>
                          <Button variant="ghost" size="sm" className="text-xs">
                            Helpful ({review.helpful})
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="location">
                <div className="space-y-4">
                  <h3 className="font-semibold">Where you'll be</h3>
                  <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                    <p className="text-muted-foreground">Map would be displayed here</p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Located in the heart of Kampala, this apartment offers easy access to restaurants, shops, and public
                    transportation.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="policies">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-3">House rules</h3>
                    <ul className="space-y-2">
                      {apartment.houseRules.map((rule, index) => (
                        <li key={index} className="text-sm">
                          {rule}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Cancellation policy</h3>
                    <p className="text-sm text-muted-foreground">{apartment.cancellationPolicy}</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold">${apartment.price}</span>
                    <span className="text-muted-foreground"> night</span>
                  </div>
                  {apartment.instantBook && <Badge>Instant Book</Badge>}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Label className="text-xs font-medium">CHECK-IN</Label>
                    <Calendar
                      mode="single"
                      selected={selectedDates.from}
                      onSelect={(date) => setSelectedDates({ ...selectedDates, from: date })}
                      disabled={(date) => date < new Date()}
                      className="rounded-md border"
                    />
                  </div>
                  <div>
                    <Label className="text-xs font-medium">CHECK-OUT</Label>
                    <Calendar
                      mode="single"
                      selected={selectedDates.to}
                      onSelect={(date) => setSelectedDates({ ...selectedDates, to: date })}
                      disabled={(date) => date < new Date() || (selectedDates.from && date <= selectedDates.from)}
                      className="rounded-md border"
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-xs font-medium">GUESTS</Label>
                  <Select value={guests.toString()} onValueChange={(value) => setGuests(Number.parseInt(value))}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: apartment.guests }, (_, i) => i + 1).map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} guest{num > 1 ? "s" : ""}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {selectedDates.from && selectedDates.to && (
                  <div className="space-y-2 pt-4 border-t">
                    <div className="flex justify-between text-sm">
                      <span>
                        ${apartment.price} x {calculateTotal().nights} nights
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
                  disabled={!selectedDates.from || !selectedDates.to}
                  className="w-full"
                  size="lg"
                >
                  {apartment.instantBook ? "Book Now" : "Request to Book"}
                </Button>

                <p className="text-xs text-center text-muted-foreground">You won't be charged yet</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Booking Confirmation Dialog */}
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
    </div>
  )
}
