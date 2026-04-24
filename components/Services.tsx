import { Monitor, Globe, ShieldCheck, CheckCircle2 } from "lucide-react";

const serviceCategories = [
  {
    title: "IT Support",
    description: "Reliable technical assistance for your business hardware and systems.", // [cite: 90, 91]
    icon: <Monitor className="w-8 h-8 text-orange-500" />,
    items: [
      "Computer & Laptop Setup", // [cite: 46, 92]
      "Software Troubleshooting", // [cite: 47, 92]
      "Virus & Malware Cleanup", // [cite: 49, 92]
      "Custom PC Builds & Upgrades" // [cite: 51]
    ],
    accent: "border-orange-500"
  },
  {
    title: "Web Services",
    description: "Modern, mobile-responsive websites designed to grow your online presence.", // [cite: 91, 94]
    icon: <Globe className="w-8 h-8 text-blue-500" />,
    items: [
      "Custom Business Websites", // [cite: 53, 94]
      "Google Business Profile Setup", // [cite: 56, 95]
      "SEO & Performance Optimization", // [cite: 55, 95]
      "Website Maintenance" // [cite: 54]
    ],
    accent: "border-blue-500"
  },
  {
    title: "Ongoing Support",
    description: "Peace of mind with monthly plans to keep your technology secure and updated.", // [cite: 57, 58]
    icon: <ShieldCheck className="w-8 h-8 text-green-500" />,
    items: [
      "Monthly IT & Web Support", // [cite: 58, 175]
      "System & Data Backups", // [cite: 59, 60]
      "Security Checks", // [cite: 60]
      "Regular Software Updates" // [cite: 59]
    ],
    accent: "border-green-500"
  }
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

              <ul className="space-y-3">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700 text-md mb-8">
                    <CheckCircle2 className="w-5 h-5 text-gray-400 shrink-0 group-hover:text-green-500 transition-colors" />
                    <span>{item}</span>
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