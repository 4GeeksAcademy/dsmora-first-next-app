Objetivo general
Construir una app multipágina con Next.js para descubrir experiencias de viaje, con búsqueda/filtros sincronizados en la URL, detalle por ID y gestión de favoritos en estado local.

Páginas requeridas
/ (Home)
Hero principal.
Botón CTA que navega a /experiences.
/experiences (Explorador)
Grid/listado de tarjetas con todas las experiencias.
Barra de búsqueda por título.
Mínimo 2 filtros: category y destination.
Búsqueda + filtros deben:
reflejarse en la URL como query params.
prerrellenar inputs/selects al cargar la página.
/experiences/[id] (Detalle)
Mostrar información completa de una experiencia.
Obtener la experiencia desde dataset local por id.
/favorites (Favoritos)
Listar experiencias marcadas como favoritas.
Fuente: estado local en memoria (sin persistencia).
/profile (Perfil)
Página estática con perfil simulado.
Mostrar resumen con número de favoritos guardados.
Query params y searchParams (clave técnica)
Query params esperados en /experiences
search: texto de búsqueda.
category: categoría seleccionada.
destination: destino seleccionado.
Ejemplo:
/experiences?search=vela&category=Adventure&destination=Split%2C%20Croatia

Uso de searchParams en Next.js
En App Router, la página de /experiences lee searchParams para hidratar filtros iniciales.
Inputs/selects se inicializan desde esos valores.
Al cambiar búsqueda/filtros, se actualiza la URL para mantener el estado compartible.
Si se abre un enlace con params, la vista aterriza prefiltrada.
Comportamiento de búsqueda y filtros
Búsqueda
Debe filtrar por coincidencia en title.
Implementación pedida: regex case-insensitive, estilo /term/i.
Recomendación técnica: escapar caracteres especiales del término antes de construir la regex para evitar errores.
Filtros
category y destination funcionan de forma independiente.
También se combinan con búsqueda (intersección de criterios).
Lógica conceptual:

si hay search, filtrar por regex en título;
si hay category, filtrar por categoría exacta;
si hay destination, filtrar por destino exacto;
mostrar resultado final combinado.
Dataset (requisito de contenido)
Crear archivo TypeScript local con array de 100 experiencias.

Cada objeto debe incluir al menos:

id
title
description
category (una de: Adventure, Culture, Food, Wellness, Nature)
destination (formato ciudad + país)
price
rating
imageUrl (placeholder válido)
Sugerencia de ubicación:

src/data/experiences.ts
y tipo en src/types/experience.ts (opcional pero recomendable)
Favoritos (estado global simple)
Requisito
Cada tarjeta debe tener icono corazón para toggle favorito.
Guardar favoritos en useState de nivel superior.
Pasar estado y handlers por props.
Sin backend ni localStorage por ahora.
Implicación de arquitectura
El estado de favoritos debe vivir en un ancestro común de páginas que lo consumen.
Desde ahí:
isFavorite(id)
toggleFavorite(id)
favoritesCount
Se reutiliza en /experiences, /favorites y /profile.
Design References (sigue vigente)
Antes de construir UI final:

Buscar 2–3 interfaces reales alineadas al estilo de discovery.
Documentarlas en README bajo Design References con enlaces y breve justificación.
Criterios de aceptación (check rápido)
Existen y funcionan rutas: /, /experiences, /experiences/[id], /favorites, /profile.
/experiences sincroniza filtros y búsqueda con URL.
Recargar o compartir URL conserva vista filtrada.
Dataset local tiene 100 items con esquema mínimo correcto.
Corazón en tarjeta hace toggle de favoritos.
/favorites lista favoritos activos.
/profile muestra conteo de favoritos.
README incluye sección Design References.
Si quieres, en el siguiente paso te convierto esto en una spec implementable de sprint (estructura de componentes + contratos de props + pseudocódigo de filtrado y routing).