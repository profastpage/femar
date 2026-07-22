"use client";

import { HeroSection } from "@/components/sections/hero";
import { ServicesBento } from "@/components/sections/services-bento";
import { Testimonials } from "@/components/sections/testimonials";
import { useScrollSpy } from "@/hooks/use-scroll-spy";

export default function Home() {
  // Use scroll spy to track sections and update URL hash
  useScrollSpy(["hero", "servicios", "testimonios"]);

  return (
    <div className="flex flex-col">
      <HeroSection />
      <ServicesBento />
      <Testimonials />
    </div>
  );
}
