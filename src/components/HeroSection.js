"use client"; // Ensure this is client-side only

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useState, useRef } from "react";
import TypewriterText from "./TypewriterText";

// Dynamically load the Script for Spline viewer only on the client-side
const Script = dynamic(() => import("next/script"), { ssr: false });

export default function HeroSection() {
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

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-gray-950 text-white px-4 md:px-8"
    >
      {/* Full-screen Spline Viewer as Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0" ref={splineRef}>
        {/* Dynamically load the Spline viewer script when it's in view */}
        {isVisible && (
          <>
            <Script
              type="module"
              src="https://unpkg.com/@splinetool/viewer@1.10.21/build/spline-viewer.js"
              strategy="afterInteractive" // Ensures the script loads after page interaction
            />
            <spline-viewer
              url="https://prod.spline.design/gO4dKjqIGCA2qZ9U/scene.splinecode"
              style={{
                width: "100%",
                height: "100%",
                transform: "translate3d(0, 0, 0)", // Hardware acceleration
                willChange: "transform, opacity", // Optimizes the rendering
                zIndex: -1, // Ensures content appears above the background
              }}
            />
          </>
        )}
      </div>

      {/* Content above the Spline background */}
      <div className="max-w-screen-xl mx-auto w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12 py-20 relative z-10">
        {/* Left Text Content */}
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Welcome to <span className="text-purple-400">Vlocodeu</span>
          </h1>

          <div className="mt-4 text-base sm:text-lg md:text-xl text-gray-300 min-h-[60px]">
            <TypewriterText
              texts={[
                "Custom Web App Development.",
                "AI & Machine Learning Integration.",
                "Digital Transformation Consulting.",
              ]}
            />
          </div>

          <a
            href="#services"
            className="inline-block mt-8 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white text-base md:text-lg font-semibold rounded shadow-lg transition duration-300"
          >
            Explore Services
          </a>
        </motion.div>

        {/* Right content (optional) */}
        <div className="w-full lg:w-1/2 flex justify-center">
          {/* Additional content goes here */}
        </div>
      </div>
    </section>
  );
}
