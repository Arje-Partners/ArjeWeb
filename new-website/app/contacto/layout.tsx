import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

// La página es un componente de cliente y no puede declarar metadatos: van aquí
export const metadata: Metadata = pageMetadata({
  title: "Contacto | Arjé Partners",
  description:
    "Cuéntanos tu situación y te mostraremos cómo integrarnos con tu sistema actual.",
  path: "/contacto",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
