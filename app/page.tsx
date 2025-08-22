"use client"

import { useAuth } from "@/lib/auth"
import Header from "@/components/header"
import SearchBar from "@/components/search-bar"
import ApartmentList from "@/components/apartment-list"
import Map from "@/components/map"
import Testimonials from "@/components/testimonials"
import ChatBox from "@/components/chat-box"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Suspense } from "react"
import { TrendingUp, Shield, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const featuredDestinations = [
  { name: "Kampala", properties: 150, image: "/placeholder.svg?height=200&width=300" },
  { name: "Entebbe", properties: 85, image: "/placeholder.svg?height=200&width=300" },
  { name: "Jinja", properties: 67, image: "/placeholder.svg?height=200&width=300" },
  { name: "Mbarara", properties: 45, image: "/placeholder.svg?height=200&width=300" },
]

const features = [
  {
    icon: Shield,
    title: "Verified Properties",
    description: "All properties are verified and inspected for quality and safety.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer support for all your needs.",
  },
  {
    icon: TrendingUp,
    title: "Best Prices",
    description: "Competitive pricing with no hidden fees.",
  },
]

export default function Home() {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 to-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Find your perfect home in Uganda</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover amazing apartments, houses, and unique stays across Uganda's most beautiful destinations.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <SearchBar />
          </div>
        </div>
      </section>

      {user ? (
        <>
          {/* Main Content */}
          <main className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8">
              <div>
                <Suspense fallback={<div>Loading apartments...</div>}>
                  <ApartmentList />
                </Suspense>
              </div>
              <div className="hidden lg:block sticky top-8 h-[calc(100vh-6rem)]">
                <Suspense fallback={<div>Loading map...</div>}>
                  <Map />
                </Suspense>
              </div>
            </div>
          </main>

          {/* Featured Destinations */}
          <section className="py-16 bg-muted/50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Popular Destinations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredDestinations.map((destination) => (
                  <Card
                    key={destination.name}
                    className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                  >
                    <div className="relative">
                      <Image
                        src={destination.image || "/placeholder.svg"}
                        alt={destination.name}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-end">
                        <div className="p-4 text-white">
                          <h3 className="text-xl font-bold">{destination.name}</h3>
                          <p className="text-sm opacity-90">{destination.properties} properties</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Why Choose Roomy?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature) => (
                  <Card key={feature.title} className="text-center">
                    <CardHeader>
                      <feature.icon className="h-12 w-12 mx-auto text-primary mb-4" />
                      <CardTitle>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <Testimonials />
        </>
      ) : (
        /* Guest Landing */
        <main className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Welcome to Roomy</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Sign in to start exploring amazing properties across Uganda
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/auth/signin">
                <Button size="lg">Sign In</Button>
              </Link>
              <Link href="/auth/signup">
                <Button variant="outline" size="lg">
                  Create Account
                </Button>
              </Link>
            </div>
          </div>

          {/* Preview Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {featuredDestinations.slice(0, 3).map((destination) => (
              <Card key={destination.name} className="overflow-hidden">
                <Image
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="font-bold">{destination.name}</h3>
                  <p className="text-sm text-muted-foreground">{destination.properties} properties available</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      )}

      <ChatBox />
      <Footer />
    </div>
  )
}
