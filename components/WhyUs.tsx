export function WhyUs() {
  const features = [
    {
      icon: "📍",
      title: "Truly Local",
      desc: "Based in Surrey and serving Langley. Available for on-site visits, not just remote calls.",
    },
    {
      icon: "🎓",
      title: "Qualified & Experienced",
      desc: "Holds a First-Class B.Sc. in Computer Science and a Post-Baccalaureate Diploma in Computer & Information Systems from Douglas College.",
    },
    {
      icon: "🔗",
      title: "One Partner, Everything Covered",
      desc: "IT support and web services under one roof, no need to juggle multiple vendors.",
    },
    {
      icon: "💬",
      title: "Clear, Jargon-Free",
      desc: "We explain everything in plain language so you always know what you're paying for and why.",
    },
    {
      icon: "⚡",
      title: "Responsive Support",
      desc: "Fast response times with flexible remote and on-site service delivery based on your needs.",
    },
    {
      icon: "🤝",
      title: "Long-Term Relationship",
      desc: "We focus on building lasting partnerships, not one-off transactions. Your growth is our goal.",
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose EJ Tech Solutions?
          </h2>
          <p className="text-gray-500 text-base">
            We&apos;re not a faceless help desk. We&apos;re a local, hands-on technology
            partner committed to your business.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex gap-4 p-6 bg-gray-50 rounded-2xl hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-11 h-11 bg-orange-100 rounded-xl flex items-center justify-center text-xl shrink-0">
                {f.icon}
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}