"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ApartmentList from "@/components/apartment-list"
import SearchBar from "@/components/search-bar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Shield, Heart, Star, Users, TrendingUp, Award, MapPin, Clock } from "lucide-react"
import Link from "next/link"
import ChatBox from "@/components/chat-box"
import Image from "next/image"

export default function Home() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push("/auth/welcome")
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          <p className="text-muted-foreground animate-pulse">Loading your experience...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  const stats = [
    { icon: Shield, label: "Verified Hosts", value: "10,000+", color: "bg-pink-100 text-pink-600" },
    { icon: Users, label: "Happy Guests", value: "50,000+", color: "bg-purple-100 text-purple-600" },
    { icon: MapPin, label: "Properties", value: "5,000+", color: "bg-blue-100 text-blue-600" },
    { icon: Star, label: "Average Rating", value: "4.8", color: "bg-yellow-100 text-yellow-600" },
  ]

  const features = [
    {
      icon: Shield,
      title: "Verified & Secure",
      description: "All hosts undergo thorough verification and background checks",
      gradient: "from-pink-500 to-pink-600",
    },
    {
      icon: Heart,
      title: "Best Price Guarantee",
      description: "We match any lower price you find for the same property",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      icon: Award,
      title: "Top Rated Properties",
      description: "Only the highest quality accommodations make it to our platform",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Our dedicated team is always here to help you anytime",
      gradient: "from-green-500 to-green-600",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Digital Nomad",
      image: "/images/host-sarah.png",
      rating: 5,
      text: "Roomy made finding accommodation in Uganda so easy! The apartments are exactly as described and the hosts are incredibly welcoming.",
    },
    {
      name: "David Chen",
      role: "Travel Blogger",
      image: "/images/host-david.png",
      rating: 5,
      text: "I've stayed in 5 different properties through Roomy and each experience has been fantastic. The platform is reliable and professional.",
    },
    {
      name: "Emily Williams",
      role: "Business Traveler",
      image: "/images/host-emily.png",
      rating: 5,
      text: "The booking process is seamless, properties are verified, and customer support is outstanding. Highly recommend for anyone visiting Uganda!",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Header />

      <main className="overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-100/50 via-purple-100/50 to-blue-100/50 dark:from-pink-950/20 dark:via-purple-950/20 dark:to-blue-950/20" />

          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto text-center mb-8 sm:mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 sm:mb-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg border border-pink-200 dark:border-pink-900">
                <TrendingUp className="w-4 h-4 text-pink-600" />
                <span className="text-xs sm:text-sm font-medium text-pink-600">Uganda's #1 Accommodation Platform</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
                Welcome back, <span className="text-gradient">{user.name.split(" ")[0]}</span>!
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
                Discover extraordinary stays across Uganda's most stunning destinations. From cozy city apartments to
                luxury lakeside villas.
              </p>

              <div className="w-full max-w-4xl mx-auto px-4">
                <SearchBar />
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mt-8 sm:mt-12 max-w-6xl mx-auto">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"
                >
                  <CardContent className="pt-4 sm:pt-6 text-center">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3`}
                    >
                      <stat.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 text-foreground">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-950">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Why Choose Roomy?</h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Experience the difference with our premium features and exceptional service
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="group relative overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />
                  <CardContent className="pt-6 sm:pt-8 relative z-10">
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}
                    >
                      <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-center">{feature.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground text-center leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Properties Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 md:mb-12 gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Featured Properties</h2>
                <p className="text-sm sm:text-base text-muted-foreground">Hand-picked accommodations just for you</p>
              </div>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="w-full sm:w-auto hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
              >
                <Link href="/explore" className="flex items-center justify-center">
                  View All <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>

            <ApartmentList />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="relative overflow-hidden border-none shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-90" />

              <CardContent className="relative z-10 p-6 sm:p-8 md:p-12 lg:p-16 text-center text-white">
                <div className="max-w-3xl mx-auto">
                  <Award className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 animate-bounce" />
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6">
                    Start Earning as a Host
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 leading-relaxed">
                    Share your space with travelers from around the world and turn your property into a reliable source
                    of income. Join thousands of successful hosts today.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                    <Button
                      size="lg"
                      className="bg-white text-purple-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all hover:scale-105 w-full sm:w-auto"
                      asChild
                    >
                      <Link href="/list-property" className="flex items-center justify-center">
                        List Your Property <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm w-full sm:w-auto bg-transparent"
                      asChild
                    >
                      <Link href="/become-host">Learn More</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">What Our Guests Say</h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Real experiences from real travelers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex gap-1 mb-3 sm:mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center gap-3">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                      <div>
                        <div className="font-semibold text-sm sm:text-base">{testimonial.name}</div>
                        <div className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ChatBox />
    </div>
  )
}
