import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "AI Summer School 2026 – Learn What Schools Don't",
  description:
    "A 7-day intensive program in Ahmedabad. Learn AI, content creation, web development, design & business from 13 industry experts. Ages 15–24. Build real skills. Build real projects.",
  keywords: [
    "AI Summer School",
    "AI course for students",
    "summer school Ahmedabad",
    "learn AI",
    "student program",
    "The Campus Company",
  ],
  openGraph: {
    title: "AI Summer School 2026 – Learn What Schools Don't",
    description:
      "7-day intensive hands-on program. Build real projects with AI, content, design & business skills.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Marquee />
        <main>{children}</main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
