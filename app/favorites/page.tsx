"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useAuth } from "@/lib/auth"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Star, Heart, MapPin, Users, Bed, Bath, Share, Trash2, Plus, FolderPlus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface WishlistItem {
  id: number
  apartmentId: number
  title: string
  price: number
  image: string
  location: string
  bedrooms: number
  bathrooms: number
  guests: number
  rating: number
  reviews: number
  dateAdded: string
  listId: string
}

interface Wishlist {
  id: string
  name: string
  description: string
  items: WishlistItem[]
  isPublic: boolean
  createdAt: string
}

const mockWishlists: Wishlist[] = [
  {
    id: "default",
    name: "My Favorites",
    description: "Properties I love",
    isPublic: false,
    createdAt: "2024-01-01",
    items: [
      {
        id: 1,
        apartmentId: 1,
        title: "Modern Apartment in Kampala",
        price: 50,
        image: "/placeholder.svg?height=200&width=300",
        location: "Kampala Central",
        bedrooms: 2,
        bathrooms: 1,
        guests: 4,
        rating: 4.5,
        reviews: 32,
        dateAdded: "2024-01-15",
        listId: "default",
      },
      {
        id: 2,
        apartmentId: 3,
        title: "Spacious Family Home in Jinja",
        price: 75,
        image: "/placeholder.svg?height=200&width=300",
        location: "Jinja",
        bedrooms: 3,
        bathrooms: 2,
        guests: 6,
        rating: 4.8,
        reviews: 45,
        dateAdded: "2024-01-10",
        listId: "default",
      },
    ],
  },
  {
    id: "business",
    name: "Business Trips",
    description: "Properties perfect for work",
    isPublic: false,
    createdAt: "2024-01-05",
    items: [
      {
        id: 3,
        apartmentId: 4,
        title: "Lakeside Villa in Mukono",
        price: 120,
        image: "/placeholder.svg?height=200&width=300",
        location: "Mukono",
        bedrooms: 4,
        bathrooms: 3,
        guests: 8,
        rating: 4.9,
        reviews: 27,
        dateAdded: "2024-01-08",
        listId: "business",
      },
    ],
  },
]

