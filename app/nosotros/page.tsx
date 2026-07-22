import { content } from "@/data/content";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { siteConfig } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros",
  description: content.about.subtitle,
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-[80vh] bg-background">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal direction="up" className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 text-white">
              {content.about.title}
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80">
              {content.about.subtitle}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ScrollReveal direction="left" delay={0.2} className="space-y-6">
              <h2 className="text-3xl font-bold font-heading text-primary">Nuestra Historia</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {content.about.content}
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.4} className="space-y-8">
              <div className="bg-secondary/50 p-8 rounded-2xl border border-border">
                <h3 className="text-xl font-bold font-heading text-primary mb-3">Misión</h3>
                <p className="text-muted-foreground">{content.about.mission}</p>
              </div>
              <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
                <h3 className="text-xl font-bold font-heading text-primary mb-3">Visión</h3>
                <p className="text-muted-foreground">{content.about.vision}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
