"use client";

export default function Gallery() {
  const products = [
    {
      id: 1,
      title: "Classic Elegance",
      description: "Timeless design with brushed matte finish",
      color: "bg-gray-800",
    },
    {
      id: 2,
      title: "Executive Black",
      description: "Deep black ceramic with gold accents",
      color: "bg-gray-900",
    },
    {
      id: 3,
      title: "Burnished Bronze",
      description: "Warm metallic finish with subtle texture",
      color: "bg-amber-900",
    },
    {
      id: 4,
      title: "Pearl White",
      description: "Pristine finish with premium presentation",
      color: "bg-gray-100",
    },
    {
      id: 5,
      title: "Charcoal Premium",
      description: "Ultra-durable carbon ceramic composite",
      color: "bg-slate-900",
    },
    {
      id: 6,
      title: "Luxury Composite",
      description: "Cutting-edge ceramic technology",
      color: "bg-gray-700",
    },
  ];

  return (
    <section id="gallery" className="py-24 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Collection</h2>
          <div className="h-1 w-24 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400">
            Each design is crafted to make an unforgettable impression
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer"
            >
              <div className={`${product.color} h-48 rounded-lg mb-4 transition-transform duration-300 group-hover:scale-105`}>
              </div>
              <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-400">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
