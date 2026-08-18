import Image from "next/image";
import { siteConfig } from "@/lib/site";
import { StructuredData } from "@/components/StructuredData";
import { LandingEffects } from "@/components/LandingEffects";
import { WhatsAppIcon, LinkedInIcon, GitHubIcon } from "@/components/icons";

const WA = siteConfig.whatsapp;

const TICKER = [
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
];

const STATS = [
  { count: 7, suffix: "+", label: "Projetos no ar hoje", color: "c-cyan" },
  { count: 48, suffix: "h", label: "Entrega de landing page", color: "c-green" },
  { count: 100, suffix: "%", label: "Personalizado por segmento", color: "c-purple" },
  { text: "CE", label: "Baseado em Fortaleza", color: "c-text" },
] as const;

const SERVICES = [
  {
    icon: "🌐",
    iconClass: "ic-cyan",
    title: "Presença digital profissional",
    desc: "Landing page que converte, cadastro completo no Google Maps com fotos e categorias corretas, e ativação de tráfego pago para trazer clientes todos os dias.",
    tags: ["Landing Page", "Google Maps", "Google Ads", "Meta Ads", "SEO Local"],
  },
  {
    icon: "⚙️",
    iconClass: "ic-green",
    title: "SaaS gerencial sob medida",
    desc: "Sistemas completos para operação: agendamento online, PDV para varejo, e-commerce integrado, checklist operacional e controle financeiro — tudo em um painel.",
    tags: ["Agendamento", "PDV", "E-commerce", "Financeiro", "Checklist"],
  },
  {
    icon: "🎯",
    iconClass: "ic-purple",
    title: "Solução para a sua dor",
    desc: "Tem um processo que toma tempo, uma planilha que virou um monstro ou um fluxo que ninguém controla? Mapeamos e transformamos em tecnologia que funciona.",
    tags: ["Automação", "Integrações", "Sistemas Internos", "Consultoria"],
  },
];

const AUDIENCE = [
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
];

const STEPS = [
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
];

const PORTFOLIO = [
  {
    href: "https://brasa.gm-tech-solution.com",
    url: "brasa.gm-tech-solution.com",
    img: "/portfolio/gm-delivery.png",
    alt: "GM Tech Delivery — plataforma de delivery white-label multi-tenant",
    badge: { class: "badge-saas", label: "SaaS · Delivery white-label" },
    name: "GM Tech Delivery",
    desc: "Plataforma multi-tenant: cardápio digital com a marca da loja, checkout só com telefone (Pix, cartão ou dinheiro), painel de pedidos ao vivo, caixa, app do entregador com GPS e relatórios de venda.",
    placeholder: null,
    link: "Ver a demonstração →",
  },
  {
    href: "https://feitico.vercel.app/",
    url: "feitico.vercel.app",
    img: "/portfolio/feitico.png",
    alt: "Plataforma Feitiço Salão — agendamento online para salão de beleza",
    badge: { class: "badge-saas", label: "SaaS · Agendamento" },
    name: "Feitiço Salão",
    desc: "Sistema de agendamento online premium para salão de beleza, com gestão de agenda, serviços e experiência de marca.",
    placeholder: null,
    link: "Acessar plataforma →",
  },
  {
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
  },
  {
    href: "https://www.fortalimp.com/",
    url: "fortalimp.com",
    img: "/portfolio/fortalimp.png",
    alt: "Site da Fortalimp — desentupidora e limpa fossas em Fortaleza",
    badge: { class: "badge-landing", label: "Landing Page" },
    name: "Fortalimp",
    desc: "Desentupidora e limpa fossas em Fortaleza. Landing com SEO local, galeria de serviços e depoimentos reais de clientes.",
    placeholder: null,
    link: "Ver site ao vivo →",
  },
  {
    href: "https://desentupidora-disponivel.vercel.app",
    url: "desentupidora-disponivel.vercel.app",
    img: "/portfolio/desentupidora-disponivel.png",
    alt: "Site da Desentupidora Disponível — desentupimento 24h em Fortaleza",
    badge: { class: "badge-landing", label: "Landing Page" },
    name: "Desentupidora Disponível",
    desc: "Desentupimento 24h em Fortaleza e região metropolitana. Galeria com vídeos e fotos dos serviços, depoimentos, cobertura cidade por cidade e dois canais de WhatsApp.",
    placeholder: null,
    link: "Ver site ao vivo →",
  },
  {
    href: "https://desentupidora-sem-problema.vercel.app",
    url: "desentupidora-sem-problema.vercel.app",
    img: "/portfolio/desentupidora-sem-problema.png",
    alt: "Site da Desentupidora Sem Problemas — hidrojateamento em Fortaleza",
    badge: { class: "badge-landing", label: "Landing Page" },
    name: "Desentupidora Sem Problemas",
    desc: "Desentupimento residencial e comercial com hidrojateamento de alta pressão. FAQ, galeria, depoimentos, cobertura de 17 cidades da região e conversão rastreada no Google Ads.",
    placeholder: null,
    link: "Ver site ao vivo →",
  },
  {
    href: "https://hbzinho-web-lac.vercel.app",
    url: "hbzinho-web-lac.vercel.app",
    img: "/portfolio/hb-informatica.png",
    alt: "Site da HB Informática — assistência técnica e redes corporativas em Fortaleza",
    badge: { class: "badge-landing", label: "Institucional · Área do cliente" },
    name: "HB Informática",
    desc: "Assistência técnica, redes corporativas e consultoria de TI em Fortaleza. Site institucional com área do cliente, 2FA multi-dispositivo e chat de suporte.",
    placeholder: null,
    link: "Ver site ao vivo →",
  },
  {
    href: "https://consolida-eng.gm-tech-solution.com/",
    url: "consolida-eng.gm-tech-solution.com",
    img: "/portfolio/consolida-eng.png",
    alt: "Site da Consolida — engenharia de recuperação e reforço de estruturas em concreto armado",
    badge: { class: "badge-soon", label: "Institucional · Em construção" },
    name: "Consolida Engenharia",
    desc: "Site institucional da Consolida — Engenharia de Solidez e Perenidade. Monorepo Turborepo com Next.js 16, conteúdo centralizado em um pacote compartilhado e domínio próprio. No ar, em fase de refinamento de conteúdo.",
    placeholder: null,
    link: "Ver site ao vivo →",
  },
];

