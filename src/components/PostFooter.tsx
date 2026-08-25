import Link from "next/link";
import { getPost } from "@/content/blog";
import { getService } from "@/content/services";

// Fechamento do post: leva o leitor para a página de serviço relacionada e de
// volta ao índice. O CTA de WhatsApp já vem do layout.
export function PostFooter({ slug }: { slug: string }) {
  const post = getPost(slug);
  const service = post?.service ? getService(post.service) : undefined;

  return (
    <>
      <hr />
      <div className="case-actions">
        {service ? (
          <Link href={service.href} className="btn-primary">
            {service.pageTitle} →
          </Link>
        ) : null}
        <Link href="/blog" className="btn-outline">
          Ver outros textos
        </Link>
      </div>
    </>
  );
}
