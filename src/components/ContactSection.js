"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function ContactSection() {
  const { t } = useLanguage();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
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
        alert(t.successMessage);
        setForm({ name: "", email: "", message: "" });
      } else {
        alert(t.errorMessage);
      }
    } catch (err) {
      console.error("Error submitting contact form:", err);
      alert(t.errorMessage);
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
          {t.contactTitle}
        </h2>
        <p className="text-gray-400 mb-12">{t.contactDescription}</p>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
        >
          <input
            type="text"
            name="name"
            placeholder={t.formName}
            value={form.name}
            onChange={handleChange}
            required
            className="bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder={t.formEmail}
            value={form.email}
            onChange={handleChange}
            required
            className="bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded"
          />
          <textarea
            name="message"
            placeholder={t.formMessage}
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
            {t.sendMessageBtn}
          </button>
        </form>

        {/* Direct Contact Options */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6">
          <a
            href="mailto:vlocodeu@gmail.com"
            className="text-purple-400 hover:text-white underline"
          >
            {t.emailLabel}
          </a>
          <a
            href="https://wa.me/919597754524"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded text-sm font-medium shadow"
          >
            {t.whatsappLabel}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
