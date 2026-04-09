export const SITE_CONFIG = {
  name: "Veterinaria Paraná",
  tagline: "Centro Veterinario de Referencia",
  description:
    "Cuidamos la salud de tu mascota con excelencia médica y compromiso humano. Una calificación de 4,4 en Google nos respalda.",
  address: "Paraná 6580, Villa Adelina, Buenos Aires, Argentina",
  phone: "47662985",
  mobile: "1156374214",
  whatsappUrl:
    "https://wa.me/541156374214?text=Hola%2C%20quisiera%20agendar%20un%20turno.",
  whatsappText: "Agendá tu turno por WhatsApp",
  googleMapsUrl:
    "https://www.google.com/maps/place/VETERINARIA+PARAN%C3%81/@-34.5272514,-58.5548382,17z/data=!4m10!1m2!2m1!1sVeterinaria+Parana+Villa+Adelina!3m6!1s0x95bcb0a1c04c44f7:0x2ae0a7fb1bdc3bda!8m2!3d-34.5272514!4d-58.5500746!15sCiBWZXRlcmluYXJpYSBQYXJhbmEgVmlsbGEgQWRlbGluYVoiIiB2ZXRlcmluYXJpYSBwYXJhbmEgdmlsbGEgYWRlbGluYZIBDHZldGVyaW5hcmlhbpoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VSeWF5MXRXbGRuRUFF4AEA-gEECAAQRA!16s%2Fg%2F11b776c3tr!5m1!1e2?entry=ttu&g_ep=EgoyMDI2MDQwNi4wIKXMDSoASAFQAw%3D%3D",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.0!2d-58.534!3d-34.516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zVmlsbGEgQWRlbGluYQ!5e0!3m2!1ses!2sar!4v1234567890",
  directors: [
    {
      name: "Dra. Teresita Mazlemian",
      role: "Directora Médica",
      bio: "Especialista con amplia trayectoria en clínica, oncología y laboratorio. Lleva mas de 3 décadas dedicada al bienestar animal con rigor científico y profunda vocación, definiendo el estándar de la clínica.",
    },
    {
      name: "Dr. Osvaldo González",
      role: "Director Médico",
      bio: "Dedicado a la cirugía general, traumatológica y oncológica. Con más de 4 décadas de dedicación continua, su compromiso con la formación y la atención personalizada define el estándar de la clínica.",
    },
  ],
  hours: [
    { days: "Todos los días", hours: "9:00 – 21:00 hs" },
  ],
} as const;

