import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { CookieConsentBanner } from "@/components/cookie-consent";

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
        {/* Google Consent Mode v2 — default-denied until user consents.
            Must run before GTM so gtag() calls from tags respect defaults. */}
        <Script id="consent-default" strategy="beforeInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',functionality_storage:'granted',security_storage:'granted',wait_for_update:500});`}
        </Script>
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
        {/* Site-wide Organization schema — emitted on every page so the
            entity is unambiguous to search + AI crawlers. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://discovercx.com/#org",
              name: "DiscoverCX",
              alternateName: "DiscoverCX by Ingeniux",
              url: "https://discovercx.com",
              logo: "https://discovercx.com/brand/dcx-white.svg",
              parentOrganization: {
                "@type": "Organization",
                name: "Ingeniux Corporation",
                url: "https://www.ingeniux.com",
              },
              sameAs: [
                "https://www.linkedin.com/company/ingeniux/",
                "https://www.ingeniux.com",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+1-877-445-8228",
                  contactType: "sales",
                  areaServed: "Worldwide",
                  availableLanguage: "English",
                  email: "info@ingeniux.com",
                },
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "1218 3rd Ave #1100",
                addressLocality: "Seattle",
                addressRegion: "WA",
                postalCode: "98101",
                addressCountry: "US",
              },
            }).replace(/</g, "\\u003c"),
          }}
        />
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
        <CookieConsentBanner />
      </body>
    </html>
  );
}
