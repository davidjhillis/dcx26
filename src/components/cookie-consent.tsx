"use client";

import { useEffect } from "react";
import * as CookieConsent from "vanilla-cookieconsent";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import "./cookie-consent.css";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

function updateGtagConsent(cookie: CookieConsent.CookieValue) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  const analytics = cookie.categories.includes("analytics") ? "granted" : "denied";
  const marketing = cookie.categories.includes("marketing") ? "granted" : "denied";
  window.gtag("consent", "update", {
    analytics_storage: analytics,
    ad_storage: marketing,
    ad_user_data: marketing,
    ad_personalization: marketing,
  });
}

export function CookieConsentBanner() {
  useEffect(() => {
    CookieConsent.run({
      guiOptions: {
        consentModal: {
          layout: "box inline",
          position: "bottom left",
          equalWeightButtons: false,
          flipButtons: false,
        },
        preferencesModal: {
          layout: "box",
          position: "right",
          equalWeightButtons: true,
          flipButtons: false,
        },
      },
      categories: {
        necessary: { enabled: true, readOnly: true },
        analytics: {
          autoClear: {
            cookies: [
              { name: /^_ga/ },
              { name: "_gid" },
              { name: /^_gat/ },
            ],
          },
        },
        marketing: {
          autoClear: {
            cookies: [{ name: /^_fbp/ }, { name: /^_gcl/ }],
          },
        },
      },
      onFirstConsent: ({ cookie }) => updateGtagConsent(cookie),
      onConsent: ({ cookie }) => updateGtagConsent(cookie),
      onChange: ({ cookie }) => updateGtagConsent(cookie),
      language: {
        default: "en",
        translations: {
          en: {
            consentModal: {
              title: "We use cookies",
              description:
                "DiscoverCX uses cookies to run the site, measure traffic, and improve your experience. You can accept all, reject non-essential, or manage individual categories.",
              acceptAllBtn: "Accept all",
              acceptNecessaryBtn: "Reject all",
              showPreferencesBtn: "Manage preferences",
              footer:
                '<a href="/privacy">Privacy Policy</a>',
            },
            preferencesModal: {
              title: "Cookie preferences",
              acceptAllBtn: "Accept all",
              acceptNecessaryBtn: "Reject all",
              savePreferencesBtn: "Save preferences",
              closeIconLabel: "Close",
              sections: [
                {
                  title: "Cookie usage",
                  description:
                    "We use cookies to keep the site working, understand how it's used, and improve marketing relevance. Details of each category are below. See our <a href='/privacy'>Privacy Policy</a> for more.",
                },
                {
                  title: "Strictly necessary",
                  description:
                    "Required for the site to function (navigation, security, form submission). These cannot be disabled.",
                  linkedCategory: "necessary",
                },
                {
                  title: "Analytics",
                  description:
                    "Aggregate usage statistics so we can improve the site. Includes Google Analytics via Google Tag Manager.",
                  linkedCategory: "analytics",
                },
                {
                  title: "Marketing",
                  description:
                    "Used to measure ad performance and tailor content across channels.",
                  linkedCategory: "marketing",
                },
                {
                  title: "More information",
                  description:
                    'Questions about our cookie use? Contact <a href="mailto:privacy@ingeniux.com">privacy@ingeniux.com</a>.',
                },
              ],
            },
          },
        },
      },
    });
  }, []);

  return null;
}
