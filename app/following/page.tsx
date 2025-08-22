"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Bell, BellOff, Star, MapPin, Home, Camera, UserMinus, UserPlus, Search, Award, Shield } from "lucide-react"

const followedHosts = [
  {
    id: "host1",
    name: "Sarah M.",
    image: "/images/host-sarah.png",
    location: "Kampala, Uganda",
    joinDate: "2022-03-15",
    superhost: true,
    verified: true,
    rating: 4.8,
    reviewCount: 156,
    propertyCount: 3,
    experienceCount: 0,
    responseRate: 98,
    bio: "Passionate about hospitality and sharing the beauty of Kampala with travelers.",
    specialties: ["City Apartments", "Business Travel"],
    notificationsEnabled: true,
    recentActivity: [
      {
        type: "price_update",
        message: "Updated pricing for Modern Apartment in Kampala",
        date: "2 days ago",
      },
      {
        type: "new_photos",
        message: "Added new photos to apartment listing",
        date: "1 week ago",
      },
    ],
    following: true,
  },
  {
    id: "host2",
    name: "Adventure Uganda",
    image: "/images/adventure-uganda-team.png",
    location: "Jinja, Uganda",
    joinDate: "2020-05-15",
    superhost: true,
    verified: true,
    rating: 4.9,
    reviewCount: 234,
    propertyCount: 0,
    experienceCount: 12,
    responseRate: 100,
    bio: "Leading adventure tourism company offering thrilling experiences on the Nile.",
    specialties: ["Water Sports", "Adventure Tours", "Group Activities"],
    notificationsEnabled: true,
    recentActivity: [
      {
        type: "new_experience",
        message: "Added new experience: Mountain Hiking Adventure",
        date: "3 days ago",
      },
      {
        type: "schedule_update",
        message: "Updated availability for White Water Rafting",
        date: "5 days ago",
      },
    ],
    following: true,
  },
  {
    id: "host3",
    name: "Emily L.",
    image: "/images/host-emily.png",
    location: "Jinja, Uganda",
    joinDate: "2021-08-20",
    superhost: true,
    verified: true,
    rating: 4.7,
    reviewCount: 89,
    propertyCount: 2,
    experienceCount: 1,
    responseRate: 95,
    bio: "Family-friendly accommodations with a focus on comfort and local experiences.",
    specialties: ["Family Homes", "Local Culture", "Group Stays"],
    notificationsEnabled: false,
    recentActivity: [
      {
        type: "review_response",
        message: "Responded to recent guest reviews",
        date: "1 day ago",
      },
    ],
    following: true,
  },
]

const suggestedHosts = [
  {
    id: "host4",
    name: "David K.",
    image: "/images/host-david.png",
    location: "Mukono, Uganda",
    joinDate: "2019-11-10",
    superhost: true,
    verified: true,
    rating: 4.9,
    reviewCount: 127,
    propertyCount: 1,
    experienceCount: 2,
    responseRate: 99,
    bio: "Luxury lakeside accommodations with premium amenities and personalized service.",
    specialties: ["Luxury Villas", "Lakeside Properties", "Romantic Getaways"],
    following: false,
  },
  {
    id: "host5",
    name: "Grace N.",
    image: "/images/host-grace.png",
    location: "Fort Portal, Uganda",
    joinDate: "2023-01-15",
    superhost: false,
    verified: true,
    rating: 4.6,
    reviewCount: 38,
    propertyCount: 1,
    experienceCount: 0,
    responseRate: 92,
    bio: "Mountain retreat specialist offering peaceful escapes in nature.",
    specialties: ["Mountain Views", "Nature Retreats", "Hiking Access"],
    following: false,
  },
  {
    id: "host6",
    name: "John D.",
    image: "/images/host-john.png",
    location: "Entebbe, Uganda",
    joinDate: "2022-07-03",
    superhost: false,
    verified: true,
    rating: 4.4,
    reviewCount: 72,
    propertyCount: 1,
    experienceCount: 1,
    responseRate: 88,
    bio: "Airport-convenient accommodations perfect for travelers and business guests.",
    specialties: ["Airport Access", "Business Travel", "Transit Stays"],
    following: false,
  },
]

