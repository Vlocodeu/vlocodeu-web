"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useState, useRef } from "react";
import TypewriterText from "./TypewriterText";
import { useLanguage } from "../context/LanguageContext";
import { FlickeringGrid } from "../components/magicui/flickering-grid";

const Script = dynamic(() => import("next/script"), { ssr: false });

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const splineRef = useRef(null);

  const { t } = useLanguage();

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
      className="relative min-h-screen flex items-center bg-gray-950 text-white px-4 md:px-8 overflow-hidden"
    >
      {/* Flickering Grid Background */}
      <FlickeringGrid
        color="rgb(168, 85, 247)"
        maxOpacity={0.15}
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      {/* Spline Background */}
      <div
        className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
        ref={splineRef}
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

      {/* Content */}
      <div className="max-w-screen-xl mx-auto w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12 py-20 relative z-10">
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

        <div className="w-full lg:w-1/2 flex justify-center">
          {/* Optional content */}
        </div>
      </div>
    </section>
  );
}
