import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowRight,
  FaTimes,
  FaCheckCircle,
  FaCode,
} from "react-icons/fa";

import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { NavLink } from "react-router-dom";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  // Technology icon mapping
  const technologyIcons = {
    React: <SiReact />,
    "React.js": <SiReact />,
    Node: <SiNodedotjs />,
    "Node.js": <SiNodedotjs />,
    Express: <SiExpress />,
    "Express.js": <SiExpress />,
    MongoDB: <SiMongodb />,
    "MongoDB Atlas": <SiMongodb />,
    "Tailwind CSS": <SiTailwindcss />,
    JavaScript: <SiJavascript />,
    "Next.js": <SiNextdotjs />,
    TypeScript: <SiTypescript />,
  };

  useEffect(() => {
    const getProjects = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/project/");

        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }

        const data = await response.json();

        setProjects(data?.data || []);
      } catch (error) {
        console.error("Project fetching error:", error);
      } finally {
        setLoading(false);
      }
    };

    getProjects();
  }, []);

  return (
    <>
      <Navbar />

      <main className="relative min-h-screen overflow-hidden bg-[#fafafa]">
        {/* =========================================
            BACKGROUND DECORATIONS
        ========================================== */}

        <div className="pointer-events-none absolute left-[-180px] top-[100px] h-[450px] w-[450px] rounded-full bg-rose-200/30 blur-[120px]" />

        <div className="pointer-events-none absolute right-[-180px] top-[500px] h-[500px] w-[500px] rounded-full bg-pink-200/30 blur-[140px]" />

        {/* =========================================
            PROJECT SECTION
        ========================================== */}

        <section id="projects" className="relative py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* =========================================
                SECTION HEADER
            ========================================== */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mx-auto max-w-3xl text-center"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white px-5 py-2 text-sm font-semibold text-rose-600 shadow-sm">
                <span className="h-2 w-2 animate-pulse rounded-full bg-rose-500" />
                FEATURED PROJECTS
              </div>

              <h1 className="text-4xl font-black tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Building Digital
                <span className="block bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-600 bg-clip-text text-transparent">
                  Experiences That Matter
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
                A collection of real-world applications I've built using modern
                technologies, clean architecture, and thoughtful user
                experiences.
              </p>
            </motion.div>

            {/* =========================================
                PROJECT GRID
            ========================================== */}

            {loading ? (
              <div className="mt-20 grid gap-8 md:grid-cols-2">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="animate-pulse overflow-hidden rounded-[28px] border border-gray-200 bg-white"
                  >
                    <div className="h-72 bg-gray-200" />

                    <div className="space-y-4 p-7">
                      <div className="h-5 w-1/3 rounded bg-gray-200" />
                      <div className="h-8 w-3/4 rounded bg-gray-200" />
                      <div className="h-4 w-full rounded bg-gray-200" />
                      <div className="h-4 w-5/6 rounded bg-gray-200" />
                    </div>
                  </div>
                ))}
              </div>
            ) : projects.length === 0 ? (
              <div className="mt-20 rounded-3xl border border-gray-200 bg-white p-12 text-center shadow-sm">
                <FaCode className="mx-auto mb-5 text-4xl text-rose-500" />

                <h3 className="text-2xl font-bold text-gray-900">
                  No Projects Found
                </h3>

                <p className="mt-3 text-gray-500">
                  Projects will appear here once they are available.
                </p>
              </div>
            ) : (
              <div className="mt-20 grid gap-10 md:grid-cols-2">
                {projects.map((project, index) => (
                  <motion.article
                    key={project._id || project.id || index}
                    initial={{
                      opacity: 0,
                      y: 50,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      margin: "-100px",
                    }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                    }}
                    className="group overflow-hidden rounded-[28px] border border-gray-200/80 bg-white shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-rose-200 hover:shadow-[0_25px_70px_rgba(244,63,94,0.12)]"
                  >
                    {/* =========================================
                        PROJECT IMAGE
                    ========================================== */}

                    <div className="relative h-[300px] overflow-hidden bg-gray-100">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center bg-gradient-to-br from-rose-500 via-pink-500 to-fuchsia-600">
                          <FaCode className="text-7xl text-white/80" />
                        </div>
                      )}

                      {/* Image Overlay */}

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      {/* Category */}

                      <div className="absolute left-6 top-6">
                        <span className="rounded-full border border-white/20 bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wide text-rose-600 shadow-xl backdrop-blur-md">
                          {project.category || "Web Application"}
                        </span>
                      </div>

                      {/* Project Number */}

                      <div className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/20 text-sm font-bold text-white backdrop-blur-md">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      {/* Bottom Content */}

                      <div className="absolute bottom-6 left-6 right-6">
                        <h2 className="text-2xl font-bold text-white sm:text-3xl">
                          {project.title}
                        </h2>

                        <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/80">
                          {project.shortDescription ||
                            "A modern web application built with powerful technologies."}
                        </p>
                      </div>
                    </div>

                    {/* =========================================
                        CARD BODY
                    ========================================== */}

                    <div className="p-7">
                      {/* Technologies */}

                      <div className="flex flex-wrap gap-2">
                        {project.technologies
                          ?.slice(0, 5)
                          .map((technology, techIndex) => {
                            const techName =
                              typeof technology === "string"
                                ? technology
                                : technology?.name;

                            return (
                              <span
                                key={techIndex}
                                className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-semibold text-gray-600 transition hover:border-rose-200 hover:bg-rose-50 hover:text-rose-600"
                              >
                                <span className="text-sm text-rose-500">
                                  {technologyIcons[techName] || <FaCode />}
                                </span>

                                {techName}
                              </span>
                            );
                          })}
                      </div>

                      {/* Divider */}

                      <div className="my-6 h-px bg-gray-100" />

                      {/* Footer */}

                      <div className="flex items-center justify-between gap-4">
                        <NavLink
                          to={`/project-detail/${project._id}`}
                          className="group/button inline-flex items-center gap-2 text-sm font-bold text-gray-800 transition hover:text-rose-600"
                        >
                          View Case Study
                          <FaArrowRight className="text-xs transition-transform duration-300 group-hover/button:translate-x-1" />
                        </NavLink>

                        <div className="flex items-center gap-2">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="View GitHub repository"
                              className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-600 transition duration-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white"
                            >
                              <FaGithub />
                            </a>
                          )}

                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="View live project"
                              className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500 text-white shadow-lg shadow-rose-200 transition duration-300 hover:scale-105 hover:bg-rose-600"
                            >
                              <FaExternalLinkAlt className="text-xs" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}

            {/* =========================================
                GITHUB CTA
            ========================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
              className="mt-20 text-center"
            >
              <p className="mb-5 text-sm font-medium text-gray-500">
                Want to explore more of my work?
              </p>

              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-2xl bg-gray-900 px-7 py-4 font-semibold text-white shadow-xl shadow-gray-200 transition duration-300 hover:-translate-y-1 hover:bg-rose-500 hover:shadow-rose-200"
              >
                <FaGithub className="text-lg" />
                View More Projects
                <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />

      {/* =========================================
          PROJECT MODAL
      ========================================== */}

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-5 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                y: 30,
              }}
              transition={{
                duration: 0.3,
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[30px] bg-white shadow-2xl"
            >
              {/* Close Button */}

              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition hover:bg-rose-500"
              >
                <FaTimes />
              </button>

              {/* Modal Image */}

              <div className="relative h-64 overflow-hidden sm:h-80">
                {selectedProject.image ? (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-gradient-to-br from-rose-500 to-pink-600">
                    <FaCode className="text-7xl text-white/80" />
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                <div className="absolute bottom-7 left-7">
                  <span className="text-sm font-semibold uppercase tracking-wider text-rose-300">
                    {selectedProject.category}
                  </span>

                  <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">
                    {selectedProject.title}
                  </h2>
                </div>
              </div>

              {/* Modal Content */}

              <div className="p-7 sm:p-10">
                <p className="text-base leading-8 text-gray-600">
                  {selectedProject.description ||
                    selectedProject.shortDescription}
                </p>

                {/* Features */}

                {selectedProject.features?.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-lg font-bold text-gray-900">
                      Key Features
                    </h3>

                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {selectedProject.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 rounded-xl bg-gray-50 p-3"
                        >
                          <FaCheckCircle className="mt-1 flex-shrink-0 text-rose-500" />

                          <span className="text-sm leading-6 text-gray-600">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technologies */}

                {selectedProject.technologies?.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-lg font-bold text-gray-900">
                      Technologies
                    </h3>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {selectedProject.technologies.map((technology, index) => {
                        const techName =
                          typeof technology === "string"
                            ? technology
                            : technology?.name;

                        return (
                          <span
                            key={index}
                            className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600"
                          >
                            <span className="text-rose-500">
                              {technologyIcons[techName] || <FaCode />}
                            </span>

                            {techName}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Modal Actions */}

                <div className="mt-10 flex flex-wrap gap-3 border-t border-gray-100 pt-7">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-6 py-3 font-semibold text-white transition hover:bg-gray-800"
                    >
                      <FaGithub />
                      GitHub
                    </a>
                  )}

                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-rose-500 px-6 py-3 font-semibold text-white shadow-lg shadow-rose-200 transition hover:bg-rose-600"
                    >
                      <FaExternalLinkAlt className="text-sm" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
