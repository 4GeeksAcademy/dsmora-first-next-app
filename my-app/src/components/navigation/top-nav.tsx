"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFavorites } from "@/context/favorites-context";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/experiences", label: "Experiences" },
  { href: "/favorites", label: "Favorites" },
  { href: "/profile", label: "Profile" },
];

export function TopNav() {
  const pathname = usePathname();
  const { favoritesCount } = useFavorites();

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-4 py-4 md:px-8">
        <Link href="/" className="text-3xl font-black tracking-tight text-slate-900">
          AdventureHub
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`pb-1 text-sm font-semibold tracking-wide transition-colors ${
                  isActive
                    ? "border-b-2 border-red-500 text-slate-900"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/favorites"
            className="inline-flex h-11 min-w-11 items-center justify-center rounded-full border border-slate-300 bg-white px-3 text-xs font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-red-400 hover:text-red-600"
            aria-label="Ir a favoritos"
          >
            <span>♥</span>
            <span className="ml-1">{favoritesCount}</span>
          </Link>
          <Link
            href="/profile"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-sm text-white transition hover:-translate-y-0.5"
            aria-label="Ir al perfil"
          >
            ⦿
          </Link>
        </div>
      </div>
    </header>
  );
}
