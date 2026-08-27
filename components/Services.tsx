import { Monitor, Globe, Wrench, CheckCircle2 } from "lucide-react";

const serviceCategories = [
  {
    title: "IT Support",
    description: "Reliable tech help for your computer, software, and data — Windows and macOS.",
    icon: <Monitor className="w-8 h-8 text-orange-500" />,
    items: [
      { label: "Computer & Laptop Setup", price: "$60 Onwards" },
      { label: "Software Installation & Troubleshooting", price: "$50 Onwards" },
      { label: "Email Setup & Configuration", price: "$40 Onwards" },
      { label: "Virus & Malware Cleanup", price: "$70 Onwards" },
      { label: "System Optimization & Tune-Up", price: "$50 Onwards" },
      { label: "Data Backup & Recovery", price: "$60 Onwards" },
      { label: "Custom PC Builds & Upgrades", price: "$80 Onwards" },
    ],
    note: "Parts not included in build and upgrade pricing.",
    accent: "border-orange-500",
  },
  {
    title: "Web Services",
    description: "Modern, mobile-ready websites and online presence management for small businesses.",
    icon: <Globe className="w-8 h-8 text-blue-500" />,
    items: [
      { label: "Custom Business Website", price: "$300 Onwards" },
      { label: "Google Business Profile Setup", price: "$75 Onwards" },
      { label: "SEO & Performance Optimization", price: "$100 Onwards" },
      { label: "Website Maintenance & Updates", price: "$50 Onwards" },
    ],
    note: "Final price depends on scope and complexity.",
    accent: "border-blue-500",
  },
  {
    title: "Installations",
    description: "Professional device installation and setup at your home or business — done right the first time.",
    icon: <Wrench className="w-8 h-8 text-green-500" />,
    items: [
      { label: "Dashcam Installation & Setup", price: "$60 Onwards" },
      { label: "Indoor Security Camera Setup", price: "$70 Onwards" },
      { label: "Outdoor Security Camera Setup", price: "$80 Onwards" },
      { label: "Smart Home Device Setup", price: "$50 Onwards" },
      { label: "TV Mounting & Setup", price: "$80 Onwards" },
      { label: "Network & WiFi Setup", price: "$60 Onwards" },
      { label: "Printer & Peripheral Setup", price: "$40 Onwards" },
    ],
    note: "Device and hardware costs not included.",
    accent: "border-green-500",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
          <p className="text-lg text-gray-500">
            Simple, affordable, and reliable services for homes and small businesses
            in Langley and Surrey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <div
              key={index}
              className={`group relative p-8 bg-white rounded-2xl shadow-sm border-t-4 ${category.accent}
                         hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col`}
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
                    <span className="text-xs font-semibold text-orange-400 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>

              {category.note && (
                <p className="text-xs text-gray-400 mt-6 pt-4 border-t border-gray-100 italic">
                  {category.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 max-w-6xl mx-auto px-6">
        <div className="border border-gray-100 rounded-2xl px-8 py-12 text-center shadow-sm">
          <span className="inline-block text-3xl mb-4">🤝</span>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Community Discount Program</h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-lg mx-auto">
            We believe technology should be accessible to everyone. That&apos;s why we offer
            reduced rates for seniors and students in Langley and Surrey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <div className="flex-1 bg-white border border-gray-100 rounded-2xl px-6 py-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-2">👴</div>
              <p className="text-lg font-bold text-gray-800 mb-1">Seniors (65+)</p>
              <p className="text-2xl font-extrabold text-orange-500">15% off</p>
              <p className="text-xs text-gray-400 mt-2">Valid ID required</p>
            </div>
            <div className="flex-1 bg-white border border-gray-100 rounded-2xl px-6 py-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-2">🎓</div>
              <p className="text-lg font-bold text-gray-800 mb-1">Students</p>
              <p className="text-2xl font-extrabold text-orange-500">15% off</p>
              <p className="text-xs text-gray-400 mt-2">Valid student ID required</p>
            </div>
          </div>

          <p className="text-xs text-gray-400 mt-8">
            Discounts apply to all services. Cannot be combined with other offers.{" "}
            <a href="#contact" className="text-orange-500 hover:underline">Contact us</a> to learn more.
          </p>
        </div>
      </div>
    </section>
  );
}