import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import Footer from "@/components/footer"
import { Gift, Heart, Calendar, Mail, CreditCard, Users, Star, CheckCircle, MapPin } from "lucide-react"

const giftCardAmounts = [
  { value: 50000, label: "UGX 50,000", popular: false },
  { value: 100000, label: "UGX 100,000", popular: true },
  { value: 200000, label: "UGX 200,000", popular: false },
  { value: 500000, label: "UGX 500,000", popular: false },
  { value: 1000000, label: "UGX 1,000,000", popular: false },
]

const occasions = [
  { value: "birthday", label: "Birthday", icon: "🎂" },
  { value: "wedding", label: "Wedding", icon: "💒" },
  { value: "graduation", label: "Graduation", icon: "🎓" },
  { value: "anniversary", label: "Anniversary", icon: "💕" },
  { value: "holiday", label: "Holiday", icon: "🎄" },
  { value: "thank-you", label: "Thank You", icon: "🙏" },
  { value: "congratulations", label: "Congratulations", icon: "🎉" },
  { value: "just-because", label: "Just Because", icon: "💝" },
]

const features = [
  {
    icon: CheckCircle,
    title: "Never Expires",
    description: "Roomy gift cards never expire, so recipients can use them whenever they're ready to travel",
  },
  {
    icon: MapPin,
    title: "Use Anywhere",
    description: "Valid for any accommodation on Roomy across Uganda and future international destinations",
  },
  {
    icon: Users,
    title: "Flexible Recipients",
    description: "Can be used by the recipient or transferred to family and friends",
  },
  {
    icon: CreditCard,
    title: "Easy to Redeem",
    description: "Simple redemption process during checkout with unique gift card code",
  },
]

const popularDestinations = [
  {
    name: "Kampala City",
    description: "Urban adventures and cultural experiences",
    averagePrice: "UGX 80,000/night",
    image: "/placeholder.svg?height=200&width=300&text=Kampala+City",
  },
  {
    name: "Entebbe",
    description: "Lakeside relaxation and airport convenience",
    averagePrice: "UGX 120,000/night",
    image: "/placeholder.svg?height=200&width=300&text=Entebbe+Lakeside",
  },
  {
    name: "Jinja",
    description: "Adventure sports and Nile River activities",
    averagePrice: "UGX 100,000/night",
    image: "/placeholder.svg?height=200&width=300&text=Jinja+Adventure",
  },
  {
    name: "Murchison Falls",
    description: "Safari experiences and wildlife viewing",
    averagePrice: "UGX 250,000/night",
    image: "/placeholder.svg?height=200&width=300&text=Murchison+Safari",
  },
]

const testimonials = [
  {
    name: "Sarah Nakato",
    location: "Kampala",
    message:
      "Gave my daughter a Roomy gift card for her graduation. She used it for a wonderful weekend in Jinja with her friends. Perfect gift!",
    rating: 5,
  },
  {
    name: "David Okello",
    location: "Entebbe",
    message:
      "Received a gift card from my colleagues for my wedding. We used it for our honeymoon in Murchison Falls. Amazing experience!",
    rating: 5,
  },
  {
    name: "Grace Atim",
    location: "Gulu",
    message:
      "Love how easy it was to purchase and send. My sister was so surprised and had a great time exploring Kampala!",
    rating: 5,
  },
]

