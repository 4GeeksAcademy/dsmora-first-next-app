"use client";

import Link from "next/link";
import { experiences } from "@/data/experiences";
import { ExperienceGrid } from "@/components/experiences/experience-grid";
import { useFavorites } from "@/context/favorites-context";

export default function FavoritesPage() {
  const { favoriteIds } = useFavorites();

  const favoriteExperiences = experiences.filter((experience) =>
    favoriteIds.includes(experience.id),
  );

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 md:px-8">
      <h1 className="text-7xl font-black tracking-[-0.02em] text-slate-950 md:text-8xl">
        Tus favoritos
      </h1>
      <p className="mt-3 text-lg text-slate-600 md:text-xl">
        Guarda experiencias para compararlas y reservar cuando te convenga.
      </p>

      <section className="mt-8">
        {favoriteExperiences.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center shadow-[0_4px_20px_rgba(15,23,42,0.08)]">
            <h2 className="text-4xl font-bold text-slate-900">Aun no tienes favoritos</h2>
            <p className="mt-2 text-slate-600">
              Explora el catalogo y pulsa el corazon para guardar experiencias.
            </p>
            <Link
              href="/experiences"
              className="mt-5 inline-flex rounded-full bg-red-600 px-5 py-3 text-sm font-bold uppercase tracking-[0.05em] text-white transition hover:bg-red-700"
            >
              Ir a experiences
            </Link>
          </div>
        ) : (
          <ExperienceGrid items={favoriteExperiences} />
        )}
      </section>
    </div>
  );
}
