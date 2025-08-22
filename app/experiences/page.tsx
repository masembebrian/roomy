"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import SearchBar from "@/components/search-bar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Star,
  Clock,
  Users,
  MapPin,
  Calendar,
  Heart,
  Filter,
  Camera,
  Mountain,
  Waves,
  Utensils,
  Music,
  Palette,
  TreePine,
  Compass,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const experienceCategories = [
  { name: "Adventure", icon: Mountain, count: 45, color: "bg-orange-100 text-orange-800" },
  { name: "Food & Drink", icon: Utensils, count: 38, color: "bg-green-100 text-green-800" },
  { name: "Arts & Culture", icon: Palette, count: 29, color: "bg-purple-100 text-purple-800" },
  { name: "Nature", icon: TreePine, count: 52, color: "bg-emerald-100 text-emerald-800" },
  { name: "Water Sports", icon: Waves, count: 23, color: "bg-blue-100 text-blue-800" },
  { name: "Music & Shows", icon: Music, count: 18, color: "bg-pink-100 text-pink-800" },
  { name: "Photography", icon: Camera, count: 31, color: "bg-indigo-100 text-indigo-800" },
  { name: "Tours", icon: Compass, count: 67, color: "bg-yellow-100 text-yellow-800" },
]

const featuredExperiences = [
  {
    id: 1,
    title: "White Water Rafting on the Nile",
    host: "Adventure Uganda",
    hostImage: "/images/adventure-uganda-team.png",
    location: "Jinja, Uganda",
    duration: "4 hours",
    price: 85,
    rating: 4.9,
    reviews: 234,
    image: "/images/white-water-rafting.png",
    category: "Adventure",
    groupSize: "Up to 12 people",
    description: "Experience the thrill of grade 5 rapids on the source of the Nile River.",
    highlights: ["Professional guides", "All equipment included", "Lunch provided", "Transport included"],
    superhost: true,
  },
  {
    id: 2,
    title: "Gorilla Trekking in Bwindi Forest",
    host: "Wildlife Expeditions",
    hostImage: "/images/host-david.png",
    location: "Bwindi, Uganda",
    duration: "Full day",
    price: 650,
    rating: 4.8,
    reviews: 189,
    image: "/images/gorilla-trekking.png",
    category: "Nature",
    groupSize: "Up to 8 people",
    description: "Once-in-a-lifetime encounter with mountain gorillas in their natural habitat.",
    highlights: ["Expert ranger guides", "Permits included", "Small groups", "Photography allowed"],
    superhost: true,
  },
  {
    id: 3,
    title: "Traditional Ugandan Cooking Class",
    host: "Mama Sarah",
    hostImage: "/images/host-grace.png",
    location: "Kampala, Uganda",
    duration: "3 hours",
    price: 45,
    rating: 4.7,
    reviews: 156,
    image: "/images/cooking-class.png",
    category: "Food & Drink",
    groupSize: "Up to 6 people",
    description: "Learn to cook authentic Ugandan dishes with a local family.",
    highlights: ["Market visit", "Recipe cards", "Family meal", "Vegetarian options"],
    superhost: false,
  },
  {
    id: 4,
    title: "Sunset Safari in Queen Elizabeth Park",
    host: "Safari Adventures",
    hostImage: "/images/host-john.png",
    location: "Queen Elizabeth NP, Uganda",
    duration: "6 hours",
    price: 120,
    rating: 4.6,
    reviews: 98,
    image: "/images/safari-sunset.png",
    category: "Nature",
    groupSize: "Up to 10 people",
    description: "Wildlife safari with stunning sunset views over the African savanna.",
    highlights: ["Game drive", "Sunset viewing", "Professional guide", "Refreshments"],
    superhost: false,
  },
  {
    id: 5,
    title: "Kampala Street Art & Culture Tour",
    host: "Urban Explorers",
    hostImage: "/images/host-emily.png",
    location: "Kampala, Uganda",
    duration: "4 hours",
    price: 35,
    rating: 4.5,
    reviews: 87,
    image: "/images/street-art-kampala.png",
    category: "Arts & Culture",
    groupSize: "Up to 15 people",
    description: "Discover Kampala's vibrant street art scene and local culture.",
    highlights: ["Local artist meetings", "Gallery visits", "Cultural insights", "Photo opportunities"],
    superhost: false,
  },
  {
    id: 6,
    title: "Lake Victoria Fishing Experience",
    host: "Fisherman's Friend",
    hostImage: "/images/host-david.png",
    location: "Entebbe, Uganda",
    duration: "5 hours",
    price: 65,
    rating: 4.4,
    reviews: 72,
    image: "/images/lake-victoria-fishing.png",
    category: "Water Sports",
    groupSize: "Up to 8 people",
    description: "Traditional fishing on Africa's largest lake with local fishermen.",
    highlights: ["Traditional boats", "Fresh fish lunch", "Cultural exchange", "Scenic views"],
    superhost: false,
  },
]

