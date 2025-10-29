"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Clock, Users, Star, Bed, Bath, Percent, TrendingDown, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n/context"

interface Deal {
  id: number
  title: string
  location: string
  originalPrice: number
  discountedPrice: number
  discount: number
  beds: number
  baths: number
  guests: number
  rating: number
  reviews: number
  image: string
  expiresIn: number
  category: string
  amenities: string[]
}

const deals: Deal[] = [
  {
    id: 1,
    title: "Luxury Kampala Penthouse",
    location: "Kololo, Kampala",
    originalPrice: 500000,
    discountedPrice: 350000,
    discount: 30,
    beds: 3,
    baths: 2,
    guests: 6,
    rating: 4.9,
    reviews: 128,
    image: "/images/kampala-apartment.png",
    expiresIn: 86400000,
    category: "Apartment",
    amenities: ["WiFi", "Pool", "Gym", "Parking"],
  },
  {
    id: 2,
    title: "Entebbe Lake View Villa",
    location: "Entebbe",
    originalPrice: 600000,
    discountedPrice: 420000,
    discount: 30,
    beds: 4,
    baths: 3,
    guests: 8,
    rating: 5.0,
    reviews: 94,
    image: "/images/entebbe-studio.png",
    expiresIn: 43200000,
    category: "Villa",
    amenities: ["Beach Access", "BBQ", "Garden"],
  },
  {
    id: 3,
    title: "Jinja Adventure House",
    location: "Jinja",
    originalPrice: 450000,
    discountedPrice: 315000,
    discount: 30,
    beds: 3,
    baths: 2,
    guests: 6,
    rating: 4.8,
    reviews: 156,
    image: "/images/jinja-family-home.png",
    expiresIn: 172800000,
    category: "House",
    amenities: ["River View", "Kayaks", "Firepit"],
  },
  {
    id: 4,
    title: "Fort Portal Mountain Cottage",
    location: "Fort Portal",
    originalPrice: 300000,
    discountedPrice: 210000,
    discount: 30,
    beds: 2,
    baths: 1,
    guests: 4,
    rating: 4.7,
    reviews: 87,
    image: "/images/fort-portal-cottage.png",
    expiresIn: 129600000,
    category: "Cottage",
    amenities: ["Mountain View", "Hiking", "Fireplace"],
  },
  {
    id: 5,
    title: "Mukono Garden Estate",
    location: "Mukono",
    originalPrice: 400000,
    discountedPrice: 280000,
    discount: 30,
    beds: 3,
    baths: 2,
    guests: 6,
    rating: 4.9,
    reviews: 112,
    image: "/images/mukono-villa.png",
    expiresIn: 64800000,
    category: "Villa",
    amenities: ["Pool", "Garden", "Security"],
  },
  {
    id: 6,
    title: "Kampala City Studio",
    location: "Nakasero, Kampala",
    originalPrice: 200000,
    discountedPrice: 140000,
    discount: 30,
    beds: 1,
    baths: 1,
    guests: 2,
    rating: 4.6,
    reviews: 73,
    image: "/images/entebbe-studio.png",
    expiresIn: 21600000,
    category: "Studio",
    amenities: ["WiFi", "AC", "Kitchen"],
  },
  {
    id: 7,
    title: "Safari Lodge Retreat",
    location: "Murchison Falls",
    originalPrice: 800000,
    discountedPrice: 560000,
    discount: 30,
    beds: 2,
    baths: 2,
    guests: 4,
    rating: 5.0,
    reviews: 203,
    image: "/images/safari-sunset.png",
    expiresIn: 259200000,
    category: "Lodge",
    amenities: ["Game Drives", "Restaurant", "Spa"],
  },
  {
    id: 8,
    title: "Queen Elizabeth Park Cabin",
    location: "Kasese",
    originalPrice: 350000,
    discountedPrice: 245000,
    discount: 30,
    beds: 2,
    baths: 1,
    guests: 4,
    rating: 4.8,
    reviews: 145,
    image: "/images/fort-portal-cottage.png",
    expiresIn: 194400000,
    category: "Cabin",
    amenities: ["Wildlife View", "Guided Tours"],
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
    <div className="flex items-center gap-2 text-sm font-semibold text-orange-600">
      <Clock className="h-4 w-4" />
      <span>
        {hours}h {minutes}m {seconds}s
      </span>
    </div>
  )
}

