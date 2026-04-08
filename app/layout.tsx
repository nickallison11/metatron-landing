import "./globals.css";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import type { Metadata } from "next";
import type { ReactNode } from "react";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "metatron — The intelligence layer connecting founders and investors globally",
  description:
    "metatron is an AI agent network for founder-investor matchmaking in emerging markets.",
  icons: {
    icon: "/favicon-icon.png",
    shortcut: "/favicon-icon.png",
    apple: "/favicon-icon.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${jetbrainsMono.variable} font-sans`}
      >
        <div className="grid-bg" aria-hidden />
        <div className="orb" aria-hidden />
        <div className="relative z-10 min-h-screen">{children}</div>
      </body>
    </html>
  );
}