export default function ExperiencesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("popular")
  const [favorites, setFavorites] = useState<number[]>([])

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]))
  }

  const filteredExperiences = featuredExperiences.filter(
    (exp) => selectedCategory === "all" || exp.category === selectedCategory,
  )

  const sortedExperiences = [...filteredExperiences].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      case "popular":
      default:
        return b.reviews - a.reviews
    }
  })

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Amazing Experiences</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join unique activities hosted by locals and create unforgettable memories in Uganda
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <SearchBar />
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8">
        {/* Categories */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {experienceCategories.map((category) => (
              <Card
                key={category.name}
                className={`cursor-pointer transition-all hover:shadow-md ${
                  selectedCategory === category.name ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setSelectedCategory(category.name)}
              >
                <CardContent className="p-4 text-center">
                  <category.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <h3 className="font-semibold text-sm">{category.name}</h3>
                  <p className="text-xs text-muted-foreground">{category.count} experiences</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Filters and Sort */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button
              variant={selectedCategory === "all" ? "default" : "outline"}
              onClick={() => setSelectedCategory("all")}
            >
              All Experiences
            </Button>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              More Filters
            </Button>
          </div>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Featured Experiences */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">
              {selectedCategory === "all" ? "All Experiences" : `${selectedCategory} Experiences`}
            </h2>
            <p className="text-muted-foreground">{sortedExperiences.length} experiences found</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedExperiences.map((experience) => (
              <Card key={experience.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={experience.image || "/placeholder.svg"}
                    alt={experience.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                    onClick={() => toggleFavorite(experience.id)}
                  >
                    <Heart
                      className={`h-4 w-4 ${favorites.includes(experience.id) ? "fill-red-500 text-red-500" : ""}`}
                    />
                  </Button>
                  {experience.superhost && (
                    <Badge className="absolute top-2 left-2 bg-red-500 text-white">Superhost</Badge>
                  )}
                  <Badge className="absolute bottom-2 left-2 bg-black/70 text-white">{experience.category}</Badge>
                </div>

                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1 line-clamp-2">{experience.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">Hosted by {experience.host}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {experience.location}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {experience.duration}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {experience.groupSize}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{experience.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="font-medium">{experience.rating}</span>
                      <span className="text-muted-foreground ml-1">({experience.reviews})</span>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold">${experience.price}</div>
                      <div className="text-sm text-muted-foreground">per person</div>
                    </div>
                  </div>

                  <Link href={`/experiences/${experience.id}`} className="block mt-4">
                    <Button className="w-full">Book Experience</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Choose Experiences */}
        <div className="py-16 bg-muted/50 rounded-lg">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Book Experiences with Roomy?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with passionate local hosts and discover authentic experiences you won't find anywhere else
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Local Experts</h3>
              <p className="text-muted-foreground">
                Learn from passionate locals who know their craft and love sharing their knowledge
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
              <p className="text-muted-foreground">
                All experiences are vetted for quality and safety, with reviews from real participants
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
              <p className="text-muted-foreground">
                Book instantly or request availability with flexible cancellation options
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
