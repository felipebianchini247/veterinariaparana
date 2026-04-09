import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

export function Testimonials() {
  return (
    <section id="testimonios" className="section-padding bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-brand font-semibold text-sm uppercase tracking-widest mb-3">
            Lo que dicen las familias
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Más de{" "}
            <span className="text-brand">2400 reseñas</span>
            <br />
            nos respaldan
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Cada reseña es una familia que confió en nosotros. Esto es lo que
            nos impulsa cada día.
          </p>

          {/* Stars summary */}
          <div className="inline-flex items-center gap-3 bg-white border border-gray-100 rounded-2xl px-6 py-3 mt-6 shadow-sm">
            <div className="flex gap-0.5">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
              <div className="relative h-5 w-5">
                <Star className="absolute inset-0 h-5 w-5 text-yellow-400" />
                <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: "50%" }}>
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                </div>
              </div>
            </div>
            <span className="font-heading font-bold text-gray-900 text-xl">4,4</span>
            <span className="text-gray-400 text-sm">en Google · +2400 reseñas</span>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className={`bg-white rounded-3xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 ${
                i === 0 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Quote icon */}
              <div className="w-10 h-10 bg-brand-muted rounded-xl flex items-center justify-center mb-5">
                <Quote className="h-5 w-5 text-brand" />
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.stars)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 leading-relaxed text-sm mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-brand to-brand-light rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.location}</p>
                </div>
                <div className="ml-auto">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-[#4285F4]">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-gray-500 mb-2 font-medium">
            ¿Querés ser parte de las familias que confían en nosotros?
          </p>
          <p className="text-gray-400 text-sm mb-6">
            Agendá una consulta hoy y experimentá la diferencia.
          </p>
          <WhatsAppButton />
        </div>
      </div>
    </section>
  );
}
