"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Clock, Users, Star, CalendarIcon, Percent } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const deals = [
  {
    id: 1,
    title: "Luxury Lake View Villa",
    location: "Entebbe, Uganda",
    originalPrice: 500000,
    discountedPrice: 350000,
    discount: 30,
    beds: 3,
    baths: 2,
    guests: 6,
    rating: 4.9,
    reviews: 128,
    image: "/images/entebbe-studio.png",
    expiresIn: 86400000, // 24 hours in milliseconds
    category: "Villa",
  },
  {
    id: 2,
    title: "Modern City Apartment",
    location: "Kampala, Uganda",
    originalPrice: 300000,
    discountedPrice: 225000,
    discount: 25,
    beds: 2,
    baths: 1,
    guests: 4,
    rating: 4.7,
    reviews: 94,
    image: "/images/kampala-apartment.png",
    expiresIn: 43200000, // 12 hours
    category: "Apartment",
  },
  {
    id: 3,
    title: "Riverside Family Home",
    location: "Jinja, Uganda",
    originalPrice: 450000,
    discountedPrice: 315000,
    discount: 30,
    beds: 4,
    baths: 3,
    guests: 8,
    rating: 5.0,
    reviews: 156,
    image: "/images/jinja-family-home.png",
    expiresIn: 172800000, // 48 hours
    category: "House",
  },
  {
    id: 4,
    title: "Hillside Cottage Retreat",
    location: "Fort Portal, Uganda",
    originalPrice: 350000,
    discountedPrice: 245000,
    discount: 30,
    beds: 2,
    baths: 1,
    guests: 4,
    rating: 4.8,
    reviews: 87,
    image: "/images/fort-portal-cottage.png",
    expiresIn: 129600000, // 36 hours
    category: "Cottage",
  },
  {
    id: 5,
    title: "Garden Villa Paradise",
    location: "Mukono, Uganda",
    originalPrice: 400000,
    discountedPrice: 280000,
    discount: 30,
    beds: 3,
    baths: 2,
    guests: 6,
    rating: 4.9,
    reviews: 112,
    image: "/images/mukono-villa.png",
    expiresIn: 64800000, // 18 hours
    category: "Villa",
  },
  {
    id: 6,
    title: "Cozy Studio Downtown",
    location: "Kampala, Uganda",
    originalPrice: 200000,
    discountedPrice: 140000,
    discount: 30,
    beds: 1,
    baths: 1,
    guests: 2,
    rating: 4.6,
    reviews: 73,
    image: "/images/entebbe-studio.png",
    expiresIn: 21600000, // 6 hours
    category: "Studio",
  },
]

function CountdownTimer({ expiresIn }: { expiresIn: number }) {
  const [timeLeft, setTimeLeft] = useState(expiresIn)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => Math.max(0, prev - 1000))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const hours = Math.floor(timeLeft / 3600000)
  const minutes = Math.floor((timeLeft % 3600000) / 60000)
  const seconds = Math.floor((timeLeft % 60000) / 1000)

  return (
    <div className="flex items-center gap-2 text-sm font-medium">
      <Clock className="h-4 w-4 text-orange-500" />
      <span className="text-orange-500">
        {hours}h {minutes}m {seconds}s left
      </span>
    </div>
  )
}

export default function LastMinuteDealsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("discount")

  let filteredDeals = deals.filter((deal) => {
    return selectedCategory === "all" || deal.category === selectedCategory
  })

  if (sortBy === "discount") {
    filteredDeals = filteredDeals.sort((a, b) => b.discount - a.discount)
  } else if (sortBy === "price") {
    filteredDeals = filteredDeals.sort((a, b) => a.discountedPrice - b.discountedPrice)
  } else if (sortBy === "expiring") {
    filteredDeals = filteredDeals.sort((a, b) => a.expiresIn - b.expiresIn)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <Badge className="mb-4 bg-white text-orange-600 hover:bg-white/90">
                <Percent className="h-4 w-4 mr-1" />
                Limited Time Offers
              </Badge>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Last Minute Deals</h1>
              <p className="text-lg sm:text-xl mb-8 text-white/90">
                Book now and save up to 30% on amazing stays across Uganda. These deals won't last long!
              </p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="border-b bg-background sticky top-16 z-40">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-[200px]">
                  <SelectValue placeholder="Property Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Properties</SelectItem>
                  <SelectItem value="Villa">Villas</SelectItem>
                  <SelectItem value="Apartment">Apartments</SelectItem>
                  <SelectItem value="House">Houses</SelectItem>
                  <SelectItem value="Cottage">Cottages</SelectItem>
                  <SelectItem value="Studio">Studios</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full sm:w-[200px]">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="discount">Highest Discount</SelectItem>
                  <SelectItem value="price">Lowest Price</SelectItem>
                  <SelectItem value="expiring">Expiring Soon</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Deals Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDeals.map((deal) => (
                <Card key={deal.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48 w-full">
                    <Image src={deal.image || "/placeholder.svg"} alt={deal.title} fill className="object-cover" />
                    <Badge className="absolute top-4 left-4 bg-orange-500 hover:bg-orange-600">
                      <Percent className="h-3 w-3 mr-1" />
                      {deal.discount}% OFF
                    </Badge>
                    <Badge variant="secondary" className="absolute top-4 right-4">
                      {deal.category}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="line-clamp-1">{deal.title}</CardTitle>
                    <CardDescription className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {deal.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <CalendarIcon className="h-4 w-4" />
                        {deal.beds} beds
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {deal.guests} guests
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{deal.rating}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">({deal.reviews} reviews)</span>
                    </div>
                    <CountdownTimer expiresIn={deal.expiresIn} />
                  </CardContent>
                  <CardFooter className="flex flex-col items-start gap-3">
                    <div className="w-full">
                      <div className="flex items-center gap-2">
                        <p className="text-2xl font-bold">UGX {deal.discountedPrice.toLocaleString()}</p>
                        <p className="text-sm text-muted-foreground line-through">
                          UGX {deal.originalPrice.toLocaleString()}
                        </p>
                      </div>
                      <p className="text-sm text-muted-foreground">per night</p>
                    </div>
                    <Button asChild className="w-full bg-orange-500 hover:bg-orange-600">
                      <Link href={`/apartments/${deal.id}`}>Book Now & Save</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
