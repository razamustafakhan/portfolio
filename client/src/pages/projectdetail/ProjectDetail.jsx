import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaCheckCircle,
  FaCode,
  FaCalendarAlt,
  FaLayerGroup,
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

const ProjectDetail = () => {
  const { id } = useParams();

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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
    const getProject = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(`http://localhost:3000/api/project/${id}`);

        if (!response.ok) {
          throw new Error("Project not found");
        }

        const data = await response.json();

        setProject(data?.data);
      } catch (error) {
        console.error("Project details error:", error);
        setError("Unable to load project details.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      getProject();
    }
  }, [id]);

  // =========================================
  // LOADING STATE
  // =========================================

  if (loading) {
    return (
      <>
        <Navbar />

        <main className="min-h-screen bg-[#fafafa] px-6 py-24">
          <div className="mx-auto max-w-7xl animate-pulse">
            <div className="h-[500px] rounded-[32px] bg-gray-200" />

            <div className="mx-auto mt-12 max-w-4xl space-y-5">
              <div className="h-8 w-1/3 rounded bg-gray-200" />
              <div className="h-12 w-3/4 rounded bg-gray-200" />
              <div className="h-24 rounded bg-gray-200" />
            </div>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  // =========================================
  // ERROR STATE
  // =========================================

  if (error || !project) {
    return (
      <>
        <Navbar />

        <main className="flex min-h-[70vh] items-center justify-center bg-[#fafafa] px-6">
          <div className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-rose-50">
              <FaCode className="text-3xl text-rose-500" />
            </div>

            <h1 className="mt-6 text-3xl font-bold text-gray-900">
              Project Not Found
            </h1>

            <p className="mt-3 text-gray-500">
              The project you're looking for doesn't exist.
            </p>

            <Link
              to="/projects"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-gray-900 px-6 py-3 font-semibold text-white transition hover:bg-rose-500"
            >
              <FaArrowLeft />
              Back to Projects
            </Link>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="relative overflow-hidden bg-[#fafafa]">
        {/* =========================================
            BACKGROUND DECORATIONS
        ========================================== */}

        <div className="pointer-events-none absolute left-[-200px] top-[200px] h-[500px] w-[500px] rounded-full bg-rose-200/30 blur-[130px]" />

        <div className="pointer-events-none absolute right-[-200px] top-[700px] h-[500px] w-[500px] rounded-full bg-pink-200/30 blur-[130px]" />

        {/* =========================================
            HERO
        ========================================== */}

        <section className="relative px-6 pb-20 pt-16 lg:pt-24">
          <div className="mx-auto max-w-7xl">
            {/* Back Button */}

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Link
                to="/projects"
                className="group inline-flex items-center gap-3 text-sm font-semibold text-gray-500 transition hover:text-rose-500"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white transition group-hover:border-rose-200 group-hover:bg-rose-50">
                  <FaArrowLeft />
                </span>
                Back to Projects
              </Link>
            </motion.div>

            {/* Project Header */}

            <div className="mt-12 grid items-center gap-14 lg:grid-cols-2">
              {/* Left */}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <span className="inline-flex rounded-full border border-rose-200 bg-rose-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-rose-600">
                  {project.category || "Web Application"}
                </span>

                <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                  {project.title}
                </h1>

                <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
                  {project.shortDescription || project.description}
                </p>

                {/* Action Buttons */}

                <div className="mt-8 flex flex-wrap gap-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 rounded-xl bg-rose-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-rose-200 transition hover:-translate-y-1 hover:bg-rose-600"
                    >
                      <FaExternalLinkAlt className="text-sm" />
                      Live Demo
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-6 py-3.5 font-semibold text-gray-800 shadow-sm transition hover:-translate-y-1 hover:border-gray-900 hover:bg-gray-900 hover:text-white"
                    >
                      <FaGithub className="text-lg" />
                      View Source
                    </a>
                  )}
                </div>
              </motion.div>

              {/* Right - Project Image */}

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.7,
                  delay: 0.2,
                }}
                className="relative"
              >
                <div className="absolute -inset-4 rounded-[35px] bg-gradient-to-r from-rose-400/20 to-pink-400/20 blur-2xl" />

                <div className="relative overflow-hidden rounded-[30px] border border-white bg-white p-2 shadow-2xl">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-[350px] w-full rounded-[24px] object-cover sm:h-[450px]"
                    />
                  ) : (
                    <div className="flex h-[350px] items-center justify-center rounded-[24px] bg-gradient-to-br from-rose-500 to-pink-600 sm:h-[450px]">
                      <FaCode className="text-8xl text-white/80" />
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================
            PROJECT INFORMATION
        ========================================== */}

        <section className="relative border-y border-gray-100 bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1fr_350px]">
              {/* Main Content */}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-sm font-bold uppercase tracking-wider text-rose-500">
                  About The Project
                </span>

                <h2 className="mt-3 text-3xl font-black text-gray-900 sm:text-4xl">
                  Project Overview
                </h2>

                <p className="mt-6 text-lg leading-9 text-gray-600">
                  {project.description ||
                    project.shortDescription ||
                    "This project was developed using modern web development technologies and best practices."}
                </p>

                {/* Features */}

                {project.features?.length > 0 && (
                  <div className="mt-12">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Key Features
                    </h3>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      {project.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{
                            opacity: 0,
                            y: 15,
                          }}
                          whileInView={{
                            opacity: 1,
                            y: 0,
                          }}
                          viewport={{
                            once: true,
                          }}
                          transition={{
                            delay: index * 0.05,
                          }}
                          className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-[#fafafa] p-5 transition hover:border-rose-100 hover:bg-rose-50/30"
                        >
                          <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-rose-50 text-rose-500">
                            <FaCheckCircle />
                          </div>

                          <p className="text-sm font-medium leading-6 text-gray-600">
                            {feature}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>

              {/* Sidebar */}

              <motion.aside
                initial={{
                  opacity: 0,
                  x: 30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                className="h-fit rounded-[28px] border border-gray-200 bg-[#fafafa] p-7"
              >
                <h3 className="text-xl font-bold text-gray-900">
                  Project Information
                </h3>

                {/* Category */}

                <div className="mt-7 flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-rose-500 shadow-sm">
                    <FaLayerGroup />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                      Category
                    </p>

                    <p className="mt-1 font-semibold text-gray-800">
                      {project.category || "Web Application"}
                    </p>
                  </div>
                </div>

                {/* Date */}

                {project.createdAt && (
                  <div className="mt-6 flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-rose-500 shadow-sm">
                      <FaCalendarAlt />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                        Created
                      </p>

                      <p className="mt-1 font-semibold text-gray-800">
                        {new Date(project.createdAt).toLocaleDateString(
                          "en-US",
                          {
                            month: "long",
                            year: "numeric",
                          },
                        )}
                      </p>
                    </div>
                  </div>
                )}

                {/* Technologies */}

                <div className="mt-8 border-t border-gray-200 pt-7">
                  <h4 className="font-bold text-gray-900">Technologies Used</h4>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies?.map((technology, index) => {
                      const techName =
                        typeof technology === "string"
                          ? technology
                          : technology?.name;

                      return (
                        <span
                          key={index}
                          className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-semibold text-gray-600"
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
              </motion.aside>
            </div>
          </div>
        </section>

        {/* =========================================
            BOTTOM CTA
        ========================================== */}

        <section className="px-6 py-24">
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
            className="mx-auto max-w-5xl overflow-hidden rounded-[32px] bg-gray-900 px-8 py-14 text-center shadow-2xl sm:px-16"
          >
            <span className="text-sm font-bold uppercase tracking-wider text-rose-400">
              Explore The Project
            </span>

            <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
              Interested in seeing it in action?
            </h2>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-400">
              Explore the live application or take a look at the source code to
              understand how this project was built.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-xl bg-rose-500 px-6 py-3.5 font-semibold text-white transition hover:bg-rose-600"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-xl border border-gray-700 px-6 py-3.5 font-semibold text-white transition hover:bg-white hover:text-gray-900"
                >
                  <FaGithub />
                  GitHub Repository
                </a>
              )}
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ProjectDetail;
