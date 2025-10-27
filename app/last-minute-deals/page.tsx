"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Clock, MapPin, Star, Users, Zap } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useLanguage } from "@/lib/i18n/context"

interface Deal {
  id: string
  title: string
  location: string
  originalPrice: number
  discountedPrice: number
  discount: number
  rating: number
  reviews: number
  imageUrl: string
  guests: number
  expiresAt: Date
}

export default function LastMinuteDealsPage() {
  const { t } = useLanguage()
  const [deals, setDeals] = useState<Deal[]>([])
  const [filteredDeals, setFilteredDeals] = useState<Deal[]>([])
  const [locationFilter, setLocationFilter] = useState<string>("all")
  const [sortBy, setSortBy] = useState<string>("discount")

  useEffect(() => {
    // Sample deals data
    const sampleDeals: Deal[] = [
      {
        id: "1",
        title: "Luxury Apartment in Kololo",
        location: "Kampala",
        originalPrice: 250000,
        discountedPrice: 150000,
        discount: 40,
        rating: 4.8,
        reviews: 124,
        imageUrl: "/images/kampala-apartment.png",
        guests: 4,
        expiresAt: new Date(Date.now() + 2 * 60 * 60 * 1000), // 2 hours
      },
      {
        id: "2",
        title: "Beachfront Studio",
        location: "Entebbe",
        originalPrice: 180000,
        discountedPrice: 99000,
        discount: 45,
        rating: 4.9,
        reviews: 89,
        imageUrl: "/images/entebbe-studio.png",
        guests: 2,
        expiresAt: new Date(Date.now() + 5 * 60 * 60 * 1000), // 5 hours
      },
      {
        id: "3",
        title: "Riverside Family Home",
        location: "Jinja",
        originalPrice: 350000,
        discountedPrice: 210000,
        discount: 40,
        rating: 4.7,
        reviews: 156,
        imageUrl: "/images/jinja-family-home.png",
        guests: 6,
        expiresAt: new Date(Date.now() + 8 * 60 * 60 * 1000), // 8 hours
      },
      {
        id: "4",
        title: "Modern Villa with Pool",
        location: "Mukono",
        originalPrice: 400000,
        discountedPrice: 200000,
        discount: 50,
        rating: 4.9,
        reviews: 203,
        imageUrl: "/images/mukono-villa.png",
        guests: 8,
        expiresAt: new Date(Date.now() + 12 * 60 * 60 * 1000), // 12 hours
      },
      {
        id: "5",
        title: "Cozy Mountain Cottage",
        location: "Fort Portal",
        originalPrice: 150000,
        discountedPrice: 90000,
        discount: 40,
        rating: 4.6,
        reviews: 78,
        imageUrl: "/images/fort-portal-cottage.png",
        guests: 3,
        expiresAt: new Date(Date.now() + 6 * 60 * 60 * 1000), // 6 hours
      },
      {
        id: "6",
        title: "Safari Lodge Suite",
        location: "Murchison Falls",
        originalPrice: 500000,
        discountedPrice: 275000,
        discount: 45,
        rating: 5.0,
        reviews: 312,
        imageUrl: "/images/safari-sunset.png",
        guests: 4,
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
      },
    ]

    setDeals(sampleDeals)
    setFilteredDeals(sampleDeals)
  }, [])

  useEffect(() => {
    let filtered = [...deals]

    // Filter by location
    if (locationFilter !== "all") {
      filtered = filtered.filter((deal) => deal.location === locationFilter)
    }

    // Sort
    switch (sortBy) {
      case "discount":
        filtered.sort((a, b) => b.discount - a.discount)
        break
      case "price":
        filtered.sort((a, b) => a.discountedPrice - b.discountedPrice)
        break
      case "expiring":
        filtered.sort((a, b) => a.expiresAt.getTime() - b.expiresAt.getTime())
        break
    }

    setFilteredDeals(filtered)
  }, [locationFilter, sortBy, deals])

  const locations = ["all", ...Array.from(new Set(deals.map((deal) => deal.location)))]

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        {/* Hero Section */}
        <section className="relative py-12 sm:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <Badge className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 text-sm sm:text-base">
                <Zap className="w-4 h-4 mr-2 inline" />
                {t("lastMinuteDeals")}
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Save Up to 50%
                </span>{" "}
                <br className="hidden sm:block" />
                on Amazing Stays
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">{t("lastMinuteDealsDesc")}</p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-t border-b bg-background/50 backdrop-blur-sm sticky top-16 z-40">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-4 flex-1">
                <Select value={locationFilter} onValueChange={setLocationFilter}>
                  <SelectTrigger className="w-full sm:w-[200px]">
                    <SelectValue placeholder={t("filterByLocation")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{t("allLocations")}</SelectItem>
                    {locations.slice(1).map((location) => (
                      <SelectItem key={location} value={location}>
                        {location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-full sm:w-[200px]">
                    <SelectValue placeholder={t("sortBy")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="discount">{t("highestDiscount")}</SelectItem>
                    <SelectItem value="price">{t("lowestPrice")}</SelectItem>
                    <SelectItem value="expiring">{t("expiringFirst")}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="text-sm text-muted-foreground text-center sm:text-right">
                {filteredDeals.length} {filteredDeals.length === 1 ? "deal" : "deals"} available
              </div>
            </div>
          </div>
        </section>

        {/* Deals Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDeals.map((deal) => (
                <DealCard key={deal.id} deal={deal} />
              ))}
            </div>

            {filteredDeals.length === 0 && (
              <div className="text-center py-20">
                <p className="text-xl text-muted-foreground">No deals found with the selected filters</p>
                <Button
                  variant="outline"
                  className="mt-4 bg-transparent"
                  onClick={() => {
                    setLocationFilter("all")
                    setSortBy("discount")
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

function DealCard({ deal }: { deal: Deal }) {
  const { t } = useLanguage()
  const [timeLeft, setTimeLeft] = useState<string>("")

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date().getTime()
      const distance = deal.expiresAt.getTime() - now

      if (distance < 0) {
        setTimeLeft("Expired")
        return
      }

      const hours = Math.floor(distance / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setTimeLeft(`${hours}h ${minutes}m ${seconds}s`)
    }

    updateTimer()
    const interval = setInterval(updateTimer, 1000)

    return () => clearInterval(interval)
  }, [deal.expiresAt])

  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
      <div className="relative overflow-hidden">
        <Image
          src={deal.imageUrl || "/placeholder.svg"}
          alt={deal.title}
          width={400}
          height={300}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <Badge className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white text-lg font-bold px-3 py-1">
          -{deal.discount}%
        </Badge>
        <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg p-3 text-white">
          <div className="flex items-center gap-2 text-sm">
            <Clock className="w-4 h-4" />
            <span className="font-semibold">{t("expiresIn")}:</span>
            <span className="text-yellow-300 font-mono">{timeLeft}</span>
          </div>
        </div>
      </div>

      <CardContent className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold line-clamp-1 group-hover:text-primary transition-colors">
            {deal.title}
          </h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>{deal.location}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold">{deal.rating}</span>
            <span className="text-sm text-muted-foreground">({deal.reviews})</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="w-4 h-4" />
            <span>{deal.guests} guests</span>
          </div>
        </div>

        <div className="flex items-baseline gap-2 pt-2 border-t">
          <span className="text-3xl font-bold text-primary">UGX {deal.discountedPrice.toLocaleString()}</span>
          <span className="text-lg text-muted-foreground line-through">UGX {deal.originalPrice.toLocaleString()}</span>
        </div>

        <p className="text-sm text-muted-foreground">{t("perNight")}</p>

        <Button asChild className="w-full group-hover:bg-primary group-hover:shadow-lg transition-all">
          <Link href={`/apartments/${deal.id}`}>
            <Zap className="w-4 h-4 mr-2" />
            {t("bookNow")} - {t("save")} UGX {(deal.originalPrice - deal.discountedPrice).toLocaleString()}
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
