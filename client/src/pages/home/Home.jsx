import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./home.css"; // Custom styles
import Techstack from "../../components/techstack/Techstack";
import Aboutme from "../../components/aboutme/Aboutme";
import Hero from "../../components/hero/Hero";
import Portfolio from "../../components/portfolio/Portfolio";
import Footer from "../../components/footer/Footer";
import About from "../../components/aboutme/Aboutme";
import Skills from "../../components/skills/Skills";
import Experience from "../../components/experience/Experience";
import Services from "../../components/services/Services";
import Contact from "../../components/contact/Contact";

const Home = () => (
  <>
    <Hero />
    <Navbar isHome={true} />
    <About />
    <Skills />
    <Experience />

    <Services />
    <Contact />
    <Footer />
  </>
);

export default Home;
