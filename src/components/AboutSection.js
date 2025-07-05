"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useState, useEffect, useRef } from "react";

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

// Dynamically load the Script for Spline viewer only on the client-side
const Script = dynamic(() => import("next/script"), { ssr: false });

export default function AboutSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const splineRef = useRef(null);

  // Lazy load the Spline viewer when it enters the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Load when 50% of the viewer is in the viewport
    );

    if (splineRef.current) {
      observer.observe(splineRef.current);
    }

    return () => {
      if (splineRef.current) {
        observer.unobserve(splineRef.current);
      }
    };
  }, []);

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
      <section className="py-24 px-6 bg-gray-950 text-white relative">
        {/* Spline viewer as background */}
        <div
          className="absolute top-0 left-0 w-full h-full z-0"
          ref={splineRef}
        >
          {/* Dynamically load the Spline viewer script when it's in view */}
          {isVisible && (
            <>
              <Script
                type="module"
                src="https://unpkg.com/@splinetool/viewer@1.10.21/build/spline-viewer.js"
                strategy="afterInteractive" // Ensures the script loads after page interaction
              />
              <spline-viewer
                url="https://prod.spline.design/dALQdWko0scuxxQo/scene.splinecode"
                style={{
                  width: "100%",
                  height: "100%",
                  transform: "translate3d(0, 0, 0)", // Hardware acceleration
                  willChange: "transform, opacity", // Optimizes the rendering
                }}
              />
            </>
          )}
        </div>

        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Left Text */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold text-purple-400 mb-6">
              Join the team
            </h2>
            <p className="text-gray-200 text-lg mb-8 max-w-md mx-auto md:mx-0">
              It all begins with an idea. Maybe you want to launch a business.
              Maybe you want to turn a hobby into something more. Or maybe you
              have a creative project to share with the world.
            </p>
            <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-purple-600 hover:text-white transition">
              Join Us
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
            {/* Wrapper to position images */}
            <div className="relative w-[280px] h-full">
              {/* Top Left */}
              <img
                src="/assets/man.jpg"
                alt="Team Member 1"
                className="w-32 h-32 object-cover rounded-xl shadow-2xl absolute top-0 left-0 z-10"
              />

              {/* Center Overlap */}
              <img
                src="/assets/group.jpg"
                alt="Team Member 2"
                className="w-40 h-40 object-cover rounded-full shadow-2xl absolute top-16 left-16 z-20"
              />

              {/* Bottom Right */}
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
