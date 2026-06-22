"use client";

import { useFavorites } from "@/context/favorites-context";

const recentActivities = [
  {
    title: "Kayak en Glaciar Perito Moreno",
    state: "Completado hace 12 dias",
  },
  {
    title: "Nordic Cabin Experience",
    state: "Proximo viaje en 15 dias",
  },
];

export default function ProfilePage() {
  const { favoritesCount } = useFavorites();

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 md:px-8">
      <section className="rounded-2xl bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.08)]">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.05em] text-red-600">
              Perfil viajero
            </p>
            <h1 className="mt-2 text-7xl font-black tracking-[-0.02em] text-slate-950 md:text-8xl">
              Alex Explorer
            </h1>
            <p className="mt-1 text-slate-600">alex.explorer@adventurehub.com</p>
          </div>
          <button
            type="button"
            className="rounded-lg bg-slate-950 px-6 py-3 text-sm font-bold uppercase tracking-[0.05em] text-white"
          >
            Configuracion de cuenta
          </button>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-xl bg-slate-100 p-4">
            <p className="text-sm text-slate-500">Experiencias vividas</p>
            <p className="text-6xl font-black text-slate-950">12</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <p className="text-sm text-slate-500">Favoritos</p>
            <p className="text-6xl font-black text-slate-950">{favoritesCount}</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <p className="text-sm text-slate-500">Proximos viajes</p>
            <p className="text-6xl font-black text-slate-950">3</p>
          </div>
        </div>
      </section>

      <section className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-4">
          <h2 className="text-5xl font-black text-slate-950">Actividad reciente</h2>
          {recentActivities.map((activity) => (
            <article key={activity.title} className="rounded-xl bg-white p-5 shadow-[0_4px_20px_rgba(15,23,42,0.08)]">
              <p className="text-2xl font-bold text-slate-900">{activity.title}</p>
              <p className="mt-1 text-slate-600">{activity.state}</p>
            </article>
          ))}
        </div>

        <aside className="rounded-xl border border-red-200 bg-red-50 p-5">
          <h3 className="text-xl font-bold text-red-700">Necesitas ayuda con una reserva?</h3>
          <p className="mt-2 text-sm text-red-600">Nuestro equipo esta disponible 24/7 para acompanarte.</p>
          <button
            type="button"
            className="mt-4 w-full rounded-lg bg-red-600 px-4 py-3 text-sm font-bold uppercase tracking-[0.05em] text-white"
          >
            Contactar soporte
          </button>
        </aside>
      </section>
    </div>
  );
}
