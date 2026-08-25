import { POSTS_BY_DATE } from "@/content/blog";
import { siteConfig } from "@/lib/site";

// Gerado no build (force-static): o registro de posts é estático.
export const dynamic = "force-static";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function GET() {
  const items = POSTS_BY_DATE.map((post) => {
    const url = `${siteConfig.url}/blog/${post.slug}`;
    return [
      "    <item>",
      `      <title>${escapeXml(post.title)}</title>`,
      `      <link>${url}</link>`,
      `      <guid isPermaLink="true">${url}</guid>`,
      `      <description>${escapeXml(post.description)}</description>`,
      `      <pubDate>${new Date(`${post.date}T12:00:00Z`).toUTCString()}</pubDate>`,
      "    </item>",
    ].join("\n");
  }).join("\n");

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    "  <channel>",
    `    <title>Blog ${escapeXml(siteConfig.name)}</title>`,
    `    <link>${siteConfig.url}/blog</link>`,
    `    <description>Presença digital, sistemas de gestão e automação para pequenos e médios negócios.</description>`,
    `    <language>pt-br</language>`,
    `    <atom:link href="${siteConfig.url}/blog/rss.xml" rel="self" type="application/rss+xml" />`,
    items,
    "  </channel>",
    "</rss>",
  ].join("\n");

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
