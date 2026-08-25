import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { StructuredData } from "@/components/StructuredData";
import { Typewriter } from "@/components/Typewriter";
import { WhatsAppIcon, LinkedInIcon, GitHubIcon } from "@/components/icons";
import { AUDIENCE } from "@/content/audience";
import { FOUNDER, TEAM } from "@/content/founder";
import { STATS, TICKER } from "@/content/home";
import { PORTFOLIO } from "@/content/portfolio";
import { SERVICES } from "@/content/services";
import { STEPS } from "@/content/steps";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const WA = siteConfig.whatsapp;

export default function Home() {
  return (
    <>
      <StructuredData />

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

        <Typewriter />

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
              <Link href={s.href} className="service-card reveal" key={s.slug}>
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
              </Link>
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
            {PORTFOLIO.map((p) => (
              <Link
                href={`/projetos/${p.slug}`}
                className="browser reveal"
                key={p.slug}
              >
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
                      quality={70}
                      sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 360px"
                    />
                  ) : (
                    <div className="screen-placeholder">
                      <div className="screen-placeholder-icon" aria-hidden="true">
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
                  <span className="browser-link">Ver o case →</span>
                </div>
              </Link>
            ))}
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
    </>
  );
}
