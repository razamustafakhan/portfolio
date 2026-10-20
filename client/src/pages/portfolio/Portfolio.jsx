import React from "react";
import "./portfolio.css";
import Navbar from "../../components/navbar/Navbar";
import Aboutme from "../../components/aboutme/Aboutme";
import Techstack from "../../components/techstack/Techstack";
import { FaGithub, FaLinkedinIn, FaArrowRight } from "react-icons/fa";

const Portfolio = () => {
  return (
    <div className="portfolio-page">
      <Navbar />

      {/* Hero Section */}
      <section className="portfolio-hero">
        <div className="container">
          <div className="hero-wrapper">
            {/* Left */}
            <div className="hero-content">
              <span className="hero-tag">FULL STACK DEVELOPER</span>

              <h1>
                Building modern
                <br />
                digital experiences.
              </h1>

              <p>
                I create scalable web applications with clean UI, smooth user
                experience, and modern technologies like React, Node.js,
                MongoDB, and Flask.
              </p>

              <div className="hero-buttons">
                <a href="#projects" className="primary-btn">
                  View Projects
                  <FaArrowRight />
                </a>

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-btn"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-btn"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>

            {/* Right */}
            <div className="hero-image">
              <div className="image-card">
                <img src="/logo.jpg" alt="profile" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <Aboutme />

      {/* Tech Stack */}
      <Techstack />

      {/* CTA */}
      <section className="portfolio-cta">
        <div className="container">
          <div className="cta-box">
            <div>
              <span>LET'S WORK TOGETHER</span>
              <h2>Have an idea in mind?</h2>
            </div>

            <a href="/contact" className="primary-btn">
              Contact Me
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;