import { PawPrint, MapPin, Phone, Clock } from "lucide-react";
import Link from "next/link";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-brand-light rounded-xl flex items-center justify-center">
                <PawPrint className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-heading font-bold text-xl">Veterinaria Paraná</p>
                <p className="text-purple-300 text-xs">Centro Veterinario · Villa Adelina</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs mb-6">
              Cuidamos la salud de tu mascota con excelencia médica y compromiso humano.
              Más de 2400 reseñas nos respaldan.
            </p>
            <WhatsAppButton size="sm" />
          </div>

          {/* Navegación */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Navegación
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-gray-300">
                <MapPin className="h-4 w-4 text-brand-light mt-0.5 shrink-0" />
                <span>{SITE_CONFIG.address}</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-gray-300">
                <Phone className="h-4 w-4 text-brand-light shrink-0" />
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-gray-300">
                <Clock className="h-4 w-4 text-brand-light mt-0.5 shrink-0" />
                <div className="space-y-0.5">
                  {SITE_CONFIG.hours.map((h) => (
                    <p key={h.days}>
                      <span className="text-white font-medium">{h.days}:</span>{" "}
                      {h.hours}
                    </p>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2 text-left">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Veterinaria Paraná. Todos los derechos reservados.
            </p>
            <p className="text-gray-500 text-xs">
              Dirigida por Dra. Teresita Mazlemian y Dr. Osvaldo González
            </p>
            <Link
              href="/terminos-y-condiciones"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-400 transition-colors hover:text-white"
            >
              Términos y condiciones
            </Link>
          </div>

          <a
            href="https://www.febia.com.ar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 transition-colors hover:text-white sm:self-center sm:text-right"
          >
            Sitio web creado por{" "}
            <span className="font-semibold text-[#CFE7D9]">FebIA</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
