import Link from "next/link";
import type { Experience } from "@/types/experience";
import { FavoriteButton } from "@/components/favorites/favorite-button";

type ExperienceCardProps = {
  experience: Experience;
};

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_4px_20px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(15,23,42,0.15)]">
      <div className="relative">
        <img
          src={experience.imageUrl}
          alt={experience.title}
          className="aspect-[4/3] w-full object-cover"
          loading="lazy"
        />
        <span className="absolute left-4 top-4 rounded-full bg-sky-100/90 px-3 py-1 text-xs font-semibold text-slate-900">
          {experience.category}
        </span>
        <FavoriteButton
          id={experience.id}
          className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white/95 text-xl text-red-500"
        />
      </div>

      <div className="p-5">
        <p className="text-sm font-semibold text-red-600">
          ★ {experience.rating.toFixed(1)}
          <span className="ml-1 font-normal text-slate-500">({experience.reviews} reviews)</span>
        </p>
        <h3 className="mt-2 text-3xl font-bold leading-tight text-slate-900">{experience.title}</h3>
        <p className="mt-1 text-base text-slate-600">{experience.destination}</p>

        <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-4">
          <p className="text-sm text-slate-500">
            Desde <span className="text-4xl font-black text-slate-950">${experience.price}</span>
          </p>
          <Link
            href={`/experiences/${experience.id}`}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-slate-950 text-xl text-white transition hover:bg-red-600"
            aria-label={`Ver ${experience.title}`}
          >
            →
          </Link>
        </div>
      </div>
    </article>
  );
}
