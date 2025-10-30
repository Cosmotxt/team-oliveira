import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Michael Rodriguez",
    role: "Adult Student",
    image: "/male-athlete-portrait.png",
    quote:
      "Training at Team Oliveira changed my life. The instructors are world-class and the community is incredibly supportive.",
  },
  {
    name: "Sarah Johnson",
    role: "Women's Self-Defense",
    image: "/female-athlete-portrait.png",
    quote: "I feel empowered and confident. The self-defense program gave me skills I never thought I could master.",
  },
  {
    name: "David Chen",
    role: "Competition Team",
    image: "/male-bjj-competitor-portrait.jpg",
    quote:
      "The competition training here is elite level. I've won multiple tournaments thanks to Professor Oliveira's guidance.",
  },
]

export function Testimonials() {
  return (
    <section className="py-24 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our <span className="text-red-600">Students Say</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Real stories from our Team Oliveira family</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-black border-zinc-800">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-red-600 text-red-600" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
