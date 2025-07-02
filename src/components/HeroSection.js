"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import TypewriterText from "./TypewriterText";

// ✅ Dynamically load Lottie only on client
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import techAnimation from "../../public/assets/animations/tech.json"; // If you use it, make sure path is valid

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-gray-950 text-white px-4 md:px-8"
    >
      <div className="max-w-screen-xl mx-auto w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12 py-20">
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

        {/* Right Animation */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-[260px] sm:w-[300px] md:w-[360px] lg:w-[420px] xl:w-[480px]">
            <Lottie animationData={techAnimation} loop={true} />
          </div>
        </div>
      </div>
    </section>
  );
}
