import { notFound } from "next/navigation";
import { getExperienceById } from "@/data/experiences";
import { FavoriteButton } from "@/components/favorites/favorite-button";

type ExperienceDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ExperienceDetailPage({
  params,
}: ExperienceDetailPageProps) {
  const { id } = await params;
  const experience = getExperienceById(id);

  if (!experience) {
    notFound();
  }

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 md:px-8">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.7fr_1fr]">
        <section>
          <div className="overflow-hidden rounded-2xl bg-white shadow-[0_4px_20px_rgba(15,23,42,0.08)]">
            <img
              src={experience.imageUrl}
              alt={experience.title}
              className="aspect-[16/9] w-full object-cover"
            />
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-slate-900">
              {experience.category}
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
              {experience.destination}
            </span>
          </div>

          <h1 className="mt-4 text-6xl font-black leading-tight tracking-[-0.02em] text-slate-950 md:text-7xl">
            {experience.title}
          </h1>

          <p className="mt-4 text-lg leading-relaxed text-slate-700">{experience.description}</p>

          <div className="mt-8 grid gap-6 rounded-2xl bg-slate-100 p-6 md:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold text-slate-950">Lo que incluye</h2>
              <ul className="mt-3 space-y-2 text-slate-700">
                {experience.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-red-600">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-slate-950">Itinerario</h2>
              <ol className="mt-3 space-y-3 text-slate-700">
                {experience.itinerary.map((block) => (
                  <li key={block.time + block.activity}>
                    <p className="text-sm font-semibold uppercase tracking-[0.05em] text-slate-500">
                      {block.time}
                    </p>
                    <p className="text-xl font-semibold text-slate-900">{block.activity}</p>
                    <p>{block.detail}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <aside className="h-fit rounded-2xl bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.08)] lg:sticky lg:top-24">
          <p className="text-sm font-semibold uppercase tracking-[0.06em] text-slate-500">Desde</p>
          <p className="mt-1 text-6xl font-black text-slate-950">${experience.price}</p>
          <p className="text-slate-600">por persona</p>

          <p className="mt-4 text-sm font-semibold text-red-600">
            ★ {experience.rating.toFixed(1)} ({experience.reviews} reviews)
          </p>

          <dl className="mt-6 space-y-3 text-sm text-slate-700">
            <div className="flex items-center justify-between border-b border-slate-200 pb-2">
              <dt>Duracion</dt>
              <dd className="font-semibold">{experience.duration}</dd>
            </div>
            <div className="flex items-center justify-between border-b border-slate-200 pb-2">
              <dt>Idiomas</dt>
              <dd className="font-semibold">{experience.languages.join(", ")}</dd>
            </div>
          </dl>

          <button
            type="button"
            className="mt-6 w-full rounded-lg bg-red-600 px-4 py-3 text-sm font-bold uppercase tracking-[0.05em] text-white transition hover:bg-red-700"
          >
            Reservar ahora
          </button>

          <FavoriteButton
            id={experience.id}
            className="mt-3 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm font-bold uppercase tracking-[0.05em] text-slate-700 transition hover:border-red-500 hover:text-red-600"
          />
        </aside>
      </div>
    </div>
  );
}
