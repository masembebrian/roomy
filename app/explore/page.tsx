"use client"

import { useState, Suspense } from "react"
import Header from "@/components/header"
import SearchBar from "@/components/search-bar"
import ApartmentList from "@/components/apartment-list"
import Map from "@/components/map"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapIcon, List, Filter, TrendingUp } from "lucide-react"
import Image from "next/image"
import Footer from "@/components/footer"

const popularDestinations = [
  {
    name: "Kampala",
    properties: 150,
    image: "/placeholder.svg?height=200&width=300",
    description: "Uganda's vibrant capital city",
  },
  {
    name: "Entebbe",
    properties: 85,
    image: "/placeholder.svg?height=200&width=300",
    description: "Gateway to Uganda, near the airport",
  },
  {
    name: "Jinja",
    properties: 67,
    image: "/placeholder.svg?height=200&width=300",
    description: "Adventure capital of East Africa",
  },
  {
    name: "Mbarara",
    properties: 45,
    image: "/placeholder.svg?height=200&width=300",
    description: "Heart of Uganda's cattle corridor",
  },
  {
    name: "Fort Portal",
    properties: 38,
    image: "/placeholder.svg?height=200&width=300",
    description: "Gateway to the mountains",
  },
  {
    name: "Gulu",
    properties: 29,
    image: "/placeholder.svg?height=200&width=300",
    description: "Northern Uganda's largest city",
  },
]

const propertyTypes = [
  { name: "Apartments", count: 245, icon: "🏢" },
  { name: "Houses", count: 189, icon: "🏠" },
  { name: "Villas", count: 67, icon: "🏖️" },
  { name: "Studios", count: 123, icon: "🏠" },
  { name: "Cottages", count: 45, icon: "🏡" },
  { name: "Penthouses", count: 23, icon: "🏙️" },
]

const trendingSearches = [
  "Kampala city center",
  "Entebbe airport area",
  "Jinja riverside",
  "Lake Victoria view",
  "Business district",
  "University area",
]

export default function ExplorePage() {
  const [viewMode, setViewMode] = useState<"list" | "map">("list")
  const [showFilters, setShowFilters] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Amazing Places in Uganda</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover unique accommodations across Uganda's most beautiful destinations
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <SearchBar />
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8">
        {/* Quick Filters */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Popular Destinations</h2>
            <Button variant="outline" onClick={() => setShowFilters(!showFilters)}>
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {popularDestinations.map((destination) => (
              <Card key={destination.name} className="cursor-pointer hover:shadow-md transition-shadow">
                <div className="relative">
                  <Image
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    width={200}
                    height={120}
                    className="w-full h-24 object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-3">
                  <h3 className="font-semibold text-sm">{destination.name}</h3>
                  <p className="text-xs text-muted-foreground">{destination.properties} properties</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Property Types */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Browse by Property Type</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {propertyTypes.map((type) => (
              <Card key={type.name} className="cursor-pointer hover:shadow-md transition-shadow text-center">
                <CardContent className="p-4">
                  <div className="text-2xl mb-2">{type.icon}</div>
                  <h3 className="font-semibold text-sm">{type.name}</h3>
                  <p className="text-xs text-muted-foreground">{type.count} available</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trending Searches */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <TrendingUp className="w-5 h-5 mr-2" />
            <h2 className="text-xl font-semibold">Trending Searches</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {trendingSearches.map((search) => (
              <Badge
                key={search}
                variant="secondary"
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
              >
                {search}
              </Badge>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">All Properties</h2>
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="w-4 h-4 mr-2" />
                List
              </Button>
              <Button variant={viewMode === "map" ? "default" : "outline"} size="sm" onClick={() => setViewMode("map")}>
                <MapIcon className="w-4 h-4 mr-2" />
                Map
              </Button>
            </div>
          </div>

          {viewMode === "list" ? (
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8">
              <Suspense fallback={<div>Loading properties...</div>}>
                <ApartmentList />
              </Suspense>
              <div className="hidden lg:block sticky top-8 h-[calc(100vh-6rem)]">
                <Suspense fallback={<div>Loading map...</div>}>
                  <Map />
                </Suspense>
              </div>
            </div>
          ) : (
            <div className="h-[600px] rounded-lg overflow-hidden">
              <Suspense fallback={<div>Loading map...</div>}>
                <Map />
              </Suspense>
            </div>
          )}
        </div>

        {/* Featured Collections */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Featured Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Luxury+Stays"
                  alt="Luxury Stays"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-xl font-bold">Luxury Stays</h3>
                    <p className="text-sm opacity-90">Premium properties with top amenities</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Budget+Friendly"
                  alt="Budget Friendly"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-xl font-bold">Budget Friendly</h3>
                    <p className="text-sm opacity-90">Great value accommodations</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Business+Travel"
                  alt="Business Travel"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-xl font-bold">Business Travel</h3>
                    <p className="text-sm opacity-90">Perfect for work trips and meetings</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
