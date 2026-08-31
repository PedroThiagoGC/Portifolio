import createMDX from "@next/mdx";
import { fileURLToPath } from "node:url";

// Caminho absoluto do módulo vazio usado para neutralizar o polyfill do Next.
// fileURLToPath é obrigatório: `new URL(...).pathname` entregaria "/C:/..." no
// Windows e o webpack não resolveria.
const NOOP_MODULE = fileURLToPath(new URL("./src/lib/noop.js", import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // .mdx habilitado para os posts do blog (src/app/blog/(posts)/<slug>/page.mdx).
  pageExtensions: ["ts", "tsx", "js", "jsx", "mdx"],
  images: {
    // AVIF antes de WebP: o otimizador entrega o menor formato que o browser aceita.
    formats: ["image/avif", "image/webp"],
  },
  // experimental.optimizeCss (critters) foi testado e descartado: no App Router
  // do Next 14 ele não inlina o CSS crítico — o <link rel="stylesheet"> segue
  // bloqueando a renderização — e só acrescenta tempo de build. Reavaliar em
  // versão futura do Next.
  webpack: (config, { webpack, isServer }) => {
    // O Next 14 faz require("../build/polyfills/polyfill-module") direto no
    // runtime do cliente, em next/dist/client/app-index.js. Como não passa por
    // browserslist, os ~11,5 KB de Array.prototype.at, Object.hasOwn,
    // String.prototype.trimStart e afins entram no bundle mesmo com alvos
    // modernos declarados. Todos são nativos nos navegadores do browserslist
    // deste package.json, então o módulo é substituído por um vazio.
    //
    // O regex termina em polyfill-module de propósito: não deve capturar
    // polyfill-nomodule, que é o bundle legado servido com atributo nomodule e
    // ignorado por navegador moderno.
    if (!isServer) {
      config.plugins.push(
        new webpack.NormalModuleReplacementPlugin(
          /[\\/]polyfills[\\/]polyfill-module(\.js)?$/,
          NOOP_MODULE,
        ),
      );
    }
    return config;
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
