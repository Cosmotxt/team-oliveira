import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

const scheduleData = [
  {
    day: "Monday",
    classes: ["6:00 AM - Fundamentals", "12:00 PM - Open Mat", "6:00 PM - All Levels", "7:30 PM - Advanced"],
  },
  {
    day: "Tuesday",
    classes: ["6:00 AM - Fundamentals", "4:30 PM - Kids", "6:00 PM - Women's Self-Defense", "7:30 PM - Competition"],
  },
  {
    day: "Wednesday",
    classes: ["6:00 AM - Fundamentals", "12:00 PM - Open Mat", "6:00 PM - All Levels", "7:30 PM - Advanced"],
  },
  {
    day: "Thursday",
    classes: ["6:00 AM - Fundamentals", "4:30 PM - Kids", "6:00 PM - All Levels", "7:30 PM - Competition"],
  },
  { day: "Friday", classes: ["6:00 AM - Fundamentals", "12:00 PM - Open Mat", "6:00 PM - All Levels"] },
  { day: "Saturday", classes: ["9:00 AM - Kids", "10:30 AM - All Levels", "12:00 PM - Open Mat"] },
]

const plans = [
  {
    name: "Monthly",
    price: "$149",
    features: ["Unlimited Classes", "Open Mat Access", "Beginner Friendly", "No Contract"],
  },
  {
    name: "Quarterly",
    price: "$399",
    features: ["Unlimited Classes", "Open Mat Access", "Private Lesson Discount", "Save $48"],
    popular: true,
  },
  {
    name: "Family",
    price: "$349",
    features: ["2+ Family Members", "Unlimited Classes", "Open Mat Access", "Best Value"],
  },
]

export function Schedule() {
  return (
    <section id="schedule" className="py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Schedule */}
        <div className="mb-32">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-6 text-balance">
              Class <span className="text-red-600">Schedule</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Find the perfect time to train with us
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {scheduleData.map((day, index) => (
              <Card
                key={index}
                className="border-2 hover:border-red-600 transition-all hover:shadow-xl hover:shadow-red-600/10 group"
              >
                <CardHeader className="bg-gradient-to-br from-gray-50 to-white">
                  <CardTitle className="text-3xl font-bold group-hover:text-red-600 transition-colors">
                    {day.day}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    {day.classes.map((classTime, i) => (
                      <li key={i} className="text-gray-700 flex items-start gap-3 text-base">
                        <span className="text-red-600 mt-1 text-xl">•</span>
                        <span className="leading-relaxed">{classTime}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div>
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-6 text-balance">
              Membership <span className="text-red-600">Plans</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Choose the plan that fits your goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${plan.popular ? "border-red-600 border-2 shadow-2xl shadow-red-600/20 scale-105" : "border-2 hover:border-gray-300"} transition-all`}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center pb-8 pt-8">
                  <CardTitle className="text-3xl mb-4 font-bold">{plan.name}</CardTitle>
                  <div className="text-6xl font-bold text-red-600 mb-2">{plan.price}</div>
                  <CardDescription className="text-base text-gray-600">per month</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-gray-700 text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${plan.popular ? "bg-red-600 hover:bg-red-700" : "bg-black hover:bg-zinc-800"} text-white shadow-lg`}
                    size="lg"
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button size="lg" className="bg-black hover:bg-zinc-800 text-white text-lg px-12 py-7 shadow-xl">
              Book Your Free Trial Class Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
