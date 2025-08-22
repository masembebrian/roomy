"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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
import {
  Star,
  Heart,
  MapPin,
  Users,
  Clock,
  Share,
  ChevronLeft,
  ChevronRight,
  Award,
  Shield,
  MessageCircle,
  CheckCircle,
  UserPlus,
  UserMinus,
} from "lucide-react"
import { useAuth } from "@/lib/auth"
import Image from "next/image"

const experienceData = {
  1: {
    id: 1,
    title: "White Water Rafting on the Nile",
    host: {
      name: "Adventure Uganda",
      image: "/images/adventure-uganda-team.png",
      joinDate: "2020-05-15",
      responseRate: 100,
      responseTime: "within an hour",
      superhost: true,
      verified: true,
      totalExperiences: 12,
    },
    location: "Jinja, Uganda",
    duration: "4 hours",
    price: 85,
    rating: 4.9,
    reviews: 234,
    images: [
      "/images/white-water-rafting.png",
      "/images/white-water-rafting.png",
      "/images/white-water-rafting.png",
      "/images/white-water-rafting.png",
    ],
    category: "Adventure",
    groupSize: "Up to 12 people",
    description:
      "Experience the ultimate adrenaline rush as you navigate through grade 5 rapids on the legendary source of the Nile River. This full-day adventure combines heart-pounding excitement with breathtaking scenery, making it perfect for thrill-seekers and nature lovers alike.",
    highlights: [
      "Professional certified guides with 10+ years experience",
      "All safety equipment included (helmets, life jackets, paddles)",
      "Delicious riverside lunch with local specialties",
      "Round-trip transport from Kampala included",
      "Professional photography service available",
      "Safety briefing and swimming test",
    ],
    included: [
      "Professional guide",
      "All rafting equipment",
      "Lunch and refreshments",
      "Transport from meeting point",
      "Safety briefing",
      "First aid support",
    ],
    notIncluded: ["Personal items", "Tips for guides", "Professional photos (optional extra)"],
    meetingPoint: "Adventure Uganda Office, Jinja Town Center",
    cancellationPolicy: "Free cancellation up to 24 hours before the experience starts",
    languages: ["English", "Luganda", "Swahili"],
    ageRestriction: "Minimum age 16 years",
    fitnessLevel: "Moderate to high fitness required",
    weatherPolicy: "Experience runs in most weather conditions",
    reviews: [
      {
        id: 1,
        user: { name: "Mike Johnson", image: "/images/host-john.png" },
        rating: 5,
        date: "2024-01-20",
        comment:
          "Absolutely incredible experience! The guides were professional and made sure everyone felt safe while having the time of their lives. The rapids were thrilling and the scenery was breathtaking.",
        helpful: 23,
      },
      {
        id: 2,
        user: { name: "Sarah Williams", image: "/images/host-sarah.png" },
        rating: 5,
        date: "2024-01-15",
        comment:
          "Best adventure activity I've ever done! The lunch was delicious and the whole team was fantastic. Highly recommend for anyone visiting Uganda.",
        helpful: 18,
      },
      {
        id: 3,
        user: { name: "David Chen", image: "/images/host-david.png" },
        rating: 4,
        date: "2024-01-10",
        comment:
          "Great experience overall. The rapids were exciting and the guides were knowledgeable. Only minor issue was the transport was a bit delayed.",
        helpful: 12,
      },
    ],
  },
}

