import Link from "next/link";

export type Crumb = { href: string; label: string };

// Cabeçalho das subpáginas. Reusa section-label / section-title / section-sub
// da home e carrega o offset da nav fixa (64px) via .page-hero.
//
// Sem .reveal de propósito: é conteúdo acima da dobra e candidato a LCP —
// tem de estar visível antes de qualquer JavaScript rodar.
export function PageHero({
  label,
  title,
  sub,
  crumbs,
}: {
  label: string;
  title: string;
  sub?: string;
  crumbs?: readonly Crumb[];
}) {
  return (
    <section className="page-hero">
      <div className="container">
        {crumbs?.length ? (
          <nav className="breadcrumbs" aria-label="Trilha de navegação">
            <Link href="/">Início</Link>
            {crumbs.map((crumb, i) => (
              <span key={crumb.href}>
                <span className="breadcrumbs-sep" aria-hidden="true">
                  /
                </span>
                {i === crumbs.length - 1 ? (
                  <span aria-current="page">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href}>{crumb.label}</Link>
                )}
              </span>
            ))}
          </nav>
        ) : null}
        <p className="section-label">{"//"} {label}</p>
        <h1 className="section-title">{title}</h1>
        {sub ? <p className="section-sub">{sub}</p> : null}
      </div>
    </section>
  );
}
