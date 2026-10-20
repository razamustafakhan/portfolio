import React from "react";
import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-gray-200 bg-gray-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold">
              Mustafa
              <span className="text-rose-500">.</span>
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              Junior MERN Stack Developer
            </p>

            <p className="mt-3 max-w-md text-sm leading-6 text-gray-500">
              Building responsive, scalable, and user-friendly web applications
              with modern JavaScript technologies.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a
              href="#home"
              className="text-gray-400 transition hover:text-rose-500"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-gray-400 transition hover:text-rose-500"
            >
              About
            </a>

            <a
              href="#skills"
              className="text-gray-400 transition hover:text-rose-500"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="text-gray-400 transition hover:text-rose-500"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="text-gray-400 transition hover:text-rose-500"
            >
              Contact
            </a>
          </nav>

          {/* Social Links */}
          <div className="flex gap-3">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-900 text-gray-400 transition hover:bg-rose-500 hover:text-white"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-900 text-gray-400 transition hover:bg-blue-600 hover:text-white"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="mailto:youremail@example.com"
              aria-label="Email"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-900 text-gray-400 transition hover:bg-rose-500 hover:text-white"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-6 sm:flex-row">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Mustafa Raza Khan. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm font-medium text-gray-400 transition hover:text-rose-500"
          >
            Back to Top
            <FaArrowUp className="text-xs" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
