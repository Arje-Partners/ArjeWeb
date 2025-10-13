"use client";

import Hero from "@/components/sections/Hero";
import ValueProposition from "@/components/sections/ValueProposition";
import Integration from "@/components/sections/Integration";
import Clients from "@/components/sections/Clients";
import FeaturedInsights from "@/components/sections/FeaturedInsights";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProposition />
      <Integration />
      <Clients />
      <FeaturedInsights />
      <CTA />
    </>
  );
}
