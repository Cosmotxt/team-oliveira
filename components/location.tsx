import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function Location() {
  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-black to-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
            Visit <span className="text-red-600">Our Academy</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Come see our facility and meet our team
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Map */}
          <div className="space-y-8">
            <div className="aspect-video bg-zinc-900 rounded-2xl overflow-hidden border-2 border-zinc-800 shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3042.5!2d-74.1838!3d40.1838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDExJzAxLjciTiA3NMKwMTEnMDEuNyJX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="bg-zinc-900/50 backdrop-blur border-zinc-800 hover:border-red-600 transition-all group">
                <CardContent className="pt-8 pb-8">
                  <div className="w-14 h-14 bg-red-600/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <MapPin className="h-7 w-7 text-red-600" />
                  </div>
                  <h3 className="font-bold text-white mb-3 text-lg">Address</h3>
                  <p className="text-gray-400 leading-relaxed">
                    2905 Route 9<br />
                    Howell, NJ 07731
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900/50 backdrop-blur border-zinc-800 hover:border-red-600 transition-all group">
                <CardContent className="pt-8 pb-8">
                  <div className="w-14 h-14 bg-red-600/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Phone className="h-7 w-7 text-red-600" />
                  </div>
                  <h3 className="font-bold text-white mb-3 text-lg">Phone</h3>
                  <p className="text-gray-400">(732) 555-0123</p>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900/50 backdrop-blur border-zinc-800 hover:border-red-600 transition-all group">
                <CardContent className="pt-8 pb-8">
                  <div className="w-14 h-14 bg-red-600/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Mail className="h-7 w-7 text-red-600" />
                  </div>
                  <h3 className="font-bold text-white mb-3 text-lg">Email</h3>
                  <p className="text-gray-400">info@teamoliveirabjj.com</p>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900/50 backdrop-blur border-zinc-800 hover:border-red-600 transition-all group">
                <CardContent className="pt-8 pb-8">
                  <div className="w-14 h-14 bg-red-600/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Clock className="h-7 w-7 text-red-600" />
                  </div>
                  <h3 className="font-bold text-white mb-3 text-lg">Hours</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Mon-Fri: 6AM-9PM
                    <br />
                    Sat: 9AM-2PM
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-zinc-900/50 backdrop-blur border-zinc-800 shadow-2xl">
            <CardContent className="pt-10 pb-10 px-8">
              <h3 className="text-3xl font-bold text-white mb-8">Get in Touch</h3>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <Input
                      placeholder="First Name"
                      className="bg-black/50 border-zinc-700 text-white placeholder:text-gray-500 h-12 focus:border-red-600 transition-colors"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Last Name"
                      className="bg-black/50 border-zinc-700 text-white placeholder:text-gray-500 h-12 focus:border-red-600 transition-colors"
                    />
                  </div>
                </div>
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-black/50 border-zinc-700 text-white placeholder:text-gray-500 h-12 focus:border-red-600 transition-colors"
                />
                <Input
                  type="tel"
                  placeholder="Phone"
                  className="bg-black/50 border-zinc-700 text-white placeholder:text-gray-500 h-12 focus:border-red-600 transition-colors"
                />
                <Textarea
                  placeholder="Message"
                  rows={6}
                  className="bg-black/50 border-zinc-700 text-white placeholder:text-gray-500 focus:border-red-600 transition-colors resize-none"
                />
                <Button
                  className="w-full bg-red-600 hover:bg-red-700 text-white h-14 text-lg font-semibold shadow-lg shadow-red-600/30"
                  size="lg"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
