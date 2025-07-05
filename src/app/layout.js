import "./globals.css";
import Script from "next/script";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Vlocodeu | Custom AI & Web Solutions",
  description:
    "Boost your digital presence with Vlocodeu's expert AI, SaaS, and Web App development services. Scalable, modern, and future-ready.",
  icons: {
    icon: "/assets/favicon.png", // Path to your PNG favicon
  },
  keywords: [
    "AI development",
    "custom web apps",
    "SaaS solutions",
    "Next.js",
    "digital transformation",
    "Vlocodeu",
  ],
  openGraph: {
    title: "Vlocodeu – Digital IT Solutions",
    description:
      "Accelerate your business with our AI-driven web solutions and SaaS platforms.",
    url: "https://vlocodeu.com",
    type: "website",
    images: [
      {
        url: "https://vlocodeu.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vlocodeu Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vlocodeu – AI & Web App Experts",
    description:
      "Your partner in AI integrations, custom apps, and SaaS platforms.",
    images: ["https://vlocodeu.com/og-image.jpg"],
  },

  // tell Next.js what your canonical base URL is
  metadataBase: new URL("https://vlocodeu.com"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* ✅ Google Analytics Script */}
      <head>
        <link rel="icon" href="/assets/favicon.png" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-R6KM4FXK9E"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-R6KM4FXK9E');
          `}
        </Script>
      </head>
      <body className="bg-gray-950 text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
