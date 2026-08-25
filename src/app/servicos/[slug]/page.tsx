import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { StructuredData } from "@/components/StructuredData";
import { PORTFOLIO } from "@/content/portfolio";
import { SERVICES, getService } from "@/content/services";
import { breadcrumbNode, faqNode, serviceNode } from "@/lib/schema";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const service = getService(params.slug);
  if (!service) return {};

  return {
    title: service.pageTitle,
    description: service.metaDescription,
    alternates: { canonical: service.href },
    openGraph: {
      title: `${service.pageTitle} | GM Tech Solution`,
      description: service.metaDescription,
      url: service.href,
    },
  };
}

export default function ServicePage({ params }: Params) {
  const service = getService(params.slug);
  if (!service) notFound();

  const related = PORTFOLIO.filter((p) => p.service === service.slug).slice(0, 3);
  const others = SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <>
      <StructuredData
        nodes={[
          serviceNode(service),
          faqNode(service.faq),
          breadcrumbNode([{ name: service.pageTitle, path: service.href }]),
        ]}
      />

      <PageHero
        label={service.label}
        title={service.h1}
        sub={service.intro}
        crumbs={[{ href: service.href, label: service.pageTitle }]}
      />

      <section>
        <div className="container">
          <p className="section-label reveal">{"//"} O que entregamos</p>
          <h2 className="section-title reveal">Entregas desta frente</h2>
          <div className="deliverables">
            {service.deliverables.map((item) => (
              <div className="deliverable reveal" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="audience">
        <div className="container">
          <p className="section-label reveal">{"//"} Para quem é</p>
          <h2 className="section-title reveal">Faz sentido se você</h2>
          <ul className="check-list reveal">
            {service.forWho.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="service-tags" style={{ marginTop: "2.5rem" }}>
            {service.tags.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="portfolio">
          <div className="container">
            <p className="section-label reveal">{"//"} Já entregamos</p>
            <h2 className="section-title reveal">Projetos desta frente</h2>
            <p className="section-sub reveal">
              Tudo abaixo está em produção. Cada case abre com o contexto do
              negócio e o que foi entregue.
            </p>
            <div className="portfolio-grid">
              {related.map((p) => (
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
                  {p.img ? (
                    <div className="browser-screen">
                      <Image
                        src={p.img}
                        alt={p.alt}
                        fill
                        quality={70}
                        sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 360px"
                      />
                    </div>
                  ) : null}
                  <div className="browser-info">
                    <span className={`browser-badge ${p.badge.class}`}>
                      {p.badge.label}
                    </span>
                    <h3 className="browser-name">{p.name}</h3>
                    <p className="browser-desc">{p.desc}</p>
                    <span className="browser-link">Ver o case →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section>
        <div className="container">
          <p className="section-label reveal">{"//"} Perguntas frequentes</p>
          <h2 className="section-title reveal">O que costumam perguntar</h2>
          <div className="faq-list">
            {service.faq.map((item) => (
              <div className="faq-item reveal" key={item.q}>
                <h3 className="faq-q">{item.q}</h3>
                <p className="faq-a">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="founders">
        <div className="container">
          <p className="section-label reveal">{"//"} Outras frentes</p>
          <h2 className="section-title reveal">Também resolvemos</h2>
          <div className="deliverables">
            {others.map((other) => (
              <Link href={other.href} className="deliverable reveal" key={other.slug}>
                <h3>{other.pageTitle}</h3>
                <p>{other.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
