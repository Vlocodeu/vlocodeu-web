"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function BlogSection() {
  const { t } = useLanguage();

  const blogPosts = t.blogPosts || [];

  return (
    <section id="blog" className="py-24 px-6 bg-gray-950 text-white">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-purple-400">
          {t.blogTitle}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow hover:shadow-purple-600/50 transition duration-300 border border-gray-800 hover:border-purple-500 flex flex-col justify-between"
              whileHover={{ y: -5 }}
            >
              <div>
                <p className="text-sm text-gray-400 mb-1">{post.date}</p>
                <h3 className="text-lg font-semibold mb-2 text-white">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-400">{post.summary}</p>
              </div>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block text-purple-400 hover:text-white text-sm font-medium"
              >
                {t.readMoreBtn}
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
