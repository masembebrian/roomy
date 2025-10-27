"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  MapPin,
  Star,
  Users,
  Bed,
  Bath,
  Wifi,
  Car,
  Coffee,
  Wind,
  Shield,
  Heart,
  Share2,
  Calendar,
  CreditCard,
  AlertCircle,
  LogIn,
} from "lucide-react"
import { useAuth } from "@/lib/auth"
import { useLanguage } from "@/lib/i18n/context"

export default function ApartmentDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { user, loading: authLoading } = useAuth()
  const { t } = useLanguage()
  const [apartment, setApartment] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call to fetch apartment details
    setTimeout(() => {
      setApartment({
        id: params.id,
        title: "Luxury Apartment in Kololo",
        description:
          "Experience luxury living in the heart of Kampala's most prestigious neighborhood. This stunning 2-bedroom apartment features modern amenities, breathtaking city views, and easy access to restaurants, shopping centers, and business districts. Perfect for both short and extended stays.",
        images: ["/images/kampala-apartment.png", "/images/entebbe-studio.png", "/images/jinja-family-home.png"],
        price: 150000,
        location: "Kololo, Kampala",
        rating: 4.9,
        reviews: 127,
        guests: 4,
        bedrooms: 2,
        bathrooms: 2,
        amenities: [
          { name: "WiFi", icon: Wifi },
          { name: "Air Conditioning", icon: Wind },
          { name: "Kitchen", icon: Coffee },
          { name: "Free Parking", icon: Car },
        ],
        host: {
          name: "Sarah K.",
          image: "/images/host-sarah.png",
          joinedDate: "2022",
          verified: true,
        },
        rules: ["Check-in: 2:00 PM - 10:00 PM", "Checkout: 11:00 AM", "No smoking", "No pets", "No parties or events"],
      })
      setLoading(false)
    }, 1000)
  }, [params.id])

  const handleBooking = () => {
    if (!user) {
      // Redirect to signup with return URL
      router.push(`/auth/signup?returnUrl=/apartments/${params.id}`)
      return
    }
    // Proceed with booking
    router.push(`/bookings/new?apartmentId=${params.id}`)
  }

  if (loading || authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">{t("loading")}</p>
        </div>
      </div>
    )
  }

  if (!apartment) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Apartment not found</h1>
        <Button asChild>
          <Link href="/explore">Back to Explore</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 rounded-xl overflow-hidden">
        <div className="relative h-64 md:h-96">
          <Image src={apartment.images[0] || "/placeholder.svg"} alt={apartment.title} fill className="object-cover" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          {apartment.images.slice(1, 3).map((image: string, index: number) => (
            <div key={index} className="relative h-32 md:h-[184px]">
              <Image
                src={image || "/placeholder.svg"}
                alt={`${apartment.title} ${index + 2}`}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Title and Actions */}
          <div>
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h1 className="text-3xl font-bold mb-2">{apartment.title}</h1>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{apartment.rating}</span>
                    <span className="text-sm">({apartment.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{apartment.location}</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="flex gap-6 py-4 border-y">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-muted-foreground" />
                <span>
                  {apartment.guests} {t("guests")}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Bed className="h-5 w-5 text-muted-foreground" />
                <span>
                  {apartment.bedrooms} {t("bedrooms")}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Bath className="h-5 w-5 text-muted-foreground" />
                <span>
                  {apartment.bathrooms} {t("bathrooms")}
                </span>
              </div>
            </div>
          </div>

          {/* Auth Alert */}
          {!user && (
            <Alert className="border-blue-600 bg-blue-50 dark:bg-blue-950/20">
              <LogIn className="h-4 w-4 text-blue-600" />
              <AlertTitle className="text-blue-900 dark:text-blue-100">Sign in required to book</AlertTitle>
              <AlertDescription className="text-blue-800 dark:text-blue-200">
                Create an account or sign in to complete your booking and unlock exclusive features.
                <div className="mt-3 flex gap-2">
                  <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <Link href={`/auth/signup?returnUrl=/apartments/${params.id}`}>
                      <LogIn className="h-4 w-4 mr-2" />
                      Sign Up to Book
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <Link href={`/auth/signin?returnUrl=/apartments/${params.id}`}>Already have an account?</Link>
                  </Button>
                </div>
              </AlertDescription>
            </Alert>
          )}

          {/* Host Info */}
          <Card>
            <CardHeader>
              <CardTitle>Hosted by {apartment.host.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={apartment.host.image || "/placeholder.svg"} alt={apartment.host.name} />
                  <AvatarFallback>{apartment.host.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold">{apartment.host.name}</span>
                    {apartment.host.verified && (
                      <Badge variant="secondary" className="text-xs">
                        <Shield className="h-3 w-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">Joined in {apartment.host.joinedDate}</p>
                </div>
                <Button variant="outline">Contact Host</Button>
              </div>
            </CardContent>
          </Card>

          {/* Description */}
          <Card>
            <CardHeader>
              <CardTitle>About this place</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{apartment.description}</p>
            </CardContent>
          </Card>

          {/* Amenities */}
          <Card>
            <CardHeader>
              <CardTitle>What this place offers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {apartment.amenities.map((amenity: any, index: number) => (
                  <div key={index} className="flex items-center gap-3">
                    <amenity.icon className="h-5 w-5 text-muted-foreground" />
                    <span>{amenity.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* House Rules */}
          <Card>
            <CardHeader>
              <CardTitle>House Rules</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {apartment.rules.map((rule: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <span className="text-muted-foreground">{rule}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Booking Card */}
        <div className="lg:col-span-1">
          <Card className="sticky top-20">
            <CardHeader>
              <CardTitle className="flex items-baseline gap-2">
                <span className="text-3xl font-bold">UGX {apartment.price.toLocaleString()}</span>
                <span className="text-sm font-normal text-muted-foreground">{t("perNight")}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div className="border rounded-lg p-3">
                    <label className="text-xs text-muted-foreground">CHECK-IN</label>
                    <div className="flex items-center gap-2 mt-1">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">Add date</span>
                    </div>
                  </div>
                  <div className="border rounded-lg p-3">
                    <label className="text-xs text-muted-foreground">CHECKOUT</label>
                    <div className="flex items-center gap-2 mt-1">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">Add date</span>
                    </div>
                  </div>
                </div>
                <div className="border rounded-lg p-3">
                  <label className="text-xs text-muted-foreground">GUESTS</label>
                  <div className="flex items-center gap-2 mt-1">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">1 guest</span>
                  </div>
                </div>
              </div>

              <Button className="w-full" size="lg" onClick={handleBooking} disabled={!user}>
                {user ? (
                  <>
                    <CreditCard className="mr-2 h-4 w-4" />
                    {t("bookNow")}
                  </>
                ) : (
                  <>
                    <LogIn className="mr-2 h-4 w-4" />
                    Sign in to book
                  </>
                )}
              </Button>

              {!user && (
                <p className="text-xs text-center text-muted-foreground">You need an account to make a booking</p>
              )}

              <Separator />

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">UGX {apartment.price.toLocaleString()} × 1 night</span>
                  <span>UGX {apartment.price.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Service fee</span>
                  <span>UGX {(apartment.price * 0.1).toLocaleString()}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>UGX {(apartment.price * 1.1).toLocaleString()}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
