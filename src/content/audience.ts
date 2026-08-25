// Perfis de cliente atendidos — seção "Para quem é" da home.

export type Audience = {
  accent: string;
  emoji: string;
  title: string;
  sub: string;
  desc: string;
  solution: string;
};

export const AUDIENCE: readonly Audience[] = [
  {
    accent: "ac-local",
    emoji: "🏪",
    title: "Pequeno negócio local",
    sub: "Salão, clínica, loja, restaurante, prestador de serviço",
    desc: "Você precisa aparecer no Google, ter um site que passe credibilidade e talvez um sistema simples para controlar a agenda ou o caixa. Ainda usa planilha ou papel.",
    solution:
      "Landing page + Google Maps otimizado + tráfego pago gerenciado + sistema de agendamento ou PDV pronto para rodar.",
  },
  {
    accent: "ac-media",
    emoji: "🏢",
    title: "Empresa média em crescimento",
    sub: "Operação com equipe, múltiplos processos, escala",
    desc: "Você já tem clientes, mas os processos internos viram um caos. Controles manuais, informações soltas, dificuldade de acompanhar o financeiro de verdade.",
    solution:
      "Sistema gerencial personalizado com controle financeiro, checklist operacional, integrações e relatórios em tempo real.",
  },
  {
    accent: "ac-startup",
    emoji: "🚀",
    title: "Empreendedor digital",
    sub: "Startup, SaaS, produto digital, ideia com potencial",
    desc: "Você tem uma ideia ou um MVP que precisa evoluir. Precisa de um parceiro técnico que entenda de produto, não só de código.",
    solution:
      "Desenvolvimento de produto digital completo — da arquitetura ao deploy, com visão de negócio e entrega ágil.",
  },
] as const;
