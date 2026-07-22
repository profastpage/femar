"use client";

import { useEffect, useRef } from "react";
import { content } from "@/data/content";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Quote } from "lucide-react";
import gsap from "gsap";

export function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Duplicate testimonials for infinite scroll effect
    const ctx = gsap.context(() => {
      // Very simple infinite marquee using GSAP
      gsap.to(track, {
        x: "-50%",
        ease: "none",
        duration: 20,
        repeat: -1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Double the testimonials array for the infinite track loop
  const displayTestimonials = [...content.home.testimonials, ...content.home.testimonials];

  return (
    <section id="testimonios" className="py-24 bg-primary text-primary-foreground overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-6 mb-16">
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-heading mb-4">
            Lo que dicen <span className="text-accent">nuestros clientes</span>
          </h2>
          <p className="text-lg text-primary-foreground/70">
            La confianza de las empresas que trabajan con nosotros es nuestro mayor respaldo.
          </p>
        </ScrollReveal>
      </div>

      <div className="relative w-full">
        {/* Gradients for fading edges */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none hidden md:block" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none hidden md:block" />

        <div className="flex w-[200%] md:w-[150%] lg:w-[120%]" ref={trackRef}>
          {displayTestimonials.map((testimonial, idx) => (
            <div
              key={`${testimonial.id}-${idx}`}
              className="w-full md:w-1/3 lg:w-1/4 flex-shrink-0 px-4"
            >
              <div className="bg-primary-foreground/5 backdrop-blur-md border border-primary-foreground/10 p-8 rounded-2xl h-full flex flex-col">
                <Quote className="w-10 h-10 text-accent/50 mb-6" />
                <p className="text-primary-foreground/90 text-lg mb-8 italic flex-1">
                  "{testimonial.text}"
                </p>
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-accent text-sm">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
