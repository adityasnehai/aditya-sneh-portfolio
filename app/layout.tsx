import type { Metadata, Viewport } from "next";
import type { PropsWithChildren } from "react";
import { Inter, Source_Serif_4, Geist } from "next/font/google";

import { Navbar } from "@/components/main/navbar";
import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";

import "./globals.css";
import "./polish.css";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const viewport: Viewport = {
  themeColor: "#f7f0d5",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = siteConfig;

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={cn(inter.variable, sourceSerif.variable, "font-sans", geist.variable)}>
      <body
        className={cn(
          "overflow-y-scroll overflow-x-hidden bg-[#f4efe6] text-zinc-950 font-[family:var(--font-inter)]",
        )}
      >
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
