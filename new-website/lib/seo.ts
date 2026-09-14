import type { Metadata } from "next";

// Metadatos por página: título, descripción, canonical, Open Graph y tarjeta de Twitter coherentes entre sí.
// Las URL son relativas; el dominio lo pone `metadataBase` en app/layout.tsx.
// El canonical y og:url van siempre aquí, por página: en el layout raíz los heredarían todas apuntando a Inicio.

type OgImage = { url: string; width: number; height: number; alt: string };

export const rosettaOgImage: OgImage = {
  url: "/og/rosetta-ia.png",
  width: 1200,
  height: 630,
  alt: "Circuito de facturas de Rosetta IA: la factura y el extracto del banco llegan por separado y se juntan hasta dejar el documento compensado. Datos de ejemplo.",
};

export function pageMetadata({
  title,
  description,
  path,
  image,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  image?: OgImage;
  type?: "website" | "article";
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: "Arjé Partners",
      type,
      locale: "es_ES",
      ...(image && { images: [image] }),
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title,
      description,
      ...(image && { images: [image] }),
    },
  };
}
