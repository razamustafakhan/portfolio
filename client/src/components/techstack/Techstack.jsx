import React from "react";
import "./techstack.css";
import { FaReact, FaPython, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { SiMongodb, SiFlask, SiHtml5, SiExpo } from "react-icons/si";

const techStack = [
  { name: "React", icon: <FaReact />, level: 85 },
  { name: "React Native (Expo)", icon: <SiExpo />, level: 80 },
  { name: "Flask", icon: <SiFlask />, level: 75 },
  { name: "MongoDB", icon: <SiMongodb />, level: 70 },
  { name: "Python", icon: <FaPython />, level: 80 },
  { name: "JavaScript", icon: <FaJsSquare />, level: 85 },
  { name: "CSS", icon: <FaCss3Alt />, level: 80 },
  { name: "HTML", icon: <SiHtml5 />, level: 90 },
];

const Techstack = () => (
  <section className="techstack-section">
    <div className="container">
      <h2 className="techstack-title">⚡ Tech Stack & Skills</h2>
      <p className="techstack-subtitle">
        Tools & technologies I use to craft modern web and mobile applications.
      </p>

      <div className="techstack-grid">
        {techStack.map((tech, index) => (
          <div className="tech-card" key={index}>
            <div className="tech-icon">{tech.icon}</div>
            <p className="tech-name">{tech.name}</p>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${tech.level}%` }}
              ></div>
            </div>
            <span className="tech-level">{tech.level}%</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Techstack;
