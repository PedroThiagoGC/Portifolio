// Três linhas de solução — fonte única para os cards da home e para as
// páginas dedicadas em /servicos/[slug].

export type Service = {
  slug: string;
  href: string;
  icon: string;
  iconClass: string;
  /** Título do card na home. */
  title: string;
  /** Título da aba e da SERP — o layout acrescenta o nome da empresa. */
  pageTitle: string;
  h1: string;
  metaDescription: string;
  label: string;
  /** Parágrafo de abertura da página dedicada. */
  intro: string;
  /** Descrição curta usada no card da home. */
  desc: string;
  tags: readonly string[];
  deliverables: readonly { title: string; desc: string }[];
  forWho: readonly string[];
  faq: readonly { q: string; a: string }[];
};

export const SERVICES: readonly Service[] = [
  {
    slug: "presenca-digital",
    href: "/servicos/presenca-digital",
    icon: "🌐",
    iconClass: "ic-cyan",
    title: "Presença digital profissional",
    pageTitle: "Presença digital profissional",
    h1: "Presença digital que traz cliente todo dia",
    metaDescription:
      "Landing page que converte, Google Maps otimizado e tráfego pago gerenciado para empresas de Fortaleza. Site no ar em 48h, com conversão rastreada.",
    label: "Presença digital",
    intro:
      "Aparecer no Google não é sorte: é cadastro correto, página rápida e anúncio apontado para quem já está procurando o que você vende. Montamos as três pontas e deixamos a conversão rastreada, para você saber de onde vem cada contato.",
    desc: "Landing page que converte, cadastro completo no Google Maps com fotos e categorias corretas, e ativação de tráfego pago para trazer clientes todos os dias.",
    tags: ["Landing Page", "Google Maps", "Google Ads", "Meta Ads", "SEO Local"],
    deliverables: [
      {
        title: "Landing page que converte",
        desc: "Página rápida, feita para celular primeiro, com o WhatsApp a um toque de distância e o argumento certo antes do formulário. Texto e estrutura pensados para o seu segmento — não um tema genérico trocado de cor.",
      },
      {
        title: "Google Maps otimizado",
        desc: "Cadastro completo do perfil da empresa: categoria principal correta, serviços descritos, horário, área de atendimento, fotos reais e o fluxo de avaliações organizado. É o que faz o negócio local aparecer para quem busca por perto.",
      },
      {
        title: "Tráfego pago gerenciado",
        desc: "Campanhas no Google Ads e Meta Ads apontadas para intenção de compra, com orçamento controlado e acompanhamento semanal. Sem impulsionar publicação no escuro.",
      },
      {
        title: "Conversão rastreada",
        desc: "Cada clique em WhatsApp, ligação e formulário registrado como conversão. Sem isso não existe decisão de investimento — só palpite.",
      },
    ],
    forWho: [
      "Negócio local que ainda não aparece no Google quando o cliente busca por perto",
      "Empresa com site antigo, lento ou que não gera contato nenhum",
      "Quem já investe em anúncio mas não sabe quanto contato aquilo realmente traz",
    ],
    faq: [
      {
        q: "Em quanto tempo a landing page fica no ar?",
        a: "A partir de 48h para a estrutura publicada, contando de quando recebemos as informações e imagens do negócio. Ajustes de texto e novas seções entram depois, com a página já rodando.",
      },
      {
        q: "O tráfego pago é obrigatório?",
        a: "Não. Muitos negócios locais começam só com landing page e Google Maps, que já trazem contato orgânico. O anúncio entra quando você quer volume acima do que a busca orgânica entrega.",
      },
      {
        q: "Vocês escrevem o texto da página?",
        a: "Sim. Levantamos o que o seu cliente pergunta antes de comprar e escrevemos a página em cima disso. Você revisa antes de publicar.",
      },
    ],
  },
  {
    slug: "sistemas-sob-medida",
    href: "/servicos/sistemas-sob-medida",
    icon: "⚙️",
    iconClass: "ic-green",
    title: "SaaS gerencial sob medida",
    pageTitle: "Sistemas de gestão sob medida",
    h1: "Sistema sob medida para a sua operação",
    metaDescription:
      "Agendamento online, PDV para varejo, delivery white-label, e-commerce e controle financeiro em um painel só. Sistemas sob medida desenvolvidos em Fortaleza.",
    label: "Sistemas sob medida",
    intro:
      "Sistema de prateleira cobra por usuário, obriga o seu processo a caber no molde dele e cobra mais caro justamente no que você mais usa. Desenvolvemos o painel em cima da operação que você já tem — e ele passa a ser seu.",
    desc: "Sistemas completos para operação: agendamento online, PDV para varejo, e-commerce integrado, checklist operacional e controle financeiro — tudo em um painel.",
    tags: ["Agendamento", "PDV", "E-commerce", "Financeiro", "Checklist"],
    deliverables: [
      {
        title: "Agendamento online",
        desc: "Agenda por profissional e por serviço, confirmação automática, bloqueio de horário e histórico do cliente. O cliente marca sozinho, sem ocupar quem está atendendo.",
      },
      {
        title: "PDV para varejo",
        desc: "Venda no balcão com controle de estoque, abertura e fechamento de caixa, múltiplos usuários com permissão separada e relatório gerencial do dia.",
      },
      {
        title: "Delivery e e-commerce",
        desc: "Cardápio ou catálogo com a sua marca, checkout curto, painel de pedidos ao vivo e acompanhamento da entrega. Pedido que entra pelo seu canal, sem comissão de marketplace.",
      },
      {
        title: "Controle financeiro e operacional",
        desc: "Entradas, saídas, formas de pagamento e checklist da rotina no mesmo painel do resto da operação — em vez de três planilhas que ninguém fecha.",
      },
    ],
    forWho: [
      "Operação que hoje roda em planilha, caderno ou grupo de WhatsApp",
      "Empresa pagando licença por usuário em sistema que usa pela metade",
      "Negócio com processo próprio que nenhum sistema pronto acomoda",
    ],
    faq: [
      {
        q: "Quanto tempo leva um sistema completo?",
        a: "Depende do escopo. Entregamos em ciclos curtos: a primeira versão útil costuma ir ao ar em semanas, não em meses, e evolui com você já usando. Você acompanha cada ciclo.",
      },
      {
        q: "O sistema fica hospedado onde?",
        a: "Em infraestrutura na nuvem que mantemos e monitoramos, com domínio e identidade visual do seu negócio.",
      },
      {
        q: "Dá para migrar os dados que já tenho?",
        a: "Sim. Importação de cadastro de clientes, produtos e histórico a partir de planilha ou da exportação do sistema atual faz parte da implantação.",
      },
      {
        q: "E depois de entregue, quem dá suporte?",
        a: "Nosso time. Implantamos, treinamos quem vai usar e seguimos disponíveis para ajuste e sustentação — não entregamos e desaparecemos.",
      },
    ],
  },
  {
    slug: "automacao-e-integracoes",
    href: "/servicos/automacao-e-integracoes",
    icon: "🎯",
    iconClass: "ic-purple",
    title: "Solução para a sua dor",
    pageTitle: "Automação e integrações",
    h1: "Automação de processos e integrações",
    metaDescription:
      "Mapeamos o processo manual que consome o dia da sua equipe e transformamos em automação, integração entre sistemas ou ferramenta interna sob medida.",
    label: "Automação e integrações",
    intro:
      "Quase toda empresa tem um processo que só funciona porque alguém gasta duas horas por dia sustentando ele na mão. Mapeamos esse fluxo, identificamos onde a informação se perde e transformamos em software que roda sozinho.",
    desc: "Tem um processo que toma tempo, uma planilha que virou um monstro ou um fluxo que ninguém controla? Mapeamos e transformamos em tecnologia que funciona.",
    tags: ["Automação", "Integrações", "Sistemas Internos", "Consultoria"],
    deliverables: [
      {
        title: "Mapeamento do processo",
        desc: "Antes de escrever código, entendemos o fluxo como ele é hoje — inclusive as exceções que ninguém documentou. É o que evita automatizar o problema errado.",
      },
      {
        title: "Automação de tarefa repetitiva",
        desc: "Cópia entre planilhas, geração de relatório, disparo de mensagem, atualização de cadastro: o que é regra clara e repetida passa a rodar sozinho.",
      },
      {
        title: "Integração entre sistemas",
        desc: "Ligamos o que você já usa — ERP, gateway de pagamento, planilha, CRM, WhatsApp — via API, para a informação deixar de ser digitada duas vezes.",
      },
      {
        title: "Ferramenta interna sob medida",
        desc: "Quando não existe produto no mercado para o seu caso, construímos o painel interno que a sua equipe precisa, com as permissões certas.",
      },
    ],
    forWho: [
      "Equipe que perde horas por semana em trabalho de copiar e colar",
      "Empresa com dois ou três sistemas que não conversam entre si",
      "Gestor que não confia no número do relatório porque ele é montado à mão",
    ],
    faq: [
      {
        q: "Como sei se o meu processo dá para automatizar?",
        a: "Se ele tem regra clara e se repete, dá. A conversa inicial serve justamente para separar o que é regra do que exige decisão humana — e automatizar só a primeira parte.",
      },
      {
        q: "Preciso trocar os sistemas que já uso?",
        a: "Na maioria dos casos, não. Integrar o que já está rodando costuma custar menos e gerar menos ruptura do que substituir tudo.",
      },
      {
        q: "Vocês fazem só o diagnóstico?",
        a: "Fazemos. Tem cliente que contrata o mapeamento, recebe o desenho da solução e decide o passo seguinte depois. Sem obrigação de fechar o desenvolvimento com a gente.",
      },
    ],
  },
] as const;

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
