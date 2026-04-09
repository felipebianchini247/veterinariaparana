import { ChevronDown, Heart } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#2d1554] via-[#764dad] to-[#9b6fc8]">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-pattern)" />
        </svg>
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-[#9b6fc8]/20 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-20 text-center text-white">
        {/* Headline */}
        <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
          Atención con
          <br />
          <span className="inline-flex items-center gap-3 text-purple-200">
            corazón
            <Heart className="h-10 w-10 fill-current text-red-500 sm:h-12 sm:w-12 lg:h-14 lg:w-14" />
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto">
          Excelencia médica, diagnóstico preciso y compromiso humano. Un equipo
          de 25 profesionales en Villa Adelina, listos para acompañarte.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <WhatsAppButton />
          <a
            href="#servicios"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border-2 border-white/40 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/10 hover:border-white/60"
          >
            Conocé nuestros servicios
          </a>
        </div>

        {/* Directors */}
        <div className="mt-14 flex items-center justify-center gap-4">
          <div className="flex -space-x-3">
            {[
              { initials: "TM", bg: "#9b6fc8" },
              { initials: "OG", bg: "#5a3590" },
            ].map((d) => (
              <div
                key={d.initials}
                className="w-11 h-11 rounded-full border-2 border-white flex items-center justify-center text-white text-sm font-bold shadow-md"
                style={{ backgroundColor: d.bg }}
              >
                {d.initials}
              </div>
            ))}
          </div>
          <div className="text-left">
            <p className="text-sm font-semibold text-white">
              Dra. Teresita Mazlemian · Dr. Osvaldo González
            </p>
            <p className="text-xs text-white/60">Directores médicos</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-1 animate-bounce">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown className="h-4 w-4" />
      </div>
    </section>
  );
}
