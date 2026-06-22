# AdventureHub

Aplicacion multipagina con Next.js App Router para descubrir experiencias de viaje premium, filtrar resultados mediante query params y gestionar favoritos globales en memoria.

## Rutas

- `/`: landing con hero, categorias y experiencias destacadas.
- `/experiences`: explorador con filtros por `search`, `category` y `destination` sincronizados en URL.
- `/experiences/[id]`: detalle con informacion extendida, itinerario e interacciones de favorito.
- `/favorites`: listado de experiencias guardadas globalmente.
- `/profile`: perfil estatico con resumen y contador de favoritos.

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Estado global con React Context + `useState`

## Dataset local

El proyecto incluye un dataset local tipado de 100 experiencias en `src/data/experiences.ts` con este esquema base:

- `id`
- `title`
- `description`
- `category`
- `destination`
- `price`
- `rating`
- `imageUrl`

## Development

```bash
npm install
npm run dev
```

## Design References

1. Airbnb Experiences
	https://www.airbnb.com/s/experiences
	Referencia para grids editoriales, jerarquia de tarjetas y claridad en CTAs de conversion.

2. GetYourGuide
	https://www.getyourguide.com/
	Referencia para sistema de filtros orientado a resultados, legibilidad de metadata y arquitectura de descubrimiento.

3. Journee (Awwwards)
	https://journee.ai/
	Referencia de narrativa visual inmersiva, uso de imagenes en hero y composicion premium con espacios amplios.

## Checklist de cumplimiento

- [x] Rutas funcionales solicitadas disponibles.
- [x] Filtros en `/experiences` sincronizados con query params.
- [x] Prefill de filtros al abrir URL parametrizada.
- [x] Dataset local de 100 experiencias tipado.
- [x] Toggle de favoritos desde cards y detalle.
- [x] Vista de favoritos con estado vacio.
- [x] Conteo de favoritos mostrado en perfil.
- [x] Design references documentadas.
