"use client";

import Hero from "@/components/sections/Hero";
import ValueProposition from "@/components/sections/ValueProposition";
import Integration from "@/components/sections/Integration";
import Clients from "@/components/sections/Clients";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProposition />
      <Integration />
      <Clients />
      <CTA />
    </>
  );
}
