import Image from "next/image";
import { Activity, Monitor, Shield, FlaskConical } from "lucide-react";
import { TECH_FEATURES } from "@/lib/constants";

const iconMap = {
  Activity,
  Monitor,
  Shield,
  FlaskConical,
} as const;

type IconName = keyof typeof iconMap;

const photoGrid = [
  { src: "/establecimiento.jpg", alt: "Instalaciones", title: "Instalaciones", desc: "Espacios modernos", size: "col-span-2" },
  { src: "/fisioterapia.jpg", alt: "Fisioterapia veterinaria", title: "Fisioterapia", desc: "Rehabilitación integral", size: "" },
  { src: "/perro8.jpg", alt: "Internación", title: "Internación", desc: "Monitoreo 24hs", size: "" },
  { src: "/perro9.jpg", alt: "Diagnóstico", title: "Diagnóstico", desc: "Equipos propios", size: "" },
  { src: "/imagen1.jpg", alt: "Quirófano", title: "Quirófano", desc: "Cirugías complejas", size: "" },
] as const;

export function Technology() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-brand font-semibold text-sm uppercase tracking-widest mb-3">
              Tecnología e instalaciones
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Infraestructura para
              <br />
              <span className="text-brand">atención de primer nivel</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Contar con el equipamiento correcto marca la diferencia. En Veterinaria
              Paraná invertimos constantemente en tecnología para que tu mascota
              reciba el diagnóstico más preciso y el tratamiento más efectivo.
            </p>

            <div className="space-y-5">
              {TECH_FEATURES.map((feature) => {
                const Icon = iconMap[feature.icon as IconName];
                return (
                  <div key={feature.title} className="flex items-start gap-4 group">
                    <div className="w-11 h-11 bg-brand-muted rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand transition-colors duration-200">
                      <Icon className="h-5 w-5 text-brand group-hover:text-white transition-colors duration-200" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Photo grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-3">
              {photoGrid.map(({ src, alt, title, desc, size }) => (
                <div
                  key={title}
                  className={`relative ${size} rounded-2xl overflow-hidden aspect-[4/3] shadow-lg group`}
                >
                  <Image src={src} alt={alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2d1554]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="font-heading font-bold text-white text-base">{title}</p>
                    <p className="text-white/70 text-xs">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative blob */}
            <div className="absolute -z-10 -top-6 -right-6 w-72 h-72 bg-brand-muted rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
