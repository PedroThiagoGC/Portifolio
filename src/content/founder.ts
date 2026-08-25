// Fundador e squad de desenvolvimento — seção "Os bastidores" da home.

import { siteConfig } from "@/lib/site";

export const FOUNDER = {
  img: "/founders/pedro.webp",
  name: siteConfig.founder.name,
  role: siteConfig.founder.role,
  location: "Fortaleza, CE",
  bio: "Fundador e CEO da GM Tech Solution. Conduz a empresa de ponta a ponta — do primeiro contato comercial à arquitetura das soluções entregues. Mapeia a dor real do negócio, desenha o produto, define a prioridade técnica e acompanha cada projeto até entrar em produção. Sem intermediário: quem fecha é quem responde pela entrega.",
  tags: [
    "Direção Executiva",
    "Estratégia Comercial",
    "Product Owner",
    "Gestão de Projetos",
    "Arquitetura de Sistemas",
    "APIs & Integrações",
    "IA Aplicada",
  ],
  socials: {
    linkedin: siteConfig.founder.linkedin,
    github: siteConfig.founder.github,
    whatsapp: siteConfig.whatsapp,
  },
} as const;

export const TEAM = {
  size: 3,
  title: "Equipe de desenvolvimento",
  role: "3 desenvolvedores",
  location: "Fortaleza, CE · Squad dedicado",
  bio: "Time enxuto que sustenta a operação junto ao fundador: desenvolve, testa, publica e mantém tudo o que está no ar. Squad pequeno de propósito — decisão rápida, código revisado e nenhuma entrega parada esperando aprovação de comitê.",
  roles: [
    "Front-end & interfaces",
    "Back-end, APIs & banco de dados",
    "Infraestrutura, deploy & sustentação",
  ],
  tags: [
    "React & Next.js",
    "Node & APIs",
    "PostgreSQL",
    "Deploy & Monitoramento",
    "Sustentação",
  ],
} as const;