export default function FavoritesPage() {
  const { user } = useAuth()
  const [wishlists, setWishlists] = useState<Wishlist[]>(mockWishlists)
  const [activeWishlist, setActiveWishlist] = useState("default")
  const [showCreateDialog, setShowCreateDialog] = useState(false)
  const [newListName, setNewListName] = useState("")
  const [newListDescription, setNewListDescription] = useState("")
  const [sortBy, setSortBy] = useState("dateAdded")

  if (!user) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Please sign in to view your favorites</h1>
            <Link href="/auth/signin">
              <Button>Sign In</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const currentWishlist = wishlists.find((list) => list.id === activeWishlist)

  const sortedItems =
    currentWishlist?.items.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "rating":
          return b.rating - a.rating
        case "dateAdded":
        default:
          return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
      }
    }) || []

  const createWishlist = () => {
    const newWishlist: Wishlist = {
      id: Date.now().toString(),
      name: newListName,
      description: newListDescription,
      isPublic: false,
      createdAt: new Date().toISOString().split("T")[0],
      items: [],
    }
    setWishlists([...wishlists, newWishlist])
    setNewListName("")
    setNewListDescription("")
    setShowCreateDialog(false)
    setActiveWishlist(newWishlist.id)
  }

  const removeFromWishlist = (itemId: number) => {
    setWishlists(
      wishlists.map((list) =>
        list.id === activeWishlist ? { ...list, items: list.items.filter((item) => item.id !== itemId) } : list,
      ),
    )
  }

  const deleteWishlist = (listId: string) => {
    if (listId === "default") return // Can't delete default list
    setWishlists(wishlists.filter((list) => list.id !== listId))
    setActiveWishlist("default")
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">Your Wishlists</h1>
            <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Create List
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create New Wishlist</DialogTitle>
                  <DialogDescription>Organize your favorite properties into custom lists</DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="listName">List Name</Label>
                    <Input
                      id="listName"
                      value={newListName}
                      onChange={(e) => setNewListName(e.target.value)}
                      placeholder="e.g., Weekend Getaways"
                    />
                  </div>
                  <div>
                    <Label htmlFor="listDescription">Description (optional)</Label>
                    <Input
                      id="listDescription"
                      value={newListDescription}
                      onChange={(e) => setNewListDescription(e.target.value)}
                      placeholder="Describe this list..."
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setShowCreateDialog(false)}>
                    Cancel
                  </Button>
                  <Button onClick={createWishlist} disabled={!newListName.trim()}>
                    Create List
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Wishlist Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-2">
                {wishlists.map((list) => (
                  <div
                    key={list.id}
                    className={`p-3 rounded-lg cursor-pointer transition-colors ${
                      activeWishlist === list.id ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                    }`}
                    onClick={() => setActiveWishlist(list.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">{list.name}</h3>
                        <p className="text-sm opacity-70">{list.items.length} properties</p>
                      </div>
                      {list.id !== "default" && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation()
                            deleteWishlist(list.id)
                          }}
                          className="opacity-70 hover:opacity-100"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {currentWishlist && (
                <>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-2xl font-bold">{currentWishlist.name}</h2>
                      {currentWishlist.description && (
                        <p className="text-muted-foreground">{currentWishlist.description}</p>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <Select value={sortBy} onValueChange={setSortBy}>
                        <SelectTrigger className="w-48">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dateAdded">Recently Added</SelectItem>
                          <SelectItem value="price-low">Price: Low to High</SelectItem>
                          <SelectItem value="price-high">Price: High to Low</SelectItem>
                          <SelectItem value="rating">Highest Rated</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button variant="outline" size="sm">
                        <Share className="w-4 h-4 mr-2" />
                        Share
                      </Button>
                    </div>
                  </div>

                  {sortedItems.length === 0 ? (
                    <Card>
                      <CardContent className="text-center py-12">
                        <FolderPlus className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                        <h3 className="text-lg font-semibold mb-2">No properties in this list yet</h3>
                        <p className="text-muted-foreground mb-4">
                          Start adding properties to your wishlist by clicking the heart icon
                        </p>
                        <Link href="/">
                          <Button>Browse Properties</Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {sortedItems.map((item) => (
                        <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                          <div className="relative">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.title}
                              width={300}
                              height={200}
                              className="w-full h-48 object-cover"
                            />
                            <Button
                              variant="ghost"
                              size="icon"
                              className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                              onClick={() => removeFromWishlist(item.id)}
                            >
                              <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                            </Button>
                            <Badge className="absolute bottom-2 left-2">Added {item.dateAdded}</Badge>
                          </div>

                          <CardContent className="p-4">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="font-semibold text-lg">{item.title}</h3>
                              <div className="text-right">
                                <div className="text-xl font-bold">${item.price}</div>
                                <div className="text-sm text-muted-foreground">per night</div>
                              </div>
                            </div>

                            <div className="flex items-center text-sm text-muted-foreground mb-3">
                              <MapPin className="w-4 h-4 mr-1" />
                              {item.location}
                            </div>

                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                              <div className="flex items-center">
                                <Users className="w-4 h-4 mr-1" />
                                {item.guests} guests
                              </div>
                              <div className="flex items-center">
                                <Bed className="w-4 h-4 mr-1" />
                                {item.bedrooms} bed{item.bedrooms > 1 ? "s" : ""}
                              </div>
                              <div className="flex items-center">
                                <Bath className="w-4 h-4 mr-1" />
                                {item.bathrooms} bath{item.bathrooms > 1 ? "s" : ""}
                              </div>
                            </div>

                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                                <span className="font-medium">{item.rating}</span>
                                <span className="text-muted-foreground ml-1">({item.reviews})</span>
                              </div>
                              <Link href={`/apartments/${item.apartmentId}`}>
                                <Button size="sm">View Details</Button>
                              </Link>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
