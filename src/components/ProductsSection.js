"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function ProjectsSection() {
  const { t } = useLanguage();

  const projects = t.projectsList || [];

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
          {t.projectsTitle}
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
                {t.viewDetailsBtn}
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
