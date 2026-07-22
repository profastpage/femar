import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Ship, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 border-t border-border/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="bg-accent text-accent-foreground p-2 rounded-lg">
                <Ship size={24} />
              </div>
              <span className="font-bold text-xl tracking-tight">
                FEMAR<span className="text-accent">LOG</span>
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Optimizamos su cadena de suministro con servicios integrales de carga y aduanas, garantizando velocidad y seguridad.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-accent">Navegación</h3>
            <ul className="space-y-3">
              {siteConfig.mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-primary-foreground/70 hover:text-white transition-colors text-sm"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-accent">Servicios</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/servicios/carga-maritima" className="text-primary-foreground/70 hover:text-white transition-colors text-sm">Carga Marítima</Link>
              </li>
              <li>
                <Link href="/servicios/carga-aerea" className="text-primary-foreground/70 hover:text-white transition-colors text-sm">Carga Aérea</Link>
              </li>
              <li>
                <Link href="/servicios/carga-terrestre" className="text-primary-foreground/70 hover:text-white transition-colors text-sm">Carga Terrestre</Link>
              </li>
              <li>
                <Link href="/servicios/despacho-aduanero" className="text-primary-foreground/70 hover:text-white transition-colors text-sm">Despacho Aduanero</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-accent">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/70">
                  Av. Principal 123, Oficina 405, Lima, Perú
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent shrink-0" />
                <span className="text-sm text-primary-foreground/70">
                  +51 999 999 999
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent shrink-0" />
                <span className="text-sm text-primary-foreground/70">
                  contacto@femarlogistics.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright & Hardcoded Credits */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/50">
            &copy; {new Date().getFullYear()} FEMAR LOGISTICS SAC. Todos los derechos reservados.
          </p>
          <p className="text-sm text-primary-foreground/50">
            Diseño y desarrollo por <a href="https://www.fastpagepro.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold">fastpagepro.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
