import { content } from "@/data/content";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { siteConfig } from "@/config/site";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description: content.contact.subtitle,
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-[80vh] bg-background pt-10">
      <div className="container mx-auto px-4 md:px-6 py-20">
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-4">
            {content.contact.title}
          </h1>
          <p className="text-xl text-muted-foreground">
            {content.contact.subtitle}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <ScrollReveal direction="left" delay={0.2} className="space-y-8">
            <div className="bg-card border border-border p-8 rounded-3xl h-full shadow-sm">
              <h3 className="text-2xl font-bold font-heading text-primary mb-8">Información de Contacto</h3>
              
              <ul className="space-y-8">
                <li className="flex items-start gap-4">
                  <div className="bg-accent/10 p-4 rounded-full text-accent shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Dirección</h4>
                    <p className="text-muted-foreground">{content.contact.address}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-accent/10 p-4 rounded-full text-accent shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Teléfono</h4>
                    <p className="text-muted-foreground">{content.contact.phone}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-accent/10 p-4 rounded-full text-accent shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Correo Electrónico</h4>
                    <p className="text-muted-foreground">{content.contact.email}</p>
                  </div>
                </li>
              </ul>

              <div className="mt-12 pt-8 border-t border-border">
                <a
                  href={siteConfig.links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-8 text-base font-medium text-white shadow transition-colors hover:bg-[#25D366]/90"
                >
                  <Phone size={20} />
                  Chatear por WhatsApp
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form (Static UI) */}
          <ScrollReveal direction="right" delay={0.4} className="bg-card border border-border p-8 md:p-10 rounded-3xl shadow-sm">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-foreground">Nombre</label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="Juan"
                    className="flex h-12 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-foreground">Apellido</label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Pérez"
                    className="flex h-12 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">Correo Electrónico</label>
                <input
                  id="email"
                  type="email"
                  placeholder="juan@empresa.com"
                  className="flex h-12 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">Mensaje</label>
                <textarea
                  id="message"
                  placeholder="¿En qué podemos ayudarle?"
                  className="flex min-h-[150px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring resize-none"
                />
              </div>

              <button
                type="button"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-8 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                <Send size={18} />
                Enviar Mensaje
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
