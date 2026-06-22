import Link from "next/link";
import { experiences } from "@/data/experiences";

export default function Home() {
  const featured = experiences.slice(0, 3);
  const categories = [
    "Adventure",
    "Culture",
    "Food",
    "Wellness",
    "Nature",
  ];

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 md:px-8">
      <section className="relative overflow-hidden rounded-3xl bg-slate-950 px-6 py-20 text-white md:px-14">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.28),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(255,77,77,0.36),transparent_40%)]" />
        <div className="relative max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.05em] text-slate-200">
            Marketplace de experiencias curadas
          </p>
          <h1 className="mt-4 text-6xl font-black leading-[1.04] tracking-[-0.02em] md:text-8xl">
            Descubre experiencias que cambian tu historia.
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-200 md:text-xl">
            Explora mas de 100 aventuras premium en destinos remotos. Filtra, compara
            y reserva en minutos con una experiencia visual clara y confiable.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/experiences"
              className="rounded-full bg-red-500 px-7 py-4 text-sm font-bold uppercase tracking-[0.06em] text-white transition hover:-translate-y-0.5 hover:bg-red-600"
            >
              Explorar experiencias
            </Link>
            <Link
              href="/favorites"
              className="rounded-full border border-slate-300/70 px-7 py-4 text-sm font-bold uppercase tracking-[0.06em] text-slate-100 transition hover:border-white hover:text-white"
            >
              Ver favoritos
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.05em] text-red-600">
              Busca por categoria
            </p>
            <h2 className="mt-2 text-5xl font-black tracking-tight text-slate-950">
              Tu proxima aventura empieza aqui
            </h2>
          </div>
          <Link href="/experiences" className="text-sm font-semibold text-red-600 hover:text-red-700">
            Ver todas →
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-5">
          {categories.map((category) => (
            <Link
              key={category}
              href={`/experiences?category=${category}`}
              className="rounded-2xl border border-slate-200 bg-white p-4 text-center text-sm font-semibold text-slate-700 shadow-[0_4px_20px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:border-red-400 hover:text-red-600"
            >
              {category}
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-5xl font-black tracking-tight text-slate-950">Experiencias populares</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          {featured.map((experience) => (
            <article key={experience.id} className="overflow-hidden rounded-2xl bg-white shadow-[0_4px_20px_rgba(15,23,42,0.08)]">
              <img src={experience.imageUrl} alt={experience.title} className="aspect-[4/3] w-full object-cover" />
              <div className="p-5">
                <p className="text-sm font-semibold text-red-600">★ {experience.rating.toFixed(1)}</p>
                <h3 className="mt-2 text-3xl font-bold leading-tight text-slate-900">{experience.title}</h3>
                <p className="mt-1 text-slate-600">{experience.destination}</p>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-sm text-slate-500">
                    Desde <span className="text-4xl font-black text-slate-950">${experience.price}</span>
                  </p>
                  <Link
                    href={`/experiences/${experience.id}`}
                    className="rounded-lg bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-600"
                  >
                    Ver detalle
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
