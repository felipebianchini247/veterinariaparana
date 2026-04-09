import { Heart, PawPrint } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

export function FinalCTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-[#2d1554] via-[#764dad] to-[#9b6fc8] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="2" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-pattern)" />
        </svg>
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-light/20 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 bg-white/15 rounded-3xl border border-white/20 mb-8">
          <PawPrint className="h-10 w-10 text-white" />
        </div>

        {/* Headline */}
        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Tu mascota merece
          <br />
          <span className="text-purple-200">el mejor cuidado</span>
        </h2>

        {/* Subtext */}
        <p className="text-white/75 text-xl leading-relaxed max-w-2xl mx-auto mb-10">
          Somos más de 25 profesionales en Villa Adelina comprometidos con la salud
          y el bienestar de tu compañero. Más de 2400 familias ya confían en nosotros.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <WhatsAppButton size="lg" className="shadow-2xl" />
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white font-medium transition-colors"
          >
            Ver dónde encontrarnos →
          </a>
        </div>

        {/* Trust note */}
        <div className="flex items-center justify-center gap-2 mt-10 text-white/50 text-sm">
          <Heart className="h-4 w-4 fill-white/50" />
          <span>Dirigida por Dra. Teresita Mazlemian y Dr. Osvaldo González</span>
        </div>
      </div>
    </section>
  );
}
