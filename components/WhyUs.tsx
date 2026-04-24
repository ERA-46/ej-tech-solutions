export function WhyUs() {
  const features = [
    { title: "Local Expert", desc: "Based in Surrey, providing direct personal support." }, // cite: 69, 112
    { title: "Academic Excellence", desc: "First-Class B.Sc. (Hons) in Software Engineering." }, // cite: 166, 169
    { title: "Integrated Solutions", desc: "One partner for both your hardware and your website." }, // cite: 110
    { title: "Affordable & Clear", desc: "Transparent pricing with no tech jargon." } // cite: 112, 127
  ];

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">Why Choose EJ Tech Solutions?</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((f) => (
            <div key={f.title} className="text-center">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                ✓
              </div>
              <h3 className="font-bold text-gray-800 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}