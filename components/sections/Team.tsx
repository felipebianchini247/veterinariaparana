import { Award, Users } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function Team() {
  return (
    <section id="equipo" className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-brand font-semibold text-sm uppercase tracking-widest mb-3">
            Nuestro equipo
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Profesionales con{" "}
            <span className="text-brand">vocación y excelencia</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Más de 25 personas trabajan cada día para garantizar el más alto estándar
            de atención médica y cuidado humano.
          </p>
        </div>

        {/* Directors */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {SITE_CONFIG.directors.map((director) => {
            const initials = director.name
              .split(" ")
              .filter((w) => w.length > 2 && !["Dra.", "Dr."].includes(w))
              .slice(0, 2)
              .map((w) => w[0])
              .join("");

            return (
              <div
                key={director.name}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col gap-5">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#2d1554] via-brand to-brand-light rounded-2xl flex items-center justify-center text-white font-heading font-bold text-2xl shadow-md">
                    {initials}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Award className="h-4 w-4 text-gold shrink-0" />
                      <span className="text-xs font-semibold text-gold uppercase tracking-wide">
                        {director.role}
                      </span>
                    </div>
                    <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">
                      {director.name}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{director.bio}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Team block */}
        <div className="bg-gradient-to-br from-[#2d1554] via-brand to-brand-light rounded-3xl p-10 md:p-12 text-white">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center border border-white/30 shrink-0">
              <Users className="h-10 w-10 text-white" />
            </div>
            <div className="text-center md:text-left">
              <p className="text-purple-200 text-sm font-medium uppercase tracking-widest mb-2">
                Detrás de cada consulta
              </p>
              <h3 className="font-heading text-3xl font-bold text-white mb-3">
                Un equipo de ~25 personas
              </h3>
              <p className="text-white/80 leading-relaxed max-w-2xl">
                Médicos veterinarios, especialistas, técnicos, enfermeros y personal
                administrativo trabajan de forma coordinada para que cada visita sea una
                experiencia de confianza. Formación continua, protocolos rigurosos y un
                compromiso genuino con el bienestar animal definen nuestra cultura.
              </p>
            </div>
            <div className="hidden md:block shrink-0">
              <div className="flex -space-x-3">
                {["MV", "TC", "ES", "AB", "LR"].map((initials, i) => (
                  <div
                    key={initials}
                    className="w-11 h-11 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold shadow-md text-white"
                    style={{
                      backgroundColor: ["#9b6fc8", "#764dad", "#b088d8", "#5a3590", "#8a5fc0"][i],
                    }}
                  >
                    {initials}
                  </div>
                ))}
                <div className="w-11 h-11 rounded-full border-2 border-white bg-white/20 flex items-center justify-center text-xs font-bold text-white shadow-md">
                  +20
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
