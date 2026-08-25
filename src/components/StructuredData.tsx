import { businessNode, websiteNode, type SchemaNode } from "@/lib/schema";

// JSON-LD do site. Os nós de negócio (ProfessionalService) e de site (WebSite)
// vão em toda página; cada rota acrescenta os seus via prop `nodes` —
// BreadcrumbList, Service, FAQPage, CreativeWork ou BlogPosting.
export function StructuredData({
  nodes = [],
}: {
  nodes?: readonly SchemaNode[];
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [businessNode(), websiteNode(), ...nodes],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
