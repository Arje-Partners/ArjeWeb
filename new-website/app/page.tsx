import type { Metadata } from "next";
import { pageMetadata, rosettaOgImage } from "@/lib/seo";
import Hero from "@/components/sections/Hero";
import ValueProposition from "@/components/sections/ValueProposition";
import RosettaShowcase from "@/components/sections/RosettaShowcase";
import Integration from "@/components/sections/Integration";
import FeaturedInsights from "@/components/sections/FeaturedInsights";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = pageMetadata({
  title: "Arjé Partners | Tus datos, donde tienen que estar",
  description:
    "Integración de sistemas y datos para empresas medianas y grandes: conectamos aplicaciones, transformamos, cargamos y entregamos la información donde se necesita. Más de 15 años haciéndolo, hoy con Rosetta IA.",
  path: "/",
  image: rosettaOgImage,
});

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProposition />
      <RosettaShowcase />
      <Integration />
      <FeaturedInsights />
      <CTA />
    </>
  );
}
