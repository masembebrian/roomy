"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SearchBar } from "@/components/search-bar"
import { ApartmentList } from "@/components/apartment-list"
import { Testimonials } from "@/components/testimonials"
import { Home, MapPin, Shield, Clock, Sparkles, ArrowRight, Users, Award, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Shield,
    title: "Verified Listings",
    description: "All properties are verified for your safety and peace of mind",
  },
  {
    icon: MapPin,
    title: "Prime Locations",
    description: "Discover apartments in the best neighborhoods across Uganda",
  },
  {
    icon: Clock,
    title: "Instant Booking",
    description: "Book your perfect place in minutes with our streamlined process",
  },
  {
    icon: Sparkles,
    title: "Premium Experience",
    description: "Enjoy top-tier amenities and exceptional hospitality",
  },
]

const stats = [
  { icon: Home, value: "10,000+", label: "Properties" },
  { icon: Users, value: "50,000+", label: "Happy Guests" },
  { icon: MapPin, value: "100+", label: "Cities" },
  { icon: Award, value: "4.9", label: "Average Rating" },
]

const popularDestinations = [
  {
    name: "Kampala",
    properties: "2,500+ properties",
    image: "/images/kampala-apartment.png",
    tag: "Most Popular",
  },
  {
    name: "Entebbe",
    properties: "800+ properties",
    image: "/images/entebbe-studio.png",
    tag: "Beach & Airport",
  },
  {
    name: "Jinja",
    properties: "500+ properties",
    image: "/images/jinja-family-home.png",
    tag: "Adventure Hub",
  },
  {
    name: "Mbarara",
    properties: "300+ properties",
    image: "/images/mukono-villa.png",
    tag: "Western Pearl",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function HomePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg border border-purple-100 dark:border-purple-900"
            >
              <Sparkles className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                Uganda's #1 Accommodation Platform
              </span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block text-gray-900 dark:text-white mb-2">Find Your Perfect</span>
              <span className="block text-gradient">Home Away From Home</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover unique apartments, hotels, and experiences across Uganda. Book with confidence and create
              unforgettable memories.
            </p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                asChild
              >
                <Link href="/explore">
                  Start Exploring
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-xl border-2 hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-300 bg-transparent"
                asChild
              >
                <Link href="/list-property">
                  List Your Property
                  <Home className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>

            {/* Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 pt-8 sm:pt-12"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg"
                >
                  <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600 mb-2" />
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </section>

      {/* Search Section */}
      <section className="py-12 sm:py-16 -mt-20 relative z-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <Card className="shadow-2xl border-0 overflow-hidden">
              <CardContent className="p-6 sm:p-8 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                <SearchBar />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Popular Destinations
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore the most loved cities and discover amazing places to stay
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {popularDestinations.map((destination, index) => (
              <motion.div key={index} variants={item}>
                <Link href={`/explore?location=${destination.name}`}>
                  <Card className="group overflow-hidden hover-lift border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="relative h-64 sm:h-72 overflow-hidden">
                      <Image
                        src={destination.image || "/placeholder.svg"}
                        alt={destination.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                      {/* Tag */}
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-gray-900 backdrop-blur-sm">
                          {destination.tag}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-2xl font-bold text-white mb-2">{destination.name}</h3>
                        <p className="text-white/90 text-sm flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {destination.properties}
                        </p>
                      </div>

                      {/* Hover Arrow */}
                      <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="p-2 rounded-full bg-white text-gray-900">
                          <ChevronRight className="h-5 w-5" />
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24">
        <div className="container px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Roomy?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We make finding and booking your perfect accommodation simple, safe, and enjoyable
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={item}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 sm:p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 mb-6">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Properties
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Hand-picked properties that offer exceptional experiences
            </p>
          </motion.div>

          <ApartmentList limit={8} featured />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 py-6 rounded-xl border-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 bg-transparent"
              asChild
            >
              <Link href="/explore">
                View All Properties
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24">
        <div className="container px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Guests Say
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our happy guests
            </p>
          </motion.div>

          <Testimonials />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600">
        <div className="container px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl sm:text-2xl mb-8 text-white/90">
              Join thousands of happy guests and find your perfect stay today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto text-base sm:text-lg px-8 py-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                asChild
              >
                <Link href="/auth/signup">
                  Sign Up Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-base sm:text-lg px-8 py-6 rounded-xl border-2 border-white text-white hover:bg-white hover:text-purple-600 transition-all duration-300 bg-transparent"
                asChild
              >
                <Link href="/explore">Browse Properties</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
