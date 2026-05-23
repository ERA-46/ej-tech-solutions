import { Monitor, Globe, ShieldCheck, CheckCircle2 } from "lucide-react";

const serviceCategories = [
  {
    title: "IT Support",
    description: "Reliable technical assistance for your business hardware and systems.",
    icon: <Monitor className="w-8 h-8 text-orange-500" />,
    items: [
      { label: "Computer & Laptop Setup", price: "$60 Onwards" },
      { label: "Software Troubleshooting", price: "$50 Onwards" },
      { label: "Virus & Malware Cleanup", price: "$70 Onwards" },
      { label: "Custom PC Builds & Upgrades", price: "$80 Onwards" },
    ],
    note: "Parts not included in build pricing.",
    accent: "border-orange-500",
  },
  {
    title: "Web Services",
    description: "Modern, mobile-responsive websites designed to grow your online presence.",
    icon: <Globe className="w-8 h-8 text-blue-500" />,
    items: [
      { label: "Custom Business Website", price: "$300 Onwards" },
      { label: "Google Business Profile Setup", price: "$75 Onwards" },
      { label: "SEO & Performance Optimization", price: "$100 Onwards" },
      { label: "Website Maintenance", price: "$50 Onwards" },
    ],
    note: "Final price depends on scope and complexity.",
    accent: "border-blue-500",
  },
  {
    title: "Ongoing Support",
    description: "Peace of mind with monthly plans to keep your technology secure and updated.",
    icon: <ShieldCheck className="w-8 h-8 text-green-500" />,
    items: [
      { label: "Basic: Security & Updates", price: "$29/mo" },
      { label: "Standard: Basic + Backups & Priority", price: "$49/mo" },
      { label: "Full: Everything Included", price: "$99/mo" },
    ],
    note: "Monthly plans — cancel anytime.",
    accent: "border-green-500",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Technology Solutions</h2>
          <p className="text-lg text-gray-600">
            We provide local, affordable, and easy-to-understand services for small businesses in Langley and Surrey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <div 
              key={index}
              className={`group relative p-8 bg-white rounded-2xl shadow-sm border-t-4 ${category.accent} 
                         hover:shadow-xl hover:-translate-y-2 transition-all duration-300`}
            >
              <div className="mb-6 inline-block p-3 bg-gray-50 rounded-lg group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{category.title}</h3>
              <p className="text-gray-500 mb-6 text-sm leading-relaxed">
                {category.description}
              </p>

              <ul className="space-y-3 flex-1">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-start justify-between gap-3 text-gray-700 text-sm">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-gray-400 shrink-0 mt-0.5 group-hover:text-green-500 transition-colors" />
                      <span>{item.label}</span>
                    </div>
                    <span className="text-xs font-semibold text-gray-400 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-16 bg-gray-90 border border-gray-100 rounded-2xl px-8 py-10 max-w-5xl mx-auto text-center">
  <span className="inline-block text-2xl mb-3">🤝</span>
  <h3 className="text-xl font-bold text-gray-800 mb-3">Community Discount Program</h3>
  <p className="text-gray-500 text-sm leading-relaxed mb-6">
    We believe technology should be accessible to everyone in our community.
    That&apos;s why we offer reduced rates for seniors and students in Langley and Surrey.
  </p>
  <div className="flex flex-col sm:flex-row gap-4 justify-center">
    <div className="flex-1 bg-white border border-gray-100 rounded-xl px-6 py-5 shadow-sm">
      <p className="text-xl font-bold text-gray-800 mb-1">Seniors (65+)</p>
      <p className="text-l font-medium text-gray-600">15% off</p>
    </div>
    <div className="flex-1 bg-white border border-gray-100 rounded-xl px-6 py-5 shadow-sm">
      <p className="text-xl font-bold text-gray-800 mb-1">Students</p>
      <p className="text-l font-medium text-gray-600">15% off</p>
      <p className="text-xs text-gray-400 mt-1">Valid student ID required</p>
    </div>
  </div>
  <p className="text-xs text-gray-400 mt-6">
    Discounts apply to all services. Cannot be combined with other offers. Contact us to learn more.
  </p>
</div>
    </section>
  );
}