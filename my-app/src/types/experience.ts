export const EXPERIENCE_CATEGORIES = [
  "Adventure",
  "Culture",
  "Food",
  "Wellness",
  "Nature",
] as const;

export type ExperienceCategory = (typeof EXPERIENCE_CATEGORIES)[number];

export type Experience = {
  id: string;
  title: string;
  description: string;
  category: ExperienceCategory;
  destination: string;
  price: number;
  rating: number;
  reviews: number;
  imageUrl: string;
  duration: string;
  languages: string[];
  includes: string[];
  itinerary: Array<{
    time: string;
    activity: string;
    detail: string;
  }>;
};

export type ExperienceQuery = {
  search?: string;
  category?: string;
  destination?: string;
};
