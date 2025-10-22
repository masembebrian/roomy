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
import { ArrowRight, Shield, Heart, Star, Users } from "lucide-react"
import Link from "next/link"
import ChatBox from "@/components/chat-box"

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
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600"></div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 -z-10" />
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Welcome back, {user.name.split(" ")[0]}!
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Find your perfect stay in Uganda's most beautiful destinations
              </p>
              <SearchBar />
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="font-semibold mb-2">Verified Hosts</h3>
                <p className="text-sm text-muted-foreground">All hosts undergo thorough verification</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Best Price Guarantee</h3>
                <p className="text-sm text-muted-foreground">Find the best deals on accommodations</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Top Rated</h3>
                <p className="text-sm text-muted-foreground">4.8 star average rating from guests</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">24/7 Support</h3>
                <p className="text-sm text-muted-foreground">Our team is here to help anytime</p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold">Featured Properties</h2>
              <Button variant="outline" asChild>
                <Link href="/explore">
                  View All <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
            <ApartmentList />
          </div>

          <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Become a Host Today</h2>
              <p className="text-lg mb-8 opacity-90">
                Share your space with travelers and start earning extra income. Join our community of trusted hosts
                across Uganda.
              </p>
              <Button size="lg" variant="secondary" className="bg-white text-pink-600 hover:bg-gray-100" asChild>
                <Link href="/list-property">
                  List Your Property <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ChatBox />
    </div>
  )
}
