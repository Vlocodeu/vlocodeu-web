"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold text-white">Vlocodeu</h3>
          <p className="mt-2 text-sm text-gray-400">
            Building future-ready digital solutions across AI, web, mobile &
            cloud.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-2">Quick Links</h4>
          <ul className="space-y-1">
            {[
              { label: "Home", href: "#hero" },
              { label: "About", href: "#about" },
              { label: "Services", href: "#services" },
              { label: "Products", href: "#products" },
              { label: "Contact", href: "#contact" },
              { label: "Sevai Network - Contact", href: "/sevai-contact" }, // ✅ added route
            ].map(({ label, href }) => (
              <li key={href}>
                {href.startsWith("#") ? (
                  // For in-page anchor links (like #hero)
                  <a href={href} className="hover:text-purple-400 transition">
                    {label}
                  </a>
                ) : (
                  // For route navigation (like /sevai-contact)
                  <Link
                    href={href}
                    className="hover:text-purple-400 transition"
                  >
                    {label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-2">Contact</h4>
          <p>
            Email:{" "}
            <a href="mailto:vlocodeu@gmail.com" className="text-purple-400">
              vlocodeu@gmail.com
            </a>
          </p>
          <p>
            WhatsApp:{" "}
            <a
              href="https://wa.me/919597754524"
              target="_blank"
              rel="noopener"
              className="text-purple-400"
            >
              +91 95977 54524
            </a>
          </p>

          {/* Socials (replace with actual links later) */}
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-white transition"
            >
              🔗
            </a>
            <a
              href="#"
              aria-label="GitHub"
              className="hover:text-white transition"
            >
              🐱
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-white transition"
            >
              📷
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-sm text-center text-gray-500 mt-10">
        © {new Date().getFullYear()} Vlocodeu. All rights reserved.
      </div>
    </footer>
  );
}
