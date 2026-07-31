import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Lysa — Your AI Real Estate Employee",
  description:
    "The AI employee that qualifies leads, recommends properties, and books showings 24/7 on WhatsApp. Deploy Lysa in your real estate brokerage today.",
  keywords: [
    "AI real estate",
    "WhatsApp bot",
    "lead qualification",
    "property recommendations",
    "real estate automation",
  ],
  openGraph: {
    title: "Lysa — Your AI Real Estate Employee",
    description:
      "Qualify leads, recommend properties, and book showings 24/7 on WhatsApp.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
