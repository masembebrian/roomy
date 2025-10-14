import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "United States",
    rating: 5,
    comment:
      "Amazing experience! The apartment was exactly as described and the host was very responsive. Would definitely book again.",
    image: "/images/host-sarah.png",
    date: "December 2023",
  },
  {
    id: 2,
    name: "David Chen",
    location: "Singapore",
    rating: 5,
    comment:
      "Perfect location and beautiful property. Everything was clean and well-maintained. Highly recommend for anyone visiting Kampala.",
    image: "/images/host-john.png",
    date: "November 2023",
  },
  {
    id: 3,
    name: "Emily Thompson",
    location: "United Kingdom",
    rating: 5,
    comment:
      "Wonderful stay! The host went above and beyond to make sure we had everything we needed. The neighborhood was safe and convenient.",
    image: "/images/host-emily.png",
    date: "October 2023",
  },
]

export function Testimonials() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((testimonial) => (
        <Card key={testimonial.id}>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4 mb-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mb-3">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground mb-2">{testimonial.comment}</p>
            <p className="text-xs text-muted-foreground">{testimonial.date}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default Testimonials
