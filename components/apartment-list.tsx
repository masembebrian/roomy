"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Users, Wifi, Car, Coffee, Heart } from "lucide-react"

interface Apartment {
  id: string
  title: string
  location: string
  price: number
  rating: number
  reviews: number
  image: string
  amenities: string[]
  guests: number
  bedrooms: number
  bathrooms: number
  host: {
    name: string
    image: string
    verified: boolean
  }
  featured: boolean
}

const mockApartments: Apartment[] = [
  {
    id: "1",
    title: "Modern Apartment in Kampala City Center",
    location: "Kampala, Central Region",
    price: 85000,
    rating: 4.8,
    reviews: 124,
    image: "/images/kampala-apartment.png",
    amenities: ["wifi", "parking", "kitchen", "ac"],
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    host: {
      name: "Sarah M.",
      image: "/images/host-sarah.png",
      verified: true,
    },
    featured: true,
  },
  {
    id: "2",
    title: "Cozy Studio Near Entebbe Airport",
    location: "Entebbe, Central Region",
    price: 45000,
    rating: 4.6,
    reviews: 89,
    image: "/images/entebbe-studio.png",
    amenities: ["wifi", "kitchen", "ac"],
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    host: {
      name: "John K.",
      image: "/images/host-john.png",
      verified: true,
    },
    featured: true,
  },
  {
    id: "3",
    title: "Family Home with Garden in Jinja",
    location: "Jinja, Eastern Region",
    price: 120000,
    rating: 4.9,
    reviews: 67,
    image: "/images/jinja-family-home.png",
    amenities: ["wifi", "parking", "kitchen", "garden"],
    guests: 6,
    bedrooms: 3,
    bathrooms: 2,
    host: {
      name: "Emily R.",
      image: "/images/host-emily.png",
      verified: true,
    },
    featured: true,
  },
  {
    id: "4",
    title: "Luxury Villa in Mukono",
    location: "Mukono, Central Region",
    price: 200000,
    rating: 4.7,
    reviews: 45,
    image: "/images/mukono-villa.png",
    amenities: ["wifi", "parking", "kitchen", "pool", "ac"],
    guests: 8,
    bedrooms: 4,
    bathrooms: 3,
    host: {
      name: "David L.",
      image: "/images/host-david.png",
      verified: true,
    },
    featured: false,
  },
]

const amenityIcons = {
  wifi: Wifi,
  parking: Car,
  kitchen: Coffee,
  ac: "❄️",
  pool: "🏊",
  garden: "🌿",
}

export default function ApartmentList() {
  const [favorites, setFavorites] = useState<string[]>([])
  const [apartments] = useState(mockApartments)

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]))
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-UG", {
      style: "currency",
      currency: "UGX",
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
      {apartments.map((apartment) => (
        <Card key={apartment.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
          <div className="relative">
            <Link href={`/apartments/${apartment.id}`}>
              <Image
                src={apartment.image || "/placeholder.svg"}
                alt={apartment.title}
                width={400}
                height={250}
                className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </Link>

            {apartment.featured && (
              <Badge className="absolute top-2 left-2 bg-yellow-500 text-yellow-900 text-xs">Featured</Badge>
            )}

            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 bg-white/80 hover:bg-white touch-manipulation"
              onClick={() => toggleFavorite(apartment.id)}
            >
              <Heart
                className={`h-4 w-4 ${
                  favorites.includes(apartment.id) ? "fill-red-500 text-red-500" : "text-gray-600"
                }`}
              />
            </Button>
          </div>

          <CardContent className="p-3 sm:p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-1">
                <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-xs sm:text-sm font-medium">{apartment.rating}</span>
                <span className="text-xs sm:text-sm text-muted-foreground">({apartment.reviews})</span>
              </div>
              {apartment.host.verified && (
                <Badge variant="secondary" className="text-[10px] sm:text-xs">
                  Verified Host
                </Badge>
              )}
            </div>

            <Link href={`/apartments/${apartment.id}`}>
              <h3 className="font-semibold text-base sm:text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                {apartment.title}
              </h3>
            </Link>

            <div className="flex items-center text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3">
              <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1 flex-shrink-0" />
              <span className="truncate">{apartment.location}</span>
            </div>

            <div className="flex items-center text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3">
              <Users className="h-3 w-3 sm:h-4 sm:w-4 mr-1 flex-shrink-0" />
              <span className="truncate">
                {apartment.guests} guests • {apartment.bedrooms} bedrooms • {apartment.bathrooms} bathrooms
              </span>
            </div>

            <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
              {apartment.amenities.slice(0, 3).map((amenity) => {
                const IconComponent = amenityIcons[amenity as keyof typeof amenityIcons]
                return (
                  <div key={amenity} className="flex items-center text-[10px] sm:text-xs text-muted-foreground">
                    {typeof IconComponent === "string" ? (
                      <span className="mr-1">{IconComponent}</span>
                    ) : (
                      <IconComponent className="h-3 w-3 mr-1" />
                    )}
                    {amenity}
                  </div>
                )
              })}
              {apartment.amenities.length > 3 && (
                <span className="text-[10px] sm:text-xs text-muted-foreground">
                  +{apartment.amenities.length - 3} more
                </span>
              )}
            </div>

            <div className="flex items-center justify-between">
              <div>
                <span className="text-base sm:text-lg font-bold">{formatPrice(apartment.price)}</span>
                <span className="text-xs sm:text-sm text-muted-foreground"> / night</span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Image
                  src={apartment.host.image || "/placeholder.svg"}
                  alt={apartment.host.name}
                  width={24}
                  height={24}
                  className="rounded-full w-5 h-5 sm:w-6 sm:h-6"
                />
                <span className="text-xs sm:text-sm text-muted-foreground hidden sm:inline">{apartment.host.name}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

// Named export for compatibility
export { ApartmentList }
