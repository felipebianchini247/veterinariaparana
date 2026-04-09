import {
  Activity,
  BadgePlus,
  BedDouble,
  Bone,
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
  Bone,
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
            que tu mascota necesita sin derivaciones externas.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon as IconName];
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
