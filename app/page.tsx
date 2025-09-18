import Header from "@/components/header"
import Footer from "@/components/footer"
import SearchBar from "@/components/search-bar"
import ApartmentList from "@/components/apartment-list"
import Testimonials from "@/components/testimonials"
import ChatBox from "@/components/chat-box"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Users, Shield, Award, Globe, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const features = [
    {
      icon: Shield,
      title: "Verified Properties",
      description: "All properties are verified for safety and quality",
    },
    {
      icon: Award,
      title: "Best Prices",
      description: "Competitive rates with no hidden fees",
    },
    {
      icon: Globe,
      title: "Local Experiences",
      description: "Discover authentic Ugandan culture and activities",
    },
    {
      icon: Heart,
      title: "24/7 Support",
      description: "Round-the-clock customer service in multiple languages",
    },
  ]

  const popularDestinations = [
    {
      name: "Kampala",
      properties: 150,
      image: "/images/kampala-apartment.png",
      description: "Uganda's vibrant capital city",
    },
    {
      name: "Entebbe",
      properties: 45,
      image: "/images/entebbe-studio.png",
      description: "Gateway to Uganda, near the airport",
    },
    {
      name: "Jinja",
      properties: 32,
      image: "/images/jinja-family-home.png",
      description: "Adventure capital of East Africa",
    },
    {
      name: "Mukono",
      properties: 28,
      image: "/images/mukono-villa.png",
      description: "Peaceful suburban living",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Find Your Perfect Stay in Uganda
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover unique accommodations and authentic experiences across the Pearl of Africa. From bustling Kampala
              to serene lakeshores.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <MapPin className="w-4 h-4 mr-2" />
                500+ Properties
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Users className="w-4 h-4 mr-2" />
                10,000+ Happy Guests
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Star className="w-4 h-4 mr-2" />
                4.8 Average Rating
              </Badge>
            </div>
          </div>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto">
            <SearchBar />
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Popular Destinations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore the most sought-after locations across Uganda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularDestinations.map((destination) => (
              <Link key={destination.name} href={`/explore?location=${destination.name.toLowerCase()}`}>
                <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={destination.image || "/placeholder.svg"}
                      alt={destination.name}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-semibold">{destination.name}</h3>
                      <p className="text-sm opacity-90">{destination.properties} properties</p>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground">{destination.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Roomy?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing the best accommodation experience in Uganda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Featured Properties</h2>
              <p className="text-muted-foreground">Handpicked accommodations for an exceptional stay</p>
            </div>
            <Link href="/explore">
              <Button variant="outline">View All Properties</Button>
            </Link>
          </div>

          <ApartmentList />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Guests Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real experiences from travelers who've stayed with us
            </p>
          </div>

          <Testimonials />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Uganda Adventure?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of travelers who've discovered the beauty of Uganda through Roomy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/explore">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Explore Properties
              </Button>
            </Link>
            <Link href="/become-host">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Become a Host
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <ChatBox />
    </div>
  )
}
