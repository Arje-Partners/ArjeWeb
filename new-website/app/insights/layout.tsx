import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

// La página es un componente de cliente y no puede declarar metadatos: van aquí
export const metadata: Metadata = pageMetadata({
  title: "Insights | Arjé Partners",
  description:
    "Análisis técnicos, tendencias y casos prácticos sobre integración de sistemas, treasury management y automatización financiera.",
  path: "/insights",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
