import type { MetadataRoute } from "next";

// AI / LLM citation bots — explicitly allowed so they can find and
// surface DCX content in answers. Decisions per family:
//   • OpenAI: GPTBot (training), OAI-SearchBot (search citations),
//     ChatGPT-User (live browsing)
//   • Anthropic: ClaudeBot, claude-web, anthropic-ai
//   • Perplexity: PerplexityBot
//   • Google: Google-Extended (Gemini grounding) + standard Googlebot
//   • Apple: Applebot-Extended
//   • DuckDuckGo / Meta / ByteDance / Amazon / Common Crawl
export default function robots(): MetadataRoute.Robots {
  const aiAgents = [
    "GPTBot",
    "OAI-SearchBot",
    "ChatGPT-User",
    "ClaudeBot",
    "claude-web",
    "anthropic-ai",
    "PerplexityBot",
    "Google-Extended",
    "Applebot-Extended",
    "Meta-ExternalAgent",
    "Bytespider",
    "CCBot",
    "DuckAssistBot",
    "Amazonbot",
  ];

  return {
    rules: [
      { userAgent: aiAgents, allow: "/", disallow: ["/api/", "/thank-you"] },
      { userAgent: "*", allow: "/", disallow: ["/api/", "/thank-you"] },
    ],
    sitemap: "https://discovercx.com/sitemap.xml",
    host: "https://discovercx.com",
  };
}
