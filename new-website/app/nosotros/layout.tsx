import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

// La página es un componente de cliente y no puede declarar metadatos: van aquí
export const metadata: Metadata = pageMetadata({
  title: "Sobre nosotros | Arjé Partners",
  description:
    "En Arjé Partners aunamos más de 15 años de conocimiento profundo en finanzas corporativas con ingeniería de software avanzada. Ayudamos a empresas medianas y grandes a alcanzar una tesorería ágil, automatizada y en tiempo real.",
  path: "/nosotros",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
