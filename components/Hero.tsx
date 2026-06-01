export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white mt-16 mb-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">

        <div className="max-w-2xl">

          <div className="inline-block bg-orange-50 border border-orange-200 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full mb-5 tracking-wide uppercase">
            Serving Langley & Surrey
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 leading-tight mb-6 break-words">
            Local IT <span className="text-orange-500">&</span> Web Services{" "}
            <span className="text-orange-500">You Can Trust</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 max-w-lg leading-relaxed">
            EJ Tech Solutions helps small businesses in Langley and Surrey stay
            running smoothly — from computer repairs and setup to custom websites
            and ongoing tech support.
          </p>

          <ul className="flex flex-col sm:flex-row gap-3 text-sm text-gray-600 mb-8">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500 shrink-0"></span>
              Remote & On-Site Support
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500 shrink-0"></span>
              No Contracts Required
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500 shrink-0"></span>
              Transparent Pricing
            </li>
          </ul>

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