import React, { useState } from "react";
import "./contact.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { FaEnvelope, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);

    alert("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <Navbar />

      <section className="contact-section">
        <div className="container">
          <div className="contact-wrapper">
            {/* Left Side */}
            <div className="contact-info">
              <span className="contact-tag">CONTACT</span>

              <h1>
                Let’s build something
                <br />
                great together.
              </h1>

              <p>
                Have a project idea, collaboration, or just want to connect?
                Send me a message and I’ll get back to you soon.
              </p>

              <div className="contact-card">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>

                <div>
                  <small>Email</small>
                  <h6>mustafa@example.com</h6>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="contact-form-box">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Full Name</label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Email Address</label>

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Message</label>

                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Write your message..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="contact-btn">
                  <FaPaperPlane />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;