import { heroApi } from "../api/hero.api";
import type { HeroesResponse } from "../types/get-heroes.response";

const BASE_URL = import.meta.env.VITE_API_URL;

export const getHeroesByPageAction = async (
  page: number,
  limit: number = 6,
  category: string = "all"
): Promise<HeroesResponse> => {
  if (isNaN(limit) || limit < 1) limit = 6;
  if (isNaN(page) || page < 1) page = 1;

  const { data } = await heroApi.get<HeroesResponse>("/", {
    params: {
      limit,
      offset: (page - 1) * limit,
      category,
    },
  });

  const heroes = data.heroes.map((hero) => {
    return {
      ...hero,
      image: `${BASE_URL}/images/${hero.image}`,
    };
  });
  return {
    ...data,
    heroes,
  };
};
