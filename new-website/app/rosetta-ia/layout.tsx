import type { Metadata } from "next";
import { faqs } from "./faqs";
import { pageMetadata, rosettaOgImage } from "@/lib/seo";

// El título repite el H1 de la página; la descripción es la del §1.1
export const metadata: Metadata = pageMetadata({
  title: "Rosetta IA — Todos tus sistemas, hablando el mismo idioma | Arjé Partners",
  description:
    "Rosetta IA conecta aplicaciones que no fueron pensadas para entenderse: ERP, bancos, tesorería, plataformas sectoriales o sistemas propios, sin modificarlos. Extractos, facturas, pagos y conciliación con cálculos deterministas y validación humana.",
  path: "/rosetta-ia",
  image: rosettaOgImage,
});

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Rosetta IA",
    applicationCategory: "BusinessApplication",
    provider: { "@type": "Organization", name: "Arjé Partners" },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  },
];

export default function RosettaIALayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {children}
    </>
  );
}
