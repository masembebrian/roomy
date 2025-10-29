"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Home, DollarSign, Shield, Users, Calendar, TrendingUp, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BecomeHostPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 to-purple-600 text-white py-16 sm:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm border-0 text-base px-4 py-2">
                Start Earning Today
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Become a Host on Roomy</h1>
              <p className="text-lg sm:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                Share your space and earn extra income while meeting travelers from around the world
              </p>
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-white/90 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 h-auto"
              >
                <Link href="/list-property" className="flex items-center">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 sm:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Why Host on Roomy?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
                Join thousands of hosts earning money by sharing their properties
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-500/10 rounded-full flex items-center justify-center mb-4">
                    <DollarSign className="h-6 w-6 sm:h-7 sm:w-7 text-green-500" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">Earn Extra Income</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Set your own prices and earn money from your unused space. Hosts earn an average of UGX 2M per month
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 sm:h-7 sm:w-7 text-blue-500" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">Protected Hosting</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Comprehensive property protection and 24/7 support to keep your property safe
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-purple-500/10 rounded-full flex items-center justify-center mb-4">
                    <Calendar className="h-6 w-6 sm:h-7 sm:w-7 text-purple-500" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">Full Control</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    You decide when to host, how much to charge, and who can book your space
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-orange-500/10 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 sm:h-7 sm:w-7 text-orange-500" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">Meet New People</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Connect with travelers from around the world and share your local knowledge
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-pink-500/10 rounded-full flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 sm:h-7 sm:w-7 text-pink-500" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">Easy Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Simple dashboard to manage bookings, communicate with guests, and track your earnings
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-yellow-500/10 rounded-full flex items-center justify-center mb-4">
                    <Home className="h-6 w-6 sm:h-7 sm:w-7 text-yellow-500" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">List Any Space</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    From apartments to villas, spare rooms to entire homes - all types of properties welcome
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-12 sm:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">How to Get Started</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
                Start hosting in just 3 simple steps
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold mb-2">List Your Property</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Create a listing with photos, description, and set your nightly rate. It takes less than 15 minutes
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Welcome Guests</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Accept bookings, communicate with guests, and prepare your space for their arrival
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Get Paid</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Receive secure payments directly to your bank account 24 hours after guest check-in
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Host Protection */}
        <section className="py-12 sm:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
                <div>
                  <Badge className="mb-4">Host Protection</Badge>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Your Property is Protected</h2>
                  <p className="text-muted-foreground mb-6 text-sm sm:text-base">
                    We provide comprehensive protection for hosts including property damage coverage, liability
                    insurance, and 24/7 customer support.
                  </p>
                  <ul className="space-y-3 sm:space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base">Up to $1M property damage protection</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base">Guest identity verification</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base">Secure payment processing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base">24/7 customer support team</span>
                    </li>
                  </ul>
                </div>
                <div className="relative h-64 sm:h-80 md:h-96">
                  <Image
                    src="/images/host-protection.png"
                    alt="Host Protection"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Ready to Start Earning?</h2>
            <p className="text-lg sm:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Join thousands of hosts already earning extra income on Roomy
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-white/90 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 h-auto"
            >
              <Link href="/list-property" className="flex items-center">
                List Your Property
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
