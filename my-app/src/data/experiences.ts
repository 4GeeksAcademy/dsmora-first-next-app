import {
  EXPERIENCE_CATEGORIES,
  type Experience,
  type ExperienceCategory,
} from "@/types/experience";

const DESTINATIONS = [
  "Nusa Penida, Indonesia",
  "Cusco, Peru",
  "Reykjavik, Iceland",
  "Kyoto, Japan",
  "Queenstown, New Zealand",
  "Chiang Mai, Thailand",
  "Split, Croatia",
  "Cappadocia, Turkey",
  "Banff, Canada",
  "Madeira, Portugal",
  "Marrakech, Morocco",
  "Patagonia, Argentina",
] as const;

const ADVENTURE_TITLES = [
  "Ascenso al Amanecer",
  "Ruta Costera Salvaje",
  "Travesia de Acantilados",
  "Expedicion Volcanica",
  "Circuito de Barrancos",
  "Safari de Altura",
];

const CULTURE_TITLES = [
  "Noches de Patrimonio",
  "Calles con Historia",
  "Cronicas del Viejo Puerto",
  "Arquitectura Viva",
  "Rituales del Mercado",
  "Leyendas del Casco Antiguo",
];

const FOOD_TITLES = [
  "Sabores del Distrito",
  "Laboratorio de Cocina Local",
  "Ruta Gourmet de Autor",
  "Maestria de Fermentos",
  "Mesa de Temporada",
  "Fogones del Barrio",
];

const WELLNESS_TITLES = [
  "Retiro de Respiracion",
  "Termas y Silencio",
  "Jornada de Mindfulness",
  "Meditacion Frente al Mar",
  "Ritual de Recuperacion",
  "Bosque Terapia",
];

const NATURE_TITLES = [
  "Sendero de Cascadas",
  "Reserva Esmeralda",
  "Valle de Niebla",
  "Lagos Glaciares",
  "Safari de Fauna",
  "Jardin de Cumbres",
];

const TITLES_BY_CATEGORY: Record<ExperienceCategory, readonly string[]> = {
  Adventure: ADVENTURE_TITLES,
  Culture: CULTURE_TITLES,
  Food: FOOD_TITLES,
  Wellness: WELLNESS_TITLES,
  Nature: NATURE_TITLES,
};

const CATEGORY_DESCRIPTIONS: Record<ExperienceCategory, string> = {
  Adventure:
    "Una salida intensa para viajeros que quieren adrenalina, guias expertos y paisajes que cambian en cada tramo.",
  Culture:
    "Recorre barrios emblematicos, aprende tradiciones locales y conecta con la historia viva del destino.",
  Food:
    "Descubre ingredientes unicos, tecnicas regionales y experiencias culinarias guiadas por chefs y productores.",
  Wellness:
    "Una pausa premium para recuperar energia con practicas conscientes, ritmos lentos y escenarios naturales.",
  Nature:
    "Explora ecosistemas espectaculares con rutas panoramicas, avistamiento responsable y fotografia inmersiva.",
};

const CATEGORY_INCLUDES: Record<ExperienceCategory, string[]> = {
  Adventure: [
    "Guia certificado en actividades de riesgo",
    "Equipo tecnico y briefing de seguridad",
    "Seguro de actividad por jornada",
    "Snack energetico y agua",
  ],
  Culture: [
    "Guia local especializado",
    "Entradas a espacios patrimoniales",
    "Audio briefing multilenguaje",
    "Mapa curado de recomendaciones",
  ],
  Food: [
    "Degustacion de especialidades locales",
    "Maridaje seleccionado",
    "Clase practica guiada",
    "Recetario digital",
  ],
  Wellness: [
    "Instructor de bienestar certificado",
    "Kit de practica y toalla premium",
    "Infusiones y fruta de temporada",
    "Espacio de relajacion post sesion",
  ],
  Nature: [
    "Guia ambiental con enfoque responsable",
    "Traslado interno en la reserva",
    "Binoculares o material de observacion",
    "Snack y refill de agua",
  ],
};

const CATEGORY_ACTIVITIES: Record<ExperienceCategory, string[]> = {
  Adventure: [
    "Check-in y calibracion de equipo",
    "Tramo principal de desafio",
    "Punto fotografico panoramico",
  ],
  Culture: [
    "Introduccion historica del distrito",
    "Recorrido por hitos arquitectonicos",
    "Cierre con taller cultural interactivo",
  ],
  Food: [
    "Presentacion de ingredientes locales",
    "Sesion practica en cocina abierta",
    "Degustacion final guiada",
  ],
  Wellness: [
    "Aterrizaje corporal y respiracion",
    "Bloque principal de practica consciente",
    "Integracion y descanso guiado",
  ],
  Nature: [
    "Introduccion del ecosistema",
    "Recorrido por sendero interpretativo",
    "Avistamiento y registro fotografico",
  ],
};

function buildTitle(category: ExperienceCategory, index: number): string {
  const options = TITLES_BY_CATEGORY[category];
  return `${options[index % options.length]} ${index + 1}`;
}

function buildDuration(index: number): string {
  const hours = 3 + (index % 7);
  return `${hours} horas`;
}

function buildLanguages(index: number): string[] {
  const pool = ["Espanol", "Ingles", "Portugues", "Frances"];
  return [pool[index % pool.length], pool[(index + 1) % pool.length]];
}

function buildItinerary(category: ExperienceCategory, index: number) {
  const activities = CATEGORY_ACTIVITIES[category];
  const startHour = 7 + (index % 4);

  return activities.map((activity, activityIndex) => {
    const hour = String(startHour + activityIndex * 2).padStart(2, "0");
    return {
      time: `${hour}:00`,
      activity,
      detail: `Bloque ${activityIndex + 1} de la experiencia con acompanamiento profesional y contexto local.`,
    };
  });
}

export const experiences: Experience[] = Array.from({ length: 100 }, (_, index) => {
  const category = EXPERIENCE_CATEGORIES[index % EXPERIENCE_CATEGORIES.length];
  const destination = DESTINATIONS[index % DESTINATIONS.length];
  const title = buildTitle(category, index);

  return {
    id: `exp-${String(index + 1).padStart(3, "0")}`,
    title,
    description: CATEGORY_DESCRIPTIONS[category],
    category,
    destination,
    price: 95 + ((index * 17) % 420),
    rating: Number((4.4 + ((index * 3) % 7) * 0.1).toFixed(1)),
    reviews: 80 + ((index * 37) % 480),
    imageUrl: `https://picsum.photos/seed/adventurehub-${index + 1}/1200/900`,
    duration: buildDuration(index),
    languages: buildLanguages(index),
    includes: CATEGORY_INCLUDES[category],
    itinerary: buildItinerary(category, index),
  };
});

export const destinations = Array.from(
  new Set(experiences.map((experience) => experience.destination)),
).sort((a, b) => a.localeCompare(b));

export const categories = [...EXPERIENCE_CATEGORIES];

export function getExperienceById(id: string): Experience | undefined {
  return experiences.find((experience) => experience.id === id);
}
