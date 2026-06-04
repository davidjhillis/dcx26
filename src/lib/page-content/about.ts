// Single source of truth for /about content.

export const aboutMeta = {
  title: "About — DiscoverCX, an Ingeniux Company",
  description:
    "DiscoverCX is built by Ingeniux — founded 1999 in Seattle by Microsoft alumni who built the first web publishing system for MSNBC. Two decades shipping structured content for the world's leading brands.",
} as const;

export const aboutHero = {
  eyebrow: "About DiscoverCX",
  headline: "Two decades of structured content. Built by the team that started it.",
  lede:
    "DiscoverCX is built by Ingeniux Corporation, founded in 1999 in Seattle by Microsoft alumni who built the first web publishing system for MSNBC. Two decades shipping structured content infrastructure for Fortune 500 documentation and customer-content teams.",
};

export const aboutStats: [string, string][] = [
  ["2M+", "Total CMS package downloads"],
  ["1,500+", "Live customer sites"],
  ["20+ yrs", "Content management success"],
  ["1999", "Founded in Seattle"],
];

export const aboutLeadership = [
  {
    name: "Jim Edmunds",
    title: "President & CEO",
    bio: "Jim founded Ingeniux in 1999 following leadership positions with Microsoft, Electronic Arts, and Asymetrix.",
  },
  {
    name: "David Hillis",
    title: "Chief Marketing Officer",
    bio: "David oversees marketing. He was EVP Operations at Chrome, and previously held positions at Asymetrix and Aldus Corporation.",
  },
  {
    name: "Nathan Eggen",
    title: "VP Products & Technology",
    bio: "Nathan leads software and product development. He previously worked for Fluor Government Group.",
  },
];

export const aboutValues = [
  { h: "Professional. Ethical. Helpful.", p: "How we work, every day, with every customer." },
  { h: "Helping people reach their potential", p: "The platform exists so content teams can do the work they were hired to do." },
  { h: "Building solutions that matter", p: "Two decades in DXP — we build tools customers depend on, not products we churn." },
  { h: "Technology that powers imagination", p: "Structured content is a foundation, not a finish line." },
];
