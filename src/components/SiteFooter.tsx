import Image from "next/image";
import Link from "next/link";
import { STATIC_ROUTES } from "@/lib/routes";
import { siteConfig } from "@/lib/site";

// Rodapé com mapa do site derivado do registro de rotas: toda página nova
// entra no rodapé automaticamente e deixa de nascer órfã de link interno.
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
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

      <nav className="footer-nav" aria-label="Mapa do site">
        {STATIC_ROUTES.map((route) => (
          <Link key={route.path} href={route.path}>
            {route.label}
          </Link>
        ))}
      </nav>

      <p className="footer-meta">
        Fortaleza, Ceará — © {year} GM Tech Solution. Todos os direitos
        reservados.
      </p>
      <p className="footer-phone">
        <a href={`tel:${siteConfig.phoneE164}`}>{siteConfig.phoneDisplay}</a>
      </p>
    </footer>
  );
}
