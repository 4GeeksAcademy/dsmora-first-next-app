"use client";

import { useFavorites } from "@/context/favorites-context";

type FavoriteButtonProps = {
  id: string;
  className?: string;
};

export function FavoriteButton({ id, className }: FavoriteButtonProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const active = isFavorite(id);

  return (
    <button
      type="button"
      onClick={() => toggleFavorite(id)}
      className={className}
      aria-pressed={active}
      aria-label={active ? "Quitar de favoritos" : "Agregar a favoritos"}
    >
      {active ? "♥" : "♡"}
    </button>
  );
}
