"use client";

import { useState } from "react";

export function WhyUs() {
  const [hovered, setHovered] = useState<string | null>(null);

  const features = [
    {
      icon: "📍",
      title: "Truly Local",
      desc: "Based in Surrey and serving Langley. Available for on-site visits, not just remote calls.",
      color: "from-orange-100/20 to-orange-500/5",
      border: "border-orange-500/30",
      glow: "shadow-orange-500/20",
    },
    {
      icon: "🎓",
      title: "Qualified & Experienced",
      desc: "First-Class B.Sc. in Computer Science and a Post-Baccalaureate Diploma in Computer & Information Systems from Douglas College.",
      color: "from-blue-500/20 to-blue-500/5",
      border: "border-blue-500/30",
      glow: "shadow-blue-500/20",
    },
    {
      icon: "🔗",
      title: "One Partner, Everything Covered",
      desc: "IT support and web services under one roof. No need to juggle multiple vendors.",
      color: "from-purple-500/20 to-purple-500/5",
      border: "border-purple-500/30",
      glow: "shadow-purple-500/20",
    },
    {
      icon: "💬",
      title: "Clear, Jargon-Free",
      desc: "We explain everything in plain language so you always know what you're paying for and why.",
      color: "from-green-500/20 to-green-500/5",
      border: "border-green-500/30",
      glow: "shadow-green-500/20",
    },
    {
      icon: "⚡",
      title: "Responsive Support",
      desc: "Fast response times with flexible remote and on-site service delivery based on your needs.",
      color: "from-yellow-500/20 to-yellow-500/5",
      border: "border-yellow-500/30",
      glow: "shadow-yellow-500/20",
    },
    {
      icon: "🤝",
      title: "Long-Term Relationship",
      desc: "We focus on building lasting partnerships, not one-off transactions. Your growth is our goal.",
      color: "from-rose-500/20 to-rose-500/5",
      border: "border-rose-500/30",
      glow: "shadow-rose-500/20",
    },
  ];

  return (
    <section id="why-us" className="py-24  relative overflow-hidden scroll-mt-16">

      {/* Background decoration */}
      {/* <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 blur-3xl rounded-full pointer-events-none" /> */}

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            Why Choose Us
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-700 mb-4">
            Not Just Another Help Desk
          </h2>
          <p className="text-gray-400 text-base leading-relaxed">
            We&apos;re a local, hands-on technology partner committed to your business —
            available when you need us, clear about what we do.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              onMouseEnter={() => setHovered(f.title)}
              onMouseLeave={() => setHovered(null)}
              className={`relative group p-6 rounded-2xl border bg-white cursor-default
  transition-all duration-300
  ${f.border}
  ${hovered === f.title ? `shadow-xl ${f.glow}` : "shadow-none border-gray-200"}
`}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${f.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 bg-gray-100 group-hover:bg-gray-50 rounded-xl flex items-center justify-center text-2xl mb-4 transition-colors duration-300 shadow-inner">
                  {f.icon}
                </div>

                {/* Title */}
                <h3 className="font-bold text-gray-900 mb-2 text-base">
                  {f.title}
                </h3>

                {/* Desc */}
                <p className="text-sm text-gray-500 group-hover:text-gray-600 leading-relaxed transition-colors duration-300">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Scrolling stat strip */}
        <div className="mt-16 overflow-hidden relative">
          <div className="flex animate-scroll-left w-max gap-4">
            {/* Duplicate the stats for seamless loop */}
            {[...Array(2)].map((_, repeat) => (
              <div key={repeat} className="flex gap-4">
                {[
                  { value: "Langley & Surrey", label: "Service Areas" },
                  { value: "3 Services", label: "IT · Web · Installations" },
                  { value: "15% Off", label: "Seniors & Students" },
                  { value: "Free", label: "First Consultation" },
                  { value: "On-Site & Remote", label: "Flexible Delivery" },
                ].map((stat) => (
                  <div
                    key={`${repeat}-${stat.label}`}
                    className="bg-white border border-gray-100 rounded-2xl px-8 py-5 text-center hover:border-orange-500/30 transition-colors duration-300 shrink-0 min-w-[180px]"
                  >
                    <p className="text-lg font-extrabold text-orange-500 mb-1">{stat.value}</p>
                    <p className="text-xs text-gray-500 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}