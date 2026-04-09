import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

const highlights = [
  "Casi 4 décadas de trayectoria en Villa Adelina",
  "Equipo de ~25 profesionales altamente capacitados",
  "Diagnóstico y tratamiento integral en un solo lugar",
  "Equipamiento de última generación propio",
  "Atención personalizada y explicaciones claras",
  "Referentes en oncología y cirugía veterinaria",
];

export function AboutUs() {
  return (
    <section id="quienes-somos" className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Main photo */}
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
                <Image
                  src="/establecimiento.jpg"
                  alt="Instalaciones de Veterinaria Paraná"
                  fill
                  className="object-cover"
                />
                {/* Gradient overlay at bottom for text */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2d1554]/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-purple-200 text-xs font-medium uppercase tracking-widest mb-1">
                    Nuestra misión
                  </p>
                  <p className="font-heading text-white font-bold text-lg leading-snug">
                    &ldquo;Cuidamos la salud de tu mascota con excelencia médica y compromiso humano.&rdquo;
                  </p>
                  <p className="text-white/70 text-sm mt-2">
                    Dra. Teresita Mazlemian &amp; Dr. Osvaldo González
                  </p>
                </div>
              </div>

              {/* Floating stat cards */}
              <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-lg border border-gray-100 px-5 py-4 z-10">
                <p className="font-heading text-3xl font-bold text-brand">+2400</p>
                <p className="text-sm text-gray-500">familias confían en nosotros</p>
              </div>

              <div className="absolute -top-5 -left-5 bg-white rounded-2xl shadow-lg border border-gray-100 px-5 py-4 z-10">
                <p className="font-heading text-3xl font-bold text-brand">~25</p>
                <p className="text-sm text-gray-500">profesionales en tu equipo</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-brand font-semibold text-sm uppercase tracking-widest mb-3">
              Quiénes somos
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Un centro de referencia
              <br />
              <span className="text-brand">en Villa Adelina</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Veterinaria Paraná nació de una convicción: que los animales merecen el
              mismo nivel de atención médica y cercanía humana que cualquier persona.
              Hoy, con casi 4 décadas de historia, somos el centro veterinario de
              referencia de la zona norte del Gran Buenos Aires.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              En el 1988 una joven pareja de veterinarios empezaban con este
              proyecto...
            </p>

            <ul className="space-y-3 mb-10">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand mt-0.5 shrink-0" />
                  <span className="text-gray-700 text-sm">{h}</span>
                </li>
              ))}
            </ul>

            <WhatsAppButton />
          </div>
        </div>
      </div>
    </section>
  );
}
