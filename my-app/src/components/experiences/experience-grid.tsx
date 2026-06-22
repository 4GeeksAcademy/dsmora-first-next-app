import type { Experience } from "@/types/experience";
import { ExperienceCard } from "@/components/experiences/experience-card";

export function ExperienceGrid({ items }: { items: Experience[] }) {
  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center shadow-[0_4px_20px_rgba(15,23,42,0.08)]">
        <h3 className="text-3xl font-bold text-slate-900">Sin resultados</h3>
        <p className="mt-2 text-slate-600">
          Ajusta tus filtros para descubrir nuevas experiencias.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {items.map((experience) => (
        <ExperienceCard key={experience.id} experience={experience} />
      ))}
    </div>
  );
}
