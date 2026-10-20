import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaServer,
  FaMobileAlt,
  FaTools,
  FaCode,
  FaRocket,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiRender,
} from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FaReact />,
      description:
        "Building responsive, interactive, and user-friendly interfaces with modern frontend technologies.",
      skills: [
        {
          name: "React.js",
          icon: <FaReact />,
          level: "Advanced",
        },
        {
          name: "JavaScript",
          icon: <FaJsSquare />,
          level: "Advanced",
        },
        {
          name: "HTML5",
          icon: <FaHtml5 />,
          level: "Advanced",
        },
        {
          name: "CSS3",
          icon: <FaCss3Alt />,
          level: "Advanced",
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss />,
          level: "Intermediate",
        },
        {
          name: "Bootstrap",
          icon: <SiBootstrap />,
          level: "Intermediate",
        },
      ],
    },

    {
      title: "Backend Development",
      icon: <FaServer />,
      description:
        "Creating REST APIs, server-side applications, authentication systems, and backend services.",
      skills: [
        {
          name: "Node.js",
          icon: <FaNodeJs />,
          level: "Intermediate",
        },
        {
          name: "Express.js",
          icon: <SiExpress />,
          level: "Intermediate",
        },
        {
          name: "REST APIs",
          icon: <FaServer />,
          level: "Intermediate",
        },
        {
          name: "JWT Authentication",
          icon: <FaServer />,
          level: "Intermediate",
        },
      ],
    },

    {
      title: "Database & Data",
      icon: <FaDatabase />,
      description:
        "Working with databases, data modeling, CRUD operations, and application data management.",
      skills: [
        {
          name: "MongoDB",
          icon: <SiMongodb />,
          level: "Intermediate",
        },
        {
          name: "Mongoose",
          icon: <FaDatabase />,
          level: "Intermediate",
        },
        {
          name: "CRUD Operations",
          icon: <FaDatabase />,
          level: "Advanced",
        },
        {
          name: "Database Design",
          icon: <FaDatabase />,
          level: "Intermediate",
        },
      ],
    },

    {
      title: "Tools & Technologies",
      icon: <FaTools />,
      description:
        "Using modern development tools and platforms to build, test, manage, and deploy applications.",
      skills: [
        {
          name: "Git",
          icon: <FaGitAlt />,
          level: "Intermediate",
        },
        {
          name: "GitHub",
          icon: <FaGithub />,
          level: "Intermediate",
        },
        {
          name: "Postman",
          icon: <SiPostman />,
          level: "Intermediate",
        },
        {
          name: "Vercel",
          icon: <SiVercel />,
          level: "Intermediate",
        },
        {
          name: "Netlify",
          icon: <SiNetlify />,
          level: "Intermediate",
        },
        {
          name: "Render",
          icon: <SiRender />,
          level: "Intermediate",
        },
      ],
    },
  ];

  const additionalSkills = [
    {
      name: "TypeScript",
      icon: <SiTypescript />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
    },
    {
      name: "React Native",
      icon: <FaMobileAlt />,
    },
    {
      name: "Responsive Design",
      icon: <FaMobileAlt />,
    },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-white py-20 lg:py-28"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-rose-100/50 blur-3xl" />

      <div className="pointer-events-none absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-pink-100/40 blur-3xl" />

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
            TECHNICAL SKILLS
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Technologies I Use to
            <span className="block bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
              Build Web Applications
            </span>
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
            My technical toolkit covers frontend development, backend
            engineering, databases, APIs, version control, and deployment.
          </p>
        </motion.div>

        {/* =========================================
            SKILL CATEGORIES
        ========================================== */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: categoryIndex * 0.1,
                duration: 0.6,
              }}
              className="group rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-rose-200 hover:shadow-xl hover:shadow-rose-100/40"
            >
              {/* Category Header */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-rose-50 text-xl text-rose-500 transition duration-300 group-hover:bg-rose-500 group-hover:text-white">
                  {category.icon}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {category.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skills List */}
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 transition duration-300 hover:border-rose-100 hover:bg-rose-50"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg text-rose-500">
                        {skill.icon}
                      </span>

                      <span className="text-sm font-medium text-gray-700">
                        {skill.name}
                      </span>
                    </div>

                    <span className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* =========================================
            ADDITIONAL TECHNOLOGIES
        ========================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12"
        >
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-7">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Additional Technologies
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Technologies I'm currently exploring and expanding my
                  knowledge in.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-3 md:justify-end">
                {additionalSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-rose-200 hover:text-rose-500"
                  >
                    <span className="text-lg text-rose-500">{skill.icon}</span>

                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* =========================================
            DEVELOPMENT APPROACH
        ========================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12"
        >
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-rose-50 text-rose-500">
                <FaCode />
              </div>

              <h4 className="mt-4 font-bold text-gray-900">Clean Code</h4>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Writing readable, organized, and maintainable code.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-rose-50 text-rose-500">
                <FaMobileAlt />
              </div>

              <h4 className="mt-4 font-bold text-gray-900">
                Responsive Design
              </h4>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Creating interfaces that work smoothly across all devices.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-rose-50 text-rose-500">
                <FaRocket />
              </div>

              <h4 className="mt-4 font-bold text-gray-900">
                Continuous Learning
              </h4>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Continuously learning modern technologies and development
                practices.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
