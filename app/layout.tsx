import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import WhatsAppWidget from "@/components/WhatsAppWidget";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://removenegativearticles.com"),
  title: "Online Reputation Management | removenegativearticles.com",
  description: "Remove Negative Articles From Google & Protect Your Online Reputation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased text-slate-800 selection:bg-teal-500/30 selection:text-teal-900 bg-slate-50`}
      >
        {children}
        <WhatsAppWidget />
      </body>
    </html>
  );
}
