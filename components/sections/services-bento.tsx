import { content } from "@/data/content";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import Link from "next/link";
import { Ship, Plane, Truck, ClipboardCheck, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ReactNode> = {
  Ship: <Ship className="w-8 h-8 md:w-12 md:h-12 text-accent" />,
  Plane: <Plane className="w-8 h-8 md:w-12 md:h-12 text-accent" />,
  Truck: <Truck className="w-8 h-8 md:w-12 md:h-12 text-accent" />,
  ClipboardCheck: <ClipboardCheck className="w-8 h-8 md:w-12 md:h-12 text-accent" />,
};

export function ServicesBento() {
  const services = content.services;

  return (
    <section id="servicios" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary font-heading mb-4">
            Nuestros <span className="text-accent">Servicios</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Soluciones logísticas diseñadas a medida para optimizar su cadena de suministro y garantizar entregas seguras y puntuales.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px] md:auto-rows-[300px]">
          {services.map((service, index) => {
            // Make the first item span 2 columns on large screens
            const isFeatured = index === 0;

            return (
              <ScrollReveal
                key={service.slug}
                direction="up"
                delay={index * 0.1}
                className={cn(
                  "group relative rounded-2xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-500",
                  isFeatured ? "lg:col-span-2 lg:row-span-1" : "col-span-1 row-span-1"
                )}
              >
                {/* Background Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative p-8 h-full flex flex-col z-10">
                  <div className="bg-primary/5 w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/10 transition-transform duration-500">
                    {iconMap[service.icon]}
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-3 font-heading group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground line-clamp-3 mb-6 flex-1">
                    {service.shortDescription}
                  </p>

                  <Link
                    href={`/servicios/${service.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent mt-auto opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                  >
                    Ver detalles <ArrowRight size={16} />
                  </Link>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
