"use client"

import { useState, useEffect, useCallback, useMemo } from "react"
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
import { requestCache } from "@/lib/cache"
import { logger, measurePerformanceAsync } from "@/lib/logger"

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

  const loadProperties = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)

      const fetchData = async () => {
        const response = await fetch("/api/properties", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          cache: "no-store",
        })

        if (!response.ok) {
          logger.error(`API responded with status: ${response.status}`, new Error("API Error"))
          throw new Error(`API error: ${response.status}`)
        }

        const contentType = response.headers.get("content-type")
        if (!contentType?.includes("application/json")) {
          logger.error("Invalid content type", new Error("Invalid response format"))
          throw new Error("Invalid response format from API")
        }

        const jsonResponse = await response.json()

        if (!jsonResponse || typeof jsonResponse !== "object") {
          throw new Error("Invalid response structure from API")
        }

        return jsonResponse
      }

      // Use request cache with 5 minute TTL
      const jsonResponse = await requestCache.deduplicate(
        "properties:list",
        fetchData,
        5 * 60 * 1000
      )

      const { data = [], error } = jsonResponse

      if (error) {
        logger.warn(`API returned error: ${error}`)
      }

      if (!Array.isArray(data)) {
        logger.warn(`Data is not an array, received: ${typeof data}`)
        setApartments([])
        setLoading(false)
        return
      }

      const formattedApartments: Apartment[] = data
        .filter((property): property is Record<string, any> => Boolean(property && property.id))
        .map((property) => ({
          id: property.id || "",
          title: property.title || "Untitled",
          location: property.location || "Unknown",
          price: Number(property.price) || 0,
          rating: Number(property.rating) || 4.5,
          reviews: Number(property.review_count) || 0,
          image: Array.isArray(property.images) && property.images[0] ? property.images[0] : "/images/kampala-apartment.png",
          amenities: Array.isArray(property.amenities) ? property.amenities : ["wifi", "parking"],
          guests: Number(property.guests) || 2,
          bedrooms: Number(property.bedrooms) || 1,
          bathrooms: Number(property.bathrooms) || 1,
          host: {
            name: property.profiles?.name || "Host",
            image: property.profiles?.image || "/images/host-sarah.png",
            verified: Boolean(property.profiles?.verified),
          },
          featured: Boolean(property.instant_book),
        }))

      setApartments(formattedApartments)
      logger.info(`Loaded ${formattedApartments.length} properties`)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to load properties. Please try again."
      logger.error("Error loading properties", err instanceof Error ? err : new Error(String(err)))
      setError(errorMessage)
      setApartments([])
    } finally {
      setLoading(false)
    }
  }, [])

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
