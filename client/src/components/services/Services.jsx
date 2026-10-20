import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaServer,
  FaDatabase,
  FaCode,
  FaMobileAlt,
  FaRocket,
  FaArrowRight,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiNodedotjs } from "react-icons/si";

const Services = () => {
  const services = [
    {
      icon: <FaReact />,
      title: "Frontend Development",
      description:
        "Building responsive, modern, and user-friendly interfaces with React.js, JavaScript, Tailwind CSS, and Bootstrap.",
      skills: ["React.js", "JavaScript", "Tailwind CSS", "Responsive UI"],
    },
    {
      icon: <FaServer />,
      title: "Backend Development",
      description:
        "Developing reliable backend applications and RESTful APIs using Node.js and Express.js with clean and maintainable architecture.",
      skills: ["Node.js", "Express.js", "REST APIs", "Authentication"],
    },
    {
      icon: <SiMongodb />,
      title: "Database Development",
      description:
        "Designing and managing MongoDB databases with Mongoose, including data modeling, relationships, and CRUD operations.",
      skills: ["MongoDB", "Mongoose", "Data Modeling", "CRUD"],
    },
    {
      icon: <FaCode />,
      title: "Full-Stack MERN Applications",
      description:
        "Building complete web applications that connect React frontends with Node.js, Express.js, and MongoDB backends.",
      skills: ["MERN Stack", "API Integration", "JWT", "Full Stack"],
    },
    {
      icon: <FaMobileAlt />,
      title: "Responsive Web Development",
      description:
        "Creating web applications that provide a consistent and accessible experience across desktop, tablet, and mobile devices.",
      skills: ["Mobile First", "Responsive Design", "Cross Browser"],
    },
    {
      icon: <FaRocket />,
      title: "Deployment & Integration",
      description:
        "Deploying web applications and connecting frontend, backend, databases, and third-party services for production-ready applications.",
      skills: ["Git", "GitHub", "Vercel", "Render"],
    },
  ];

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gray-50 py-20 lg:py-28"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-rose-100/50 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-pink-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-rose-200 bg-rose-50 px-5 py-2 text-sm font-semibold tracking-wide text-rose-600">
            WHAT I CAN BUILD
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Turning Ideas Into
            <span className="block bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
              Functional Web Applications
            </span>
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
            I use modern JavaScript technologies to build responsive frontend
            interfaces, scalable backend APIs, and complete full-stack web
            applications.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{ y: -8 }}
              className="group rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition duration-300 hover:border-rose-200 hover:shadow-xl hover:shadow-rose-100/40"
            >
              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-50 text-2xl text-rose-500 transition duration-300 group-hover:bg-rose-500 group-hover:text-white">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="mt-6 text-xl font-bold text-gray-900">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-sm leading-7 text-gray-600">
                {service.description}
              </p>

              {/* Skills */}
              <div className="mt-6 flex flex-wrap gap-2">
                {service.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600 transition group-hover:bg-rose-50 group-hover:text-rose-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Bottom Accent */}
              <div className="mt-7 h-1 w-10 rounded-full bg-gradient-to-r from-rose-500 to-pink-600 transition-all duration-300 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

        {/* Full Stack Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-rose-500 to-pink-600 p-8 shadow-2xl shadow-rose-200 sm:p-12">
            {/* Decorative Circle */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border-[40px] border-white/10" />

            <div className="relative flex flex-col items-center justify-between gap-8 lg:flex-row">
              {/* Text */}
              <div className="max-w-2xl text-center lg:text-left">
                <span className="text-sm font-semibold uppercase tracking-widest text-white/80">
                  MERN STACK DEVELOPMENT
                </span>

                <h3 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">
                  Building Complete Full-Stack Solutions
                </h3>

                <p className="mt-4 leading-7 text-white/90">
                  From designing responsive user interfaces to developing
                  backend APIs and connecting databases, I enjoy working across
                  the full development lifecycle to build practical web
                  applications.
                </p>
              </div>

              {/* MERN Stack */}
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-2xl text-white backdrop-blur-sm">
                  <SiMongodb />
                </div>

                <div className="text-2xl font-bold text-white">+</div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-2xl text-white backdrop-blur-sm">
                  <SiExpress />
                </div>

                <div className="text-2xl font-bold text-white">+</div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-2xl text-white backdrop-blur-sm">
                  <FaReact />
                </div>

                <div className="text-2xl font-bold text-white">+</div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-2xl text-white backdrop-blur-sm">
                  <SiNodedotjs />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-14 text-center"
        >
          <p className="text-gray-600">
            Interested in working together or discussing a project?
          </p>

          <a
            href="#contact"
            className="group mt-5 inline-flex items-center gap-2 font-semibold text-rose-500 transition hover:text-rose-600"
          >
            Let's Connect
            <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
