import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import BackgroundBubbles from "@/components/ui/BackgroundBubbles";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import CustomCursor from "@/components/ui/CustomCursor";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <BackgroundBubbles />
        <CustomCursor />
        <SmoothScrollProvider>
          <div className="relative z-10 flex flex-1 flex-col">{children}</div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
