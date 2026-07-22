import { ServicesBento } from "@/components/sections/services-bento";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios",
  description: "Catálogo de servicios de carga y despacho aduanero.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-[80vh] pt-10">
      <ServicesBento />
    </div>
  );
}
