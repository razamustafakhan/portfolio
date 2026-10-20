import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaChalkboardTeacher,
  FaLaptopCode,
  FaRocket,
  FaCheckCircle,
} from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      type: "development",
      icon: <FaLaptopCode />,
      year: "Present",
      title: "Junior MERN Stack Developer",
      company: "Independent Developer",
      description:
        "Focused on building full-stack web applications using the MERN stack while continuously improving my software development skills through hands-on projects and real-world problem solving.",
      responsibilities: [
        "Developing full-stack web applications using MongoDB, Express.js, React.js, and Node.js.",
        "Building responsive and reusable user interfaces using React.js, JavaScript, Tailwind CSS, and Bootstrap.",
        "Creating RESTful APIs and implementing backend functionality with Node.js and Express.js.",
        "Working with MongoDB and Mongoose for database design, data modeling, and CRUD operations.",
        "Implementing authentication and authorization using JWT and secure application practices.",
        "Using Git and GitHub for source control and project management.",
        "Deploying and managing web applications using modern deployment platforms.",
      ],
      technologies: [
        "React.js",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "REST APIs",
        "JWT",
        "Git",
        "GitHub",
      ],
    },

    {
      type: "education",
      icon: <FaChalkboardTeacher />,
      year: "2016 – Present",
      title: "Teacher / Educator",
      company: "Education Sector",
      description:
        "Working in education while developing a strong interest in software development and gradually transitioning my professional career toward full-stack web development.",
      responsibilities: [
        "Developed strong communication and interpersonal skills through daily interaction with students and colleagues.",
        "Planned and organized lessons, activities, and learning materials effectively.",
        "Managed multiple responsibilities while maintaining consistency and attention to detail.",
        "Developed problem-solving, time management, and organizational skills.",
        "Continuously learned new technologies and dedicated personal time to software development.",
      ],
      technologies: [
        "Communication",
        "Problem Solving",
        "Time Management",
        "Organization",
        "Continuous Learning",
      ],
    },
  ];

  const journeyHighlights = [
    {
      icon: <FaCode />,
      title: "Full-Stack Development",
      description:
        "Building applications across frontend, backend, APIs, and databases.",
    },
    {
      icon: <FaRocket />,
      title: "Project-Based Learning",
      description:
        "Learning by building practical applications and solving real development challenges.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Career Transition",
      description:
        "Moving toward a professional career in software and full-stack web development.",
    },
  ];

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-gray-50 py-20 lg:py-28"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-rose-100/50 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-pink-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
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
          <span className="inline-flex rounded-full border border-rose-200 bg-rose-50 px-5 py-2 text-sm font-semibold tracking-wide text-rose-600">
            PROFESSIONAL JOURNEY
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            My Journey From
            <span className="block bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
              Education to Software Development
            </span>
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
            My professional journey combines years of experience in education
            with a growing career in full-stack web development, driven by a
            passion for technology and continuous learning.
          </p>
        </motion.div>

        {/* =========================================
            EXPERIENCE TIMELINE
        ========================================== */}
        <div className="relative mx-auto mt-16 max-w-5xl">
          {/* Timeline Line */}
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-rose-400 via-pink-300 to-transparent md:left-1/2 md:block" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -50 : 50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-0 z-10 hidden h-12 w-12 items-center justify-center rounded-full border-4 border-gray-50 bg-rose-500 text-lg text-white shadow-lg md:left-1/2 md:flex md:-translate-x-1/2">
                  {experience.icon}
                </div>

                {/* Experience Card */}
                <div className="w-full md:w-[46%]">
                  <div className="group rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-rose-200 hover:shadow-xl hover:shadow-rose-100/40">
                    {/* Header */}
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <span className="inline-flex rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-600">
                          {experience.year}
                        </span>

                        <h3 className="mt-4 text-xl font-bold text-gray-900">
                          {experience.title}
                        </h3>

                        <p className="mt-1 font-medium text-rose-500">
                          {experience.company}
                        </p>
                      </div>

                      {/* Mobile Icon */}
                      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-rose-50 text-lg text-rose-500 md:hidden">
                        {experience.icon}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mt-5 text-sm leading-7 text-gray-600">
                      {experience.description}
                    </p>

                    {/* Responsibilities */}
                    <div className="mt-6">
                      <h4 className="text-sm font-bold uppercase tracking-wide text-gray-900">
                        Key Responsibilities
                      </h4>

                      <ul className="mt-4 space-y-3">
                        {experience.responsibilities.map(
                          (responsibility, responsibilityIndex) => (
                            <li
                              key={responsibilityIndex}
                              className="flex items-start gap-3 text-sm leading-6 text-gray-600"
                            >
                              <FaCheckCircle className="mt-1 flex-shrink-0 text-xs text-rose-500" />

                              <span>{responsibility}</span>
                            </li>
                          ),
                        )}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {experience.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-lg border border-gray-100 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600 transition hover:border-rose-100 hover:bg-rose-50 hover:text-rose-600"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* =========================================
            JOURNEY HIGHLIGHTS
        ========================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-20 max-w-5xl"
        >
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900">
              What I Bring to a Development Team
            </h3>

            <p className="mt-3 text-gray-600">
              Skills and qualities developed through my professional and
              software development journey.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {journeyHighlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-rose-200 hover:shadow-lg"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-rose-50 text-xl text-rose-500">
                  {item.icon}
                </div>

                <h4 className="mt-5 font-bold text-gray-900">{item.title}</h4>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* =========================================
            CAREER TRANSITION CTA
        ========================================== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-16 max-w-4xl"
        >
          <div className="rounded-3xl bg-gradient-to-r from-rose-500 to-pink-600 p-8 text-center shadow-xl shadow-rose-200 sm:p-10">
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              Ready to Start My Next Chapter
            </h3>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/90">
              I'm actively looking for an opportunity to begin my professional
              journey as a Junior MERN Stack Developer, contribute to meaningful
              projects, and grow alongside an experienced development team.
            </p>

            <a
              href="#projects"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-semibold text-rose-600 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Explore My Projects
              <FaRocket className="text-sm" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
