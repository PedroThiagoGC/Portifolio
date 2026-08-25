import { WhatsAppIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site";

export function FloatWhatsApp() {
  return (
    <a
      href={siteConfig.whatsapp}
      className="float-wa"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
    >
      <WhatsAppIcon width={28} height={28} />
    </a>
  );
}
