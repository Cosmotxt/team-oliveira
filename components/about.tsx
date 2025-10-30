export function About() {
  return (
    <section id="about" className="py-32 bg-linear-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-black mb-4 text-balance">
                About <span className="text-red-600">Team Oliveira</span>
              </h2>
              <div className="w-24 h-1.5 bg-red-600 rounded-full" />
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Founded by Professor Oliveira, Team Oliveira Brazilian Jiu Jitsu brings authentic Brazilian martial arts
              tradition to Howell, New Jersey. Our academy is built on the principles of respect, discipline, and
              continuous improvement.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With deep roots in Brazilian Jiu Jitsu culture, we provide world-class instruction for students of all
              ages and skill levels. Our mission is to empower individuals through the art of BJJ, building not just
              skilled practitioners, but confident, disciplined individuals.
            </p>
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-red-600 mb-2">15+</div>
                <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-red-600 mb-2">500+</div>
                <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">Active Students</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-red-600 mb-2">50+</div>
                <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">Champions</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <img
                src="/bjj-instructor-teaching-technique-on-mat.jpg"
                alt="Professor Oliveira"
                className="w-full h-72 object-cover rounded-2xl shadow-2xl hover:shadow-red-600/20 transition-shadow"
              />
              <div className="bg-black text-white p-6 rounded-2xl">
                <p className="text-sm font-semibold text-red-600 mb-2">OUR PHILOSOPHY</p>
                <p className="text-sm leading-relaxed">Excellence through discipline, growth through challenge.</p>
              </div>
            </div>
            <div className="mt-12">
              <img
                src="/bjj-students-training-together.jpg"
                alt="Training Session"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl hover:shadow-red-600/20 transition-shadow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