export default function FollowingPage() {
  const [hosts, setHosts] = useState([...followedHosts])
  const [suggested, setSuggested] = useState([...suggestedHosts])
  const [searchQuery, setSearchQuery] = useState("")

  const toggleFollow = (hostId: string, isCurrentlyFollowing: boolean) => {
    if (isCurrentlyFollowing) {
      // Unfollow - move from followed to suggested
      const hostToMove = hosts.find((h) => h.id === hostId)
      if (hostToMove) {
        setHosts((prev) => prev.filter((h) => h.id !== hostId))
        setSuggested((prev) => [...prev, { ...hostToMove, following: false }])
      }
    } else {
      // Follow - move from suggested to followed
      const hostToMove = suggested.find((h) => h.id === hostId)
      if (hostToMove) {
        setSuggested((prev) => prev.filter((h) => h.id !== hostId))
        setHosts((prev) => [
          ...prev,
          { ...hostToMove, following: true, notificationsEnabled: true, recentActivity: [] },
        ])
      }
    }
  }

  const toggleNotifications = (hostId: string) => {
    setHosts((prev) =>
      prev.map((host) => (host.id === hostId ? { ...host, notificationsEnabled: !host.notificationsEnabled } : host)),
    )
  }

  const filteredHosts = hosts.filter(
    (host) =>
      host.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      host.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      host.specialties.some((specialty) => specialty.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  const filteredSuggested = suggested.filter(
    (host) =>
      host.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      host.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      host.specialties.some((specialty) => specialty.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Following</h1>
          <p className="text-muted-foreground">Stay updated with your favorite hosts and discover new ones</p>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search hosts by name, location, or specialty..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <Tabs defaultValue="following" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="following">Following ({hosts.length})</TabsTrigger>
            <TabsTrigger value="discover">Discover New Hosts</TabsTrigger>
          </TabsList>

          <TabsContent value="following" className="mt-6">
            {filteredHosts.length === 0 ? (
              <Card>
                <CardContent className="p-8 text-center">
                  <UserPlus className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">
                    {searchQuery ? "No hosts found" : "Not following any hosts yet"}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {searchQuery
                      ? "Try adjusting your search terms"
                      : "Follow your favorite hosts to get updates about their properties and experiences"}
                  </p>
                  {!searchQuery && (
                    <Button onClick={() => document.querySelector('[value="discover"]')?.click()}>
                      Discover Hosts
                    </Button>
                  )}
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredHosts.map((host) => (
                  <Card key={host.id} className="overflow-hidden">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <Avatar className="w-12 h-12">
                            <AvatarImage src={host.image || "/placeholder.svg"} />
                            <AvatarFallback>{host.name[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center gap-2">
                              <CardTitle className="text-lg">{host.name}</CardTitle>
                              {host.superhost && (
                                <Badge variant="secondary">
                                  <Award className="w-3 h-3 mr-1" />
                                  Superhost
                                </Badge>
                              )}
                              {host.verified && (
                                <Badge variant="outline">
                                  <Shield className="w-3 h-3 mr-1" />
                                  Verified
                                </Badge>
                              )}
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <MapPin className="w-3 h-3 mr-1" />
                              {host.location}
                            </div>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" onClick={() => toggleNotifications(host.id)}>
                          {host.notificationsEnabled ? (
                            <Bell className="w-4 h-4 text-primary" />
                          ) : (
                            <BellOff className="w-4 h-4 text-muted-foreground" />
                          )}
                        </Button>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                          <span className="font-medium">{host.rating}</span>
                          <span className="text-muted-foreground ml-1">({host.reviewCount})</span>
                        </div>
                        <span className="text-muted-foreground">{host.responseRate}% response rate</span>
                      </div>

                      <p className="text-sm text-muted-foreground line-clamp-2">{host.bio}</p>

                      <div className="flex flex-wrap gap-1">
                        {host.specialties.slice(0, 2).map((specialty) => (
                          <Badge key={specialty} variant="secondary" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                        {host.specialties.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{host.specialties.length - 2}
                          </Badge>
                        )}
                      </div>

                      <div className="text-sm">
                        <div className="flex items-center gap-4">
                          {host.propertyCount > 0 && (
                            <div className="flex items-center">
                              <Home className="w-4 h-4 mr-1" />
                              <span>{host.propertyCount} properties</span>
                            </div>
                          )}
                          {host.experienceCount > 0 && (
                            <div className="flex items-center">
                              <Camera className="w-4 h-4 mr-1" />
                              <span>{host.experienceCount} experiences</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {host.recentActivity && host.recentActivity.length > 0 && (
                        <div className="border-t pt-3">
                          <h4 className="text-sm font-medium mb-2">Recent Activity</h4>
                          <div className="space-y-1">
                            {host.recentActivity.slice(0, 2).map((activity, index) => (
                              <div key={index} className="text-xs text-muted-foreground">
                                <span>{activity.message}</span>
                                <span className="ml-2">• {activity.date}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="flex gap-2 pt-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => toggleFollow(host.id, true)}
                          className="flex-1"
                        >
                          <UserMinus className="w-4 h-4 mr-2" />
                          Unfollow
                        </Button>
                        <Button variant="outline" size="sm">
                          View Profile
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="discover" className="mt-6">
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Suggested Hosts</h2>
              <p className="text-muted-foreground">
                Discover amazing hosts based on your preferences and booking history
              </p>
            </div>

            {filteredSuggested.length === 0 ? (
              <Card>
                <CardContent className="p-8 text-center">
                  <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No hosts found</h3>
                  <p className="text-muted-foreground">Try adjusting your search terms to find more hosts</p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSuggested.map((host) => (
                  <Card key={host.id} className="overflow-hidden">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={host.image || "/placeholder.svg"} />
                          <AvatarFallback>{host.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center gap-2">
                            <CardTitle className="text-lg">{host.name}</CardTitle>
                            {host.superhost && (
                              <Badge variant="secondary">
                                <Award className="w-3 h-3 mr-1" />
                                Superhost
                              </Badge>
                            )}
                            {host.verified && (
                              <Badge variant="outline">
                                <Shield className="w-3 h-3 mr-1" />
                                Verified
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="w-3 h-3 mr-1" />
                            {host.location}
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                          <span className="font-medium">{host.rating}</span>
                          <span className="text-muted-foreground ml-1">({host.reviewCount})</span>
                        </div>
                        <span className="text-muted-foreground">{host.responseRate}% response rate</span>
                      </div>

                      <p className="text-sm text-muted-foreground line-clamp-2">{host.bio}</p>

                      <div className="flex flex-wrap gap-1">
                        {host.specialties.slice(0, 2).map((specialty) => (
                          <Badge key={specialty} variant="secondary" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                        {host.specialties.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{host.specialties.length - 2}
                          </Badge>
                        )}
                      </div>

                      <div className="text-sm">
                        <div className="flex items-center gap-4">
                          {host.propertyCount > 0 && (
                            <div className="flex items-center">
                              <Home className="w-4 h-4 mr-1" />
                              <span>{host.propertyCount} properties</span>
                            </div>
                          )}
                          {host.experienceCount > 0 && (
                            <div className="flex items-center">
                              <Camera className="w-4 h-4 mr-1" />
                              <span>{host.experienceCount} experiences</span>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex gap-2 pt-2">
                        <Button size="sm" onClick={() => toggleFollow(host.id, false)} className="flex-1">
                          <UserPlus className="w-4 h-4 mr-2" />
                          Follow
                        </Button>
                        <Button variant="outline" size="sm">
                          View Profile
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  )
}
