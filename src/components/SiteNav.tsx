import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/routes";
import { siteConfig } from "@/lib/site";

// Navegação principal — vive no layout, então serve todas as rotas.
// As âncoras vêm prefixadas com "/" (ver NAV_LINKS) para funcionarem também
// a partir de uma subpágina, onde "#solucoes" sozinho não resolveria.
export function SiteNav() {
  return (
    <nav aria-label="Navegação principal">
      <Link href="/" className="logo" aria-label="GM Tech Solution, ir para o início">
        <Image
          src="/brand/logo-horizontal.jpeg"
          alt="GM Tech Solution"
          width={234}
          height={44}
          priority
        />
      </Link>
      <ul className="nav-links">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
      <a
        href={siteConfig.whatsapp}
        className="nav-cta"
        target="_blank"
        rel="noopener noreferrer"
      >
        Falar agora
      </a>
    </nav>
  );
}
