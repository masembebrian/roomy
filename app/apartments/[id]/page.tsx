"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
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
  CreditCard,
  LogIn,
  Loader2,
  CheckCircle2,
  Smartphone,
} from "lucide-react"
import { useAuth } from "@/lib/auth"
import { useLanguage } from "@/lib/i18n/context"
import { useToast } from "@/hooks/use-toast"
import { createClient } from "@/lib/supabase/client"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ImageCarousel } from "@/components/image-carousel"
import { ShareButton } from "@/components/share-button"
import {
  type PaymentMethod,
  processMTNMoMoPayment,
  processAirtelMoneyPayment,
  processPayPalPayment,
  processVisaPayment,
} from "@/lib/payments"

export default function ApartmentDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { user, loading: authLoading } = useAuth()
  const { t } = useLanguage()
  const { toast } = useToast()
  const supabase = createClient()

  const [apartment, setApartment] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [showPaymentDialog, setShowPaymentDialog] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("mtn_momo")
  const [processingPayment, setProcessingPayment] = useState(false)
  const [paymentSuccess, setPaymentSuccess] = useState(false)
  const [isFavorited, setIsFavorited] = useState(false)

  // Payment form states
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")
  const [cardNumber, setCardNumber] = useState("")
  const [cardExpiry, setCardExpiry] = useState("")
  const [cardCvv, setCardCvv] = useState("")

  useEffect(() => {
    loadApartment()
    if (user) {
      checkFavoriteStatus()
    }
  }, [params.id, user])

  const loadApartment = async () => {
    try {
      const { data, error } = await supabase
        .from("properties")
        .select(
          `
          *,
          profiles:host_id (
            name,
            image,
            verified
          )
        `,
        )
        .eq("id", params.id)
        .single()

      if (error) throw error

      if (data) {
        setApartment({
          id: data.id,
          title: data.title,
          description: data.description,
          images: data.images || ["/images/kampala-apartment.png", "/images/entebbe-studio.png"],
          price: data.price_per_night,
          location: data.location,
          rating: data.average_rating || 4.8,
          reviews: data.review_count || 127,
          guests: data.max_guests,
          bedrooms: data.bedrooms,
          bathrooms: data.bathrooms,
          amenities: [
            { name: "WiFi", icon: Wifi },
            { name: "Air Conditioning", icon: Wind },
            { name: "Kitchen", icon: Coffee },
            { name: "Free Parking", icon: Car },
          ],
          host: {
            name: data.profiles?.name || "Host",
            image: data.profiles?.image || "/images/host-sarah.png",
            joinedDate: "2022",
            verified: data.profiles?.verified || false,
          },
          rules: [
            "Check-in: 2:00 PM - 10:00 PM",
            "Checkout: 11:00 AM",
            "No smoking",
            "No pets",
            "No parties or events",
          ],
        })
      }
    } catch (error) {
      console.error("Error loading apartment:", error)
      toast({
        title: "Error",
        description: "Failed to load property details",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const checkFavoriteStatus = async () => {
    if (!user) return

    try {
      const { data, error } = await supabase
        .from("favorites")
        .select("id")
        .eq("user_id", user.id)
        .eq("property_id", params.id)
        .single()

      if (data) {
        setIsFavorited(true)
      }
    } catch (error) {
      // Not favorited
    }
  }

  const toggleFavorite = async () => {
    if (!user) {
      router.push(`/auth/signin?returnUrl=/apartments/${params.id}`)
      return
    }

    try {
      if (isFavorited) {
        const { error } = await supabase.from("favorites").delete().eq("user_id", user.id).eq("property_id", params.id)

        if (error) throw error

        setIsFavorited(false)
        toast({
          title: "Removed from favorites",
          description: "Property removed from your favorites",
        })
      } else {
        const { error } = await supabase.from("favorites").insert({
          user_id: user.id,
          property_id: params.id,
        })

        if (error) throw error

        setIsFavorited(true)
        toast({
          title: "Added to favorites",
          description: "Property saved to your favorites",
        })
      }
    } catch (error) {
      console.error("Error toggling favorite:", error)
      toast({
        title: "Error",
        description: "Failed to update favorites",
        variant: "destructive",
      })
    }
  }

  const handleBookingClick = () => {
    if (!user) {
      router.push(`/auth/signup?returnUrl=/apartments/${params.id}`)
      return
    }
    // Navigate to booking flow
    setShowPaymentDialog(true)
  }

  const handlePayment = async () => {
    if (!user || !apartment) return

    setProcessingPayment(true)

    try {
      // Create booking first
      const { data: booking, error: bookingError } = await supabase
        .from("bookings")
        .insert({
          property_id: apartment.id,
          guest_id: user.id,
          check_in: new Date().toISOString(),
          check_out: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
          guests: 2,
          total_price: apartment.price,
          status: "pending",
        })
        .select()
        .single()

      if (bookingError) throw bookingError

      // Process payment based on selected method
      let paymentResult

      switch (paymentMethod) {
        case "mtn_momo":
          paymentResult = await processMTNMoMoPayment(phoneNumber, apartment.price, booking.id)
          break
        case "airtel_money":
          paymentResult = await processAirtelMoneyPayment(phoneNumber, apartment.price, booking.id)
          break
        case "paypal":
          paymentResult = await processPayPalPayment(email, apartment.price / 3700, booking.id)
          break
        case "visa":
          paymentResult = await processVisaPayment(cardNumber, cardExpiry, cardCvv, apartment.price / 3700, booking.id)
          break
        default:
          throw new Error("Invalid payment method")
      }

      if (paymentResult.success) {
        // Update booking status
        await supabase.from("bookings").update({ status: "confirmed" }).eq("id", booking.id)

        setPaymentSuccess(true)
        toast({
          title: "Payment Successful!",
          description: `Transaction ID: ${paymentResult.transactionId}`,
        })

        setTimeout(() => {
          router.push("/bookings")
        }, 3000)
      } else {
        throw new Error(paymentResult.error || "Payment failed")
      }
    } catch (error) {
      console.error("Payment error:", error)
      toast({
        title: "Payment Failed",
        description: error instanceof Error ? error.message : "Please try again",
        variant: "destructive",
      })
    } finally {
      setProcessingPayment(false)
    }
  }

  if (loading || authLoading) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="h-12 w-12 animate-spin mx-auto text-primary" />
            <p className="mt-4 text-muted-foreground">{t("loading")}</p>
          </div>
        </div>
      </>
    )
  }

  if (!apartment) {
    return (
      <>
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Apartment not found</h1>
          <Button asChild>
            <Link href="/explore">Back to Explore</Link>
          </Button>
        </div>
      </>
    )
  }

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        {/* Image Gallery */}
        <div className="mb-6 sm:mb-8">
          <ImageCarousel images={apartment.images} title={apartment.title} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h1 className="text-3xl font-bold mb-2 text-balance">{apartment.title}</h1>
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{apartment.rating}</span>
                      <span className="text-sm">({apartment.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm sm:text-base">{apartment.location}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <ShareButton
                    url={`/apartments/${params.id}`}
                    title={apartment.title}
                    description={apartment.description}
                    variant="outline"
                    size="default"
                  />
                  <Button variant="outline" size="default" onClick={toggleFavorite}>
                    <Heart className={`h-4 w-4 ${isFavorited ? "fill-red-500 text-red-500" : ""}`} />
                  </Button>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 sm:gap-6 py-4 border-y">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm sm:text-base">{apartment.guests} guests</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bed className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm sm:text-base">{apartment.bedrooms} bedrooms</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bath className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm sm:text-base">{apartment.bathrooms} bathrooms</span>
                </div>
              </div>
            </div>

            {!user && (
              <Alert className="border-blue-600 bg-blue-50 dark:bg-blue-950/20">
                <LogIn className="h-4 w-4 text-blue-600" />
                <AlertTitle className="text-blue-900 dark:text-blue-100">Sign in required to book</AlertTitle>
                <AlertDescription className="text-blue-800 dark:text-blue-200">
                  Create an account or sign in to complete your booking.
                  <div className="mt-3 flex gap-2">
                    <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700">
                      <Link href={`/auth/signup?returnUrl=/apartments/${params.id}`}>
                        <LogIn className="h-4 w-4 mr-2" />
                        Sign Up to Book
                      </Link>
                    </Button>
                  </div>
                </AlertDescription>
              </Alert>
            )}

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
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>About this place</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{apartment.description}</p>
              </CardContent>
            </Card>

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
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-20">
              <CardHeader>
                <CardTitle className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold">UGX {apartment.price.toLocaleString()}</span>
                  <span className="text-sm font-normal text-muted-foreground">per night</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full" size="lg" onClick={handleBookingClick} disabled={!user}>
                  {user ? (
                    <>
                      <CreditCard className="mr-2 h-4 w-4" />
                      Book Now
                    </>
                  ) : (
                    <>
                      <LogIn className="mr-2 h-4 w-4" />
                      Sign in to book
                    </>
                  )}
                </Button>

                {!user && <p className="text-xs text-center text-muted-foreground">You need an account to book</p>}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Payment Dialog */}
      <Dialog open={showPaymentDialog} onOpenChange={setShowPaymentDialog}>
        <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Complete Your Payment</DialogTitle>
            <DialogDescription>Choose your preferred payment method</DialogDescription>
          </DialogHeader>

          {!paymentSuccess ? (
            <div className="space-y-6">
              <RadioGroup value={paymentMethod} onValueChange={(value) => setPaymentMethod(value as PaymentMethod)}>
                <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-accent">
                  <RadioGroupItem value="mtn_momo" id="mtn_momo" />
                  <Label htmlFor="mtn_momo" className="flex-1 cursor-pointer">
                    <div className="flex items-center gap-2">
                      <Smartphone className="h-5 w-5 text-yellow-500" />
                      <span className="font-semibold">MTN Mobile Money</span>
                    </div>
                  </Label>
                </div>

                <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-accent">
                  <RadioGroupItem value="airtel_money" id="airtel_money" />
                  <Label htmlFor="airtel_money" className="flex-1 cursor-pointer">
                    <div className="flex items-center gap-2">
                      <Smartphone className="h-5 w-5 text-red-500" />
                      <span className="font-semibold">Airtel Money</span>
                    </div>
                  </Label>
                </div>

                <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-accent">
                  <RadioGroupItem value="paypal" id="paypal" />
                  <Label htmlFor="paypal" className="flex-1 cursor-pointer">
                    <div className="flex items-center gap-2">
                      <CreditCard className="h-5 w-5 text-blue-500" />
                      <span className="font-semibold">PayPal</span>
                    </div>
                  </Label>
                </div>

                <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-accent">
                  <RadioGroupItem value="visa" id="visa" />
                  <Label htmlFor="visa" className="flex-1 cursor-pointer">
                    <div className="flex items-center gap-2">
                      <CreditCard className="h-5 w-5 text-blue-700" />
                      <span className="font-semibold">Visa / Mastercard</span>
                    </div>
                  </Label>
                </div>
              </RadioGroup>

              {/* Payment Form Fields */}
              <div className="space-y-4">
                {(paymentMethod === "mtn_momo" || paymentMethod === "airtel_money") && (
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="256700000000"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                )}

                {paymentMethod === "paypal" && (
                  <div>
                    <Label htmlFor="email">PayPal Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                )}

                {paymentMethod === "visa" && (
                  <>
                    <div>
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input
                        id="cardNumber"
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        maxLength={16}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="cardExpiry">Expiry</Label>
                        <Input
                          id="cardExpiry"
                          type="text"
                          placeholder="MM/YY"
                          value={cardExpiry}
                          onChange={(e) => setCardExpiry(e.target.value)}
                          maxLength={5}
                        />
                      </div>
                      <div>
                        <Label htmlFor="cardCvv">CVV</Label>
                        <Input
                          id="cardCvv"
                          type="text"
                          placeholder="123"
                          value={cardCvv}
                          onChange={(e) => setCardCvv(e.target.value)}
                          maxLength={3}
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total Amount:</span>
                  <span>UGX {apartment.price.toLocaleString()}</span>
                </div>
              </div>

              <Button className="w-full" size="lg" onClick={handlePayment} disabled={processingPayment}>
                {processingPayment ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <CreditCard className="mr-2 h-4 w-4" />
                    Pay Now
                  </>
                )}
              </Button>
            </div>
          ) : (
            <div className="text-center py-8">
              <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Payment Successful!</h3>
              <p className="text-muted-foreground mb-4">Your booking has been confirmed</p>
              <Button onClick={() => router.push("/bookings")}>View Booking</Button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </>
  )
}
