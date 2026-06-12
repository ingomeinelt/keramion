"use client";

interface HeroProps {
  onBookConsultation: () => void;
}

export default function Hero({ onBookConsultation }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black px-4 py-20">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-amber-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-900/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Luxury Redefined
          </h1>
          <div className="h-1 w-24 bg-amber-600 mx-auto mb-8"></div>
        </div>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
          Elevate your first impression with handcrafted business cards made from premium carbon ceramic. 
          Where sophistication meets innovation.
        </p>

        <p className="text-lg text-gray-400 mb-12">
          Each card is a masterpiece of engineering and design—durable, distinctive, unforgettable.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onBookConsultation}
            className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            Book Consultation
          </button>
          <a
            href="#gallery"
            className="px-8 py-4 border-2 border-amber-600 hover:bg-amber-600/10 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            View Gallery
          </a>
        </div>
      </div>
    </section>
  );
}
