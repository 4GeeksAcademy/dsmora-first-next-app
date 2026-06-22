"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type FavoritesContextValue = {
  favoriteIds: string[];
  favoritesCount: number;
  isFavorite: (id: string) => boolean;
  toggleFavorite: (id: string) => void;
};

const FavoritesContext = createContext<FavoritesContextValue | undefined>(
  undefined,
);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  const toggleFavorite = useCallback((id: string) => {
    setFavoriteIds((current) => {
      if (current.includes(id)) {
        return current.filter((value) => value !== id);
      }

      return [...current, id];
    });
  }, []);

  const isFavorite = useCallback(
    (id: string) => {
      return favoriteIds.includes(id);
    },
    [favoriteIds],
  );

  const value = useMemo(
    () => ({
      favoriteIds,
      favoritesCount: favoriteIds.length,
      isFavorite,
      toggleFavorite,
    }),
    [favoriteIds, isFavorite, toggleFavorite],
  );

  return (
    <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error("useFavorites must be used inside FavoritesProvider");
  }

  return context;
}
