import createMDX from "@next/mdx";

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
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
