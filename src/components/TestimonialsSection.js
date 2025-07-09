"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function TestimonialsSection() {
  const { t } = useLanguage();

  const testimonials = t.testimonialsList || [];

  return (
    <section id="testimonials" className="py-24 px-6 bg-gray-950 text-white">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-purple-400">
          {t.testimonialsTitle}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-purple-500 shadow-md hover:shadow-purple-500/30 transition duration-300"
              whileHover={{ scale: 1.03 }}
            >
              <p className="text-gray-300 mb-4 text-sm italic">
                "{testimonial.feedback}"
              </p>
              <div className="text-sm mt-4 border-t border-gray-700 pt-4">
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-gray-400">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
