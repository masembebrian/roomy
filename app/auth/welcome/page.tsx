"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Shield, Heart, MapPin, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function WelcomePage() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && user) {
      router.push("/")
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-600 to-purple-600 rounded-2xl mb-6 shadow-lg">
            <span className="text-4xl font-bold text-white">R</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Welcome to Roomy
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Your gateway to unique accommodations and unforgettable experiences across Uganda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => router.push("/auth/signup")}
              className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700"
            >
              Get Started
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => router.push("/auth/signin")}>
              Sign In
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <CardContent className="pt-6 text-center">
              <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-7 h-7 text-pink-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Verified Listings</h3>
              <p className="text-sm text-muted-foreground">
                Every property is carefully verified and inspected for quality and safety
              </p>
            </CardContent>
          </Card>
          <Card className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <CardContent className="pt-6 text-center">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Secure Payments</h3>
              <p className="text-sm text-muted-foreground">
                Bank-level encryption ensures your payment information is always protected
              </p>
            </CardContent>
          </Card>
          <Card className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <CardContent className="pt-6 text-center">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Instant Booking</h3>
              <p className="text-sm text-muted-foreground">
                Book your perfect stay in seconds with our streamlined booking process
              </p>
            </CardContent>
          </Card>
          <Card className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <CardContent className="pt-6 text-center">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Local Experiences</h3>
              <p className="text-sm text-muted-foreground">
                Discover authentic local experiences and connect with amazing hosts
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Image Showcase */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative h-64">
              <Image src="/images/kampala-apartment.png" alt="Luxury apartment" fill className="object-cover" />
            </div>
            <CardContent className="pt-4">
              <h3 className="font-semibold text-lg">Luxury Stays</h3>
              <p className="text-sm text-muted-foreground">Premium apartments and villas</p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative h-64">
              <Image src="/images/gorilla-trekking.png" alt="Amazing experiences" fill className="object-cover" />
            </div>
            <CardContent className="pt-4">
              <h3 className="font-semibold text-lg">Unique Experiences</h3>
              <p className="text-sm text-muted-foreground">Unforgettable adventures await</p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative h-64">
              <Image src="/images/entebbe-studio.png" alt="Verified hosts" fill className="object-cover" />
            </div>
            <CardContent className="pt-4">
              <h3 className="font-semibold text-lg">Trusted Hosts</h3>
              <p className="text-sm text-muted-foreground">Connect with verified local hosts</p>
            </CardContent>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-pink-600 mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Properties Listed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">10K+</div>
              <div className="text-sm text-muted-foreground">Happy Guests</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">4.8★</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Customer Support</div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to start your journey?</h2>
          <p className="text-lg mb-8 opacity-90">Join thousands of travelers discovering the beauty of Uganda</p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-pink-600 hover:bg-gray-100"
            onClick={() => router.push("/auth/signup")}
          >
            Create Your Account
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
