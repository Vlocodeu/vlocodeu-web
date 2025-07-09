"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function AboutSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const { t } = useLanguage();

  const faqs = [
    {
      question: t.faq1Question,
      answer: t.faq1Answer,
    },
    {
      question: t.faq2Question,
      answer: t.faq2Answer,
    },
    {
      question: t.faq3Question,
      answer: t.faq3Answer,
    },
  ];

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
              {t.aboutTitle}
            </h2>
            <p className="text-lg text-gray-300 mb-10 leading-relaxed">
              {t.aboutParagraph}
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
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold text-purple-400 mb-6">
              {t.joinTitle}
            </h2>
            <p className="text-gray-200 text-lg mb-8 max-w-md mx-auto md:mx-0">
              {t.joinParagraph}
            </p>
            <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-purple-600 hover:text-white transition">
              {t.joinButton}
            </button>
          </div>

          {/* Right Team Images */}
          <div className="relative w-full h-[520px] hidden md:block">
            {/* Desktop only */}
            <img
              src="/assets/man.jpg"
              alt="Team Member 1"
              className="w-48 h-48 object-cover rounded-xl absolute top-0 right-4 shadow-2xl"
            />
            <img
              src="/assets/group.jpg"
              alt="Team Member 2"
              className="w-60 h-60 object-cover rounded-full absolute top-20 right-32 shadow-2xl z-10"
            />
            <img
              src="/assets/girl.jpg"
              alt="Team Member 3"
              className="w-60 h-80 object-cover rounded-xl absolute top-40 right-80 shadow-2xl z-20"
            />
          </div>

          {/* Mobile stacked version */}
          <div className="md:hidden flex justify-center relative h-[380px]">
            <div className="relative w-[280px] h-full">
              <img
                src="/assets/man.jpg"
                alt="Team Member 1"
                className="w-32 h-32 object-cover rounded-xl shadow-2xl absolute top-0 left-0 z-10"
              />
              <img
                src="/assets/group.jpg"
                alt="Team Member 2"
                className="w-40 h-40 object-cover rounded-full shadow-2xl absolute top-16 left-16 z-20"
              />
              <img
                src="/assets/girl.jpg"
                alt="Team Member 3"
                className="w-36 h-48 object-cover rounded-xl shadow-2xl absolute bottom-0 right-0 z-30"
              />
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
