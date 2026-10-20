import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaArrowRight,
  FaDownload,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white py-20 lg:py-28">
      {/* Background Effects */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-rose-200/40 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-pink-200/40 blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-rose-100/30 blur-3xl" />

      {/* Main Container */}
      <div className="relative mx-auto flex max-w-7xl flex-col-reverse items-center gap-16 px-6 lg:flex-row lg:gap-20">
        {/* =========================================
            LEFT CONTENT
        ========================================== */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left"
        >
          {/* Professional Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-5 py-2 text-sm font-bold tracking-wide text-rose-600"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-rose-500" />
            JUNIOR MERN STACK DEVELOPER
          </motion.div>

          {/* Main Heading */}
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">
            Full Stack Developer
            <br />
            <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 bg-clip-text text-transparent">
              Building Modern Web Solutions
            </span>
          </h1>

          {/* Main Introduction */}
          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg lg:mx-0">
            I'm{" "}
            <strong className="font-semibold text-gray-900">
              Mustafa Raza Khan
            </strong>
            , a Junior MERN Stack Developer focused on building responsive,
            scalable, and user-friendly web applications using modern JavaScript
            technologies.
          </p>

          {/* Technical Description */}
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg lg:mx-0">
            I specialize in{" "}
            <strong className="font-semibold text-gray-900">
              React.js, Node.js, Express.js, and MongoDB
            </strong>
            , with hands-on experience developing REST APIs, authentication
            systems, database-driven applications, responsive user interfaces,
            and full-stack web solutions.
          </p>

          {/* Professional Goal */}
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg lg:mx-0">
            I'm actively seeking opportunities to contribute to a collaborative
            development team, solve real-world problems, and grow as a
            professional software developer while delivering reliable and
            maintainable applications.
          </p>

          {/* Core Technologies */}
          <div className="mt-7 flex flex-wrap justify-center gap-2 lg:justify-start">
            {[
              "React.js",
              "JavaScript",
              "Node.js",
              "Express.js",
              "MongoDB",
              "REST APIs",
              "JWT Authentication",
              "Git & GitHub",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600 transition duration-300 hover:border-rose-200 hover:bg-rose-50 hover:text-rose-600"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="mt-9 flex flex-wrap justify-center gap-4 lg:justify-start">
            {/* Resume */}
            <a
              href="/res.pdf"
              download="Mustafa-Raza-Khan-Resume.pdf"
              className="group flex items-center gap-3 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 px-7 py-4 font-semibold text-white shadow-lg shadow-rose-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-300"
            >
              <FaDownload className="text-sm" />
              Download Resume
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            {/* Projects */}
            <a
              href="#projects"
              className="group flex items-center gap-3 rounded-xl border border-gray-300 bg-white px-7 py-4 font-semibold text-gray-700 transition duration-300 hover:-translate-y-1 hover:border-rose-400 hover:bg-rose-50 hover:text-rose-600"
            >
              View My Projects
              <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-10 flex items-center justify-center gap-4 lg:justify-start">
            {/* GitHub */}
            <a
              href="https://github.com/mustafarazatech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="group rounded-full border border-gray-200 bg-gray-50 p-4 text-xl text-gray-700 transition duration-300 hover:-translate-y-1 hover:border-gray-900 hover:bg-gray-900 hover:text-white"
            >
              <FaGithub className="transition-transform duration-300 group-hover:scale-110" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="group rounded-full border border-gray-200 bg-gray-50 p-4 text-xl text-gray-700 transition duration-300 hover:-translate-y-1 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
            >
              <FaLinkedinIn className="transition-transform duration-300 group-hover:scale-110" />
            </a>

            {/* Email */}
            <a
              href="mailto:your-email@example.com"
              aria-label="Send Email"
              className="group rounded-full border border-gray-200 bg-gray-50 p-4 text-xl text-gray-700 transition duration-300 hover:-translate-y-1 hover:border-rose-500 hover:bg-rose-500 hover:text-white"
            >
              <FaEnvelope className="transition-transform duration-300 group-hover:scale-110" />
            </a>
          </div>

          {/* Availability */}
          <div className="mt-7 flex items-center justify-center gap-2 text-sm text-gray-500 lg:justify-start">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
            </span>
            Open to Junior MERN Stack Developer Opportunities
          </div>
        </motion.div>

        {/* =========================================
            RIGHT PROFILE IMAGE
        ========================================== */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            delay: 0.2,
            duration: 0.8,
            ease: "easeOut",
          }}
          className="flex flex-1 justify-center"
        >
          <div className="relative">
            {/* Outer Glow */}
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 opacity-20 blur-2xl" />

            {/* Gradient Border */}
            <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-r from-rose-500 to-pink-600 opacity-70" />

            {/* Image */}
            <div className="relative overflow-hidden rounded-[1.8rem] border-4 border-white bg-white p-2 shadow-2xl">
              <img
                src="/logo.jpg"
                alt="Mustafa Raza Khan - Junior MERN Stack Developer"
                className="h-[420px] w-[320px] rounded-[1.4rem] object-cover object-center sm:h-[500px] sm:w-[370px]"
              />

              {/* Image Overlay */}
              <div className="absolute inset-x-2 bottom-2 rounded-b-[1.4rem] bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 pt-20">
                <p className="text-sm font-semibold text-white">
                  Junior MERN Stack Developer
                </p>

                <p className="mt-1 text-xs text-white/70">
                  React • Node.js • Express • MongoDB
                </p>
              </div>
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-xl sm:block"
            >
              <p className="text-xs font-medium text-gray-500">Core Stack</p>

              <p className="mt-1 font-bold text-gray-900">
                MongoDB • Express • React • Node
              </p>
            </motion.div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute -right-5 -top-5 hidden rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-xl sm:block"
            >
              <div className="flex items-center gap-2">
                <span className="text-xl">💻</span>

                <div>
                  <p className="text-xs font-medium text-gray-500">
                    Focused On
                  </p>

                  <p className="font-bold text-gray-900">
                    Full Stack Development
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-gray-400 lg:flex"
      >
        <span className="text-xs font-medium uppercase tracking-widest">
          Scroll to explore
        </span>

        <div className="h-8 w-5 rounded-full border-2 border-gray-300 p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mx-auto h-1.5 w-1.5 rounded-full bg-rose-500"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
