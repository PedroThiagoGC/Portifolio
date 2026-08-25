import type { MDXComponents } from "mdx/types";

// Envelope de todo conteúdo MDX: entrega o container .article, que carrega o
// offset da nav fixa e os estilos de prosa definidos em globals.css.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    wrapper: ({ children }) => <article className="article">{children}</article>,
    ...components,
  };
}
