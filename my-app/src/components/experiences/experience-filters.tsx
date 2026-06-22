"use client";

import { usePathname, useRouter } from "next/navigation";

type ExperienceFiltersProps = {
  initialSearch: string;
  initialCategory: string;
  initialDestination: string;
  categories: string[];
  destinations: string[];
};

function buildQueryString(query: {
  search: string;
  category: string;
  destination: string;
}) {
  const params = new URLSearchParams();

  if (query.search) {
    params.set("search", query.search);
  }

  if (query.category) {
    params.set("category", query.category);
  }

  if (query.destination) {
    params.set("destination", query.destination);
  }

  const asString = params.toString();
  return asString ? `?${asString}` : "";
}

export function ExperienceFilters({
  initialSearch,
  initialCategory,
  initialDestination,
  categories,
  destinations,
}: ExperienceFiltersProps) {
  const router = useRouter();
  const pathname = usePathname();

  const applyFilters = (formData: FormData) => {
    const query = buildQueryString({
      search: String(formData.get("search") ?? ""),
      category: String(formData.get("category") ?? ""),
      destination: String(formData.get("destination") ?? ""),
    });

    router.push(`${pathname}${query}`);
  };

  const clearFilters = () => {
    router.push(pathname);
  };

  return (
    <aside className="rounded-2xl bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.08)]">
      <h2 className="text-4xl font-bold text-slate-900">Filtros</h2>

      <form
        className="mt-5 space-y-4"
        onSubmit={(event) => {
          event.preventDefault();
          applyFilters(new FormData(event.currentTarget));
        }}
      >
        <label className="block">
          <span className="mb-2 block text-sm font-semibold uppercase tracking-[0.05em] text-slate-600">
            Busqueda
          </span>
          <input
            type="text"
            name="search"
            defaultValue={initialSearch}
            placeholder="Ej. Trekking en altura"
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-semibold uppercase tracking-[0.05em] text-slate-600">
            Categoria
          </span>
          <select
            name="category"
            defaultValue={initialCategory}
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
          >
            <option value="">Todas las categorias</option>
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-semibold uppercase tracking-[0.05em] text-slate-600">
            Destino
          </span>
          <select
            name="destination"
            defaultValue={initialDestination}
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
          >
            <option value="">Cualquier destino</option>
            {destinations.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        <div className="mt-6 grid grid-cols-1 gap-3">
          <button
            type="submit"
            className="rounded-lg bg-red-600 px-4 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-red-700"
          >
            Aplicar filtros
          </button>
          <button
            type="button"
            onClick={clearFilters}
            className="rounded-lg border border-slate-300 px-4 py-3 text-sm font-semibold uppercase tracking-wide text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
          >
            Limpiar filtros
          </button>
        </div>
      </form>
    </aside>
  );
}