export default function ExperienceDetail({ params }: { params: { id: string } }) {
  const { user } = useAuth()
  const router = useRouter()
  const [selectedDate, setSelectedDate] = useState<Date | undefined>()
  const [selectedTime, setSelectedTime] = useState("")
  const [guests, setGuests] = useState(1)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)
  const [showBookingDialog, setShowBookingDialog] = useState(false)
  const [showContactDialog, setShowContactDialog] = useState(false)
  const [message, setMessage] = useState("")
  const [bookingDetails, setBookingDetails] = useState({
    specialRequests: "",
    dietaryRestrictions: "",
    emergencyContact: "",
  })
  const [isFollowing, setIsFollowing] = useState(false)

  const experience = experienceData[params.id as keyof typeof experienceData]

  if (!experience) {
    return <div>Experience not found</div>
  }

  const availableTimes = ["09:00 AM", "01:00 PM"]

  const handleBooking = () => {
    if (!user) {
      router.push("/auth/signin")
      return
    }

    if (!selectedDate || !selectedTime) {
      alert("Please select a date and time")
      return
    }

    setShowBookingDialog(true)
  }

  const confirmBooking = () => {
    const booking = {
      experienceId: experience.id,
      date: selectedDate,
      time: selectedTime,
      guests,
      total: experience.price * guests,
      details: bookingDetails,
    }
    console.log("Experience booking confirmed:", booking)
    setShowBookingDialog(false)
    router.push("/bookings?success=true&type=experience")
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % experience.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + experience.images.length) % experience.images.length)
  }

  const toggleFollow = () => {
    if (!user) {
      router.push("/auth/signin")
      return
    }
    setIsFollowing(!isFollowing)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">{experience.title}</h1>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                <span className="font-medium">{experience.rating}</span>
                <span className="text-muted-foreground ml-1">({experience.reviews.length} reviews)</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{experience.location}</span>
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
              src={experience.images[currentImageIndex] || "/placeholder.svg"}
              alt={experience.title}
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
              {experience.images.map((_, index) => (
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
                  <AvatarImage src={experience.host.image || "/placeholder.svg"} />
                  <AvatarFallback>{experience.host.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">Hosted by {experience.host.name}</h3>
                    {experience.host.superhost && (
                      <Badge variant="secondary">
                        <Award className="w-3 h-3 mr-1" />
                        Superhost
                      </Badge>
                    )}
                    {experience.host.verified && (
                      <Badge variant="outline">
                        <Shield className="w-3 h-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {experience.host.totalExperiences} experiences • {experience.host.responseRate}% response rate
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
                      <DialogTitle>Contact {experience.host.name}</DialogTitle>
                      <DialogDescription>Send a message to the host about this experience</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          placeholder="Hi! I'm interested in your experience..."
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

            {/* Experience Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {experience.duration}
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  {experience.groupSize}
                </div>
                <Badge>{experience.category}</Badge>
              </div>

              <div>
                <h3 className="font-semibold mb-2">About this experience</h3>
                <p className="text-muted-foreground">{experience.description}</p>
              </div>

              {/* Highlights */}
              <div>
                <h3 className="font-semibold mb-4">What you'll do</h3>
                <ul className="space-y-2">
                  {experience.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="details" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="location">Location</TabsTrigger>
              </TabsList>

              <TabsContent value="details" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">What's included</h4>
                    <ul className="space-y-1">
                      {experience.included.map((item, index) => (
                        <li key={index} className="text-sm flex items-center">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">What's not included</h4>
                    <ul className="space-y-1">
                      {experience.notIncluded.map((item, index) => (
                        <li key={index} className="text-sm text-muted-foreground">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Important information</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium">Age restriction:</span> {experience.ageRestriction}
                      </div>
                      <div>
                        <span className="font-medium">Fitness level:</span> {experience.fitnessLevel}
                      </div>
                      <div>
                        <span className="font-medium">Languages:</span> {experience.languages.join(", ")}
                      </div>
                      <div>
                        <span className="font-medium">Weather policy:</span> {experience.weatherPolicy}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Meeting point</h4>
                    <p className="text-sm text-muted-foreground">{experience.meetingPoint}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Cancellation policy</h4>
                    <p className="text-sm text-muted-foreground">{experience.cancellationPolicy}</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="text-2xl font-bold">{experience.rating}</span>
                  </div>
                  <span className="text-muted-foreground">({experience.reviews.length} reviews)</span>
                </div>

                <div className="space-y-6">
                  {experience.reviews.map((review) => (
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
                    Located in Jinja, the adventure capital of East Africa, at the source of the mighty Nile River.
                  </p>
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
                    <span className="text-2xl font-bold">${experience.price}</span>
                    <span className="text-muted-foreground"> per person</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-xs font-medium">SELECT DATE</Label>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={(date) => date < new Date()}
                    className="rounded-md border"
                  />
                </div>

                <div>
                  <Label className="text-xs font-medium">SELECT TIME</Label>
                  <Select value={selectedTime} onValueChange={setSelectedTime}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose time" />
                    </SelectTrigger>
                    <SelectContent>
                      {availableTimes.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-xs font-medium">GUESTS</Label>
                  <Select value={guests.toString()} onValueChange={(value) => setGuests(Number.parseInt(value))}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 12 }, (_, i) => i + 1).map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} guest{num > 1 ? "s" : ""}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {selectedDate && selectedTime && (
                  <div className="space-y-2 pt-4 border-t">
                    <div className="flex justify-between text-sm">
                      <span>
                        ${experience.price} x {guests} guests
                      </span>
                      <span>${experience.price * guests}</span>
                    </div>
                    <div className="flex justify-between font-semibold pt-2 border-t">
                      <span>Total</span>
                      <span>${experience.price * guests}</span>
                    </div>
                  </div>
                )}

                <Button onClick={handleBooking} disabled={!selectedDate || !selectedTime} className="w-full" size="lg">
                  Book Experience
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
              <DialogDescription>Review your experience booking details</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="dietary">Dietary restrictions (optional)</Label>
                <Input
                  id="dietary"
                  placeholder="e.g., vegetarian, allergies"
                  value={bookingDetails.dietaryRestrictions}
                  onChange={(e) => setBookingDetails({ ...bookingDetails, dietaryRestrictions: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="emergency">Emergency contact</Label>
                <Input
                  id="emergency"
                  placeholder="Name and phone number"
                  value={bookingDetails.emergencyContact}
                  onChange={(e) => setBookingDetails({ ...bookingDetails, emergencyContact: e.target.value })}
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
                  <span>Total: ${experience.price * guests}</span>
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
