"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { SearchBar } from "@/components/search-bar"
import { ApartmentList } from "@/components/apartment-list"
import Map from "@/components/map"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapIcon, List, TrendingUp } from "lucide-react"
import Footer from "@/components/footer"
import { PropertyFilters, type FilterOptions } from "@/components/property-filters"

const trendingSearches = [
  "Kampala city center",
  "Entebbe airport area",
  "Jinja riverside",
  "Lake Victoria view",
  "Business district",
  "University area",
]

export const dynamic = "force-dynamic"
export const revalidate = false

export default function ExplorePage() {
  const [viewMode, setViewMode] = useState<"list" | "map">("list")
  const [sortBy, setSortBy] = useState("recommended")

  const [filters, setFilters] = useState<FilterOptions>({
    priceRange: [0, 500000],
    bedrooms: [],
    bathrooms: [],
    propertyTypes: [],
    amenities: [],
    instantBook: false,
    superhost: false,
  })

  const clearFilters = () => {
    setFilters({
      priceRange: [0, 500000],
      bedrooms: [],
      bathrooms: [],
      propertyTypes: [],
      amenities: [],
      instantBook: false,
      superhost: false,
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-balance">
              Explore Amazing Places in Uganda
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Discover unique accommodations across Uganda's most beautiful destinations
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <SearchBar />
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-6 sm:py-8">
        {/* Trending Searches */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center mb-3 sm:mb-4">
            <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            <h2 className="text-lg sm:text-xl font-semibold">Trending Searches</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {trendingSearches.map((search) => (
              <Badge
                key={search}
                variant="secondary"
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground text-xs sm:text-sm touch-manipulation"
              >
                {search}
              </Badge>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-bold">Properties Available</h2>
            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
              <PropertyFilters filters={filters} onFiltersChange={setFilters} onClearFilters={clearFilters} />

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recommended">Recommended</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="touch-manipulation"
                >
                  <List className="w-4 h-4 sm:mr-2" />
                  <span className="hidden sm:inline">List</span>
                </Button>
                <Button
                  variant={viewMode === "map" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("map")}
                  className="touch-manipulation"
                >
                  <MapIcon className="w-4 h-4 sm:mr-2" />
                  <span className="hidden sm:inline">Map</span>
                </Button>
              </div>
            </div>
          </div>

          {viewMode === "list" ? (
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6 sm:gap-8">
              <ApartmentList />
              <div className="hidden lg:block sticky top-8 h-[calc(100vh-6rem)]">
                <Map />
              </div>
            </div>
          ) : (
            <div className="h-[400px] sm:h-[600px] rounded-lg overflow-hidden">
              <Map />
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
