import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import BackgroundBubbles from "@/components/ui/BackgroundBubbles";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ahtisham Rafique | Full-Stack Developer",
  description:
    "Portfolio of Ahtisham Rafique — Full-Stack Developer specializing in Next.js, React, and modern web applications.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <BackgroundBubbles />
        <div className="relative z-10 flex flex-1 flex-col">{children}</div>
      </body>
    </html>
  );
}
