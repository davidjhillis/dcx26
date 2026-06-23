// HubSpot form IDs for discovercx.com
// Portal: 5658995 · Region: na1
// All forms have reCAPTCHA enabled + free-email block on the email field.
// Source of truth — change here, not in components.

export const HUBSPOT_PORTAL_ID = "5658995";
export const HUBSPOT_REGION = "na1";

export const FORMS = {
  // ─── PRIMARY CONVERSION ──────────────────────────────────────────────
  /** Modern Beacon-styled demo form. USE THIS on the new site. */
  DEMO: "0bec6f48-bc99-40a5-ae91-ca904bd93881",

  /** Main contact form (most recent generic version). */
  CONTACT: "214e602a-76f7-490b-ade3-1961cfbd480a",

  /** Pricing / quote request. */
  REQUEST_QUOTE: "2498eafe-fe24-455a-a24e-dd5be35751d3",

  /** Live meeting request. */
  MEET_WITH_US: "0e4d17cd-a01b-4956-aa10-fab4c0080b03",

  // ─── EBOOK / RESOURCE DOWNLOADS ──────────────────────────────────────
  EBOOK_DELIVERY_BLUEPRINT: "09a8c9c9-525e-43cf-91f5-9db9978107ee",
  EBOOK_DITA_CHEATSHEET: "56fa8166-4c20-4f31-9af8-ab24957be899",
  EBOOK_WHAT_IS_A_CCMS: "4e68611f-20e8-4e8a-9e0b-5fafd46e3814",
  EBOOK_5_REASONS_OMNICHANNEL: "83dc4cb9-357c-472e-90a1-d5198b95b6dc",
  EBOOK_TOPIC_AUTHORING: "fd16e182-9f3a-4ff7-80bd-24c42cd2343b",
  EBOOK_PRODUCT_ANSWERS: "f27e56c1-45f8-4efc-ae03-ddfad90db525",
  EBOOK_SALESFORCE_EXP: "fdf3b7ce-be69-42ea-a20e-89517e5febac",
  GUIDE_TECH_PUBLISHING: "18fe024a-fe3e-43db-9c58-d77ff305ee9d",
  GUIDE_TECH_DOC_SOFTWARE: "c92bed48-6047-4022-b5f2-1d624eba6db6",

  // ─── BUYER'S GUIDES / RFP CTAs ───────────────────────────────────────
  GUIDE_CUSTOMER_PORTAL: "c3cc7565-6ea0-42b9-8178-b5915d86f8ed",
  RFP_CUSTOMER_PORTAL: "e0d1e671-cbcd-45b3-813d-cb9b2323afe5",
  RFP_GUIDE_CTA: "3d50c215-ec22-457b-9472-a432c63e0245",

  // ─── NEWSLETTER / SUBSCRIPTIONS ──────────────────────────────────────
  NEWSLETTER_BLOG_CTA: "92425533-73e0-4f36-a2ad-c0d26eaf667b",

  // ─── PRODUCT / INDUSTRY CTAs ─────────────────────────────────────────
  SALESFORCE_K3: "3819333f-2012-47be-9a6e-84cc319a1f7c",

  // ─── DEPRECATED (DO NOT USE on new site) ─────────────────────────────
  /** Legacy 2023 demo form. Still gets bot probing — kept active only
   *  in case crawled embeds still POST to it. Use FORMS.DEMO instead. */
  _LEGACY_DEMO_2023: "cfdc8b18-9703-4f8e-b295-ee6d07881ead",

  /** Old contact form, superseded by FORMS.CONTACT. */
  _LEGACY_CONTACT_2023: "87451caa-bff9-4c33-9bc0-976493ec9cd8",

  // ─── TODO — registry paste was truncated, confirm IDs ────────────────
  // EBOOK_AI_HIGHER_ED — looks like "83dc4cb9-357c-472e-90a1-d5198b95b6dc"
  //   (matches an existing ID in the eBook data). Confirm before adding.
  // NEWSLETTER_CONTENT_MATTERS — pasted as "687e4f2f-07e0-42a3-86a3-ee041…"
  //   (last segment truncated). Resend full GUID.
} as const;

export type FormId = (typeof FORMS)[keyof typeof FORMS];
