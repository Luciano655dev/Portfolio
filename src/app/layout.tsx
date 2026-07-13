import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import Cursor from "@/components/Cursor";
import ScrollProgress from "@/components/ScrollProgress";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Luciano Menezes — Fullstack Developer",
  description:
    "Fullstack developer in Orlando, Florida, building real products from scratch — Daykeeper, HobbyASAP, OneMoreGood and more.",
  openGraph: {
    title: "Luciano Menezes — Fullstack Developer",
    description:
      "Fullstack developer building real products from scratch. TypeScript, React, Next.js, Node, Python.",
    url: "https://luciano655dev.netlify.app",
    siteName: "Luciano Menezes",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ScrollProgress />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
