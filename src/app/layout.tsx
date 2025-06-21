import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "EXORA - Premium Indonesian Export Solutions",
  description: "Connecting Indonesia's finest products with global markets. Premium natural ingredients, frozen foods, Asian grocery, and eco-friendly supplies for international trade.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased font-poppins`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
