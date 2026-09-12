"use client";

import Hero from "@/components/sections/Hero";
import ValueProposition from "@/components/sections/ValueProposition";
import RosettaShowcase from "@/components/sections/RosettaShowcase";
import Integration from "@/components/sections/Integration";
import FeaturedInsights from "@/components/sections/FeaturedInsights";
import CTA from "@/components/sections/CTA";

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
