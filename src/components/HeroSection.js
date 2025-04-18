import { motion } from "framer-motion";
import TypewriterText from "./TypewriterText";
import Lottie from "lottie-react";
import techAnimation from "../../public/assets/animations/tech.json";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 bg-gray-950 relative overflow-hidden"
    >
      <motion.div
        className="z-10 max-w-xl text-center md:text-left"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Welcome to <span className="text-purple-400">Vlocodeu</span>
        </h1>

        <div className="mt-4 text-lg md:text-xl text-gray-300 h-[60px]">
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
          className="inline-block mt-8 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold rounded shadow-lg transition"
        >
          Explore Services
        </a>
      </motion.div>

      <div className="w-full md:w-[400px] mt-12 md:mt-0 md:ml-12 z-10">
        <Lottie animationData={techAnimation} loop={true} />
      </div>
    </section>
  );
}
