"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/send-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        alert("✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        alert("❌ Failed to send. Please try again.");
      }
    } catch (err) {
      console.error("Error submitting contact form:", err);
      alert("❌ An error occurred. Please try again later.");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-gray-950 text-white">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-400">
          Get In Touch
        </h2>
        <p className="text-gray-400 mb-12">
          Let’s collaborate or talk tech. Drop us a message — or ping us on
          WhatsApp!
        </p>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            required
            className="md:col-span-2 bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded"
          ></textarea>
          <button
            type="submit"
            className="md:col-span-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded transition"
          >
            Send Message
          </button>
        </form>

        {/* Direct Contact Options */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6">
          <a
            href="mailto:vlocodeu@gmail.com"
            className="text-purple-400 hover:text-white underline"
          >
            📧 vlocodeu@gmail.com
          </a>
          <a
            href="https://wa.me/919597754524"
            target="_blank"
            rel="noopener"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded text-sm font-medium shadow"
          >
            💬 WhatsApp Us
          </a>
        </div>
      </motion.div>
    </section>
  );
}
