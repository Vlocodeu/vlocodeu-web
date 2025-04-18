import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Vlocodeu - Digital IT Solutions",
  description: "Next-gen tech development across AI, Web, SaaS, and more.",
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
