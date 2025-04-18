"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "What services does Vlocodeu offer?",
    answer:
      "We offer full-stack development, AI solutions, SaaS platforms, mobile apps, and cloud transformation.",
  },
  {
    question: "Which industries do you serve?",
    answer:
      "We work across various industries including manufacturing, education, finance, and technology startups.",
  },
  {
    question: "Can Vlocodeu handle enterprise-grade systems?",
    answer:
      "Yes. We build scalable, secure, and performance-optimized systems for enterprise-level clients.",
  },
];

export default function AboutSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <section
        id="about"
        className="py-24 px-6 bg-gray-950 text-white flex items-center justify-center"
      >
        <motion.div
          className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Left: Text & FAQs */}
          <div>
            <h2 className="text-4xl font-bold text-purple-400 mb-6">
              About Vlocodeu
            </h2>
            <p className="text-lg text-gray-300 mb-10 leading-relaxed">
              Vlocodeu is a multi-domain IT company dedicated to building
              innovative, scalable, and intelligent solutions. From custom web
              apps and mobile development to cutting-edge AI integrations and
              cloud architecture, our mission is to drive digital transformation
              for businesses of all sizes. We're passionate about technology,
              obsessed with quality, and committed to creating impact.
            </p>

            {/* FAQ Accordion */}
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-700 pb-4">
                  <button
                    className="flex justify-between w-full text-left text-lg font-medium text-white hover:text-purple-400"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span>{faq.question}</span>
                    <span className="text-purple-400">
                      {activeIndex === index ? "−" : "+"}
                    </span>
                  </button>
                  {activeIndex === index && (
                    <p className="mt-3 text-gray-400 text-sm">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Company Building Image */}
          <div className="w-full">
            <img
              src="/assets/building.png"
              alt="Company Overview"
              className="rounded-lg w-full h-auto object-cover border border-gray-800 shadow-lg"
            />
          </div>
        </motion.div>
      </section>

      {/* 🔥 Join the Team Section */}
      <section className="py-24 px-6 bg-gray-950 text-white">
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Left Text */}
          <div className="text-center md:text-left ">
            <h2 className="text-4xl font-bold text-purple-400 mb-6">
              Join the team
            </h2>
            <p className="text-gray-200 text-lg mb-8 max-w-md">
              It all begins with an idea. Maybe you want to launch a business.
              Maybe you want to turn a hobby into something more. Or maybe you
              have a creative project to share with the world.
            </p>
            <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-purple-600 hover:text-white transition">
              Join Us
            </button>
          </div>

          {/* Right Enlarged Team Images */}
          <div className="relative w-full h-[500px]">
            {/* Top Right - Square */}
            <img
              src="/assets/man.jpg"
              alt="Team Member 1"
              className="w-48 h-48 object-cover rounded-xl absolute top-0 right-4 shadow-2xl"
            />

            {/* Middle - Circle */}
            <img
              src="/assets/group.jpg"
              alt="Team Member 2"
              className="w-60 h-60 object-cover rounded-full absolute top-20 right-32 shadow-2xl z-10"
            />

            {/* Bottom - Rectangle */}
            <img
              src="/assets/girl.jpg"
              alt="Team Member 3"
              className="w-60 h-80 object-cover rounded-xl absolute top-40 right-80 shadow-2xl z-20"
            />
          </div>
        </motion.div>
      </section>
    </>
  );
}
