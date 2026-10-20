import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhoneAlt,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    // TODO:
    // Connect this form to your MERN backend API.
    // Example:
    // await apiPost("/contact", formData);

    console.log("Contact Form Data:", formData);

    setTimeout(() => {
      setIsSubmitting(false);

      alert("Thank you! Your message has been sent.");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white py-20 lg:py-28"
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
            GET IN TOUCH
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Let's Build Something
            <span className="block bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
              Great Together
            </span>
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
            I'm currently open to opportunities as a Junior MERN Stack
            Developer. If you're looking for a motivated developer who enjoys
            learning, building, and solving problems, I'd love to hear from you.
          </p>
        </motion.div>

        {/* =========================================
            CONTACT CONTENT
        ========================================== */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* =========================================
              LEFT SIDE - CONTACT INFORMATION
          ========================================== */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-7 sm:p-8">
              <h3 className="text-2xl font-bold text-gray-900">
                Let's Connect
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                Whether you have a job opportunity, a project idea, or simply
                want to connect, feel free to reach out. I'm always interested
                in discussing web development and new opportunities.
              </p>

              {/* Contact Details */}
              <div className="mt-8 space-y-5">
                {/* Email */}
                <a
                  href="mailto:youremail@example.com"
                  className="group flex items-center gap-4"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white text-rose-500 shadow-sm transition group-hover:bg-rose-500 group-hover:text-white">
                    <FaEnvelope />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                      Email
                    </p>

                    <p className="mt-1 text-sm font-medium text-gray-700 transition group-hover:text-rose-500">
                      youremail@example.com
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+910000000000"
                  className="group flex items-center gap-4"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white text-rose-500 shadow-sm transition group-hover:bg-rose-500 group-hover:text-white">
                    <FaPhoneAlt />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                      Phone
                    </p>

                    <p className="mt-1 text-sm font-medium text-gray-700 transition group-hover:text-rose-500">
                      +91 00000 00000
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white text-rose-500 shadow-sm">
                    <FaMapMarkerAlt />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                      Location
                    </p>

                    <p className="mt-1 text-sm font-medium text-gray-700">
                      India
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-9 border-t border-gray-200 pt-7">
                <p className="text-sm font-semibold text-gray-900">
                  Find me online
                </p>

                <div className="mt-4 flex gap-3">
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-lg text-gray-700 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-gray-900 hover:text-white"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-lg text-gray-700 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white"
                  >
                    <FaLinkedinIn />
                  </a>

                  <a
                    href="mailto:youremail@example.com"
                    aria-label="Email"
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-lg text-gray-700 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-rose-500 hover:text-white"
                  >
                    <FaEnvelope />
                  </a>
                </div>
              </div>

              {/* Availability */}
              <div className="mt-8 rounded-2xl border border-rose-100 bg-rose-50 p-5">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />

                    <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
                  </span>

                  <span className="text-sm font-semibold text-gray-800">
                    Open to Junior Developer Opportunities
                  </span>
                </div>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Currently looking for opportunities to contribute to
                  real-world projects and grow as a full-stack developer.
                </p>
              </div>
            </div>
          </motion.div>

          {/* =========================================
              RIGHT SIDE - CONTACT FORM
          ========================================== */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm sm:p-9">
              <h3 className="text-2xl font-bold text-gray-900">
                Send Me a Message
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                Fill out the form below and I'll get back to you as soon as
                possible.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                {/* Name + Email */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      Your Name
                    </label>

                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-rose-400 focus:bg-white focus:ring-4 focus:ring-rose-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-rose-400 focus:bg-white focus:ring-4 focus:ring-rose-100"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What would you like to discuss?"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-rose-400 focus:bg-white focus:ring-4 focus:ring-rose-100"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    required
                    rows="6"
                    className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-rose-400 focus:bg-white focus:ring-4 focus:ring-rose-100"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 px-6 py-4 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <FaPaperPlane className="text-sm" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