const FOUNDER = {
  img: "/founders/pedro.jpg",
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
    whatsapp: WA,
  },
};

const TEAM = {
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
};

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <StructuredData />
      <LandingEffects />

      {/* NAV */}
      <nav aria-label="Navegação principal">
        <div className="logo">
          <Image
            src="/brand/logo-horizontal.jpeg"
            alt="GM Tech Solution"
            width={234}
            height={44}
            priority
          />
        </div>
        <ul className="nav-links">
          <li>
            <a href="#solucoes">Soluções</a>
          </li>
          <li>
            <a href="#portfolio">Portfólio</a>
          </li>
          <li>
            <a href="#publico">Para quem</a>
          </li>
          <li>
            <a href="#founders">Time</a>
          </li>
          <li>
            <a href="#como">Como funciona</a>
          </li>
        </ul>
        <a href={WA} className="nav-cta" target="_blank" rel="noopener noreferrer">
          Falar agora
        </a>
      </nav>

      {/* MAIN CONTENT */}
      <main>

      {/* HERO */}
      <section className="hero">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-glow2" aria-hidden="true" />

        <div className="hero-badge">
          <span className="hero-badge-dot" aria-hidden="true" />
          Fortaleza, CE · Sistema no ar em 48h
        </div>

        <h1 className="hero-title">
          Tecnologia que
          <br />
          <span className="line2">resolve de verdade</span>
        </h1>

        <div className="typewriter-wrap">
          <span className="typewriter" id="typewriter" />
          <span className="typewriter-cursor" aria-hidden="true" />
        </div>

        <p className="hero-sub">
          Da sua primeira presença online ao sistema de gestão completo — criamos
          a solução certa para o seu negócio, sem contrato de prateleira.
        </p>

        <p className="hero-meaning">
          GM de <strong>Game Master</strong> — quem conduz o jogo, define as
          regras e mantém a operação rodando.
        </p>

        <div className="hero-buttons">
          <a href={WA} className="btn-primary" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon width={18} height={18} />
            Quero minha solução
          </a>
          <a href="#portfolio" className="btn-outline">
            Ver projetos reais →
          </a>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker-wrap">
        <div className="ticker-track" id="ticker" aria-hidden="true">
          {[...TICKER, ...TICKER].map((item, i) => (
            <div className="ticker-item" key={i}>
              <span>◦</span> {item}
            </div>
          ))}
        </div>
      </div>

      {/* STATS */}
      <div className="stats-strip">
        <div className="stats-grid">
          {STATS.map((s, i) => (
            <div className="stat-card reveal" key={i}>
              {"count" in s ? (
                <div
                  className={`stat-value ${s.color}`}
                  data-count={s.count}
                  data-suffix={s.suffix}
                >
                  {`0${s.suffix}`}
                </div>
              ) : (
                <div className={`stat-value ${s.color}`}>{s.text}</div>
              )}
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section className="services" id="solucoes">
        <div className="container">
          <p className="section-label reveal">{"//"} O que entregamos</p>
          <h2 className="section-title reveal">
            Três linhas de solução,
            <br />
            uma empresa só
          </h2>
          <p className="section-sub reveal">
            Não vendemos produto de prateleira. Cada entrega é pensada para o seu
            segmento e a sua dor específica.
          </p>
          <div className="services-grid">
            {SERVICES.map((s) => (
              <div className="service-card reveal" key={s.title}>
                <div className="service-card-border" aria-hidden="true" />
                <div className={`service-icon ${s.iconClass}`} aria-hidden="true">
                  {s.icon}
                </div>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
                <div className="service-tags">
                  {s.tags.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="portfolio" id="portfolio">
        <div className="container">
          <p className="section-label reveal">{"//"} Portfólio</p>
          <h2 className="section-title reveal">
            Projetos no ar,
            <br />
            clientes reais
          </h2>
          <p className="section-sub reveal">
            Não mostramos protótipo. Os sistemas abaixo estão rodando em produção
            agora.
          </p>
          <div className="portfolio-grid">
            {PORTFOLIO.map((p) => {
              const inner = (
                <>
                  <div className="browser-bar">
                    <div className="browser-dots" aria-hidden="true">
                      <div className="browser-dot bd-red" />
                      <div className="browser-dot bd-yellow" />
                      <div className="browser-dot bd-green" />
                    </div>
                    <div className="browser-url">{p.url}</div>
                  </div>
                  <div className="browser-screen">
                    {p.img ? (
                      <Image
                        src={p.img}
                        alt={p.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 380px"
                      />
                    ) : (
                      <div className="screen-placeholder">
                        <div
                          className="screen-placeholder-icon"
                          aria-hidden="true"
                        >
                          {p.placeholder?.icon}
                        </div>
                        <div className="screen-placeholder-tag">
                          {p.placeholder?.tag}
                        </div>
                        <div className="screen-placeholder-text">
                          {p.placeholder?.text}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="browser-info">
                    <span className={`browser-badge ${p.badge.class}`}>
                      {p.badge.label}
                    </span>
                    <h3 className="browser-name">{p.name}</h3>
                    <p className="browser-desc">{p.desc}</p>
                    {p.link ? <span className="browser-link">{p.link}</span> : null}
                  </div>
                </>
              );

              return p.href ? (
                <a
                  href={p.href}
                  className="browser reveal"
                  target="_blank"
                  rel="noopener noreferrer"
                  key={p.name}
                >
                  {inner}
                </a>
              ) : (
                <div className="browser browser-static reveal" key={p.name}>
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AUDIENCE */}
      <section className="audience" id="publico">
        <div className="container">
          <p className="section-label reveal">{"//"} Para quem é</p>
          <h2 className="section-title reveal">
            Você se identifica
            <br />
            com algum desses?
          </h2>
          <p className="section-sub reveal">
            Atendemos três perfis com necessidades muito diferentes — e soluções
            sob medida para cada um.
          </p>
          <div className="audience-grid">
            {AUDIENCE.map((a) => (
              <div className={`audience-card ${a.accent} reveal`} key={a.title}>
                <div className="audience-emoji" aria-hidden="true">
                  {a.emoji}
                </div>
                <h3 className="audience-title">{a.title}</h3>
                <p className="audience-sub">{a.sub}</p>
                <p className="audience-desc">{a.desc}</p>
                <div className="audience-solution">
                  <div className="audience-solution-label">{"//"} Solução GM Tech</div>
                  <div className="audience-solution-text">{a.solution}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW */}
      <section className="how" id="como">
        <div className="container">
          <p className="section-label reveal">{"//"} Como funciona</p>
          <h2 className="section-title reveal">
            Do primeiro contato
            <br />
            ao sistema no ar
          </h2>
          <p className="section-sub reveal">
            Processo direto, sem burocracia e sem reunião que não termina.
          </p>
          <div className="steps">
            {STEPS.map((s) => (
              <div className="step-card reveal" key={s.num}>
                <div className="step-num" aria-hidden="true">
                  {s.num}
                </div>
                <h3 className="step-title">{s.title}</h3>
                <p className="step-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER & TEAM */}
      <section className="founders" id="founders">
        <div className="container">
          <p className="section-label reveal">{"//"} Os bastidores</p>
          <h2 className="section-title reveal">
            Quem está por trás
            <br />
            da GM Tech
          </h2>
          <p className="section-sub reveal">
            Um fundador à frente de tudo e um squad de três desenvolvedores
            sustentando cada projeto que já está em produção.
          </p>

          <div className="brand-meaning reveal">
            <span className="brand-meaning-chip" aria-hidden="true">
              GM
            </span>
            <p className="brand-meaning-text">
              <strong>Game Master</strong> — quem conduz o jogo, define as regras
              e mantém a operação rodando. É assim que tratamos cada cliente:
              assumimos o comando da operação digital e respondemos pelo
              resultado.
            </p>
          </div>

          <div className="founders-grid">
            <div className="founder-card reveal">
              <div className="founder-avatar-wrap">
                <div className="founder-avatar-inner">
                  <Image
                    src={FOUNDER.img}
                    alt={`Foto de ${FOUNDER.name}`}
                    width={110}
                    height={110}
                    style={{ objectFit: "cover", objectPosition: "center 20%" }}
                  />
                </div>
              </div>
              <h3 className="founder-name">{FOUNDER.name}</h3>
              <div className="founder-role">{FOUNDER.role}</div>
              <div className="founder-location">📍 {FOUNDER.location}</div>
              <div className="founder-divider" />
              <p className="founder-bio">{FOUNDER.bio}</p>
              <div className="founder-tags">
                {FOUNDER.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <div className="founder-socials">
                <a
                  href={FOUNDER.socials.linkedin}
                  className="founder-social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href={FOUNDER.socials.github}
                  className="founder-social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <GitHubIcon />
                </a>
                <a
                  href={FOUNDER.socials.whatsapp}
                  className="founder-social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon />
                </a>
              </div>
            </div>

            <div className="founder-card team-card reveal">
              <div className="team-avatar-cluster" aria-hidden="true">
                {Array.from({ length: TEAM.size }).map((_, i) => (
                  <span className="team-avatar" key={i}>
                    {"</>"}
                  </span>
                ))}
              </div>
              <h3 className="founder-name">{TEAM.title}</h3>
              <div className="founder-role">{TEAM.role}</div>
              <div className="founder-location">📍 {TEAM.location}</div>
              <div className="founder-divider" />
              <p className="founder-bio">{TEAM.bio}</p>
              <ul className="team-roles">
                {TEAM.roles.map((r) => (
                  <li className="team-role" key={r}>
                    {r}
                  </li>
                ))}
              </ul>
              <div className="founder-tags">
                {TEAM.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-box reveal">
          <h2>Pronto para tirar sua ideia do papel?</h2>
          <p>Fale com a gente agora. Resposta rápida, sem custo inicial e sem enrolação.</p>
          <a href={`tel:${siteConfig.phoneE164}`} className="cta-number">
            {siteConfig.phoneDisplay}
          </a>
          <div>
            <a href={WA} className="btn-whatsapp" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon width={22} height={22} />
              Chamar no WhatsApp agora
            </a>
          </div>
        </div>
      </section>

      </main>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">
          <Image
            src="/brand/logo-vertical.jpeg"
            alt="GM Tech Solution"
            width={146}
            height={80}
          />
        </div>
        <p className="footer-meaning">GM · Game Master</p>
        <p className="footer-meta">
          Fortaleza, Ceará — © {year} GM Tech Solution. Todos os direitos
          reservados.
        </p>
        <p className="footer-phone">
          <a href={`tel:${siteConfig.phoneE164}`}>{siteConfig.phoneDisplay}</a>
        </p>
      </footer>

      {/* FLOAT WA */}
      <a
        href={WA}
        className="float-wa"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
      >
        <WhatsAppIcon width={28} height={28} />
      </a>
    </>
  );
}
