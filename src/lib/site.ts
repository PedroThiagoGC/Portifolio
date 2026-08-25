// Configuração central do site — usada em metadata, JSON-LD, sitemap e robots.
// Defina NEXT_PUBLIC_SITE_URL no painel da Vercel quando tiver o domínio final.
// Fallback usa a URL automática da Vercel (VERCEL_PROJECT_PRODUCTION_URL) ou localhost.

function resolveSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.NEXT_PUBLIC_VERCEL_URL) {
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
  }
  return "http://localhost:3000";
}

const phoneDigits = "5585994334597";

export const siteConfig = {
  name: "GM Tech Solution",
  shortName: "GM Tech",
  url: resolveSiteUrl(),
  locale: "pt-BR",
  city: "Fortaleza",
  region: "CE",
  country: "BR",
  // Data da última alteração real de conteúdo — alimenta o lastmod do sitemap.
  // Fixa de propósito: new Date() mudaria a cada build e viraria sinal ruidoso.
  contentUpdatedAt: "2026-08-25",
  phoneDisplay: "(85) 99433-4597",
  phoneE164: "+5585994334597",
  whatsapp: `https://wa.me/${phoneDigits}?text=${encodeURIComponent(
    "Oi, vi o site e quero saber mais sobre as soluções da GM Tech!",
  )}`,
  description:
    "GM Tech Solution — GM de Game Master: assumimos o comando da sua operação digital. Presença digital profissional (landing pages, Google Maps e tráfego pago) e sistemas sob medida (agendamento, PDV, delivery, e-commerce, controle financeiro) em Fortaleza, CE. Sistema no ar em 48h.",
  keywords: [
    "desenvolvimento de sites Fortaleza",
    "landing page que converte",
    "sistema de agendamento online",
    "PDV para varejo",
    "e-commerce",
    "tráfego pago Google Ads Meta Ads",
    "Google Maps para empresas",
    "software sob medida",
    "automação de processos",
    "GM Tech Solution",
    "GM Tech Solution Game Master",
    "plataforma de delivery white-label",
  ],
  meaning: "Game Master",
  founder: {
    name: "Pedro Melo",
    role: "CEO & Fundador",
    linkedin: "https://linkedin.com/in/pedrothiago-bmelo",
    github: "https://github.com/pedrothiagogc",
  },
  teamSize: 4, // fundador + 3 desenvolvedores
  ogImage: "/brand/brand-sheet.jpeg",
  logo: "/brand/logo-vertical.jpeg",
  // Coordenadas de Fortaleza — usadas no nó geo do JSON-LD de negócio local.
  geo: { latitude: -3.7319, longitude: -38.5267 },
  citiesServed: [
    "Fortaleza",
    "Eusébio",
    "Maracanaú",
    "Caucaia",
    "Região Metropolitana de Fortaleza",
  ],
  openingHours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
} as const;

export type SiteConfig = typeof siteConfig;
