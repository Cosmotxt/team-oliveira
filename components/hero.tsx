import { ArrowRight, Award, Clock, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-black">
      <div className="container mx-auto px-4 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="relative mt-28 z-10 space-y-8 animate-fade-in-up">

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Train with
              <br />
              <span className="text-red-600">Purpose.</span>
              <br />
              Fight with
              <br />
              <span className="text-red-600">Passion.</span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-400 max-w-xl text-pretty leading-relaxed">
              Join Team Oliveira Brazilian Jiu Jitsu — Where Discipline Meets Confidence. Transform your body and mind
              through authentic Brazilian Jiu Jitsu training.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 py-4">
              <div className="space-y-1">
                <div className="text-3xl font-bold text-white">15+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-sm text-gray-400">Active Students</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-sm text-gray-400">Champions</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6 shadow-lg shadow-red-600/30 hover:shadow-xl hover:shadow-red-600/40 transition-all group"
              >
                Book a Free Trial Class
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/20 text-white hover:bg-white hover:text-black text-lg px-8 py-6 bg-transparent transition-all"
              >
                View Schedule
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:absolute bg-amber-700 lg:right-0 lg:top-0 lg:h-screen lg:w-[90%]">
            <div className="h-1 w-full bg-red-700 rotate-2"></div>              
            {/* Image Container */}
            <div className="relative h-[500px] lg:h-full rounded-2xl lg:rounded-none overflow-hidden">
              <Image
                src="/hero-image.jpg"
                alt="Brazilian Jiu Jitsu Training"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
              {/* linear Overlay */}
              <div className="absolute inset-0 bg-linear-to-r from-black via-black/50 to-transparent lg:from-black lg:via-black/80 lg:to-transparent" />

              {/* Floating Badge */}
              <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-6 py-4">
                <div className="flex items-center gap-3">
                  <Users className="h-8 w-8 text-red-500" />
                  <div>
                    <div className="text-2xl font-bold text-white">20+</div>
                    <div className="text-sm text-gray-300">Classes Weekly</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
    </section>
  )
}
