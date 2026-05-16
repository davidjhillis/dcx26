import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono-code",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://discovercx.com"),
  title: {
    default: "DiscoverCX — The Content Delivery Platform for Technical & Customer Content",
    template: "%s — DiscoverCX",
  },
  description:
    "DiscoverCX is the headless content delivery platform built on the world's leading CCMS. Author in DITA, deliver to portals, docs sites, Salesforce, and AI assistants — from one source of truth.",
  openGraph: {
    type: "website",
    siteName: "DiscoverCX",
    title: "DiscoverCX — Content Delivery Platform",
    description:
      "Headless CCMS + content delivery + customer portals. One platform for technical content across every channel.",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${display.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-bg text-ink">
        <SiteNav />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
