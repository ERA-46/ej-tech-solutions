"use client";

import { useState, useEffect } from "react";
import { ExternalLink, ChevronLeft, ChevronRight, X } from "lucide-react";
import { portfolioItems, type PortfolioItem } from "@/data/portfolio";

const filters = [
  { label: "All", value: "all" },
  { label: "Web Projects", value: "web" },
  { label: "IT Support", value: "it" },
  { label: "Installations", value: "installation" },
];

const badgeConfig = {
  web: { label: "Web", color: "bg-blue-500" },
  it: { label: "IT Support", color: "bg-orange-500" },
  installation: { label: "Installation", color: "bg-green-500" },
};

// Modal
function ImageModal({
  images,
  startIndex,
  onClose,
}: {
  images: string[];
  startIndex: number;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(startIndex);

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full mx-4 flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[current]}
          alt="Enlarged view"
          className="max-h-[90vh] w-auto rounded-lg shadow-2xl object-contain"
        />

        {/* Counter */}
        <span className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/60 text-white text-xs font-medium px-3 py-1 rounded-full">
          {current + 1} / {images.length}
        </span>

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-colors"
        >
          <X size={18} />
        </button>

        {/* Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-4 w-10 h-10 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="absolute right-4 w-10 h-10 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        {/* Dots */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-200 ${
                  i === current ? "bg-white w-4" : "bg-white/40 w-1.5"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// Card
function PortfolioCard({ project }: { project: PortfolioItem }) {
  const [current, setCurrent] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((c) => (c - 1 + project.images.length) % project.images.length);
  };

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((c) => (c + 1) % project.images.length);
  };

  return (
    <>
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">

        {/* Image area */}
        <div
          className="relative h-52 bg-gray-100 overflow-hidden group cursor-zoom-in"
          onClick={() => setModalOpen(true)}
        >
          <img
            src={project.images[current]}
            alt={project.title}
            className="w-full h-full object-cover transition-opacity duration-300"
          />

          {/* Zoom hint */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-200 flex items-center justify-center">
            <span className="text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 px-3 py-1.5 rounded-full">
              Click to enlarge
            </span>
          </div>

          {/* Badge */}
          <span className={`absolute top-3 left-3 ${badgeConfig[project.category].color} text-white text-xs font-bold px-3 py-1 rounded-full`}>
            {badgeConfig[project.category].label}
          </span>

          {/* Counter */}
          {project.images.length > 1 && (
            <span className="absolute top-3 right-3 bg-black/50 text-white text-xs font-medium px-2 py-1 rounded-full">
              {current + 1} / {project.images.length}
            </span>
          )}

          {/* Arrows */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              >
                <ChevronRight size={16} />
              </button>
            </>
          )}

          {/* Dots */}
          {project.images.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {project.images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                  className={`h-1.5 rounded-full transition-all duration-200 ${
                    i === current ? "bg-white w-3" : "bg-white/50 w-1.5"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="text-base font-bold text-gray-900 mb-1">{project.title}</h3>
          <p className="text-sm text-gray-500 leading-relaxed flex-1">{project.description}</p>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors"
            >
              View Site <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <ImageModal
          images={project.images}
          startIndex={current}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? portfolioItems
      : portfolioItems.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work</h2>
          <p className="text-gray-500 text-lg">
            A look at websites we've built, issues we've solved, and devices
            we've installed across Langley and Surrey.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                active === f.value
                  ? "bg-orange-500 text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-orange-300 hover:text-orange-500"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}