import { content } from "@/data/content";
import { notFound } from "next/navigation";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Ship, Plane, Truck, ClipboardCheck, ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

const iconMap: Record<string, React.ReactNode> = {
  Ship: <Ship className="w-16 h-16 text-accent" />,
  Plane: <Plane className="w-16 h-16 text-accent" />,
  Truck: <Truck className="w-16 h-16 text-accent" />,
  ClipboardCheck: <ClipboardCheck className="w-16 h-16 text-accent" />,
};

// Next.js 15+ async params type handling
type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return content.services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const service = content.services.find((s) => s.slug === slug);
  if (!service) return { title: "Servicio no encontrado" };
  
  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const service = content.services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-[80vh] bg-background pt-10">
      <div className="container mx-auto px-4 md:px-6 py-20">
        <Link
          href="/servicios"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-12"
        >
          <ArrowLeft size={20} /> Volver a servicios
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left" className="space-y-6">
            <div className="bg-primary/5 w-24 h-24 rounded-3xl flex items-center justify-center mb-8">
              {iconMap[service.icon]}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-primary">
              {service.title}
            </h1>
            <p className="text-xl text-accent font-medium">
              {service.shortDescription}
            </p>
            <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground pt-6">
              <p>{service.fullDescription}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.3} className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-xl">
            <h3 className="text-2xl font-bold font-heading text-primary mb-4">¿Necesita este servicio?</h3>
            <p className="text-muted-foreground mb-8">
              Nuestros expertos están listos para asesorarle y brindarle la mejor tarifa del mercado.
            </p>
            <Link
              href="/contacto"
              className="inline-flex h-14 w-full items-center justify-center rounded-xl bg-accent px-8 text-lg font-medium text-accent-foreground shadow transition-colors hover:bg-accent/90"
            >
              Solicitar Cotización
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
