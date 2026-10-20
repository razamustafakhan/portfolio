import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaMobileAlt,
  FaRocket,
  FaCheckCircle,
} from "react-icons/fa";

const About = () => {
  const expertise = [
    {
      icon: <FaCode />,
      title: "Frontend Development",
      description:
        "Building responsive and interactive user interfaces with React.js, JavaScript, HTML5, CSS3, Tailwind CSS, and Bootstrap.",
    },
    {
      icon: <FaServer />,
      title: "Backend Development",
      description:
        "Developing secure and scalable backend applications and REST APIs using Node.js, Express.js, and modern JavaScript practices.",
    },
    {
      icon: <FaDatabase />,
      title: "Database & APIs",
      description:
        "Working with MongoDB, database design, CRUD operations, data modeling, API integration, and authentication systems.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Modern Development",
      description:
        "Exploring Next.js, TypeScript, and React Native to build modern web and cross-platform mobile applications.",
    },
  ];

  const highlights = [
    "Developing full-stack applications using the MERN stack",
    "Building RESTful APIs with Node.js and Express.js",
    "Creating responsive and user-friendly React interfaces",
    "Implementing authentication and authorization systems",
    "Working with MongoDB databases and data modeling",
    "Using Git and GitHub for version control",
    "Deploying applications to modern cloud platforms",
    "Continuously learning and improving development skills",
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gray-50 py-20 lg:py-28"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-rose-100/50 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-pink-100/50 blur-3xl" />

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
            ABOUT ME
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Passionate About Building
            <span className="block bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
              Modern Web Applications
            </span>
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
            I am a Junior MERN Stack Developer focused on creating practical,
            scalable, and user-friendly web applications that solve real-world
            problems.
          </p>
        </motion.div>

        {/* =========================================
            MAIN ABOUT CONTENT
        ========================================== */}
        <div className="mt-16 grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Building My Career Through
              <span className="text-rose-500"> Code & Projects</span>
            </h3>

            <p className="mt-6 leading-8 text-gray-600">
              I'm{" "}
              <strong className="font-semibold text-gray-900">
                Mustafa Raza Khan
              </strong>
              , a Junior MERN Stack Developer with a strong interest in
              full-stack web development. I enjoy turning ideas into functional,
              responsive, and maintainable web applications.
            </p>

            <p className="mt-5 leading-8 text-gray-600">
              My primary development stack includes{" "}
              <strong className="font-semibold text-gray-900">
                MongoDB, Express.js, React.js, and Node.js
              </strong>
              . I have hands-on experience working across both frontend and
              backend development, from creating responsive interfaces to
              developing APIs and connecting applications with databases.
            </p>

            <p className="mt-5 leading-8 text-gray-600">
              I believe the best way to grow as a developer is by continuously
              building real applications, solving technical challenges, and
              learning from every project. My goal is to join a professional
              development team where I can contribute my skills, learn from
              experienced developers, and grow into a strong full-stack
              engineer.
            </p>

            {/* Highlights */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.4,
                  }}
                  className="flex items-start gap-3"
                >
                  <FaCheckCircle className="mt-1 flex-shrink-0 text-rose-500" />

                  <span className="text-sm leading-6 text-gray-600">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              {expertise.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:border-rose-200 hover:shadow-xl hover:shadow-rose-100/50"
                >
                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-50 text-xl text-rose-500 transition duration-300 group-hover:bg-rose-500 group-hover:text-white">
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h4 className="mt-5 text-lg font-bold text-gray-900">
                    {item.title}
                  </h4>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Career Goal Card */}
            <div className="mt-6 rounded-2xl border border-rose-100 bg-gradient-to-r from-rose-50 to-pink-50 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white text-xl text-rose-500 shadow-sm">
                  <FaRocket />
                </div>

                <div>
                  <h4 className="font-bold text-gray-900">My Career Goal</h4>

                  <p className="mt-2 text-sm leading-7 text-gray-600">
                    I'm looking for an opportunity as a Junior MERN Stack
                    Developer where I can work on real-world products,
                    collaborate with a development team, and continue growing my
                    skills in modern full-stack development.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
