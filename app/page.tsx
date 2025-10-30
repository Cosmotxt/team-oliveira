import { About } from "@/components/about"
import { Benefits } from "@/components/benefits"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Location } from "@/components/location"
import { Programs } from "@/components/programs"
import { Schedule } from "@/components/schedule"
import { Testimonials } from "@/components/testimonials"

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any
    }
  }
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Programs />
      <Benefits />
      <Testimonials />
      <Schedule />
      <Location />
      <Footer />
    </main>
  )
}
