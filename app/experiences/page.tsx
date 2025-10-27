"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Clock, Users, Star, Search, Filter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const experiences = [
  {
    id: 1,
    title: "White Water Rafting on the Nile",
    location: "Jinja, Uganda",
    duration: "6 hours",
    groupSize: "8-12 people",
    price: 250000,
    rating: 4.9,
    reviews: 245,
    image: "/images/white-water-rafting.png",
    category: "Adventure",
    difficulty: "Moderate",
  },
  {
    id: 2,
    title: "Gorilla Trekking Experience",
    location: "Bwindi Impenetrable Forest",
    duration: "Full day",
    groupSize: "4-8 people",
    price: 1200000,
    rating: 5.0,
    reviews: 189,
    image: "/images/gorilla-trekking.png",
    category: "Wildlife",
    difficulty: "Challenging",
  },
  {
    id: 3,
    title: "Traditional Cooking Class",
    location: "Kampala, Uganda",
    duration: "3 hours",
    groupSize: "6-10 people",
    price: 80000,
    rating: 4.8,
    reviews: 156,
    image: "/images/cooking-class.png",
    category: "Culture",
    difficulty: "Easy",
  },
  {
    id: 4,
    title: "Safari Sunset Tour",
    location: "Queen Elizabeth National Park",
    duration: "4 hours",
    groupSize: "4-6 people",
    price: 450000,
    rating: 4.9,
    reviews: 203,
    image: "/images/safari-sunset.png",
    category: "Wildlife",
    difficulty: "Easy",
  },
  {
    id: 5,
    title: "Street Art & Graffiti Tour",
    location: "Kampala, Uganda",
    duration: "2 hours",
    groupSize: "10-15 people",
    price: 50000,
    rating: 4.7,
    reviews: 98,
    image: "/images/street-art-kampala.png",
    category: "Culture",
    difficulty: "Easy",
  },
  {
    id: 6,
    title: "Lake Victoria Fishing Experience",
    location: "Entebbe, Uganda",
    duration: "5 hours",
    groupSize: "4-8 people",
    price: 180000,
    rating: 4.6,
    reviews: 127,
    image: "/images/lake-victoria-fishing.png",
    category: "Adventure",
    difficulty: "Moderate",
  },
]

export default function ExperiencesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedDifficulty, setSelectedDifficulty] = useState("all")

  const filteredExperiences = experiences.filter((exp) => {
    const matchesSearch =
      exp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exp.location.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || exp.category === selectedCategory
    const matchesDifficulty = selectedDifficulty === "all" || exp.difficulty === selectedDifficulty

    return matchesSearch && matchesCategory && matchesDifficulty
  })

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Discover Unique Experiences</h1>
              <p className="text-lg sm:text-xl mb-8 text-white/90">
                Book unforgettable activities hosted by local experts across Uganda
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="border-b bg-background sticky top-16 z-40">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="search"
                  placeholder="Search experiences..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Adventure">Adventure</SelectItem>
                  <SelectItem value="Wildlife">Wildlife</SelectItem>
                  <SelectItem value="Culture">Culture</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="Easy">Easy</SelectItem>
                  <SelectItem value="Moderate">Moderate</SelectItem>
                  <SelectItem value="Challenging">Challenging</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Experiences Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {filteredExperiences.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No experiences found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredExperiences.map((experience) => (
                  <Card key={experience.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-48 w-full">
                      <Image
                        src={experience.image || "/placeholder.svg"}
                        alt={experience.title}
                        fill
                        className="object-cover"
                      />
                      <Badge className="absolute top-4 left-4">{experience.category}</Badge>
                      <Badge variant="secondary" className="absolute top-4 right-4">
                        {experience.difficulty}
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="line-clamp-1">{experience.title}</CardTitle>
                      <CardDescription className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {experience.location}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {experience.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {experience.groupSize}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold">{experience.rating}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">({experience.reviews} reviews)</span>
                      </div>
                    </CardContent>
                    <CardFooter className="flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-bold">UGX {experience.price.toLocaleString()}</p>
                        <p className="text-sm text-muted-foreground">per person</p>
                      </div>
                      <Button asChild>
                        <Link href={`/experiences/${experience.id}`}>Book Now</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
