export default function Pricing() {
  const tiers = [
    {
      name: "Starter",
      price: "€149",
      unit: "per 100 cards",
      description: "Perfect for initial impression",
      features: [
        "Carbon ceramic material",
        "Single color design",
        "Standard finish",
        "Gift box included",
        "Standard shipping",
      ],
    },
    {
      name: "Professional",
      price: "€249",
      unit: "per 100 cards",
      description: "Our most popular choice",
      features: [
        "Premium carbon ceramic",
        "Custom dual-color design",
        "Matte or gloss finish",
        "Luxury packaging",
        "Express shipping",
        "Design consultation",
      ],
      highlighted: true,
    },
    {
      name: "Executive",
      price: "€399",
      unit: "per 100 cards",
      description: "Uncompromising excellence",
      features: [
        "Exclusive ceramic blend",
        "Full custom design",
        "Premium finish options",
        "Executive gift case",
        "Priority shipping",
        "Unlimited revisions",
        "Personal concierge",
      ],
    },
  ];

  return (
    <section className="py-24 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Pricing</h2>
          <div className="h-1 w-24 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400">
            Premium quality at competitive rates
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`rounded-lg p-8 transition-transform duration-300 ${
                tier.highlighted
                  ? "bg-gradient-to-b from-amber-600/20 to-amber-600/5 border-2 border-amber-600 scale-105"
                  : "bg-gray-900 border border-gray-800 hover:border-amber-600/50"
              }`}
            >
              {tier.highlighted && (
                <div className="mb-4 inline-block px-3 py-1 bg-amber-600 text-white text-sm font-semibold rounded">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <p className="text-gray-400 mb-6">{tier.description}</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold text-amber-600">{tier.price}</span>
                <p className="text-gray-400 text-sm mt-2">{tier.unit}</p>
              </div>

              <button
                className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors duration-300 mb-8 ${
                  tier.highlighted
                    ? "bg-amber-600 hover:bg-amber-700 text-white"
                    : "bg-gray-800 hover:bg-amber-600/20 text-white border border-gray-700"
                }`}
              >
                Get Started
              </button>

              <ul className="space-y-4">
                {tier.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-start gap-3 text-gray-300">
                    <span className="text-amber-600 mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
