import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { StructuredData } from "@/components/StructuredData";
import { POSTS_BY_DATE, formatPostDate } from "@/content/blog";
import { abs, breadcrumbNode } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Textos diretos sobre presença digital, sistemas de gestão e automação para pequenos e médios negócios — escritos por quem entrega os projetos.",
  alternates: {
    canonical: "/blog",
    types: { "application/rss+xml": "/blog/rss.xml" },
  },
  openGraph: {
    title: "Blog | GM Tech Solution",
    description:
      "Presença digital, sistemas de gestão e automação explicados sem jargão.",
    url: "/blog",
  },
};

export default function BlogIndex() {
  return (
    <>
      <StructuredData
        nodes={[
          breadcrumbNode([{ name: "Blog", path: "/blog" }]),
          {
            "@type": "Blog",
            "@id": abs("/blog#blog"),
            name: `Blog ${siteConfig.name}`,
            url: abs("/blog"),
            inLanguage: siteConfig.locale,
            publisher: { "@id": abs("/#business") },
            blogPost: POSTS_BY_DATE.map((post) => ({
              "@type": "BlogPosting",
              headline: post.title,
              url: abs(`/blog/${post.slug}`),
              datePublished: post.date,
            })),
          },
        ]}
      />

      <PageHero
        label="Blog"
        title="Tecnologia explicada sem jargão"
        sub="Textos diretos sobre presença digital, sistemas de gestão e automação — escritos por quem entrega os projetos, não por quem só vende."
        crumbs={[{ href: "/blog", label: "Blog" }]}
      />

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="post-grid" style={{ marginTop: 0 }}>
            {POSTS_BY_DATE.map((post) => (
              <Link
                href={`/blog/${post.slug}`}
                className="post-card reveal"
                key={post.slug}
              >
                <span className="post-meta">
                  {formatPostDate(post.date)} · {post.readingMinutes} min
                </span>
                <h2 className="post-title">{post.title}</h2>
                <p className="post-excerpt">{post.description}</p>
                <div className="post-tags">
                  {post.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
