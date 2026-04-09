import { MapPin, Clock, Phone, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

export function Contact() {
  return (
    <section id="contacto" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-brand font-semibold text-sm uppercase tracking-widest mb-3">
            Contacto
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Estamos en{" "}
            <span className="text-brand">Villa Adelina</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Encontranos fácilmente y escribinos por WhatsApp para agendar tu turno.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Address */}
            <div className="bg-gray-50 rounded-3xl p-7 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-brand-muted rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-brand" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Dirección</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {SITE_CONFIG.address}
                  </p>
                  <a
                    href={SITE_CONFIG.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand text-sm font-medium mt-2 inline-block hover:underline"
                  >
                    Ver en Google Maps →
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-gray-50 rounded-3xl p-7 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-brand-muted rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5 text-brand" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-3">Horarios</h4>
                  <div className="space-y-2">
                    {SITE_CONFIG.hours.map((h) => (
                      <div key={h.days} className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">{h.days}</span>
                        <span className="font-medium text-gray-900 text-sm">{h.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Phone + WhatsApp */}
            <div className="bg-gray-50 rounded-3xl p-7 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-brand-muted rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-brand" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Teléfono</h4>
                  <p className="text-gray-600 text-sm mb-2">{SITE_CONFIG.phone}</p>
                  <p className="font-semibold text-gray-900 mb-1">Celular</p>
                  <p className="text-gray-600 text-sm mb-2">{SITE_CONFIG.mobile}</p>
                  <p className="font-semibold text-gray-900 mb-1">WhatsApp</p>
                  <p className="text-gray-600 text-sm mb-4">{SITE_CONFIG.mobile}</p>
                  <WhatsAppButton />
                </div>
              </div>
            </div>

            {/* Quick actions */}
            <div className="bg-gradient-to-br from-brand to-brand-light rounded-3xl p-7 text-white">
              <MessageCircle className="h-8 w-8 text-white/70 mb-3" />
              <h4 className="font-heading font-bold text-xl mb-2">
                ¿Consulta urgente?
              </h4>
              <p className="text-white/80 text-sm leading-relaxed mb-5">
                No hace falta que te comuniques, llevalo directamente a la
                veterinaria.
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-3 rounded-3xl overflow-hidden shadow-lg border border-gray-100 h-full min-h-[500px]">
            <iframe
              src="https://maps.google.com/maps?q=Veterinaria+Parana+Parana+6580+Villa+Adelina&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "500px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Veterinaria Paraná"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
