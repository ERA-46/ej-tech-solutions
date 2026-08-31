"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#portfolio" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact Us", href: "#contact" },
];

function handleClick(
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string
) {
  e.preventDefault();

  const target = document.querySelector(href);

  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
}

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-md shadow-lg shadow-black/5 border-white/20"
            : "bg-white backdrop-blur-sm"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* DESKTOP LOGO */}
          <a
            href="#hero"
            onClick={(e) => handleClick(e, "#hero")}
            className="hidden md:flex items-center gap-3 group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-orange-500/30 rounded-full blur-md group-hover:blur-lg transition-all duration-300" />

              <img
                src="/ej-tech.png"
                alt="EJ Tech Solutions"
                className="relative w-10 h-10 object-contain rounded-full ring-2 ring-orange-500/40 group-hover:ring-orange-500/70 transition-all duration-300"
              />
            </div>
          </a>

          {/* MOBILE LOGO */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden absolute left-1/2 -translate-x-1/2 flex items-center justify-center group"
            aria-label="Open navigation menu"
            aria-expanded={isOpen}
          >
            <div className="relative">
              {/* Glow */}
              <div
                className={`absolute inset-0 bg-orange-500/30 rounded-full blur-md transition-all duration-300 ${
                  isOpen ? "blur-lg scale-110" : ""
                }`}
              />

              {/* Logo */}
              <img
                src="/ej-tech.png"
                alt="EJ Tech Solutions"
                className={`relative object-contain rounded-full ring-2 ring-orange-500/40 transition-all duration-300 ${
                  isOpen
                    ? "w-14 h-14 ring-orange-500/80"
                    : "w-11 h-11"
                }`}
              />
            </div>
          </button>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="relative px-4 py-2 text-sm font-medium text-gray-600 hover:text-orange-500 transition-colors duration-200 group"
              >
                {link.label}

                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-orange-500 group-hover:w-4/5 transition-all duration-300 rounded-full" />
              </a>
            ))}
          </div>

          {/* DESKTOP CTA */}
          <a
            href="#contact"
            onClick={(e) => handleClick(e, "#contact")}
            className="hidden md:inline-flex items-center px-5 py-2 text-sm font-bold rounded-lg transition-all duration-300 bg-orange-500 hover:bg-orange-600 text-white shadow-md shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105"
          >
            Free Consultation
          </a>

          {/* MOBILE SPACER */}
          <div className="md:hidden w-full" />
        </div>
      </nav>

      {/* MOBILE DROPDOWN */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full z-40 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl shadow-xl border-t border-gray-100">
        {/* Drawer Links */}
        <div className="flex flex-col px-5 py-5 gap-1">
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                handleClick(e, link.href);
                setIsOpen(false);
              }}
              className="relative flex items-center justify-center px-4 py-4 text-gray-700 hover:text-orange-500 font-medium text-sm transition-colors duration-200 group"
              style={{
                transitionDelay: isOpen ? `${i * 50}ms` : "0ms",
              }}
            >
              {link.label}

              {/* Animated underline */}
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-orange-500 group-hover:w-1/3 transition-all duration-300 rounded-full" />
            </a>
          ))}
        </div>

        </div>
      </div>

      {/* MOBILE BACKDROP */}
      <div
        className={`md:hidden fixed inset-0 z-30 bg-black/10 backdrop-blur-[1px] transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />
    </>
  );
}
