import { MapPin, Navigation } from "lucide-react";

export default function ServiceArea() {
  const mainCities = ["Langley", "Surrey"];
  const subAreas = ["Aldergrove", "Cloverdale", "Willoughby", "Fleetwood"];

  return (
    <section className="w-full bg-gray-900 py-12 text-white border-y border-orange-500/30 rounded-3xl">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-orange-500 mb-2">
              <Navigation size={20} className="animate-pulse" />
              <span className="uppercase tracking-widest text-sm font-bold">Local Coverage</span>
            </div>
            <h2 className="text-3xl font-bold">Where We Work</h2>
            <p className="text-gray-400 mt-2">
              Providing expert on-site support and remote assistance across the Lower Mainland.
            </p>
          </div>

          {/* Location Badges */}
          <div className="flex flex-wrap justify-center gap-4 max-w-2xl">
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
                className="flex items-center gap-2 px-5 py-3 bg-gray-800 border border-gray-700 text-gray-300 rounded-full hover:border-orange-500/50 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                {area}
              </div>
            ))}
          </div>

        </div>
        
        {/* Trust Footer */}
        <div className="mt-10 pt-6 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500 italic">
            Do not see your area? <a href="#contact" className="text-orange-500 hover:underline">Contact us</a> to see if we can come to you.
          </p>
        </div>
      </div>
    </section>
  );
}