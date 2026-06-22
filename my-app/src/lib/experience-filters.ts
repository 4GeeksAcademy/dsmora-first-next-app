import type { Experience, ExperienceQuery } from "@/types/experience";

function getSingleParam(value: string | string[] | undefined): string {
  if (Array.isArray(value)) {
    return value[0] ?? "";
  }

  return value ?? "";
}

export function normalizeQuery(
  searchParams: Record<string, string | string[] | undefined>,
): Required<ExperienceQuery> {
  return {
    search: getSingleParam(searchParams.search).trim(),
    category: getSingleParam(searchParams.category).trim(),
    destination: getSingleParam(searchParams.destination).trim(),
  };
}

export function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function filterExperiences(
  list: Experience[],
  query: Required<ExperienceQuery>,
): Experience[] {
  const searchRegex = query.search
    ? new RegExp(escapeRegExp(query.search), "i")
    : null;

  return list.filter((experience) => {
    if (searchRegex && !searchRegex.test(experience.title)) {
      return false;
    }

    if (query.category && experience.category !== query.category) {
      return false;
    }

    if (query.destination && experience.destination !== query.destination) {
      return false;
    }

    return true;
  });
}
