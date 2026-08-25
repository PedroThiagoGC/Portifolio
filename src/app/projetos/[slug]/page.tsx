import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { StructuredData } from "@/components/StructuredData";
import { PORTFOLIO, getProject } from "@/content/portfolio";
import { getService } from "@/content/services";
import { breadcrumbNode, projectNode } from "@/lib/schema";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return PORTFOLIO.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};

  const path = `/projetos/${project.slug}`;
  return {
    title: project.pageTitle,
    description: project.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      title: `${project.pageTitle} | GM Tech Solution`,
      description: project.metaDescription,
      url: path,
      ...(project.img ? { images: [{ url: project.img }] } : {}),
    },
  };
}

export default function ProjectPage({ params }: Params) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const path = `/projetos/${project.slug}`;
  const service = getService(project.service);
  const others = PORTFOLIO.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <>
      <StructuredData
        nodes={[
          projectNode(project),
          breadcrumbNode([
            { name: "Projetos", path: "/projetos" },
            { name: project.name, path },
          ]),
        ]}
      />

      <PageHero
        label={project.badge.label}
        title={project.name}
        sub={project.desc}
        crumbs={[
          { href: "/projetos", label: "Projetos" },
          { href: path, label: project.name },
        ]}
      />

      <section style={{ paddingTop: 0 }}>
        <div className="case-visual">
          <div className="browser browser-static">
            <div className="browser-bar">
              <div className="browser-dots" aria-hidden="true">
                <div className="browser-dot bd-red" />
                <div className="browser-dot bd-yellow" />
                <div className="browser-dot bd-green" />
              </div>
              <div className="browser-url">{project.url}</div>
            </div>
            <div className="browser-screen">
              {project.img ? (
                <Image
                  src={project.img}
                  alt={project.alt}
                  fill
                  quality={75}
                  priority
                  sizes="(max-width: 900px) 100vw, 880px"
                />
              ) : (
                <div className="screen-placeholder">
                  <div className="screen-placeholder-icon" aria-hidden="true">
                    {project.placeholder?.icon}
                  </div>
                  <div className="screen-placeholder-tag">
                    {project.placeholder?.tag}
                  </div>
                  <div className="screen-placeholder-text">
                    {project.placeholder?.text}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="case-body">
          <h2 className="section-title" style={{ fontSize: "1.6rem" }}>
            O contexto
          </h2>
          <p className="section-sub" style={{ maxWidth: "none" }}>
            {project.context}
          </p>

          <h2
            className="section-title"
            style={{ fontSize: "1.6rem", marginTop: "3rem" }}
          >
            O que foi entregue
          </h2>
          <ul className="check-list" style={{ marginTop: "1.5rem" }}>
            {project.delivered.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="case-actions">
            {project.href ? (
              <a
                href={project.href}
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.link ?? "Ver ao vivo →"}
              </a>
            ) : null}
            {service ? (
              <Link href={service.href} className="btn-outline">
                Quero algo assim →
              </Link>
            ) : null}
          </div>
        </div>
      </section>

      <section className="portfolio">
        <div className="container">
          <p className="section-label reveal">{"//"} Outros projetos</p>
          <h2 className="section-title reveal">Também está no ar</h2>
          <div className="portfolio-grid">
            {others.map((p) => (
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
