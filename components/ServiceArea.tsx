import { MapPin, Navigation } from "lucide-react";

export default function ServiceArea() {
  const mainCities = ["Langley", "Surrey"];
  const subAreas = [
    "Aldergrove",
    "Willoughby",
    "Walnut Grove",
    "Fort Langley",
    "Cloverdale",
    "Fleetwood",
    "Newton",
    "Whalley",
    "South Surrey",
    "White Rock",
  ];

  return (
    <section className="max-w-6xl mx-auto bg-gray-900 py-12 text-white border border-orange-500/30 rounded-3xl">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-orange-500 mb-2">
              <Navigation size={20} className="animate-pulse" />
              <span className="uppercase tracking-widest text-sm font-bold">Local Coverage</span>
            </div>
            <h2 className="text-3xl font-bold">Where We Work</h2>
            <p className="text-gray-400 mt-2 max-w-xs">
              On-site support across Langley and Surrey, with remote assistance available throughout the Lower Mainland.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-2xl">
            {mainCities.map((city) => (
              <div
                key={city}
                className="flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-full font-bold shadow-lg shadow-orange-500/20"
              >
                <MapPin size={18} />
                {city}
              </div>
            ))}

            {subAreas.map((area) => (
              <div
                key={area}
                className="flex items-center gap-2 px-5 py-2.5 bg-gray-800 border border-gray-700 text-gray-300 rounded-full text-sm hover:border-orange-500/50 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0" />
                {area}
              </div>
            ))}
          </div>

        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-sm text-gray-400">
          <div>
            <p className="text-white font-semibold mb-1">On-Site</p>
            <p>We come to your location in Langley & Surrey</p>
          </div>
          <div>
            <p className="text-white font-semibold mb-1">Remote</p>
            <p>Available across the Lower Mainland via secure remote access</p>
          </div>
          <div>
            <p className="text-white font-semibold mb-1">Not in the list?</p>
            <p>
              <a href="#contact" className="text-orange-500 hover:underline">Contact us</a> to check if we cover your area
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}