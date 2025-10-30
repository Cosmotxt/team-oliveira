import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Baby, Shield, Trophy } from "lucide-react"

const programs = [
  {
    icon: Users,
    title: "Adult Brazilian Jiu Jitsu",
    description:
      "Comprehensive BJJ training for adults of all skill levels. Build strength, technique, and confidence.",
    color: "text-red-600",
    bgColor: "bg-red-600/10",
  },
  {
    icon: Baby,
    title: "Kids Jiu Jitsu",
    description: "Fun, engaging classes that teach discipline, respect, and self-defense while building confidence.",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Shield,
    title: "Self-Defense for Women",
    description: "Empowering women with practical self-defense techniques and situational awareness training.",
    color: "text-red-600",
    bgColor: "bg-red-600/10",
  },
  {
    icon: Trophy,
    title: "Competition Team",
    description:
      "Elite training for competitive athletes. Prepare for tournaments with advanced techniques and strategy.",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
]

export function Programs() {
  return (
    <section id="programs" className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/20 via-black to-black" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
            Our <span className="text-red-600">Programs</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Specialized training programs designed for every age and skill level
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="bg-zinc-900/50 backdrop-blur border-zinc-800 hover:border-red-600 transition-all duration-300 group hover:shadow-2xl hover:shadow-red-600/10 hover:-translate-y-2"
            >
              <CardHeader className="space-y-4">
                <div
                  className={`w-16 h-16 ${program.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <program.icon className={`h-8 w-8 ${program.color}`} />
                </div>
                <CardTitle className="text-white text-2xl">{program.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-gray-400 leading-relaxed text-base">
                  {program.description}
                </CardDescription>
                <Button variant="link" className="text-red-600 hover:text-red-500 p-0 font-semibold">
                  Learn More →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
