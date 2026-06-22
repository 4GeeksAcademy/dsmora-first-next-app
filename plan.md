Plan: App multipágina de experiencias en Next.js
Implementar una app con 5 rutas funcionales, dataset local tipado de 100 experiencias, filtros sincronizados con URL en Experiences, y favoritos globales en memoria con Context + useState. La estrategia separa dominio, estado y UI para facilitar mantenimiento y validación.

Steps

Fase 1 - Base de dominio y navegación.
Reemplazar Home actual por hero + CTA hacia Experiences en page.tsx.
Definir modelo de experiencia y catálogo de categorías en un módulo de tipos.
Crear dataset local de 100 experiencias con esquema completo y validación por tipado.
Añadir navegación principal compartida para Home, Experiences, Favorites y Profile.
Fase 2 - Favoritos globales (bloqueante para fases 3 y 4).
Crear un provider cliente de favoritos con API mínima: isFavorite, toggleFavorite, favoritesCount y ids favoritos.
Montar provider y navegación global en layout.tsx.
Crear botón reutilizable de favorito para cards y detalle.
Fase 3 - Experiences con query params (depende de fases 1 y 2).
Implementar normalización de parámetros search, category y destination.
Implementar filtrado puro por intersección:
Búsqueda por title usando regex case-insensitive con escape seguro.
Filtro exacto por category.
Filtro exacto por destination.
Crear componentes reutilizables de card, grid y filtros.
Implementar my-app/src/app/experiences/page.tsx para leer searchParams, prellenar UI y mantener URL sincronizada al cambiar filtros.
Fase 4 - Detalle, favoritos y perfil (paralelizable tras fase 2).
Implementar detalle por id en /experiences/[id] consultando dataset local.
Implementar /favorites listando solo experiencias favoritas y estado vacío.
Implementar /profile estático con resumen y conteo actual de favoritos.
Fase 5 - Documentación y cierre.
Agregar sección Design References (2-3 referencias reales + justificación) en README.md.
Cerrar con checklist de aceptación contra resume.md.
Relevant files

resume.md - Requisitos funcionales y técnicos base.
page.tsx - Home con hero y CTA.
layout.tsx - Punto de montaje de provider y navegación global.
globals.css - Ajustes visuales globales si son necesarios.
README.md - Design References y checklist de cumplimiento.
Verification

Ejecutar lint y build en my-app para validar tipado y reglas estáticas.
Verificar rutas: /, /experiences, /experiences/[id], /favorites y /profile.
Validar sincronización URL en /experiences al cambiar search/category/destination.
Confirmar prefill de filtros al abrir una URL ya parametrizada y al recargar.
Probar búsqueda con caracteres especiales para confirmar escape regex correcto.
Validar combinaciones de filtros simples y compuestas (intersección).
Confirmar toggle de favoritos desde cards y detalle.
Confirmar lista de favoritos en /favorites y empty state.
Confirmar conteo de favoritos en /profile.
Confirmar sección Design References en README.
Decisions

Estado global con Context + useState en layout.
Sin persistencia durable (sin backend/localStorage), solo memoria de ejecución.
Lógica de filtrado centralizada en utilidades puras para reuso y consistencia.
Scope incluido: todo lo pedido en resume.md.
Scope excluido: auth real, backend, paginación, ordenamientos avanzados y persistencia permanente.
Si quieres, en el siguiente paso lo ajusto a formato de sprint técnico (componentes, contratos de props y orden de implementación por commits).