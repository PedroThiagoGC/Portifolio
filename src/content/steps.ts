// Processo de trabalho — seção "Como funciona" da home.

export type Step = {
  num: string;
  title: string;
  desc: string;
};

export const STEPS: readonly Step[] = [
  {
    num: "01",
    title: "Conversa rápida",
    desc: "Você nos conta o que precisa — pode ser via WhatsApp mesmo. Entendemos seu negócio e o que está te travando.",
  },
  {
    num: "02",
    title: "Mapeamos a solução",
    desc: "Apresentamos o que faz sentido para o seu caso — sem vender o que você não precisa.",
  },
  {
    num: "03",
    title: "Desenvolvemos",
    desc: "Entregamos em ciclos curtos para você acompanhar e dar feedback real. Sem sumiço de semanas.",
  },
  {
    num: "04",
    title: "Você vai ao ar",
    desc: "Implantamos, treinamos e ficamos disponíveis. Somos parceiros — não entregamos e sumimos.",
  },
] as const;
