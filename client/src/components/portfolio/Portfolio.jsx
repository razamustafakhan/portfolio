import React from "react";

import "./portfolio.css";

import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

const projects = [
  {
    title: "Student Management",

    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",

    desc:
      "Complete student dashboard with attendance, results, and analytics.",

    tech: ["React", "Firebase", "Bootstrap"],

    github:
      "https://github.com/yourusername/student-management",

    demo:
      "https://student-app-demo.netlify.app",
  },

  {
    title: "Portfolio Website",

    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",

    desc:
      "Modern responsive portfolio with animations and clean layouts.",

    tech: ["React", "CSS", "Framer"],

    github:
      "https://github.com/yourusername/portfolio-site",

    demo: "#",
  },

  {
    title: "Flask Blog API",

    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop",

    desc:
      "REST API with JWT auth, CRUD operations, and MongoDB integration.",

    tech: ["Flask", "Python", "MongoDB"],

    github:
      "https://github.com/yourusername/flask-blog-api",

    demo: "#",
  },

  {
    title: "Weather App",

    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=1200&auto=format&fit=crop",

    desc:
      "Live weather forecasting app with beautiful UI and API integration.",

    tech: ["JavaScript", "API", "CSS"],

    github:
      "https://github.com/yourusername/weather-app",

    demo:
      "https://weather-now-demo.netlify.app",
  },
];

const Portfolio = () => {

  return (

    <section
      className="modern-portfolio"
      id="projects"
    >

      <div className="container">

        {/* HEADER */}

        <div className="portfolio-header">

          <span>
            FEATURED WORK
          </span>

          <h2>
            Selected Projects
          </h2>

          <p>
            A collection of clean, scalable, and modern web applications.
          </p>

        </div>

        {/* PROJECT GRID */}

        <div className="portfolio-grid">

          {projects.map((project, index) => (

            <div
              className="project-card"
              key={index}
            >

              {/* IMAGE */}

              <div className="project-image">

                <img
                  src={project.image}
                  alt={project.title}
                />

              </div>

              {/* CONTENT */}

              <div className="project-content">

                <div className="project-top">

                  <h3>
                    {project.title}
                  </h3>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-btn"
                  >

                    <FaGithub />

                  </a>

                </div>

                <p>
                  {project.desc}
                </p>

                {/* TECH */}

                <div className="tech-stack">

                  {project.tech.map((tech, i) => (

                    <span key={i}>
                      {tech}
                    </span>

                  ))}

                </div>

                {/* BUTTON */}

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                >

                  Live Preview

                  <FaExternalLinkAlt />

                </a>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Portfolio;