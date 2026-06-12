export default function About() {
  return (
    <section className="py-24 px-4 bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Story</h2>
          <div className="h-1 w-24 bg-amber-600 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-to-br from-amber-900/30 to-transparent p-8 rounded-lg">
            <div className="w-full h-64 bg-gray-800 rounded-lg"></div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Keramion was founded on a simple belief: your business card should be as exceptional as the person holding it.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              We pioneered the use of carbon ceramic technology in premium business card manufacturing. 
              Each card is engineered for durability, designed for impact, and crafted to last.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Our cards don't just feel premium—they are premium. Made to withstand daily use while maintaining 
              their beauty, they represent a commitment to excellence that speaks volumes before a word is spoken.
            </p>

            <div className="pt-4">
              <p className="text-amber-600 font-semibold text-lg">
                Made for leaders. Built to impress.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-800">
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-600 mb-2">500+</div>
            <p className="text-gray-400">Satisfied Clients</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-600 mb-2">10K+</div>
            <p className="text-gray-400">Cards Delivered</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-600 mb-2">99%</div>
            <p className="text-gray-400">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
}
