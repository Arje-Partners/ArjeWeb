import type { Metadata } from "next";
import { faqs } from "./faqs";

// §1.1 · title y meta description reposicionados: cualquier sistema, no solo ERP y tesorería
export const metadata: Metadata = {
  title: "Rosetta IA — Conecta cualquier sistema con cualquier sistema | Arjé Partners",
  description:
    "Rosetta IA conecta aplicaciones que no fueron pensadas para entenderse: ERP, bancos, tesorería, plataformas sectoriales o sistemas propios, sin modificarlos. Extractos, facturas, pagos y conciliación con cálculos deterministas y validación humana.",
  keywords:
    "integración de sistemas, integración ERP tesorería, conectar ERP con banco, Norma 43, ficheros SEPA, conciliación bancaria, digitalización de facturas, conciliación TPV",
};

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
