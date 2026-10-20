import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaArrowRight, FaCode } from "react-icons/fa";

const Navbar = ({ isHome }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation sections
  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },

    { name: "Contact", id: "contact" },
  ];

  // Smooth scroll to section
  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* =========================================
            LOGO
        ========================================== */}
        <NavLink
          to="/"
          className="group flex items-center gap-3"
          aria-label="Go to homepage"
        >
          {/* Logo Icon */}
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 text-lg font-bold text-white shadow-lg shadow-rose-200 transition duration-300 group-hover:scale-105">
            <FaCode className="text-sm" />
          </div>

          {/* Logo Name */}
          <div className="text-left">
            <span className="block bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-xl font-bold leading-none text-transparent">
              Mustafa
            </span>

            <span className="mt-1 block text-[10px] font-medium uppercase tracking-widest text-gray-400">
              Developer
            </span>
          </div>
        </NavLink>

        {/* =========================================
            DESKTOP NAVIGATION
        ========================================== */}
        <nav className="hidden items-center gap-7 lg:flex">
          {isHome &&
            navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="group relative py-2 text-sm font-medium text-gray-600 transition duration-300 hover:text-rose-500"
              >
                {item.name}

                {/* Hover Underline */}
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-rose-500 to-pink-600 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}

          <NavLink to="/projects">Projects</NavLink>
        </nav>

        {/* =========================================
            DESKTOP RESUME BUTTON
        ========================================== */}
        <div className="hidden lg:block">
          <a
            href="/res.pdf"
            download="Mustafa-Raza-Khan-Resume.pdf"
            className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-300"
          >
            Download Resume
            <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* =========================================
            MOBILE MENU BUTTON
        ========================================== */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="rounded-xl border border-gray-200 bg-gray-50 p-3 text-xl text-gray-700 transition duration-300 hover:border-rose-200 hover:bg-rose-50 hover:text-rose-500 lg:hidden"
          aria-label={
            isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* =========================================
          MOBILE NAVIGATION
      ========================================== */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          isMobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-gray-100 bg-white px-6 py-6 shadow-lg">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="rounded-xl px-4 py-3 text-left text-sm font-medium text-gray-600 transition duration-300 hover:bg-rose-50 hover:text-rose-500"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Mobile Resume */}
          <a
            href="/res.pdf"
            download="Mustafa-Raza-Khan-Resume.pdf"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 px-5 py-3.5 font-semibold text-white shadow-lg shadow-rose-200 transition duration-300 hover:scale-[1.02]"
          >
            Download Resume
            <FaArrowRight className="text-sm" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
