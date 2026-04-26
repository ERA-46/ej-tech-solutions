export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white mt-16 mb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 leading-tight mb-6 break-words">
            IT <span className="text-orange-500">&</span> Web Solutions in{" "}
            <span className="text-orange-500">
              Langley <span className="text-gray-800">&</span> Surrey
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
            Reliable and affordable services to help small businesses operate efficiently and grow their online presence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="#contact"
              className="w-full sm:w-auto text-center px-6 py-3 sm:px-8 sm:py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-gray-700 transition-all shadow-lg hover:scale-105"
            >
              Free Consultation
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto text-center px-6 py-3 sm:px-8 sm:py-4 bg-white border border-gray-300 text-gray-800 font-bold rounded-lg hover:bg-gray-100 transition-all shadow"
            >
              View Services
            </a>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end items-end">
          <img
            src="/landing-undraw.png"
            alt="Tech Support Illustration"
            className="w-52 sm:w-64 md:w-80 lg:w-96 h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}