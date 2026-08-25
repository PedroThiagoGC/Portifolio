import Link from "next/link";
import { StructuredData } from "@/components/StructuredData";
import { formatPostDate, getPost } from "@/content/blog";
import { blogPostingNode, breadcrumbNode } from "@/lib/schema";

// Cabeçalho de post. Chamado no topo de cada page.mdx com o slug, busca os
// dados no registro (src/content/blog.ts) e emite trilha, título e JSON-LD.
// Fica dentro do wrapper .article, então herda a largura de leitura.
export function PostHeader({ slug }: { slug: string }) {
  const post = getPost(slug);
  if (!post) return null;

  const path = `/blog/${post.slug}`;

  return (
    <>
      <StructuredData
        nodes={[
          blogPostingNode(post),
          breadcrumbNode([
            { name: "Blog", path: "/blog" },
            { name: post.title, path },
          ]),
        ]}
      />

      <nav className="breadcrumbs" aria-label="Trilha de navegação">
        <Link href="/">Início</Link>
        <span className="breadcrumbs-sep" aria-hidden="true">
          /
        </span>
        <Link href="/blog">Blog</Link>
        <span className="breadcrumbs-sep" aria-hidden="true">
          /
        </span>
        <span aria-current="page">{post.title}</span>
      </nav>

      <p className="post-meta">
        {formatPostDate(post.date)} · {post.readingMinutes} min de leitura
      </p>

      <h1 className="section-title" style={{ margin: "0.75rem 0 1rem" }}>
        {post.title}
      </h1>

      <p className="section-sub" style={{ maxWidth: "none" }}>
        {post.description}
      </p>

      <hr />
    </>
  );
}
