import type { Metadata, Viewport } from "next";
import type { PropsWithChildren } from "react";
import { Inter, Source_Serif_4 } from "next/font/google";

import { Navbar } from "@/components/main/navbar";
import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const viewport: Viewport = {
  themeColor: "#f4efe6",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = siteConfig;

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={cn(inter.variable, sourceSerif.variable)}>
      <body
        className={cn(
          "overflow-y-scroll overflow-x-hidden bg-[#f4efe6] text-zinc-950 font-[family:var(--font-inter)]",
        )}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
