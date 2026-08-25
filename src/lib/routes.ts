// Registro central de rotas — fonte única para sitemap, navegação e rodapé.
// Não importa nada de src/content para não criar ciclo: os slugs dinâmicos
// (projetos e posts) são resolvidos direto no sitemap a partir do conteúdo.

export type Route = {
  path: string;
  label: string;
  priority: number;
};

/** Páginas estáticas do site, na ordem em que aparecem no rodapé. */
export const STATIC_ROUTES: readonly Route[] = [
  { path: "/", label: "Início", priority: 1 },
  {
    path: "/servicos/presenca-digital",
    label: "Presença digital",
    priority: 0.9,
  },
  {
    path: "/servicos/sistemas-sob-medida",
    label: "Sistemas sob medida",
    priority: 0.9,
  },
  {
    path: "/servicos/automacao-e-integracoes",
    label: "Automação e integrações",
    priority: 0.9,
  },
  {
    path: "/desenvolvimento-de-sites-em-fortaleza",
    label: "Sites em Fortaleza",
    priority: 0.8,
  },
  { path: "/projetos", label: "Projetos", priority: 0.8 },
  { path: "/blog", label: "Blog", priority: 0.7 },
] as const;

/** Links do menu principal. Âncoras com "/" na frente para funcionar em subpáginas. */
export const NAV_LINKS: readonly { href: string; label: string }[] = [
  { href: "/#solucoes", label: "Soluções" },
  { href: "/projetos", label: "Projetos" },
  { href: "/#publico", label: "Para quem" },
  { href: "/#founders", label: "Time" },
  { href: "/blog", label: "Blog" },
] as const;
