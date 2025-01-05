import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Kdam_Thmor_Pro,
  Kodchasan,
  Playfair,
  Slabo_13px,
  Space_Mono,
} from "next/font/google";
import "./globals.css";

// const slabo = Slabo_13px({ subsets: ["latin"], weight: ["400"] });
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Find your resource 🔎",
  description:
    "A tool to search and explore GitHub users and repositories effortlessly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceMono.className} antialiased`}>{children}</body>
    </html>
  );
}
