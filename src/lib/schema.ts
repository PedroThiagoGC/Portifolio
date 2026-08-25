// Construtores de JSON-LD. Cada página injeta os nós que fazem sentido para
// ela (BreadcrumbList, Service, FAQPage, BlogPosting, CreativeWork) e o
// StructuredData sempre acrescenta os nós de negócio e de site.

import { SERVICES, type Service } from "@/content/services";
import type { Project } from "@/content/portfolio";
import { siteConfig } from "./site";

export type SchemaNode = Record<string, unknown>;

/** Converte caminho relativo em URL absoluta — JSON-LD não aceita relativo. */
export function abs(path: string): string {
  if (path.startsWith("http")) return path;
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function businessNode(): SchemaNode {
  return {
    "@type": "ProfessionalService",
    "@id": abs("/#business"),
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    telephone: siteConfig.phoneE164,
    priceRange: "$$",
    image: abs(siteConfig.ogImage),
    logo: abs(siteConfig.logo),
    areaServed: siteConfig.citiesServed.map((city) => ({
      "@type": "City",
      name: city,
    })),
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.region,
      addressCountry: siteConfig.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: siteConfig.openingHours.days,
        opens: siteConfig.openingHours.opens,
        closes: siteConfig.openingHours.closes,
      },
    ],
    sameAs: [siteConfig.whatsapp],
    alternateName: `${siteConfig.name} — ${siteConfig.meaning}`,
    slogan: "Game Master da sua operação digital",
    founder: {
      "@type": "Person",
      name: siteConfig.founder.name,
      jobTitle: siteConfig.founder.role,
      sameAs: [siteConfig.founder.linkedin, siteConfig.founder.github],
    },
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: siteConfig.teamSize,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Soluções GM Tech",
      itemListElement: SERVICES.map((service) => ({
        "@type": "Offer",
        url: abs(service.href),
        itemOffered: {
          "@type": "Service",
          name: service.pageTitle,
          description: service.desc,
        },
      })),
    },
  };
}

export function websiteNode(): SchemaNode {
  return {
    "@type": "WebSite",
    "@id": abs("/#website"),
    url: siteConfig.url,
    name: siteConfig.name,
    inLanguage: siteConfig.locale,
    publisher: { "@id": abs("/#business") },
  };
}

/** Trilha de navegação. O item "Início" é acrescentado automaticamente. */
export function breadcrumbNode(
  items: readonly { name: string; path: string }[],
): SchemaNode {
  const all = [{ name: "Início", path: "/" }, ...items];
  return {
    "@type": "BreadcrumbList",
    itemListElement: all.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: abs(item.path),
    })),
  };
}

export function serviceNode(service: Service): SchemaNode {
  return {
    "@type": "Service",
    "@id": abs(`${service.href}#service`),
    name: service.pageTitle,
    description: service.metaDescription,
    url: abs(service.href),
    serviceType: service.label,
    provider: { "@id": abs("/#business") },
    areaServed: siteConfig.citiesServed.map((city) => ({
      "@type": "City",
      name: city,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.pageTitle,
      itemListElement: service.deliverables.map((item) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: item.title,
          description: item.desc,
        },
      })),
    },
  };
}

export function faqNode(faq: readonly { q: string; a: string }[]): SchemaNode {
  return {
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function projectNode(project: Project): SchemaNode {
  return {
    "@type": "CreativeWork",
    "@id": abs(`/projetos/${project.slug}#case`),
    name: project.name,
    description: project.metaDescription,
    url: abs(`/projetos/${project.slug}`),
    ...(project.img ? { image: abs(project.img) } : {}),
    creator: { "@id": abs("/#business") },
    inLanguage: siteConfig.locale,
  };
}

export function blogPostingNode(post: {
  slug: string;
  title: string;
  description: string;
  date: string;
}): SchemaNode {
  return {
    "@type": "BlogPosting",
    "@id": abs(`/blog/${post.slug}#post`),
    headline: post.title,
    description: post.description,
    url: abs(`/blog/${post.slug}`),
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: siteConfig.locale,
    author: { "@id": abs("/#business") },
    publisher: { "@id": abs("/#business") },
    image: abs(siteConfig.ogImage),
    isPartOf: { "@id": abs("/#website") },
  };
}
