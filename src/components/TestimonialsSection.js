"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Anita Sharma",
    role: "CTO, FinSpark",
    feedback:
      "Vlocodeu delivered our AI analytics dashboard faster than expected and exceeded our quality expectations. Their team is technically strong and very responsive.",
  },
  {
    name: "David Ortega",
    role: "Founder, EduGrow LMS",
    feedback:
      "What impressed us most was their ability to turn complex requirements into elegant, user-friendly software. Vlocodeu is our go-to tech partner.",
  },
  {
    name: "Emily Zhang",
    role: "Product Manager, FlowPulse",
    feedback:
      "We partnered with Vlocodeu for a SaaS MVP build. It was production-ready, scalable, and visually stunning. Their service is top-notch!",
  },
];

export default function TestimonialsSection() {
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
          What Clients Say
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-purple-500 shadow-md hover:shadow-purple-500/30 transition duration-300"
              whileHover={{ scale: 1.03 }}
            >
              <p className="text-gray-300 mb-4 text-sm italic">
                "{t.feedback}"
              </p>
              <div className="text-sm mt-4 border-t border-gray-700 pt-4">
                <p className="font-semibold text-white">{t.name}</p>
                <p className="text-gray-400">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
