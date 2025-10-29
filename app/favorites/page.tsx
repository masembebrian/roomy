"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import Footer from "@/components/footer"
import { useAuth } from "@/lib/auth"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Heart, MapPin, Users, Bed, Bath } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { createClient } from "@/lib/supabase/client"
import { useToast } from "@/hooks/use-toast"
import { PropertyListSkeleton } from "@/components/property-skeleton"
import { EmptyState } from "@/components/empty-state"
import { ErrorState } from "@/components/error-state"

interface FavoriteProperty {
  id: string
  title: string
  price: number
  image: string
  location: string
  bedrooms: number
  bathrooms: number
  guests: number
  rating: number
  reviewCount: number
  dateAdded: string
}

export default function FavoritesPage() {
  const { user, loading: authLoading } = useAuth()
  const { toast } = useToast()
  const supabase = createClient()

  const [favorites, setFavorites] = useState<FavoriteProperty[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (user) {
      loadFavorites()
    } else if (!authLoading) {
      setLoading(false)
    }
  }, [user, authLoading])

  const loadFavorites = async () => {
    if (!user) return

    try {
      setLoading(true)
      const { data, error } = await supabase
        .from("favorites")
        .select(
          `
          created_at,
          properties (
            id,
            title,
            price,
            images,
            location,
            bedrooms,
            bathrooms,
            guests,
            rating,
            review_count
          )
        `,
        )
        .eq("user_id", user.id)
        .order("created_at", { ascending: false })

      if (error) throw error

      const formattedFavorites: FavoriteProperty[] =
        data?.map((fav: any) => ({
          id: fav.properties.id,
          title: fav.properties.title,
          price: fav.properties.price,
          image: fav.properties.images?.[0] || "/images/kampala-apartment.png",
          location: fav.properties.location,
          bedrooms: fav.properties.bedrooms || 1,
          bathrooms: fav.properties.bathrooms || 1,
          guests: fav.properties.guests || 2,
          rating: fav.properties.rating || 4.5,
          reviewCount: fav.properties.review_count || 0,
          dateAdded: new Date(fav.created_at).toLocaleDateString(),
        })) || []

      setFavorites(formattedFavorites)
    } catch (err) {
      console.error("Error loading favorites:", err)
      setError("Failed to load favorites")
    } finally {
      setLoading(false)
    }
  }

  const removeFavorite = async (propertyId: string) => {
    if (!user) return

    try {
      const { error } = await supabase.from("favorites").delete().eq("property_id", propertyId).eq("user_id", user.id)

      if (error) throw error

      setFavorites((prev) => prev.filter((fav) => fav.id !== propertyId))
      toast({
        title: "Removed from favorites",
        description: "Property removed from your favorites",
      })
    } catch (err) {
      console.error("Error removing favorite:", err)
      toast({
        title: "Error",
        description: "Failed to remove favorite",
        variant: "destructive",
      })
    }
  }

  if (!user && !authLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <EmptyState
            icon="home"
            title="Sign in to view favorites"
            description="Create an account to save and organize your favorite properties"
            actionLabel="Sign In"
            actionHref="/auth/signin"
          />
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Your Favorites</h1>
              <p className="text-muted-foreground">Properties you've saved for later</p>
            </div>
          </div>

          {loading ? (
            <PropertyListSkeleton count={4} />
          ) : error ? (
            <ErrorState message={error} onRetry={loadFavorites} showHomeButton={false} />
          ) : favorites.length === 0 ? (
            <EmptyState
              icon="search"
              title="No favorites yet"
              description="Start adding properties to your favorites by clicking the heart icon"
              actionLabel="Browse Properties"
              actionHref="/explore"
            />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favorites.map((property) => (
                <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <Link href={`/apartments/${property.id}`}>
                      <Image
                        src={property.image || "/placeholder.svg"}
                        alt={property.title}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover"
                      />
                    </Link>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                      onClick={() => removeFavorite(property.id)}
                    >
                      <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                    </Button>
                    <Badge className="absolute bottom-2 left-2 text-xs">Added {property.dateAdded}</Badge>
                  </div>

                  <CardContent className="p-4">
                    <Link href={`/apartments/${property.id}`}>
                      <h3 className="font-semibold text-lg mb-2 hover:text-primary transition-colors line-clamp-2">
                        {property.title}
                      </h3>
                    </Link>

                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                      <span className="truncate">{property.location}</span>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {property.guests}
                      </div>
                      <div className="flex items-center">
                        <Bed className="w-4 h-4 mr-1" />
                        {property.bedrooms}
                      </div>
                      <div className="flex items-center">
                        <Bath className="w-4 h-4 mr-1" />
                        {property.bathrooms}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span className="font-medium">{property.rating}</span>
                        <span className="text-muted-foreground ml-1 text-sm">({property.reviewCount})</span>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">UGX {property.price.toLocaleString()}</div>
                        <div className="text-xs text-muted-foreground">per night</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
