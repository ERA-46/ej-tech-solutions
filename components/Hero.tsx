
export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white mt-18 mb-18">
      <div className="max-w-8xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className="max-w-2xl">

          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight mb-6">
            IT <span className="text-orange-500">&</span> Web Solutions in{" "}
            <span className="text-orange-500">
              Langley <span className="text-gray-800">&</span> Surrey
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
            Reliable and affordable services to help small businesses operate efficiently and grow their online presence.
          </p>

          <div className="flex gap-4">
            <a
              href="#contact"
              className="px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-gray-700 transition-all shadow-lg hover:scale-105"
            >
              Free Consultation
            </a>
            <a
              href="#services"
              className="px-8 py-4 bg-white border border-gray-300 text-gray-800 font-bold rounded-lg hover:bg-gray-100 transition-all shadow"
            >
              View Services
            </a>
          </div>
        </div>

        <div className="relative h-[300px] lg:h-[400px] flex items-end justify-end">
          <span>
            <img
              src="/landing-undraw.png"
              alt="Tech Support Illustration"
              className="w-64 md:w-80 lg:w-96 h-auto object-contain"
            />
          </span>

        </div>
      </div>
    </section>
  );
}