export default function GiftCardsPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-pink-100 p-4 rounded-full">
              <Gift className="w-16 h-16 text-pink-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Give the Gift of Travel</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Share unforgettable experiences with Roomy gift cards. Perfect for any occasion, redeemable anywhere on our
            platform.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Gift Card Purchase Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Create Your Gift Card</CardTitle>
                <CardDescription>Design a personalized gift card for your loved ones</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Amount Selection */}
                <div>
                  <label className="text-sm font-medium mb-3 block">Select Amount *</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {giftCardAmounts.map((amount) => (
                      <Card key={amount.value} className="cursor-pointer hover:shadow-md transition-shadow relative">
                        {amount.popular && (
                          <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-primary">
                            Most Popular
                          </Badge>
                        )}
                        <CardContent className="p-4 text-center">
                          <div className="text-lg font-bold">{amount.label}</div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  <div className="mt-3">
                    <Input placeholder="Or enter custom amount (min UGX 25,000)" />
                  </div>
                </div>

                {/* Occasion */}
                <div>
                  <label className="text-sm font-medium mb-3 block">Occasion</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {occasions.map((occasion) => (
                      <Card key={occasion.value} className="cursor-pointer hover:shadow-md transition-shadow">
                        <CardContent className="p-3 text-center">
                          <div className="text-2xl mb-1">{occasion.icon}</div>
                          <div className="text-sm font-medium">{occasion.label}</div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Recipient Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Recipient's Name *</label>
                    <Input placeholder="Enter recipient's full name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Recipient's Email *</label>
                    <Input type="email" placeholder="recipient@example.com" />
                  </div>
                </div>

                {/* Sender Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Your Name *</label>
                    <Input placeholder="Enter your full name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Your Email *</label>
                    <Input type="email" placeholder="your@example.com" />
                  </div>
                </div>

                {/* Personal Message */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Personal Message</label>
                  <Textarea placeholder="Write a personal message to your recipient (optional)" rows={4} />
                </div>

                {/* Delivery Options */}
                <div>
                  <label className="text-sm font-medium mb-3 block">Delivery Options</label>
                  <div className="space-y-3">
                    <Card className="cursor-pointer hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <Mail className="w-5 h-5 text-primary" />
                          <div>
                            <div className="font-medium">Send Now via Email</div>
                            <div className="text-sm text-muted-foreground">
                              Recipient receives gift card immediately
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="cursor-pointer hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <Calendar className="w-5 h-5 text-primary" />
                          <div className="flex-1">
                            <div className="font-medium">Schedule Delivery</div>
                            <div className="text-sm text-muted-foreground">Choose when to send the gift card</div>
                          </div>
                          <Input type="date" className="w-auto" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Purchase Button */}
                <div className="pt-4">
                  <Button className="w-full" size="lg">
                    <CreditCard className="w-5 h-5 mr-2" />
                    Purchase Gift Card
                  </Button>
                  <p className="text-xs text-muted-foreground mt-2 text-center">
                    Secure payment processing. Gift cards are delivered instantly via email.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Gift Card Preview */}
          <div>
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Gift Card Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground p-6 rounded-lg mb-4">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="text-2xl font-bold">Roomy</div>
                      <div className="text-sm opacity-90">Gift Card</div>
                    </div>
                    <Gift className="w-8 h-8 opacity-90" />
                  </div>
                  <div className="text-3xl font-bold mb-2">UGX 100,000</div>
                  <div className="text-sm opacity-90 mb-4">To: Recipient Name</div>
                  <div className="text-xs opacity-75">"Happy Birthday! Enjoy your travels!"</div>
                  <div className="mt-4 pt-4 border-t border-primary-foreground/20">
                    <div className="text-xs opacity-75">Gift Card Code</div>
                    <div className="font-mono text-sm">ROOMY-XXXX-XXXX</div>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground">
                  This is a preview. The actual gift card will be customized with your details.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Roomy Gift Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Popular Destinations */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Popular Destinations</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Your gift card recipients can choose from these amazing destinations and many more
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularDestinations.map((destination, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video bg-gray-100">
                  <img
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-1">{destination.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{destination.description}</p>
                  <div className="text-sm font-medium text-primary">{destination.averagePrice}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.message}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How to Redeem */}
        <div className="mb-16">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">How to Redeem Your Gift Card</CardTitle>
              <CardDescription>Simple steps to use your Roomy gift card</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="font-semibold mb-2">Browse & Book</h3>
                  <p className="text-sm text-muted-foreground">
                    Find your perfect accommodation and proceed to checkout
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">2</span>
                  </div>
                  <h3 className="font-semibold mb-2">Enter Code</h3>
                  <p className="text-sm text-muted-foreground">Enter your gift card code at checkout</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                  <h3 className="font-semibold mb-2">Apply Credit</h3>
                  <p className="text-sm text-muted-foreground">
                    Gift card value is automatically applied to your booking
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">4</span>
                  </div>
                  <h3 className="font-semibold mb-2">Enjoy Your Stay</h3>
                  <p className="text-sm text-muted-foreground">
                    Complete your booking and enjoy your travel experience
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do gift cards expire?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  No, Roomy gift cards never expire. Recipients can use them whenever they're ready to travel.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I use multiple gift cards?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, you can combine multiple gift cards for a single booking, and you can also use them with other
                  payment methods.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What if my booking costs less than the gift card value?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The remaining balance stays on your gift card and can be used for future bookings.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I get a refund for my gift card?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Gift cards are non-refundable, but they never expire so you can always use them for future travel.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="text-center py-12">
            <Heart className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl font-bold mb-4">Give the Perfect Gift Today</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Whether it's for a birthday, anniversary, or just because, a Roomy gift card opens up a world of travel
              possibilities.
            </p>
            <Button variant="secondary" size="lg">
              <Gift className="w-5 h-5 mr-2" />
              Create Gift Card
            </Button>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  )
}
