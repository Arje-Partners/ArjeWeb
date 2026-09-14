import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

// La página es un componente de cliente y no puede declarar metadatos: van aquí
export const metadata: Metadata = pageMetadata({
  title: "Servicios | Arjé Partners",
  description:
    "Desde la consultoría y diseño de flujos hasta la implantación técnica y soporte continuo, con nuestra plataforma de integración Rosetta IA para modernizar tu tesorería sin tocar tu ERP.",
  path: "/servicios",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
