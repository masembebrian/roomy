import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    avatar: '/placeholder.svg?height=40&width=40',
    rating: 5,
    text: 'Roomy made finding an apartment in Kampala so easy! The listings were accurate and the booking process was smooth.',
  },
  {
    id: 2,
    name: 'John D.',
    avatar: '/placeholder.svg?height=40&width=40',
    rating: 4,
    text: 'Great selection of properties across Uganda. I found a perfect vacation home in Jinja thanks to Roomy.',
  },
  {
    id: 3,
    name: 'Emily L.',
    avatar: '/placeholder.svg?height=40&width=40',
    rating: 5,
    text: 'The customer service at Roomy is outstanding. They helped me resolve an issue with my booking quickly and efficiently.',
  },
]

export default function Testimonials() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id}>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>{testimonial.name}</CardTitle>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{testimonial.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
