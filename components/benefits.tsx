import { Heart, Zap, Shield, Users } from "lucide-react"

const benefits = [
  {
    icon: Heart,
    title: "Physical Fitness",
    description: "Full-body workout that improves strength, flexibility, and cardiovascular health.",
  },
  {
    icon: Zap,
    title: "Build Confidence",
    description: "Develop mental toughness and self-assurance through progressive skill mastery.",
  },
  {
    icon: Shield,
    title: "Self-Defense",
    description: "Learn practical techniques to protect yourself in real-world situations.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Join a supportive family of like-minded individuals pursuing excellence.",
  },
]

export function Benefits() {
  return (
    <section id="benefits" className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6 text-balance">
            Why Choose <span className="text-red-600">Jiu Jitsu?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Transform your life through the art of Brazilian Jiu Jitsu
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-red-600 to-red-700 rounded-3xl mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-xl shadow-red-600/30">
                <benefit.icon className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed text-base">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
