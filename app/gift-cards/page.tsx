import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Footer from "@/components/footer"
import {
  Gift,
  Heart,
  Calendar,
  Mail,
  CreditCard,
  MapPin,
  Star,
  Clock,
  CheckCircle,
  Users,
  Home,
  Plane,
  Camera,
} from "lucide-react"

const giftAmounts = [
  { value: 50000, label: "UGX 50,000", popular: false },
  { value: 100000, label: "UGX 100,000", popular: true },
  { value: 200000, label: "UGX 200,000", popular: false },
  { value: 500000, label: "UGX 500,000", popular: false },
  { value: 1000000, label: "UGX 1,000,000", popular: false },
]

const occasions = [
  { id: "birthday", label: "Birthday", icon: Gift, color: "bg-pink-100 text-pink-600" },
  { id: "wedding", label: "Wedding", icon: Heart, color: "bg-red-100 text-red-600" },
  { id: "graduation", label: "Graduation", icon: Users, color: "bg-blue-100 text-blue-600" },
  { id: "anniversary", label: "Anniversary", icon: Calendar, color: "bg-purple-100 text-purple-600" },
  { id: "holiday", label: "Holiday", icon: Star, color: "bg-green-100 text-green-600" },
  { id: "general", label: "Just Because", icon: Heart, color: "bg-yellow-100 text-yellow-600" },
]

const giftCardFeatures = [
  {
    title: "Never Expires",
    description: "Gift cards remain valid indefinitely with no expiration date",
    icon: Clock,
  },
  {
    title: "Use Anywhere",
    description: "Valid for any accommodation or experience on Roomy platform",
    icon: MapPin,
  },
  {
    title: "Flexible Amounts",
    description: "Choose any amount or let recipient add funds if needed",
    icon: CreditCard,
  },
  {
    title: "Easy Redemption",
    description: "Simple redemption process with unique gift card code",
    icon: CheckCircle,
  },
]

const popularDestinations = [
  {
    name: "Kampala City Apartments",
    price: "From UGX 80,000/night",
    image: "/placeholder.svg?height=200&width=300&text=Kampala+Apartments",
    rating: 4.8,
    reviews: 245,
  },
  {
    name: "Jinja Adventure Lodges",
    price: "From UGX 120,000/night",
    image: "/placeholder.svg?height=200&width=300&text=Jinja+Lodges",
    rating: 4.9,
    reviews: 189,
  },
  {
    name: "Entebbe Lakeside Villas",
    price: "From UGX 150,000/night",
    image: "/placeholder.svg?height=200&width=300&text=Entebbe+Villas",
    rating: 4.7,
    reviews: 156,
  },
  {
    name: "Murchison Safari Camps",
    price: "From UGX 200,000/night",
    image: "/placeholder.svg?height=200&width=300&text=Safari+Camps",
    rating: 4.9,
    reviews: 98,
  },
]

const testimonials = [
  {
    name: "Sarah Nakato",
    occasion: "Wedding Gift",
    amount: "UGX 500,000",
    quote:
      "Gave this to my sister for her honeymoon. She and her husband had the most amazing time exploring Uganda's hidden gems. Perfect gift!",
    image: "/placeholder.svg?height=60&width=60&text=Sarah",
  },
  {
    name: "David Okello",
    occasion: "Birthday Surprise",
    amount: "UGX 200,000",
    quote:
      "My daughter was thrilled with her birthday gift card. She used it for a weekend getaway with friends. The flexibility was perfect.",
    image: "/placeholder.svg?height=60&width=60&text=David",
  },
  {
    name: "Grace Atim",
    occasion: "Graduation Gift",
    amount: "UGX 300,000",
    quote:
      "Bought this for my nephew's graduation. He's been wanting to travel more, and this gave him the perfect opportunity to explore.",
    image: "/placeholder.svg?height=60&width=60&text=Grace",
  },
]

