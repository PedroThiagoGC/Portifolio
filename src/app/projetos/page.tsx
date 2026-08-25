import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { StructuredData } from "@/components/StructuredData";
import { PORTFOLIO } from "@/content/portfolio";
import { abs, breadcrumbNode } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Projetos no ar",
  description:
    "Sistemas e sites da GM Tech Solution rodando em produção: delivery white-label, agendamento, PDV, landing pages com SEO local e sites institucionais.",
  alternates: { canonical: "/projetos" },
  openGraph: {
    title: "Projetos no ar | GM Tech Solution",
    description:
      "Sistemas e sites da GM Tech Solution rodando em produção agora — não protótipo.",
    url: "/projetos",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <StructuredData
        nodes={[
          breadcrumbNode([{ name: "Projetos", path: "/projetos" }]),
          {
            "@type": "ItemList",
            name: "Projetos GM Tech Solution",
            itemListElement: PORTFOLIO.map((project, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: project.name,
              url: abs(`/projetos/${project.slug}`),
            })),
          },
        ]}
      />

      <PageHero
        label="Portfólio"
        title="Projetos no ar, clientes reais"
        sub="Não mostramos protótipo. Os sistemas e sites abaixo estão em produção agora — cada case abre com o contexto do negócio e o que foi entregue."
        crumbs={[{ href: "/projetos", label: "Projetos" }]}
      />

      <section className="portfolio">
        <div className="container">
          <div className="portfolio-grid" style={{ marginTop: 0 }}>
            {PORTFOLIO.map((p) => (
              <Link
                href={`/projetos/${p.slug}`}
                className="browser reveal"
                key={p.slug}
              >
                <div className="browser-bar">
                  <div className="browser-dots" aria-hidden="true">
                    <div className="browser-dot bd-red" />
                    <div className="browser-dot bd-yellow" />
                    <div className="browser-dot bd-green" />
                  </div>
                  <div className="browser-url">{p.url}</div>
                </div>
                <div className="browser-screen">
                  {p.img ? (
                    <Image
                      src={p.img}
                      alt={p.alt}
                      fill
                      quality={70}
                      sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 360px"
                    />
                  ) : (
                    <div className="screen-placeholder">
                      <div className="screen-placeholder-icon" aria-hidden="true">
                        {p.placeholder?.icon}
                      </div>
                      <div className="screen-placeholder-tag">
                        {p.placeholder?.tag}
                      </div>
                      <div className="screen-placeholder-text">
                        {p.placeholder?.text}
                      </div>
                    </div>
                  )}
                </div>
                <div className="browser-info">
                  <span className={`browser-badge ${p.badge.class}`}>
                    {p.badge.label}
                  </span>
                  <h2 className="browser-name">{p.name}</h2>
                  <p className="browser-desc">{p.desc}</p>
                  <span className="browser-link">Ver o case →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
