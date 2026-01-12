"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Users, Wifi, Car, Coffee, Heart } from "lucide-react"
import { createClient } from "@/lib/supabase/client"
import { useAuth } from "@/lib/auth"
import { useToast } from "@/hooks/use-toast"
import { PropertyListSkeleton } from "@/components/property-skeleton"
import { ErrorState } from "@/components/error-state"

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

const amenityIcons = {
  wifi: Wifi,
  parking: Car,
  kitchen: Coffee,
  ac: "❄️",
  pool: "🏊",
  garden: "🌿",
}

export function ApartmentList() {
  const [favorites, setFavorites] = useState<string[]>([])
  const [apartments, setApartments] = useState<Apartment[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { user } = useAuth()
  const { toast } = useToast()
  const supabase = createClient()

  useEffect(() => {
    loadProperties()
    if (user) {
      loadFavorites()
    }
  }, [user])

  const loadProperties = async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await fetch("/api/properties")

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`)
      }

      const text = await response.text()

      if (!text) {
        throw new Error("Empty response from API")
      }

      let jsonResponse
      try {
        jsonResponse = JSON.parse(text)
      } catch (parseError) {
        console.error("[v0] Failed to parse response:", text)
        throw new Error("Invalid response format from API")
      }

      const { data, error } = jsonResponse

      if (error) {
        throw new Error(error)
      }

      const formattedApartments: Apartment[] =
        data?.map((property: any) => ({
          id: property.id,
          title: property.title,
          location: property.location,
          price: property.price,
          rating: property.rating || 4.5,
          reviews: property.review_count || 0,
          image: property.images?.[0] || "/images/kampala-apartment.png",
          amenities: property.amenities || ["wifi", "parking", "kitchen"],
          guests: property.guests || 2,
          bedrooms: property.bedrooms || 1,
          bathrooms: property.bathrooms || 1,
          host: {
            name: property.profiles?.name || "Host",
            image: property.profiles?.image || "/images/host-sarah.png",
            verified: property.profiles?.verified || false,
          },
          featured: property.instant_book || false,
        })) || []

      setApartments(formattedApartments)
    } catch (err) {
      console.error("[v0] Error loading properties:", err)
      setError(err instanceof Error ? err.message : "Failed to load properties. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const loadFavorites = async () => {
    if (!user) return

    try {
      const { data, error } = await supabase.from("favorites").select("property_id").eq("user_id", user.id)

      if (error) throw error

      setFavorites(data?.map((fav) => fav.property_id) || [])
    } catch (err) {
      console.error("Error loading favorites:", err)
    }
  }

  const toggleFavorite = async (id: string) => {
    if (!user) {
      toast({
        title: "Sign in required",
        description: "Please sign in to save favorites",
        variant: "destructive",
      })
      return
    }

    const isFavorited = favorites.includes(id)

    try {
      if (isFavorited) {
        const { error } = await supabase.from("favorites").delete().eq("property_id", id).eq("user_id", user.id)

        if (error) throw error

        setFavorites((prev) => prev.filter((fav) => fav !== id))
        toast({
          title: "Removed from favorites",
          description: "Property removed from your favorites",
        })
      } else {
        const { error } = await supabase.from("favorites").insert({
          property_id: id,
          user_id: user.id,
        })

        if (error) throw error

        setFavorites((prev) => [...prev, id])
        toast({
          title: "Added to favorites",
          description: "Property saved to your favorites",
        })
      }
    } catch (err) {
      console.error("Error toggling favorite:", err)
      toast({
        title: "Error",
        description: "Failed to update favorites",
        variant: "destructive",
      })
    }
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-UG", {
      style: "currency",
      currency: "UGX",
      minimumFractionDigits: 0,
    }).format(price)
  }

  if (loading) {
    return <PropertyListSkeleton count={8} />
  }

  if (error) {
    return <ErrorState message={error} onRetry={loadProperties} showHomeButton={false} />
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