export const SERVICES = [
  {
    title: "Clínica General",
    description:
      "Consultas, chequeos preventivos y seguimiento de salud integral para tu mascota en todas las etapas de su vida.",
    icon: "Stethoscope",
  },
  {
    title: "Cirugías",
    description:
      "Quirófano equipado con tecnología de vanguardia. Realizamos procedimientos de alta, media y baja complejidad con protocolo anestésico riguroso.",
    icon: "Scissors",
  },
  {
    title: "Oncología Veterinaria",
    description:
      "Diagnóstico y tratamiento especializado para mascotas con enfermedades oncológicas. Acompañamiento cercano en cada etapa.",
    icon: "HeartPulse",
  },
  {
    title: "Diagnóstico por Imágenes",
    description:
      "Ecografía, radiología digital y otros estudios para obtener diagnósticos precisos y oportunos.",
    icon: "Scan",
  },
  {
    title: "Internación",
    description:
      "Área de internación con monitoreo constante de nuestros pacientes. Tu mascota recibe atención las 24 horas en un ambiente seguro y controlado.",
    icon: "BedDouble",
  },
  {
    title: "Vacunación y Desparasitación",
    description:
      "Planes de vacunación personalizados y protocolos antiparasitarios adaptados a la edad, raza y estilo de vida de tu mascota.",
    icon: "Syringe",
  },
  {
    title: "Farmacia",
    description:
      "Amplio stock de medicamentos. Contamos con farmacia oncológica única en la zona.",
    icon: "BadgePlus",
  },
  {
    title: "Petshop",
    description:
      "Contamos con diversos productos para el bienestar de tu mascota, desde alimentos y accesorios hasta artículos de cuidado diario.",
    icon: "ShoppingBag",
  },
  {
    title: "Dermatología",
    description:
      "Diagnóstico y tratamiento de alergias, infecciones cutáneas, otitis y patologías de piel y pelo con seguimiento especializado.",
    icon: "BadgePlus",
    credential: "UBA",
  },
  {
    title: "Cardiología",
    description:
      "Evaluación cardiológica, control de patologías cardíacas y abordajes orientados a mejorar la calidad de vida de cada paciente.",
    icon: "Heart",
    credential: "UBA",
  },
  {
    title: "Endocrinología",
    description:
      "Estudio y tratamiento de enfermedades hormonales como diabetes, trastornos tiroideos y otras alteraciones metabólicas.",
    icon: "Activity",
    credential: "CONICET",
  },
  {
    title: "Traumatología",
    description:
      "Atención de lesiones óseas, articulares y musculares con diagnóstico preciso y planes de recuperación adaptados.",
    icon: "Hip",
  },
  {
    title: "Oftalmología",
    description:
      "Consultas y tratamientos para patologías oculares, controles de visión y seguimiento de cuadros agudos o crónicos.",
    icon: "Eye",
  },
  {
    title: "Neurología",
    description:
      "Evaluación clínica de trastornos neurológicos, convulsiones y afecciones del sistema nervioso con enfoque integral.",
    icon: "Brain",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Laura M.",
    location: "Villa Adelina",
    stars: 5,
    text: "Llevé a mi perro con mucho miedo antes de su cirugía y el equipo me explicó todo con una claridad increíble. Se nota que realmente aman lo que hacen. Mi Benito se recuperó perfectamente.",
  },
  {
    name: "Martín R.",
    location: "Boulogne",
    stars: 5,
    text: "Los mejores. Mi gata Lola atravesó un proceso oncológico muy difícil y el acompañamiento fue impecable. Siempre disponibles, siempre humanos. No cambio esta veterinaria por nada.",
  },
  {
    name: "Sofía G.",
    location: "Don Torcuato",
    stars: 5,
    text: "Profesionalismo de primer nivel. Fui por una consulta de urgencia y me atendieron de inmediato. El diagnóstico fue preciso y el tratamiento funcionó a la perfección.",
  },
  {
    name: "Pablo T.",
    location: "Villa Adelina",
    stars: 5,
    text: "Lo que más me sorprendió fue la calidez del equipo. Desde la recepción hasta los médicos, todos te tratan con respeto y paciencia. Mi cachorra quedó internada y me llamaban todos los días para actualizarme.",
  },
  {
    name: "Ana C.",
    location: "Beccar",
    stars: 5,
    text: "Confío plenamente en Veterinaria Paraná. Tienen equipamiento moderno, médicos muy capacitados y un trato humano que te da tranquilidad en los momentos más difíciles.",
  },
  {
    name: "Diego F.",
    location: "Palermo",
    stars: 5,
    text: "Vine desde Capital porque me la recomendaron mucho y valió la pena. La ecografía que necesitaba la hicieron en el momento y el médico me explicó cada detalle del resultado. Excelente.",
  },
] as const;

export const STATS = [
  { value: "+2400", label: "Reseñas verificadas", sublabel: "en Google" },
  { value: "4,4", label: "Calificación", sublabel: "actual en Google" },
  { value: "~25", label: "Profesionales", sublabel: "altamente capacitados" },
  { value: "100%", label: "Atención integral", sublabel: "en un solo lugar" },
] as const;

export const TECH_FEATURES = [
  {
    title: "Quirófano Equipado",
    description:
      "Sala de cirugía con equipamiento de última generación, monitoreo anestésico completo, protocolos de esterilización rigurosos, medición de presión arterial y equipo de electroporación en cirugía oncológica.",
    icon: "Activity",
  },
  {
    title: "Diagnóstico por Imágenes",
    description:
      "Ecógrafo digital y radiología digital que permiten diagnósticos precisos en el momento de la consulta.",
    icon: "Monitor",
  },
  {
    title: "Área de Internación",
    description:
      "Espacio dedicado al cuidado y recuperación, con monitoreo constante del estado de cada paciente durante toda la estadía.",
    icon: "Shield",
  },
  {
    title: "Laboratorio Clínico",
    description:
      "Análisis de sangre, orina y otros estudios procesados con equipamiento propio para resultados rápidos y confiables.",
    icon: "FlaskConical",
  },
] as const;

export const NAV_LINKS = [
  { href: "#quienes-somos", label: "Quiénes somos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#equipo", label: "Equipo" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#contacto", label: "Contacto" },
] as const;
