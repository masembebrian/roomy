"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import Footer from "@/components/footer"
import { SearchBar } from "@/components/search-bar"
import { ApartmentList } from "@/components/apartment-list"
import { Testimonials } from "@/components/testimonials"
import ChatBox from "@/components/chat-box"
import ImageTrail from "@/components/image-trail"
import InfiniteScrollTrail from "@/components/infinite-scroll-trail"
import MouseImageTrail from "@/components/mouse-image-trail"
import { Button } from "@/components/ui/button"
import { MapPin, Users, Home, Star, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

const heroImages = [
  {
    id: "1",
    image: "/images/kampala-apartment.png",
    title: "Luxury Living in Kampala",
    subtitle: "Experience comfort in the heart of the city",
  },
  {
    id: "2",
    image: "/images/entebbe-studio.png",
    title: "Serene Entebbe Retreats",
    subtitle: "Wake up to beautiful lake views",
  },
  {
    id: "3",
    image: "/images/jinja-family-home.png",
    title: "Spacious Family Homes",
    subtitle: "Perfect for your entire family",
  },
  {
    id: "4",
    image: "/images/mukono-villa.png",
    title: "Elegant Villas",
    subtitle: "Privacy and luxury combined",
  },
]

const trailImages = [
  "/images/kampala-apartment.png",
  "/images/entebbe-studio.png",
  "/images/jinja-family-home.png",
  "/images/mukono-villa.png",
  "/images/fort-portal-cottage.png",
  "/images/white-water-rafting.png",
  "/images/gorilla-trekking.png",
  "/images/cooking-class.png",
]

const experienceImages = [
  { id: "1", image: "/images/white-water-rafting.png", title: "White Water Rafting" },
  { id: "2", image: "/images/gorilla-trekking.png", title: "Gorilla Trekking" },
  { id: "3", image: "/images/cooking-class.png", title: "Cooking Classes" },
  { id: "4", image: "/images/safari-sunset.png", title: "Safari Adventures" },
  { id: "5", image: "/images/street-art-kampala.png", title: "Street Art Tours" },
  { id: "6", image: "/images/lake-victoria-fishing.png", title: "Fishing Trips" },
]

export default function HomePage() {
  const [mouseTrailEnabled, setMouseTrailEnabled] = useState(false)

  useEffect(() => {
    // Enable mouse trail after a short delay to show the feature
    const timer = setTimeout(() => {
      setMouseTrailEnabled(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Mouse Trail Effect - Can be toggled */}
      <MouseImageTrail images={trailImages} maxTrailLength={15} enabled={mouseTrailEnabled} />

      <main className="flex-1">
        {/* Hero Section with Image Trail Carousel */}
        <section className="relative pt-20">
          <ImageTrail items={heroImages} autoplay={true} interval={5000} />

          {/* Search Bar Overlay */}
          <div className="absolute bottom-8 left-0 right-0 z-20 px-4">
            <div className="container mx-auto max-w-4xl">
              <SearchBar />
            </div>
          </div>
        </section>

        {/* Stats Banner */}
        <section className="bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="flex items-center justify-center mb-2">
                  <Home className="w-6 h-6 text-primary mr-2" />
                  <span className="text-3xl font-bold">1,500+</span>
                </div>
                <p className="text-sm text-muted-foreground">Properties</p>
              </div>
              <div>
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-primary mr-2" />
                  <span className="text-3xl font-bold">50,000+</span>
                </div>
                <p className="text-sm text-muted-foreground">Happy Guests</p>
              </div>
              <div>
                <div className="flex items-center justify-center mb-2">
                  <MapPin className="w-6 h-6 text-primary mr-2" />
                  <span className="text-3xl font-bold">25+</span>
                </div>
                <p className="text-sm text-muted-foreground">Cities</p>
              </div>
              <div>
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-6 h-6 text-primary mr-2" />
                  <span className="text-3xl font-bold">4.8</span>
                </div>
                <p className="text-sm text-muted-foreground">Average Rating</p>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Gallery CTA */}
        <section className="py-8 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-6 bg-card rounded-2xl shadow-lg border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-primary animate-pulse" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Experience Interactive Galleries</h3>
                  <p className="text-muted-foreground">
                    See properties come alive with mouse-following animations and 3D effects
                  </p>
                </div>
              </div>
              <Link href="/gallery">
                <Button size="lg" className="gap-2">
                  Try It Now
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Properties */}
        <section className="py-16 container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Properties</h2>
              <p className="text-muted-foreground">Discover our most popular listings</p>
            </div>
            <Link href="/explore">
              <Button variant="outline" className="gap-2 bg-transparent">
                View All
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          <ApartmentList limit={8} />
        </section>

        {/* Experiences Section with Infinite Scroll */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 mb-8">
            <h2 className="text-3xl font-bold mb-2">Popular Experiences</h2>
            <p className="text-muted-foreground">Discover unique activities hosted by local experts</p>
          </div>
          <InfiniteScrollTrail items={experienceImages} speed={1} direction="left" />
        </section>

        {/* Testimonials */}
        <section className="py-16 container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Guests Say</h2>
          <Testimonials />
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of travelers who have found their perfect stay in Uganda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/explore">
                <Button size="lg" className="gap-2">
                  Explore Properties
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/become-host">
                <Button size="lg" variant="outline" className="gap-2 bg-transparent">
                  Become a Host
                  <Home className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ChatBox />
    </div>
  )
}
