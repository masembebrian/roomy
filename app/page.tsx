"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import Footer from "@/components/footer"
import { SearchBar } from "@/components/search-bar"
import { ApartmentList } from "@/components/apartment-list"
import { Testimonials } from "@/components/testimonials"
import MouseImageTrail from "@/components/mouse-image-trail"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, MapPin, Users, Home, Shield, Sparkles } from "lucide-react"

const heroImages = [
  {
    src: "/images/kampala-apartment.png",
    title: "Modern Living in Kampala",
    description: "Discover luxury apartments in Uganda's capital city",
  },
  {
    src: "/images/entebbe-studio.png",
    title: "Lakeside Retreats",
    description: "Relax by the shores of Lake Victoria",
  },
  {
    src: "/images/jinja-family-home.png",
    title: "Adventure Awaits",
    description: "Experience the source of the Nile",
  },
]

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTrailEnabled] = useState(true)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {isTrailEnabled && <MouseImageTrail />}

      {/* Hero Section with Carousel */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image src={image.src || "/placeholder.svg"} alt={image.title} fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
            </div>
          ))}
        </div>

        {/* Content Overlay */}
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <Badge className="mb-4" variant="secondary">
                <Sparkles className="w-3 h-3 mr-1" />
                Welcome to Roomy
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up">
                {heroImages[currentSlide].title}
              </h1>
              <p className="text-xl text-gray-200 mb-8 animate-fade-in-up animation-delay-200">
                {heroImages[currentSlide].description}
              </p>

              {/* Search Bar */}
              <div className="animate-fade-in-up animation-delay-400">
                <SearchBar />
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? "bg-white w-8" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-sm opacity-90">Properties</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-sm opacity-90">Cities</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10k+</div>
              <div className="text-sm opacity-90">Happy Guests</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.8★</div>
              <div className="text-sm opacity-90">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Properties</h2>
              <p className="text-muted-foreground">Handpicked properties just for you</p>
            </div>
            <Link href="/explore">
              <Button variant="outline">View All</Button>
            </Link>
          </div>
          <ApartmentList />
        </div>
      </section>

      {/* Why Choose Roomy */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Roomy?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We make finding and booking your perfect stay simple, secure, and enjoyable
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Verified Properties</h3>
                <p className="text-muted-foreground">
                  All our properties are personally verified to ensure quality and accuracy
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-pink-100 dark:bg-pink-900 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Secure Booking</h3>
                <p className="text-muted-foreground">
                  Your payments and personal information are always protected and secure
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                <p className="text-muted-foreground">
                  Our team is always ready to help you with any questions or concerns
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Guests Say</h2>
            <p className="text-muted-foreground">Real experiences from real travelers</p>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Explore?</h2>
          <p className="text-xl mb-8 opacity-90">Discover amazing properties across Uganda</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/explore">
              <Button size="lg" variant="secondary">
                <MapPin className="w-4 h-4 mr-2" />
                Browse Properties
              </Button>
            </Link>
            <Link href="/gallery">
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white text-white">
                <Sparkles className="w-4 h-4 mr-2" />
                Interactive Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
