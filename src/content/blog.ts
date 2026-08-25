// Registro dos posts. Fonte única para o índice /blog, o sitemap e o RSS.
//
// Um post existe quando está aqui E tem o arquivo em
// src/app/blog/(posts)/<slug>/page.mdx. O registro evita ler o disco em
// runtime e mantém o índice tipado.

export type Post = {
  slug: string;
  title: string;
  /** Usada na meta description do post e no card do índice. */
  description: string;
  /** ISO 8601, formato YYYY-MM-DD. */
  date: string;
  tags: readonly string[];
  readingMinutes: number;
  /** Slug do serviço relacionado, para link interno no fim do post. */
  service?: string;
};

export const POSTS: readonly Post[] = [
  {
    slug: "quanto-custa-um-site-em-fortaleza",
    title: "Quanto custa um site profissional em Fortaleza",
    description:
      "O que realmente move o preço de um site: escopo, conteúdo, integrações e prazo. Um guia para pedir orçamento sabendo o que está comparando.",
    date: "2026-08-25",
    tags: ["Presença digital", "Orçamento"],
    readingMinutes: 6,
    service: "presenca-digital",
  },
  {
    slug: "sistema-de-agendamento-para-salao",
    title: "Sistema de agendamento para salão: o que avaliar",
    description:
      "Agenda por profissional, confirmação automática, bloqueio de horário e histórico do cliente. O que separa um agendamento que funciona de um que a equipe abandona.",
    date: "2026-08-25",
    tags: ["Agendamento", "Salão de beleza"],
    readingMinutes: 7,
    service: "sistemas-sob-medida",
  },
  {
    slug: "pdv-para-pequeno-varejo",
    title: "PDV para pequeno varejo: quando a planilha para de dar conta",
    description:
      "Os sinais de que o controle manual já está custando dinheiro, e o que um ponto de venda precisa ter antes de você trocar de sistema.",
    date: "2026-08-25",
    tags: ["PDV", "Varejo"],
    readingMinutes: 6,
    service: "sistemas-sob-medida",
  },
  {
    slug: "google-maps-para-empresa-local",
    title: "Google Maps para empresa local: o cadastro que converte",
    description:
      "Passo a passo do perfil da empresa no Google: categoria, serviços, fotos, avaliações e os erros que fazem o negócio desaparecer da busca por perto.",
    date: "2026-08-25",
    tags: ["Google Maps", "SEO local"],
    readingMinutes: 8,
    service: "presenca-digital",
  },
  {
    slug: "delivery-proprio-ou-marketplace",
    title: "Delivery próprio ou marketplace: quanto sobra em cada modelo",
    description:
      "Comissão, cadastro do cliente, controle da marca e custo de aquisição. Como comparar os dois modelos sem romantizar nenhum dos dois.",
    date: "2026-08-25",
    tags: ["Delivery", "Restaurante"],
    readingMinutes: 7,
    service: "sistemas-sob-medida",
  },
] as const;

/** Mais recentes primeiro; empate resolvido pela ordem do registro. */
export const POSTS_BY_DATE: readonly Post[] = [...POSTS].sort((a, b) =>
  b.date.localeCompare(a.date),
);

export function getPost(slug: string): Post | undefined {
  return POSTS.find((post) => post.slug === slug);
}

export function formatPostDate(iso: string): string {
  const [year, month, day] = iso.split("-");
  return `${day}/${month}/${year}`;
}