const faqItems = [
  {
    question: "How long are gift cards valid?",
    answer: "Roomy gift cards never expire! Recipients can use them whenever they're ready to travel.",
  },
  {
    question: "Can gift cards be used for any booking?",
    answer: "Yes, gift cards can be used for any accommodation or experience available on the Roomy platform.",
  },
  {
    question: "What if the booking costs more than the gift card amount?",
    answer: "Recipients can easily pay the difference using any accepted payment method during checkout.",
  },
  {
    question: "Can I send a gift card to someone in another country?",
    answer: "Yes, gift cards can be sent via email to anyone, anywhere in the world.",
  },
  {
    question: "Is it possible to refund a gift card?",
    answer: "Gift cards are non-refundable once purchased, but they never expire so can always be used later.",
  },
  {
    question: "Can multiple gift cards be used for one booking?",
    answer: "Yes, recipients can combine multiple gift cards and use them together for larger bookings.",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gift Cards</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Give the gift of authentic travel experiences. Perfect for any occasion, our gift cards let your loved ones
            discover Uganda's hidden gems.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Gift Card Creator */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Create Your Gift Card</CardTitle>
                <CardDescription>Customize the perfect gift for your loved ones</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Amount Selection */}
                <div>
                  <Label className="text-base font-semibold mb-4 block">Choose Amount</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {giftAmounts.map((amount) => (
                      <div key={amount.value} className="relative">
                        <input
                          type="radio"
                          id={`amount-${amount.value}`}
                          name="amount"
                          value={amount.value}
                          className="peer sr-only"
                        />
                        <label
                          htmlFor={`amount-${amount.value}`}
                          className="flex items-center justify-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-primary peer-checked:border-primary peer-checked:bg-primary/5 relative"
                        >
                          {amount.popular && (
                            <Badge className="absolute -top-2 -right-2 bg-primary text-primary-foreground">
                              Popular
                            </Badge>
                          )}
                          <span className="font-semibold">{amount.label}</span>
                        </label>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3">
                    <Label htmlFor="custom-amount" className="text-sm text-muted-foreground">
                      Or enter custom amount:
                    </Label>
                    <Input
                      id="custom-amount"
                      placeholder="Enter amount in UGX"
                      className="mt-1"
                      type="number"
                      min="10000"
                    />
                  </div>
                </div>

                {/* Occasion Selection */}
                <div>
                  <Label className="text-base font-semibold mb-4 block">Select Occasion</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {occasions.map((occasion) => (
                      <div key={occasion.id} className="relative">
                        <input
                          type="radio"
                          id={`occasion-${occasion.id}`}
                          name="occasion"
                          value={occasion.id}
                          className="peer sr-only"
                        />
                        <label
                          htmlFor={`occasion-${occasion.id}`}
                          className="flex flex-col items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-primary peer-checked:border-primary peer-checked:bg-primary/5"
                        >
                          <div className={`p-2 rounded-full ${occasion.color} mb-2`}>
                            <occasion.icon className="w-5 h-5" />
                          </div>
                          <span className="text-sm font-medium">{occasion.label}</span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recipient Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="recipient-name">Recipient Name</Label>
                    <Input id="recipient-name" placeholder="Enter recipient's name" />
                  </div>
                  <div>
                    <Label htmlFor="recipient-email">Recipient Email</Label>
                    <Input id="recipient-email" type="email" placeholder="Enter recipient's email" />
                  </div>
                </div>

                {/* Sender Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="sender-name">Your Name</Label>
                    <Input id="sender-name" placeholder="Enter your name" />
                  </div>
                  <div>
                    <Label htmlFor="sender-email">Your Email</Label>
                    <Input id="sender-email" type="email" placeholder="Enter your email" />
                  </div>
                </div>

                {/* Personal Message */}
                <div>
                  <Label htmlFor="message">Personal Message (Optional)</Label>
                  <Textarea
                    id="message"
                    placeholder="Write a personal message to the recipient..."
                    className="min-h-[100px]"
                  />
                </div>

                {/* Delivery Options */}
                <div>
                  <Label className="text-base font-semibold mb-4 block">Delivery Options</Label>
                  <RadioGroup defaultValue="immediate">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="immediate" id="immediate" />
                      <Label htmlFor="immediate">Send immediately</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="scheduled" id="scheduled" />
                      <Label htmlFor="scheduled">Schedule for later</Label>
                    </div>
                  </RadioGroup>
                  <div className="mt-2">
                    <Input type="datetime-local" className="w-full md:w-auto" />
                  </div>
                </div>

                {/* Purchase Button */}
                <Button className="w-full" size="lg">
                  <CreditCard className="w-5 h-5 mr-2" />
                  Purchase Gift Card
                </Button>
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
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-lg font-bold">Roomy Gift Card</div>
                    <Gift className="w-6 h-6" />
                  </div>
                  <div className="text-2xl font-bold mb-2">UGX 100,000</div>
                  <div className="text-sm opacity-90 mb-4">For: John Doe</div>
                  <div className="text-sm opacity-90 mb-4">From: Jane Smith</div>
                  <div className="text-xs opacity-75">"Wishing you amazing adventures and unforgettable memories!"</div>
                  <div className="mt-4 pt-4 border-t border-primary-foreground/20">
                    <div className="text-xs opacity-75">Gift Card Code</div>
                    <div className="font-mono text-sm">ROOMY-XXXX-XXXX</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  This preview will update as you customize your gift card above.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Roomy Gift Cards?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {giftCardFeatures.map((feature, index) => (
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
            Your gift card can be used at any of these amazing destinations and thousands more across Uganda.
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
                  <p className="text-sm text-primary font-medium mb-2">{destination.price}</p>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{destination.rating}</span>
                    <span className="text-sm text-muted-foreground">({destination.reviews} reviews)</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How to Redeem */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">How to Redeem</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">1. Receive Gift Card</h3>
                <p className="text-sm text-muted-foreground">Get your gift card code via email</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-green-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <Home className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">2. Browse & Book</h3>
                <p className="text-sm text-muted-foreground">Choose your perfect accommodation</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-purple-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <CreditCard className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">3. Apply at Checkout</h3>
                <p className="text-sm text-muted-foreground">Enter your gift card code during payment</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-orange-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <Plane className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="font-semibold mb-2">4. Enjoy Your Trip</h3>
                <p className="text-sm text-muted-foreground">Create unforgettable memories</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Happy Gift Recipients</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.occasion} • {testimonial.amount}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqItems.map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">{item.question}</h3>
                  <p className="text-sm text-muted-foreground">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="text-center py-12">
            <Camera className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl font-bold mb-4">Give the Gift of Adventure</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Create lasting memories for your loved ones with a Roomy gift card. Perfect for any occasion, any amount,
              any time.
            </p>
            <Button variant="secondary" size="lg">
              <Gift className="w-5 h-5 mr-2" />
              Create Gift Card Now
            </Button>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  )
}
