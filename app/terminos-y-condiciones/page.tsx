import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos y Condiciones | Veterinaria Paraná",
  description:
    "Términos y condiciones de uso del sitio web de Veterinaria Paraná.",
};

const sections = [
  {
    title: "1. Información general",
    content:
      "Este sitio web tiene fines informativos y de contacto para pacientes, tutores y personas interesadas en los servicios de Veterinaria Paraná. El acceso y uso del sitio implica la aceptación de estas condiciones.",
  },
  {
    title: "2. Uso del sitio",
    content:
      "La información publicada busca orientar sobre los servicios, horarios, ubicación y medios de contacto de la veterinaria. No reemplaza la consulta profesional presencial ni constituye diagnóstico médico veterinario a distancia.",
  },
  {
    title: "3. Turnos y consultas",
    content:
      "Las solicitudes realizadas por WhatsApp, teléfono u otros medios digitales están sujetas a confirmación por parte del equipo de la veterinaria. La disponibilidad de turnos, estudios o prácticas puede variar según agenda y criterio profesional.",
  },
  {
    title: "4. Responsabilidad sobre contenidos",
    content:
      "Veterinaria Paraná procura que la información del sitio sea clara y actualizada, pero puede modificar contenidos, horarios, servicios o datos de contacto sin previo aviso. Se recomienda confirmar información sensible antes de asistir.",
  },
  {
    title: "5. Propiedad intelectual",
    content:
      "Los textos, imágenes, identidad visual y demás contenidos del sitio pertenecen a Veterinaria Paraná o se utilizan con autorización. No está permitida su reproducción total o parcial sin consentimiento previo.",
  },
  {
    title: "6. Enlaces externos",
    content:
      "El sitio puede incluir accesos a plataformas externas, como Google Maps o WhatsApp. Veterinaria Paraná no controla sus políticas, disponibilidad ni condiciones de uso, por lo que cada usuario accede bajo su propia responsabilidad.",
  },
  {
    title: "7. Protección de datos",
    content:
      "Los datos compartidos por formularios, mensajería o contacto directo serán utilizados únicamente para responder consultas, coordinar atención o brindar información relacionada con los servicios de la veterinaria, conforme a la normativa aplicable.",
  },
  {
    title: "8. Modificaciones",
    content:
      "Veterinaria Paraná podrá actualizar estos términos y condiciones en cualquier momento. La versión publicada en esta página será la vigente al momento de su consulta.",
  },
] as const;

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#FAFAF8] text-gray-900">
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="mb-6 inline-flex text-sm font-medium text-brand transition-colors hover:text-brand-dark"
          >
            ← Volver al inicio
          </Link>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Información legal
          </p>
          <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
            Términos y condiciones
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Condiciones generales de uso del sitio web de Veterinaria Paraná.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {sections.map((section) => (
            <article
              key={section.title}
              className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm"
            >
              <h2 className="font-heading text-2xl font-bold text-gray-900">
                {section.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                {section.content}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-3xl bg-brand-dark px-7 py-8 text-white shadow-sm">
          <h2 className="font-heading text-2xl font-bold">
            Contacto
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
            Si tenés dudas sobre estos términos o necesitás comunicarte con el
            equipo, podés contactarte con Veterinaria Paraná por los canales
            publicados en el sitio.
          </p>
        </div>
      </section>
    </main>
  );
}
