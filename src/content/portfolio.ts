// Projetos em produção — fonte única para a seção da home, o índice /projetos
// e as páginas de case em /projetos/[slug].
//
// Regra de conteúdo: descrevemos escopo e o que foi entregue. Não afirmamos
// métrica de cliente (faturamento, número de pedidos, conversão) sem dado real
// autorizado pelo cliente.

export type Project = {
  slug: string;
  /** Link externo para o ambiente no ar. null quando o ambiente está fora. */
  href: string | null;
  url: string;
  img: string | null;
  alt: string;
  badge: { class: string; label: string };
  name: string;
  desc: string;
  placeholder: { icon: string; tag: string; text: string } | null;
  link: string | null;
  /** Conteúdo exclusivo da página de case. */
  pageTitle: string;
  metaDescription: string;
  /** Contexto: qual era a necessidade do negócio. */
  context: string;
  /** O que foi entregue — itens verificáveis no próprio produto. */
  delivered: readonly string[];
  /** Slug do serviço relacionado, para link interno. */
  service: string;
};

export const PORTFOLIO: readonly Project[] = [
  {
    slug: "gm-tech-delivery",
    href: "https://brasa.gm-tech-solution.com",
    url: "brasa.gm-tech-solution.com",
    img: "/portfolio/gm-delivery.webp",
    alt: "GM Tech Delivery — plataforma de delivery white-label multi-tenant",
    badge: { class: "badge-saas", label: "SaaS · Delivery white-label" },
    name: "GM Tech Delivery",
    desc: "Plataforma multi-tenant: cardápio digital com a marca da loja, checkout só com telefone (Pix, cartão ou dinheiro), painel de pedidos ao vivo, caixa, app do entregador com GPS e relatórios de venda.",
    placeholder: null,
    link: "Ver a demonstração →",
    pageTitle: "GM Tech Delivery — plataforma white-label",
    metaDescription:
      "Plataforma de delivery white-label multi-tenant: cardápio com a marca da loja, checkout só com telefone, painel de pedidos ao vivo e app do entregador com GPS.",
    context:
      "Restaurante que vende por marketplace entrega comissão sobre cada pedido e não fica com o cadastro do próprio cliente. A plataforma existe para o pedido entrar por um canal da própria loja, com a marca dela na frente.",
    delivered: [
      "Arquitetura multi-tenant: cada loja com cardápio, marca e domínio próprios na mesma plataforma",
      "Checkout curto, só com telefone, aceitando Pix, cartão ou dinheiro",
      "Painel de pedidos ao vivo para a cozinha acompanhar sem recarregar a tela",
      "Módulo de caixa integrado ao fluxo de pedidos",
      "App do entregador com GPS para acompanhamento da entrega",
      "Relatórios de venda por período",
    ],
    service: "sistemas-sob-medida",
  },
  {
    slug: "feitico-salao",
    href: "https://feitico.vercel.app/",
    url: "feitico.vercel.app",
    img: "/portfolio/feitico.webp",
    alt: "Plataforma Feitiço Salão — agendamento online para salão de beleza",
    badge: { class: "badge-saas", label: "SaaS · Agendamento" },
    name: "Feitiço Salão",
    desc: "Sistema de agendamento online premium para salão de beleza, com gestão de agenda, serviços e experiência de marca.",
    placeholder: null,
    link: "Acessar plataforma →",
    pageTitle: "Feitiço Salão — agendamento online",
    metaDescription:
      "Sistema de agendamento online para salão de beleza: gestão de agenda por profissional, catálogo de serviços e experiência de marca própria.",
    context:
      "Salão que agenda por WhatsApp para o atendimento duas vezes: uma para o cliente na cadeira, outra para o celular que não para. O sistema tira a marcação do meio do atendimento.",
    delivered: [
      "Agendamento online pelo próprio cliente, sem intermediário",
      "Gestão de agenda por profissional e por serviço",
      "Catálogo de serviços com duração e valor",
      "Interface construída na identidade visual do salão, não em tema genérico",
    ],
    service: "sistemas-sob-medida",
  },
  {
    slug: "gm-tech-pdv",
    href: null,
    url: "gm-tech-pdv-api.vercel.app",
    img: null,
    alt: "GM Tech PDV — ponto de venda para varejo",
    badge: { class: "badge-pdv", label: "SaaS · PDV" },
    name: "GM Tech PDV",
    desc: "Ponto de venda completo com controle de estoque, caixa, relatórios gerenciais e multi-usuário para varejo. Sistema pronto — ambiente fora do ar no momento.",
    placeholder: {
      icon: "🖥️",
      tag: "Deploy offline",
      text: "Sistema pronto, ambiente sendo republicado",
    },
    link: null,
    pageTitle: "GM Tech PDV — ponto de venda para varejo",
    metaDescription:
      "Ponto de venda para varejo com controle de estoque, abertura e fechamento de caixa, relatórios gerenciais e acesso multi-usuário com permissões separadas.",
    context:
      "Varejo de balcão que controla venda em caderno descobre o furo de estoque só no inventário. O PDV fecha o ciclo entre venda, estoque e caixa no momento em que a venda acontece.",
    delivered: [
      "Venda de balcão com baixa automática de estoque",
      "Abertura e fechamento de caixa com conferência",
      "Acesso multi-usuário com permissões separadas por perfil",
      "Relatórios gerenciais de venda e de movimento de caixa",
    ],
    service: "sistemas-sob-medida",
  },
  {
    slug: "fortalimp",
    href: "https://www.fortalimp.com/",
    url: "fortalimp.com",
    img: "/portfolio/fortalimp.webp",
    alt: "Site da Fortalimp — desentupidora e limpa fossas em Fortaleza",
    badge: { class: "badge-landing", label: "Landing Page" },
    name: "Fortalimp",
    desc: "Desentupidora e limpa fossas em Fortaleza. Landing com SEO local, galeria de serviços e depoimentos reais de clientes.",
    placeholder: null,
    link: "Ver site ao vivo →",
    pageTitle: "Fortalimp — landing page com SEO local",
    metaDescription:
      "Landing page para desentupidora e limpa fossas em Fortaleza, com SEO local, galeria de serviços e depoimentos de clientes. Contato direto por WhatsApp.",
    context:
      "Serviço de urgência se decide em minutos: quem tem cano entupido busca no celular e chama o primeiro que responde. A página existe para aparecer nessa busca e converter na hora.",
    delivered: [
      "Estrutura de SEO local voltada para busca por serviço em Fortaleza",
      "Galeria dos serviços executados",
      "Depoimentos reais de clientes",
      "Contato por WhatsApp em destaque, para conversão imediata",
    ],
    service: "presenca-digital",
  },
  {
    slug: "desentupidora-disponivel",
    href: "https://desentupidora-disponivel.vercel.app",
    url: "desentupidora-disponivel.vercel.app",
    img: "/portfolio/desentupidora-disponivel.webp",
    alt: "Site da Desentupidora Disponível — desentupimento 24h em Fortaleza",
    badge: { class: "badge-landing", label: "Landing Page" },
    name: "Desentupidora Disponível",
    desc: "Desentupimento 24h em Fortaleza e região metropolitana. Galeria com vídeos e fotos dos serviços, depoimentos, cobertura cidade por cidade e dois canais de WhatsApp.",
    placeholder: null,
    link: "Ver site ao vivo →",
    pageTitle: "Desentupidora Disponível — landing 24h",
    metaDescription:
      "Landing page de desentupimento 24h em Fortaleza e região metropolitana, com galeria em vídeo, cobertura cidade por cidade e dois canais de WhatsApp.",
    context:
      "Atendimento 24h só converte se o site provar duas coisas de imediato: que atende agora e que atende na cidade de quem está buscando.",
    delivered: [
      "Galeria com vídeos e fotos dos serviços executados",
      "Página de cobertura cidade por cidade na região metropolitana",
      "Depoimentos de clientes",
      "Dois canais de WhatsApp para dividir a fila de atendimento",
    ],
    service: "presenca-digital",
  },
  {
    slug: "desentupidora-sem-problemas",
    href: "https://desentupidora-sem-problema.vercel.app",
    url: "desentupidora-sem-problema.vercel.app",
    img: "/portfolio/desentupidora-sem-problema.webp",
    alt: "Site da Desentupidora Sem Problemas — hidrojateamento em Fortaleza",
    badge: { class: "badge-landing", label: "Landing Page" },
    name: "Desentupidora Sem Problemas",
    desc: "Desentupimento residencial e comercial com hidrojateamento de alta pressão. FAQ, galeria, depoimentos, cobertura de 17 cidades da região e conversão rastreada no Google Ads.",
    placeholder: null,
    link: "Ver site ao vivo →",
    pageTitle: "Desentupidora Sem Problemas — landing e Ads",
    metaDescription:
      "Landing page de desentupimento e hidrojateamento com FAQ, cobertura de 17 cidades da região de Fortaleza e conversão rastreada no Google Ads.",
    context:
      "Quem investe em Google Ads sem rastrear conversão não sabe qual campanha traz cliente. Aqui a página e o rastreamento foram entregues juntos.",
    delivered: [
      "Landing para desentupimento residencial e comercial com hidrojateamento de alta pressão",
      "FAQ respondendo a dúvida que aparece antes do orçamento",
      "Cobertura declarada de 17 cidades da região",
      "Conversão rastreada no Google Ads, para medir o retorno de cada campanha",
    ],
    service: "presenca-digital",
  },
  {
    slug: "hb-informatica",
    href: "https://hbzinho-web-lac.vercel.app",
    url: "hbzinho-web-lac.vercel.app",
    img: "/portfolio/hb-informatica.webp",
    alt: "Site da HB Informática — assistência técnica e redes corporativas em Fortaleza",
    badge: {
      class: "badge-landing",
      label: "Institucional · Área do cliente",
    },
    name: "HB Informática",
    desc: "Assistência técnica, redes corporativas e consultoria de TI em Fortaleza. Site institucional com área do cliente, 2FA multi-dispositivo e chat de suporte.",
    placeholder: null,
    link: "Ver site ao vivo →",
    pageTitle: "HB Informática — site com área do cliente",
    metaDescription:
      "Site institucional de assistência técnica e redes corporativas em Fortaleza, com área do cliente, autenticação 2FA multi-dispositivo e chat de suporte.",
    context:
      "Prestador de TI corporativo precisa de site que sirva a dois públicos: quem ainda está avaliando e quem já é cliente e quer abrir chamado.",
    delivered: [
      "Site institucional cobrindo assistência técnica, redes corporativas e consultoria",
      "Área do cliente com login próprio",
      "Autenticação em dois fatores com suporte a múltiplos dispositivos",
      "Chat de suporte integrado ao site",
    ],
    service: "presenca-digital",
  },
  {
    slug: "consolida-engenharia",
    href: "https://consolida-eng.gm-tech-solution.com/",
    url: "consolida-eng.gm-tech-solution.com",
    img: "/portfolio/consolida-eng.webp",
    alt: "Site da Consolida — engenharia de recuperação e reforço de estruturas em concreto armado",
    badge: { class: "badge-soon", label: "Institucional · Em construção" },
    name: "Consolida Engenharia",
    desc: "Site institucional da Consolida — Engenharia de Solidez e Perenidade. Monorepo Turborepo com Next.js 16, conteúdo centralizado em um pacote compartilhado e domínio próprio. No ar, em fase de refinamento de conteúdo.",
    placeholder: null,
    link: "Ver site ao vivo →",
    pageTitle: "Consolida Engenharia — site institucional",
    metaDescription:
      "Site institucional de engenharia de recuperação e reforço de estruturas em concreto armado, em monorepo Turborepo com Next.js 16 e domínio próprio.",
    context:
      "Engenharia de recuperação estrutural vende confiança técnica. O site foi montado para sustentar conteúdo técnico extenso sem virar manutenção manual página por página.",
    delivered: [
      "Monorepo Turborepo com Next.js 16",
      "Conteúdo centralizado em um pacote compartilhado, reaproveitável entre páginas",
      "Domínio próprio configurado",
      "No ar, em fase de refinamento de conteúdo",
    ],
    service: "presenca-digital",
  },
] as const;

export function getProject(slug: string): Project | undefined {
  return PORTFOLIO.find((p) => p.slug === slug);
}
