import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "GM Tech Solution — Tecnologia que move negócios | Fortaleza, CE",
    template: "%s | GM Tech Solution",
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  applicationName: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "GM Tech Solution — Game Master da sua operação digital",
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1024,
        height: 559,
        alt: "GM Tech Solution — Tecnologia que move negócios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GM Tech Solution — Game Master da sua operação digital",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  category: "technology",
  // Favicon e Apple touch icon vêm da convenção de arquivos do Next.js:
  // src/app/icon.jpg e src/app/apple-icon.jpg (detectados automaticamente).
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
