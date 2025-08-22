"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, Heart, MapPin, Users, Bed, Bath, Wifi, Car, Waves, Dumbbell } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const apartments = [
  {
    id: 1,
    title: "Modern Apartment in Kampala",
    price: 50,
    images: ["/images/kampala-apartment.png", "/images/kampala-apartment.png"],
    location: "Kampala Central",
    bedrooms: 2,
    bathrooms: 1,
    guests: 4,
    rating: 4.5,
    reviews: 32,
    host: "Sarah M.",
    hostImage: "/images/host-sarah.png",
    superhost: true,
    instantBook: true,
    amenities: ["Wi-Fi", "Air Conditioning", "Kitchen", "Parking"],
    description: "Beautiful modern apartment in the heart of Kampala with stunning city views.",
  },
  {
    id: 2,
    title: "Cozy Studio in Entebbe",
    price: 35,
    images: ["/images/entebbe-studio.png"],
    location: "Entebbe",
    bedrooms: 1,
    bathrooms: 1,
    guests: 2,
    rating: 4.2,
    reviews: 18,
    host: "John D.",
    hostImage: "/images/host-john.png",
    superhost: false,
    instantBook: false,
    amenities: ["Wi-Fi", "Kitchen", "TV"],
    description: "Cozy studio apartment perfect for couples, close to the airport.",
  },
  {
    id: 3,
    title: "Spacious Family Home in Jinja",
    price: 75,
    images: ["/images/jinja-family-home.png"],
    location: "Jinja",
    bedrooms: 3,
    bathrooms: 2,
    guests: 6,
    rating: 4.8,
    reviews: 45,
    host: "Emily L.",
    hostImage: "/images/host-emily.png",
    superhost: true,
    instantBook: true,
    amenities: ["Wi-Fi", "Pool", "Kitchen", "Parking", "Garden"],
    description: "Spacious family home with pool and garden, perfect for groups.",
  },
  {
    id: 4,
    title: "Lakeside Villa in Mukono",
    price: 120,
    images: ["/images/mukono-villa.png"],
    location: "Mukono",
    bedrooms: 4,
    bathrooms: 3,
    guests: 8,
    rating: 4.9,
    reviews: 27,
    host: "David K.",
    hostImage: "/images/host-david.png",
    superhost: true,
    instantBook: false,
    amenities: ["Wi-Fi", "Pool", "Kitchen", "Parking", "Lake Access"],
    description: "Luxury lakeside villa with private beach access and stunning views.",
  },
  {
    id: 5,
    title: "Mountain View Cottage in Fort Portal",
    price: 65,
    images: ["/images/fort-portal-cottage.png"],
    location: "Fort Portal",
    bedrooms: 2,
    bathrooms: 1,
    guests: 4,
    rating: 4.6,
    reviews: 38,
    host: "Grace N.",
    hostImage: "/images/host-grace.png",
    superhost: false,
    instantBook: true,
    amenities: ["Wi-Fi", "Kitchen", "Fireplace", "Hiking Trails"],
    description: "Charming cottage with mountain views and access to hiking trails.",
  },
]

const amenityIcons = {
  "Wi-Fi": Wifi,
  Parking: Car,
  Pool: Waves,
  Gym: Dumbbell,
}

export default function ApartmentList() {
  const [sortBy, setSortBy] = useState("recommended")
  const [favorites, setFavorites] = useState<number[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 3

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]))
  }

  const sortedApartments = [...apartments].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      case "reviews":
        return b.reviews - a.reviews
      default:
        return 0
    }
  })

  const paginatedApartments = sortedApartments.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const totalPages = Math.ceil(apartments.length / itemsPerPage)

  return (
    <div className="space-y-6">
      {/* Sort Controls */}
      <div className="flex justify-between items-center">
        <p className="text-sm text-muted-foreground">{apartments.length} properties found</p>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recommended">Recommended</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="rating">Highest Rated</SelectItem>
            <SelectItem value="reviews">Most Reviews</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Apartment Grid */}
      <div className="grid gap-6">
        {paginatedApartments.map((apartment) => (
          <Card key={apartment.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="md:flex">
              <div className="md:w-1/3 relative">
                <Image
                  src={apartment.images[0] || "/placeholder.svg"}
                  alt={apartment.title}
                  width={300}
                  height={200}
                  className="w-full h-48 md:h-full object-cover"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                  onClick={() => toggleFavorite(apartment.id)}
                >
                  <Heart className={`h-4 w-4 ${favorites.includes(apartment.id) ? "fill-red-500 text-red-500" : ""}`} />
                </Button>
                {apartment.superhost && <Badge className="absolute top-2 left-2 bg-red-500">Superhost</Badge>}
              </div>

              <div className="md:w-2/3 p-6">
                <CardHeader className="p-0 mb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{apartment.title}</CardTitle>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        {apartment.location}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">${apartment.price}</div>
                      <div className="text-sm text-muted-foreground">per night</div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-0 mb-4">
                  <p className="text-sm text-muted-foreground mb-3">{apartment.description}</p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {apartment.guests} guests
                    </div>
                    <div className="flex items-center">
                      <Bed className="h-4 w-4 mr-1" />
                      {apartment.bedrooms} bed{apartment.bedrooms > 1 ? "s" : ""}
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-4 w-4 mr-1" />
                      {apartment.bathrooms} bath{apartment.bathrooms > 1 ? "s" : ""}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {apartment.amenities.slice(0, 4).map((amenity) => {
                      const Icon = amenityIcons[amenity as keyof typeof amenityIcons]
                      return (
                        <Badge key={amenity} variant="secondary" className="text-xs">
                          {Icon && <Icon className="h-3 w-3 mr-1" />}
                          {amenity}
                        </Badge>
                      )
                    })}
                    {apartment.amenities.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{apartment.amenities.length - 4} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="font-medium">{apartment.rating.toFixed(1)}</span>
                      <span className="text-muted-foreground ml-1">({apartment.reviews} reviews)</span>
                    </div>

                    <div className="flex items-center gap-2">
                      {apartment.instantBook && (
                        <Badge variant="outline" className="text-xs">
                          Instant Book
                        </Badge>
                      )}
                      <Link href={`/apartments/${apartment.id}`}>
                        <Button>View Details</Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2">
          <Button
            variant="outline"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </Button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "outline"}
              onClick={() => setCurrentPage(page)}
              className="w-10"
            >
              {page}
            </Button>
          ))}

          <Button
            variant="outline"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  )
}
