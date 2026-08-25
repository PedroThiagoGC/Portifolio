import { POSTS } from "@/content/blog";
import { PORTFOLIO } from "@/content/portfolio";
import { STATIC_ROUTES } from "@/lib/routes";
import { siteConfig } from "@/lib/site";
import type { MetadataRoute } from "next";

// Derivado das mesmas fontes que geram as páginas: registro de rotas,
// portfólio e registro de posts. Rota nova entra no sitemap sozinha.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = siteConfig.contentUpdatedAt;
  const url = (path: string) =>
    `${siteConfig.url}${path === "/" ? "" : path}`;

  return [
    ...STATIC_ROUTES.map((route) => ({
      url: url(route.path),
      lastModified,
      changeFrequency:
        route.path === "/blog" ? ("weekly" as const) : ("monthly" as const),
      priority: route.priority,
    })),
    ...PORTFOLIO.map((project) => ({
      url: url(`/projetos/${project.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...POSTS.map((post) => ({
      url: url(`/blog/${post.slug}`),
      lastModified: post.date,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
