"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Web App Development",
    icon: "💻",
    description:
      "Custom web applications tailored to your business logic and workflow.",
  },
  {
    title: "Mobile App Development",
    icon: "📱",
    description: "iOS and Android apps with beautiful UI and fast performance.",
  },
  {
    title: "AI & ML Solutions",
    icon: "🤖",
    description:
      "Smart systems powered by machine learning and natural language processing.",
  },
  {
    title: "Digital Transformation",
    icon: "🚀",
    description:
      "Modernizing legacy systems and digitizing your full business ecosystem.",
  },
  {
    title: "Cloud Architecture",
    icon: "☁️",
    description: "Secure, scalable cloud solutions using AWS, Azure, or GCP.",
  },
  {
    title: "SaaS Platform Development",
    icon: "🧩",
    description:
      "From MVP to enterprise SaaS, we build fully hosted platforms.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 bg-gray-950 text-white">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-purple-400">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow hover:shadow-purple-600/50 transition duration-300 border border-gray-800 hover:border-purple-500"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
