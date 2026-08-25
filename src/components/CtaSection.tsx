import { WhatsAppIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site";

// Fechamento de conversão. Fica no layout, depois do conteúdo de cada rota,
// para nenhuma página nova terminar sem chamada para ação.
export function CtaSection() {
  return (
    <section className="cta-section">
      <div className="cta-box reveal">
        <h2>Pronto para tirar sua ideia do papel?</h2>
        <p>
          Fale com a gente agora. Resposta rápida, sem custo inicial e sem
          enrolação.
        </p>
        <a href={`tel:${siteConfig.phoneE164}`} className="cta-number">
          {siteConfig.phoneDisplay}
        </a>
        <div>
          <a
            href={siteConfig.whatsapp}
            className="btn-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon width={22} height={22} />
            Chamar no WhatsApp agora
          </a>
        </div>
      </div>
    </section>
  );
}
