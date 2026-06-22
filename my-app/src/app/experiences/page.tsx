import { categories, destinations, experiences } from "@/data/experiences";
import { ExperienceFilters } from "@/components/experiences/experience-filters";
import { ExperienceGrid } from "@/components/experiences/experience-grid";
import { filterExperiences, normalizeQuery } from "@/lib/experience-filters";

type ExperiencesPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function ExperiencesPage({
  searchParams,
}: ExperiencesPageProps) {
  const normalizedQuery = normalizeQuery(await searchParams);
  const filtered = filterExperiences(experiences, normalizedQuery);

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 md:px-8">
      <header>
        <h1 className="text-7xl font-black tracking-[-0.02em] text-slate-950 md:text-8xl">
          Descubre tu proxima aventura
        </h1>
        <p className="mt-3 text-lg text-slate-600 md:text-xl">
          Explora mas de 100 experiencias curadas en los destinos mas remotos del mundo.
        </p>
      </header>

      <section className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-[320px_1fr]">
        <ExperienceFilters
          key={`${normalizedQuery.search}|${normalizedQuery.category}|${normalizedQuery.destination}`}
          initialSearch={normalizedQuery.search}
          initialCategory={normalizedQuery.category}
          initialDestination={normalizedQuery.destination}
          categories={categories}
          destinations={destinations}
        />

        <div>
          <div className="mb-4 flex items-center justify-between">
            <p className="text-3xl font-bold text-slate-900">{filtered.length} experiencias encontradas</p>
            <p className="text-sm font-medium text-slate-500">Orden: Relevancia</p>
          </div>
          <ExperienceGrid items={filtered} />
        </div>
      </section>
    </div>
  );
}
