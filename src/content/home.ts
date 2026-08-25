// Elementos exclusivos da home: ticker de capacidades e faixa de números.

import { PORTFOLIO } from "./portfolio";

export const TICKER: readonly string[] = [
  "Landing Page",
  "Google Maps",
  "Tráfego Pago",
  "Sistema de Agendamento",
  "PDV Completo",
  "Delivery White-Label",
  "E-commerce",
  "Checklist Operacional",
  "Controle Financeiro",
  "Automação",
  "Integrações",
] as const;

export type Stat = { label: string; color: string } & (
  | { count: number; suffix: string }
  | { text: string }
);

// A contagem de projetos vem do próprio portfólio para não divergir da seção.
export const STATS: readonly Stat[] = [
  {
    count: PORTFOLIO.length,
    suffix: "+",
    label: "Projetos no ar hoje",
    color: "c-cyan",
  },
  { count: 48, suffix: "h", label: "Entrega de landing page", color: "c-green" },
  {
    count: 100,
    suffix: "%",
    label: "Personalizado por segmento",
    color: "c-purple",
  },
  { text: "CE", label: "Baseado em Fortaleza", color: "c-text" },
] as const;

export const TYPEWRITER_PHRASES: readonly string[] = [
  "Landing Pages que convertem.",
  "Sistemas de Agendamento Online.",
  "PDV para o seu negócio.",
  "Presença no Google Maps.",
  "Tráfego Pago que traz clientes.",
  "Automação de processos internos.",
  "Tecnologia para a sua dor.",
] as const;
