"use client";

// import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import ProductsSection from "../components/ProductsSection";
import BlogSection from "../components/BlogSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CareersSection from "../components/CareersSection";
import ContactSection from "../components/ContactSection";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main>
      {/* <HeroSection /> */}

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.3 }}
      >
        <AboutSection />
        <ServicesSection />
        <ProductsSection />
        <BlogSection />
        <TestimonialsSection />
        <CareersSection />
        <ContactSection />
      </motion.div>
    </main>
  );
}
