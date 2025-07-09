"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useState, useRef } from "react";
import TypewriterText from "./TypewriterText";
import { useLanguage } from "../context/LanguageContext";

// Dynamically load the Script for Spline viewer only on the client-side
const Script = dynamic(() => import("next/script"), { ssr: false });

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const splineRef = useRef(null);

  // Language hook
  const { t } = useLanguage();

  // Lazy load the Spline viewer when it enters the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
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

  // Function to load Spline script only if not already loaded
  const loadSplineScript = () => {
    if (!window.customElements.get("spline-viewer")) {
      const script = document.createElement("script");
      script.type = "module";
      script.src =
        "https://unpkg.com/@splinetool/viewer@1.10.22/build/spline-viewer.js";
      script.onload = () => {
        console.log("Spline viewer script loaded successfully.");
      };
      document.body.appendChild(script);
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-gray-950 text-white px-4 md:px-8"
    >
      {/* Full-screen Spline Viewer as Background */}
      <div
        className="absolute top-0 left-0 w-full h-full z-0"
        ref={splineRef}
        style={{
          transform: "translate3d(0, 0, 0)",
          willChange: "transform, opacity",
        }}
      >
        {isVisible && (
          <>
            {loadSplineScript()}
            <spline-viewer
              url="https://prod.spline.design/gO4dKjqIGCA2qZ9U/scene.splinecode"
              style={{
                width: "100%",
                height: "100%",
                zIndex: -1,
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
            {t.heroTitle} <span className="text-purple-400">Vlocodeu</span>
          </h1>

          <div className="mt-4 text-base sm:text-lg md:text-xl text-gray-300 min-h-[60px]">
            <TypewriterText />
          </div>

          <a
            href="#services"
            className="inline-block mt-8 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white text-base md:text-lg font-semibold rounded shadow-lg transition duration-300"
          >
            {t.heroCta}
          </a>
        </motion.div>

        {/* Right content (optional) */}
        <div className="w-full lg:w-1/2 flex justify-center">
          {/* Additional content goes here if needed */}
        </div>
      </div>
    </section>
  );
}
