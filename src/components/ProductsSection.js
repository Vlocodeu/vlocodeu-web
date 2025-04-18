"use client";

import { motion } from "framer-motion";

const projects = [
  {
    name: "Sevai Network Mobile App",
    tagline:
      "Cross-platform FlutterFlow mobile app with Supabase and PostgreSQL backend.",
    link: "https://your-link-to-app.com", // replace with real link
  },
  {
    name: "EvolveInfi Website",
    tagline:
      "Corporate website for EvolveInfi (Spain) built using Next.js frontend & backend.",
    link: "https://evlo.vercel.app/", // replace with actual link
  },
  {
    name: "Actreg Company Website",
    tagline:
      "Responsive company site for Actreg (Spain) with full-stack Next.js development.",
    link: "https://actreg.vercel.app/", // replace with actual link
  },
  {
    name: "DMS with SharePoint",
    tagline:
      "Document Management System on Microsoft SharePoint used by 300+ users across 10+ companies.",
    link: "https://your-sharepoint-link.com", // replace with actual link
  },
  {
    name: "Smart Inventory AI",
    tagline:
      "AI-integrated stock tracking tool for warehouse management with forecasting dashboard.",
    link: "#",
  },
  {
    name: "CyberSecure Panel",
    tagline:
      "Security configuration tool for zero-trust architecture using Fortinet and Azure.",
    link: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 bg-gray-950 text-white">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-purple-400">
          Our Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow hover:shadow-purple-600/40 transition duration-300 border border-gray-800 hover:border-purple-500 flex flex-col justify-between"
              whileHover={{ scale: 1.04 }}
            >
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-400 text-sm mb-6">{project.tagline}</p>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block px-4 py-2 text-sm font-medium text-purple-400 border border-purple-600 rounded hover:bg-purple-600 hover:text-white transition"
              >
                View Details
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
