import {
  Activity,
  BadgePlus,
  BedDouble,
  Brain,
  Eye,
  Heart,
  HeartPulse,
  Scan,
  Scissors,
  Stethoscope,
  ShoppingBag,
  Syringe,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

const iconMap = {
  Activity,
  BadgePlus,
  BedDouble,
  Brain,
  Eye,
  Heart,
  HeartPulse,
  Scan,
  Scissors,
  Stethoscope,
  Syringe,
  ShoppingBag,
} as const;

type IconName = keyof typeof iconMap;

function HipIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
      <path
        d="M10 4.5c-1.2.9-1.9 2.1-2 3.8l-.1 2.6-1.9 1.8a3 3 0 0 0-.8 2.7l.5 3.1c.2 1.4 1.4 2.5 2.8 2.5h1.4c1.2 0 2.3-.8 2.7-1.9l1-3.3c.2-.8.2-1.7-.1-2.4l-1-2.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 4.2c1.5.6 2.5 1.8 2.8 3.5l.4 2.5 1.7 1.4c1 .8 1.5 2 1.4 3.2l-.2 2.2a3 3 0 0 1-3 2.8h-1.4c-1 0-2-.6-2.6-1.5l-1.2-2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="11" cy="4.5" r="1.5" fill="currentColor" />
      <circle cx="15.5" cy="4.5" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function Services() {
  return (
    <section id="servicios" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-brand font-semibold text-sm uppercase tracking-widest mb-3">
            Nuestros servicios
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Atención integral
            <br />
            <span className="text-brand">en un solo lugar</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Desde controles preventivos hasta cirugías complejas, ofrecemos todo lo
            que tu mascota necesita.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = service.icon === "Hip" ? HipIcon : iconMap[service.icon as IconName];
            const isFirst = i === 0;
            return (
              <div
                key={service.title}
                className={`group relative rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl cursor-default ${
                  isFirst
                    ? "bg-gradient-to-br from-[#2d1554] via-brand to-brand-light text-white sm:col-span-2 lg:col-span-1"
                    : "bg-gray-50 hover:bg-white border border-gray-100 hover:border-brand/20"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-colors ${
                    isFirst
                      ? "bg-white/20"
                      : "bg-brand-muted group-hover:bg-brand"
                  }`}
                >
                  <Icon
                    className={`h-6 w-6 transition-colors ${
                      isFirst
                        ? "text-white"
                        : "text-brand group-hover:text-white"
                    }`}
                  />
                </div>

                <h3
                  className={`font-heading font-bold text-xl mb-3 ${
                    isFirst ? "text-white" : "text-gray-900"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    isFirst ? "text-white/80" : "text-gray-500"
                  }`}
                >
                  {service.description}
                </p>
                {service.credential ? (
                  <p
                    className={`mt-3 text-xs font-semibold tracking-wide ${
                      isFirst ? "text-white/70" : "text-brand"
                    }`}
                  >
                    • {service.credential}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <p className="text-gray-500 mb-5">
            ¿Necesitás atención para tu mascota? Escribinos y te ayudamos.
          </p>
          <WhatsAppButton />
        </div>
      </div>
    </section>
  );
}
