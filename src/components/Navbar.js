"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import classNames from "classnames";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Project", href: "#products" },
  { label: "Blog", href: "#blog" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Highlight current section
  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined")
      return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={classNames(
        "fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out bg-gray-950 shadow-md",
        {
          "-translate-y-full": !showNavbar,
          "translate-y-0": showNavbar,
        }
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white">
          Vlocodeu
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            // <a
            //   key={link.href}
            //   href={link.href}
            //   className={classNames(
            //     "group relative text-sm md:text-base font-medium transition text-white",
            //     {
            //       "bg-purple-700/30 text-white shadow-md backdrop-blur-sm":
            //         activeSection === link.href.replace("#", ""),
            //       "text-gray-300 hover:text-white":
            //         activeSection !== link.href.replace("#", ""),
            //     }
            //   )}
            // >
            //   {link.label}
            //   <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
            // </a>

            <a
              key={link.href}
              href={link.href}
              className={classNames(
                "group relative text-sm md:text-base font-medium transition text-white px-1",
                {
                  "text-white": activeSection === link.href.replace("#", ""),
                  "text-gray-300 hover:text-white":
                    activeSection !== link.href.replace("#", ""),
                }
              )}
            >
              {/* Text with background glow */}
              <span className="relative z-10">{link.label}</span>

              {/* Gradient blur behind text */}
              {activeSection === link.href.replace("#", "") && (
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-30 blur-md rounded pointer-events-none z-0" />
              )}

              {/* Bottom sliding bar (animated on hover and active) */}
              <span
                className={classNames(
                  "absolute left-0 -bottom-1 h-[2px] bg-purple-500 transition-all duration-300",
                  {
                    "w-full": activeSection === link.href.replace("#", ""),
                    "w-0 group-hover:w-full":
                      activeSection !== link.href.replace("#", ""),
                  }
                )}
              ></span>
            </a>
          ))}
        </div>

        {/* Language Switcher */}
        <div className="hidden md:block">
          <select className="bg-gray-800 text-white px-2 py-1 rounded">
            <option value="en">EN</option>
            <option value="es">ES</option>
            <option value="fr">FR</option>
          </select>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-300 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 bg-gray-900">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={classNames("block px-3 py-2 rounded-md text-sm", {
                "bg-purple-700/40 text-white shadow backdrop-blur-sm":
                  activeSection === link.href.replace("#", ""),
                "text-gray-300 hover:text-white":
                  activeSection !== link.href.replace("#", ""),
              })}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <select className="bg-gray-800 text-white px-2 py-1 rounded w-full">
            <option value="en">EN</option>
            <option value="es">ES</option>
            <option value="fr">FR</option>
          </select>
        </div>
      )}
    </header>
  );
};

export default Navbar;
