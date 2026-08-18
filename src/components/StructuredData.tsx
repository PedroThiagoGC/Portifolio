import { siteConfig } from "@/lib/site";

// JSON-LD para SEO: ProfessionalService (negócio local) + WebSite.
// Ajuda o Google a entender que a GM Tech é uma empresa de tecnologia em Fortaleza,
// quem é o fundador e o tamanho do time.
export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.url}/#business`,
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        telephone: siteConfig.phoneE164,
        priceRange: "$$",
        areaServed: {
          "@type": "City",
          name: siteConfig.city,
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.city,
          addressRegion: siteConfig.region,
          addressCountry: siteConfig.country,
        },
        sameAs: [siteConfig.whatsapp],
        alternateName: `${siteConfig.name} — ${siteConfig.meaning}`,
        slogan: "Game Master da sua operação digital",
        founder: {
          "@type": "Person",
          name: siteConfig.founder.name,
          jobTitle: siteConfig.founder.role,
          sameAs: [siteConfig.founder.linkedin, siteConfig.founder.github],
        },
        numberOfEmployees: {
          "@type": "QuantitativeValue",
          value: siteConfig.teamSize,
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Soluções GM Tech",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Presença digital profissional",
                description:
                  "Landing page que converte, Google Maps otimizado e tráfego pago (Google Ads e Meta Ads).",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "SaaS gerencial sob medida",
                description:
                  "Agendamento online, PDV para varejo, e-commerce, checklist operacional e controle financeiro.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Solução sob medida",
                description:
                  "Automação de processos, integrações, sistemas internos e consultoria de tecnologia.",
              },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        inLanguage: siteConfig.locale,
        publisher: { "@id": `${siteConfig.url}/#business` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
