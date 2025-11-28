"use client"

import { useState, lazy, Suspense } from "react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import Footer from "@/components/footer"
import ChatBox from "@/components/chat-box"
import { SearchBar } from "@/components/search-bar"
import { ApartmentList } from "@/components/apartment-list"
import { Testimonials } from "@/components/testimonials"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, MapPin, Users, Home, Shield, Sparkles } from "lucide-react"

const MouseImageTrail = lazy(() => import("@/components/mouse-image-trail"))

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

      {isTrailEnabled && (
        <Suspense fallback={null}>
          <MouseImageTrail />
        </Suspense>
      )}

      {/* Hero Section with Carousel */}
      <section className="relative h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden" aria-label="Hero carousel">
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden={index !== currentSlide}
            >
              <Image src={image.src || "/placeholder.svg"} alt={image.title} fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
            </div>
          ))}
        </div>

        {/* Content Overlay */}
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <Badge className="mb-4" variant="secondary">
                <Sparkles className="w-3 h-3 mr-1" aria-hidden="true" />
                Welcome to Roomy
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in-up text-balance">
                {heroImages[currentSlide].title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 animate-fade-in-up animation-delay-200 text-pretty">
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
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-all z-10 touch-manipulation"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-all z-10 touch-manipulation"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
        </button>

        {/* Slide Indicators */}
        <div
          className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10"
          role="tablist"
          aria-label="Carousel navigation"
        >
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all touch-manipulation ${
                index === currentSlide ? "bg-white w-8" : "bg-white/50 w-2"
              }`}
              role="tab"
              aria-label={`Go to slide ${index + 1}`}
              aria-selected={index === currentSlide}
            />
          ))}
        </div>
      </section>

      {/* Stats Banner */}
      <section
        className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-8 sm:py-12"
        aria-label="Platform statistics"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
            <div>
              <div
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2"
                aria-label="1000 plus properties"
              >
                1000+
              </div>
              <div className="text-xs sm:text-sm opacity-90">Properties</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2" aria-label="50 plus cities">
                50+
              </div>
              <div className="text-xs sm:text-sm opacity-90">Cities</div>
            </div>
            <div>
              <div
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2"
                aria-label="10 thousand plus happy guests"
              >
                10k+
              </div>
              <div className="text-xs sm:text-sm opacity-90">Happy Guests</div>
            </div>
            <div>
              <div
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2"
                aria-label="4.8 star average rating"
              >
                4.8★
              </div>
              <div className="text-xs sm:text-sm opacity-90">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-8 sm:py-12 lg:py-16" aria-labelledby="featured-properties-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 sm:mb-8">
            <div>
              <h2 id="featured-properties-heading" className="text-2xl sm:text-3xl font-bold mb-2">
                Featured Properties
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base">Handpicked properties just for you</p>
            </div>
            <Link href="/explore">
              <Button variant="outline" className="w-full sm:w-auto bg-transparent">
                View All
              </Button>
            </Link>
          </div>
          <ApartmentList />
        </div>
      </section>

      {/* Why Choose Roomy */}
      <section className="py-8 sm:py-12 lg:py-16 bg-muted/50" aria-labelledby="why-choose-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 id="why-choose-heading" className="text-2xl sm:text-3xl font-bold mb-4">
              Why Choose Roomy?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-4">
              We make finding and booking your perfect stay simple, secure, and enjoyable
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <Card>
              <CardContent className="pt-6">
                <div
                  className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-4"
                  aria-hidden="true"
                >
                  <Home className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Verified Properties</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  All our properties are personally verified to ensure quality and accuracy
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div
                  className="w-12 h-12 rounded-full bg-pink-100 dark:bg-pink-900 flex items-center justify-center mb-4"
                  aria-hidden="true"
                >
                  <Shield className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Secure Booking</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Your payments and personal information are always protected and secure
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div
                  className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mb-4"
                  aria-hidden="true"
                >
                  <Users className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">24/7 Support</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Our team is always ready to help you with any questions or concerns
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-8 sm:py-12 lg:py-16" aria-labelledby="testimonials-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 id="testimonials-heading" className="text-2xl sm:text-3xl font-bold mb-4">
              What Our Guests Say
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">Real experiences from real travelers</p>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white"
        aria-labelledby="cta-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="cta-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-balance">
            Ready to Explore?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90 text-pretty">
            Discover amazing properties across Uganda
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md mx-auto">
            <Link href="/explore" className="w-full sm:w-auto">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                <MapPin className="w-4 h-4 mr-2" aria-hidden="true" />
                Browse Properties
              </Button>
            </Link>
            <Link href="/gallery" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border-white text-white"
              >
                <Sparkles className="w-4 h-4 mr-2" aria-hidden="true" />
                Interactive Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <ChatBox />
    </div>
  )
}
