import React from "react";
import "./about.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import {
  FaCode,
  FaDatabase,
  FaServer,
  FaArrowRight,
} from "react-icons/fa";

const About = () => {
  return (
    <>
      <Navbar />

      <section className="about-section">
        <div className="container">
          {/* HERO */}
          <div className="about-hero">
            <div className="hero-content">
              <span className="hero-badge">ABOUT ME</span>

              <h1>
                Designing & Building
                <br />
                Modern Digital Products.
              </h1>

              <p>
                I'm <strong>Mustafa Raza Khan</strong>, a full-stack developer
                focused on building scalable, fast and clean web applications
                with modern UI and solid backend architecture.
              </p>

              <div className="hero-buttons">
                <a href="/contact" className="primary-btn">
                  Let's Talk
                </a>

                <a href="/portfolio" className="secondary-btn">
                  View Work <FaArrowRight />
                </a>
              </div>
            </div>

            <div className="hero-image">
              <div className="image-wrapper">
                <img src="/logo.jpg" alt="profile" />
              </div>
            </div>
          </div>

          {/* STATS */}
          <div className="stats-wrapper">
            <div className="stat-box">
              <h2>20+</h2>
              <p>Projects Completed</p>
            </div>

            <div className="stat-box">
              <h2>2+</h2>
              <p>Years Experience</p>
            </div>

            <div className="stat-box">
              <h2>100%</h2>
              <p>Clean Code Focus</p>
            </div>

            <div className="stat-box">
              <h2>24/7</h2>
              <p>Learning Mindset</p>
            </div>
          </div>

          {/* SERVICES */}
          <div className="services-section">
            <div className="section-header">
              <span>SERVICES</span>
              <h2>What I Do</h2>
            </div>

            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">
                  <FaCode />
                </div>

                <h3>Frontend Development</h3>

                <p>
                  Creating responsive and modern interfaces using React,
                  JavaScript and clean UI systems.
                </p>
              </div>

              <div className="service-card active-card">
                <div className="service-icon">
                  <FaServer />
                </div>

                <h3>Backend Development</h3>

                <p>
                  Building scalable APIs, authentication systems and secure
                  backend architecture.
                </p>
              </div>

              <div className="service-card">
                <div className="service-icon">
                  <FaDatabase />
                </div>

                <h3>Database & Integration</h3>

                <p>
                  Working with MongoDB, Firebase and cloud-based integrations
                  for real-world apps.
                </p>
              </div>
            </div>
          </div>

          {/* TECH STACK */}
          <div className="stack-section">
            <div className="section-header">
              <span>TECH STACK</span>
              <h2>Tools & Technologies</h2>
            </div>

            <div className="stack-grid">
              {[
                "React",
                "JavaScript",
                "Flask",
                "MongoDB",
                "Firebase",
                "Bootstrap",
                "GitHub",
                "REST API",
                "CSS3",
                "HTML5",
              ].map((item, index) => (
                <div key={index} className="stack-item">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;