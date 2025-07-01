import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  // default title & template for all pages
  title: {
    default: "Vlocodeu - Digital IT Solutions",
    template: "%s | Vlocodeu",
  },
  description: "Next‑gen tech development across AI, Web, SaaS, and more.",

  // Open Graph
  openGraph: {
    title: "Vlocodeu – Digital IT Solutions",
    description: "Next‑gen tech development across AI, Web, SaaS, and more.",
    url: "https://yourdomain.com",
    siteName: "Vlocodeu",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vlocodeu Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Vlocodeu – Digital IT Solutions",
    description: "Next‑gen tech development across AI, Web, SaaS, and more.",
    creator: "@YourTwitterHandle",
    images: ["https://yourdomain.com/og-image.jpg"],
  },

  // tell Next.js what your canonical base URL is
  metadataBase: new URL("https://vlocodeu.com"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
