"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const footerLinks = t.footerLinks || [];

  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold text-white">Vlocodeu</h3>
          <p className="mt-2 text-sm text-gray-400">{t.footerTagline}</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-2">
            {t.quickLinksTitle}
          </h4>
          <ul className="space-y-1">
            {footerLinks.map(({ label, href }) => (
              <li key={href}>
                {href.startsWith("#") ? (
                  <a href={href} className="hover:text-purple-400 transition">
                    {label}
                  </a>
                ) : (
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
          <h4 className="text-lg font-semibold text-white mb-2">
            {t.contactTitle}
          </h4>
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

          {/* Socials */}
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
        © {new Date().getFullYear()} Vlocodeu. {t.copyrightNote}
      </div>
    </footer>
  );
}
