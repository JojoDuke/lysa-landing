import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Public_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PostHogProvider } from "@/components/providers/posthog-provider";
import { siteUrl } from "@/lib/site";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700"],
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Lysa | Your AI Real Estate Employee",
  description:
    "The AI employee that qualifies leads, recommends properties, and books showings 24/7 on WhatsApp. Deploy Lysa in your real estate brokerage today.",
  keywords: [
    "AI real estate",
    "WhatsApp bot",
    "lead qualification",
    "property recommendations",
    "real estate automation",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Lysa | Your AI Real Estate Employee",
    description:
      "Qualify leads, recommend properties, and book showings 24/7 on WhatsApp.",
    type: "website",
    url: "/",
    siteName: "Lysa",
    images: [
      {
        url: "/og.png",
        width: 1024,
        height: 474,
        alt: "Meet Lysa, your AI real estate employee",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lysa | Your AI Real Estate Employee",
    description:
      "Qualify leads, recommend properties, and book showings 24/7 on WhatsApp.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakarta.variable} ${publicSans.variable} font-sans`}
      >
        <PostHogProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </PostHogProvider>
      </body>
    </html>
  );
}