export default function LastMinuteDealsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("discount")
  const { t } = useLanguage()

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
        <section className="relative bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 text-white py-16 sm:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <Badge className="mb-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm border-0">
                <Zap className="h-4 w-4 mr-1" />
                Limited Time Offers
              </Badge>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">{t("deals.title")}</h1>
              <p className="text-lg sm:text-xl mb-8 text-white/90">{t("deals.subtitle")}</p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <TrendingDown className="h-5 w-5" />
                  <span className="font-semibold">Save up to 30%</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Clock className="h-5 w-5" />
                  <span className="font-semibold">{deals.length} Active Deals</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="border-b bg-background sticky top-16 z-40 shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-[200px]">
                  <SelectValue placeholder="Property Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Properties</SelectItem>
                  <SelectItem value="Apartment">Apartments</SelectItem>
                  <SelectItem value="Villa">Villas</SelectItem>
                  <SelectItem value="House">Houses</SelectItem>
                  <SelectItem value="Cottage">Cottages</SelectItem>
                  <SelectItem value="Studio">Studios</SelectItem>
                  <SelectItem value="Lodge">Lodges</SelectItem>
                  <SelectItem value="Cabin">Cabins</SelectItem>
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
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredDeals.map((deal) => (
                <Card key={deal.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={deal.image || "/placeholder.svg"}
                      alt={deal.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-orange-500 hover:bg-orange-600 text-white font-bold">
                      <Percent className="h-3 w-3 mr-1" />
                      {deal.discount}% OFF
                    </Badge>
                    <Badge variant="secondary" className="absolute top-4 right-4">
                      {deal.category}
                    </Badge>
                    <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2">
                      <CountdownTimer expiresIn={deal.expiresIn} />
                    </div>
                  </div>

                  <CardHeader className="pb-3">
                    <CardTitle className="line-clamp-1 text-lg">{deal.title}</CardTitle>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {deal.location}
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-3 pb-3">
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Bed className="h-4 w-4 text-muted-foreground" />
                        <span>{deal.beds}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Bath className="h-4 w-4 text-muted-foreground" />
                        <span>{deal.baths}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>{deal.guests}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold text-sm">{deal.rating}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">({deal.reviews} reviews)</span>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {deal.amenities.slice(0, 2).map((amenity) => (
                        <Badge key={amenity} variant="outline" className="text-xs">
                          {amenity}
                        </Badge>
                      ))}
                      {deal.amenities.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{deal.amenities.length - 2}
                        </Badge>
                      )}
                    </div>
                  </CardContent>

                  <CardFooter className="flex flex-col items-start gap-3 pt-0">
                    <div className="w-full">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm text-muted-foreground line-through">
                          UGX {deal.originalPrice.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-orange-600">
                          UGX {deal.discountedPrice.toLocaleString()}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">{t("deals.pernight")}</p>
                    </div>
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                    >
                      <Link href={`/apartments/${deal.id}`}>
                        <Zap className="h-4 w-4 mr-2" />
                        Book Now & Save
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Book Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Book Last Minute Deals?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Take advantage of incredible savings on quality accommodations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingDown className="h-8 w-8 text-orange-500" />
                  </div>
                  <CardTitle>Save Up to 30%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Get amazing discounts on verified properties when you book at the last minute
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-orange-500" />
                  </div>
                  <CardTitle>Instant Booking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Book immediately without waiting for host approval. Perfect for spontaneous trips
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-orange-500" />
                  </div>
                  <CardTitle>Quality Guaranteed</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    All properties are verified and highly rated by previous guests
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
