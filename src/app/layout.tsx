import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

const GTM_ID = "GTM-WVWRHDL";

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
  // Note: no `alternates.canonical` here — each page declares its own so
  // child pages don't all inherit the homepage canonical (would tell Google
  // that /demo, /contact, etc. are duplicates of /).
  alternates: {
    types: {
      "text/markdown": "https://discovercx.com/index.md",
      "text/plain": "https://discovercx.com/llms.txt",
    },
  },
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
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      </head>
      <body className="min-h-full flex flex-col font-sans bg-bg text-ink">
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <SiteNav />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
