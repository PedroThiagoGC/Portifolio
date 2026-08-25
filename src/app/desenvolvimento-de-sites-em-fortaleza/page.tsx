import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { StructuredData } from "@/components/StructuredData";
import { PORTFOLIO } from "@/content/portfolio";
import { SERVICES } from "@/content/services";
import { abs, breadcrumbNode, faqNode } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

const PATH = "/desenvolvimento-de-sites-em-fortaleza";

const FAQ = [
  {
    q: "Vocês atendem presencialmente em Fortaleza?",
    a: "Sim. Somos de Fortaleza e atendemos presencialmente quando o projeto pede — levantamento de processo, treinamento de equipe, implantação de PDV no balcão. O resto do acompanhamento roda por WhatsApp e chamada, que é mais rápido para todo mundo.",
  },
  {
    q: "Quanto tempo para o site ficar no ar?",
    a: "Landing page a partir de 48h depois que recebemos as informações e imagens. Site institucional com mais páginas e sistema de gestão seguem em ciclos curtos, com você acompanhando cada entrega.",
  },
  {
    q: "O site já vem preparado para aparecer no Google?",
    a: "Vem. Estrutura de SEO, título e descrição por página, dados estruturados de negócio local e sitemap entram na entrega. Cadastro no perfil da empresa no Google e tráfego pago são a frente de presença digital.",
  },
  {
    q: "Vocês atendem cidades da região metropolitana?",
    a: "Atendemos. Eusébio, Maracanaú, Caucaia e o restante da região metropolitana entram no mesmo formato de trabalho de Fortaleza.",
  },
  {
    q: "Preciso ter o texto e as fotos prontos?",
    a: "Não. Ajudamos a estruturar o texto a partir do que o seu cliente pergunta antes de comprar. Fotos reais do negócio ajudam muito no resultado, e orientamos o que fotografar.",
  },
];

export const metadata: Metadata = {
  title: "Desenvolvimento de sites em Fortaleza",
  description:
    "Criação de sites, landing pages e sistemas sob medida em Fortaleza e região metropolitana. SEO local, Google Maps e conversão rastreada. Site no ar em 48h.",
  alternates: { canonical: PATH },
  openGraph: {
    title: "Desenvolvimento de sites em Fortaleza | GM Tech Solution",
    description:
      "Sites, landing pages e sistemas sob medida para empresas de Fortaleza e região metropolitana.",
    url: PATH,
  },
};

export default function FortalezaPage() {
  const localProjects = PORTFOLIO.filter((p) =>
    /Fortaleza/i.test(`${p.desc} ${p.alt}`),
  ).slice(0, 3);

  return (
    <>
      <StructuredData
        nodes={[
          {
            "@type": "Service",
            "@id": abs(`${PATH}#service`),
            name: "Desenvolvimento de sites em Fortaleza",
            description:
              "Criação de sites, landing pages e sistemas sob medida para empresas de Fortaleza e região metropolitana.",
            url: abs(PATH),
            provider: { "@id": abs("/#business") },
            areaServed: siteConfig.citiesServed.map((city) => ({
              "@type": "City",
              name: city,
            })),
          },
          faqNode(FAQ),
          breadcrumbNode([
            { name: "Desenvolvimento de sites em Fortaleza", path: PATH },
          ]),
        ]}
      />

      <PageHero
        label="Fortaleza, CE"
        title="Desenvolvimento de sites em Fortaleza"
        sub="Somos daqui. Criamos sites, landing pages e sistemas sob medida para empresas de Fortaleza e da região metropolitana — com SEO local, cadastro no Google e conversão rastreada desde o primeiro dia."
        crumbs={[{ href: PATH, label: "Sites em Fortaleza" }]}
      />

      <section>
        <div className="container">
          <p className="section-label reveal">{"//"} Por que local importa</p>
          <h2 className="section-title reveal">
            Busca local tem regra própria
          </h2>
          <p className="section-sub reveal">
            Quem procura serviço na sua cidade usa termos com bairro, cidade e
            urgência, e decide no celular em poucos minutos. Site genérico
            hospedado em qualquer lugar não disputa essa busca: falta cadastro
            correto no perfil da empresa, falta página rápida e falta prova de
            que você atende ali.
          </p>
          <ul className="check-list reveal">
            <li>
              Estrutura de página pensada para a busca por serviço mais cidade,
              não para palavra-chave solta
            </li>
            <li>
              Dados estruturados de negócio local, com endereço, telefone e área
              de atendimento legíveis para o Google
            </li>
            <li>
              Perfil da empresa no Google configurado com categoria certa,
              serviços e fotos reais
            </li>
            <li>
              WhatsApp e ligação a um toque, porque serviço local se decide na
              hora
            </li>
          </ul>
        </div>
      </section>

      <section className="audience">
        <div className="container">
          <p className="section-label reveal">{"//"} O que entregamos</p>
          <h2 className="section-title reveal">Três frentes de trabalho</h2>
          <div className="deliverables">
            {SERVICES.map((service) => (
              <Link
                href={service.href}
                className="deliverable reveal"
                key={service.slug}
              >
                <h3>{service.pageTitle}</h3>
                <p>{service.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {localProjects.length > 0 ? (
        <section className="portfolio">
          <div className="container">
            <p className="section-label reveal">{"//"} Aqui do lado</p>
            <h2 className="section-title reveal">
              Projetos entregues em Fortaleza
            </h2>
            <div className="portfolio-grid">
              {localProjects.map((p) => (
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
                  {p.img ? (
                    <div className="browser-screen">
                      <Image
                        src={p.img}
                        alt={p.alt}
                        fill
                        quality={70}
                        sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 360px"
                      />
                    </div>
                  ) : null}
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
      ) : null}

      <section>
        <div className="container">
          <p className="section-label reveal">{"//"} Cobertura</p>
          <h2 className="section-title reveal">Onde atendemos</h2>
          <div className="service-tags" style={{ marginTop: "2rem" }}>
            {siteConfig.citiesServed.map((city) => (
              <span className="tag" key={city}>
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="founders">
        <div className="container">
          <p className="section-label reveal">{"//"} Perguntas frequentes</p>
          <h2 className="section-title reveal">Dúvidas de quem é daqui</h2>
          <div className="faq-list">
            {FAQ.map((item) => (
              <div className="faq-item reveal" key={item.q}>
                <h3 className="faq-q">{item.q}</h3>
                <p className="faq-a">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
