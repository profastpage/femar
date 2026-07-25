"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { content } from "@/data/content";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Image from "next/image";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        titleRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power4.out", delay: 0.2 }
      )
        .fromTo(
          subtitleRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.5"
        )
        .fromTo(
          ctaRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
          "-=0.4"
        );

      // Parallax effect on scroll
      gsap.to(".hero-bg-image", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-start overflow-hidden bg-primary pt-20"
    >
      {/* Image Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="hero-bg-image absolute -top-[10%] -left-[5%] w-[110%] h-[120%]">
          <Image
            src="/hero-bg.webp"
            alt="Fondo Logístico de FEMAR"
            fill
            priority
            className="object-cover object-center"
            quality={100}
          />
        </div>
      </div>

      {/* Ultra Pro Overlays for Text Readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80" />
      <div className="absolute inset-0 z-10 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />

      <div className="container mx-auto px-4 md:px-6 relative z-20 flex flex-col items-start text-left">
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-primary-foreground max-w-4xl mb-6 font-heading leading-[1.1]"
          style={{ opacity: 0 }}
        >
          <span className="text-white">
            {content.home.hero.title.split(" ").slice(0, -2).join(" ")}
          </span>{" "}
          <span className="text-accent inline-block">
            {content.home.hero.title.split(" ").slice(-2).join(" ")}
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-lg md:text-xl lg:text-2xl text-primary-foreground/90 max-w-2xl mb-10 font-medium leading-relaxed"
          style={{ opacity: 0 }}
        >
          {content.home.hero.subtitle}
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4" style={{ opacity: 0 }}>
          <MagneticButton
            intensity={0.4}
            className="h-14 px-8 bg-accent text-accent-foreground hover:bg-accent/90 shadow-[0_0_40px_rgba(37,99,235,0.3)] text-lg"
          >
            <Link href="/contacto" className="flex items-center gap-2 w-full h-full">
              {content.home.hero.ctaPrimary}
              <ArrowRight size={20} />
            </Link>
          </MagneticButton>

          <MagneticButton
            intensity={0.2}
            className="h-14 px-8 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/10 text-lg"
          >
            <Link href="#servicios" className="w-full h-full flex items-center justify-center">
              {content.home.hero.ctaSecondary}
            </Link>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
