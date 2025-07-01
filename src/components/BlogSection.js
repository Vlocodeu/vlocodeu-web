"use client";

import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "Why AI is Revolutionizing Enterprise Software",
    date: "April 12, 2025",
    summary:
      "Discover how artificial intelligence is reshaping core business applications, from automation to insights.",
    link: "https://www.outsystems.com/blog/posts/ai-enterprise-software/",
  },
  {
    title: "Top 5 Mistakes in SaaS Development (and How to Avoid Them)",
    date: "March 28, 2025",
    summary:
      "We break down the most common pitfalls teams face when building SaaS — and practical ways to solve them.",
    link: "https://devroom.uk/article/the-top-5-mistakes-in-saas-development-(and-how-to-avoid-them)",
  },
  {
    title: "Going Serverless: Benefits, Costs & When to Choose It",
    date: "March 14, 2025",
    summary:
      "A quick guide to serverless architecture and how it compares to traditional backend deployments.",
    link: "https://www.cloudflare.com/learning/serverless/why-use-serverless/",
  },
];

export default function BlogSection() {
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
          From Our Blogs
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
                className="mt-6 inline-block text-purple-400 hover:text-white text-sm font-medium"
              >
                Read More →
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
