import { Champion } from "@/types/champion/Champion";
import { ChampionsData } from "@/types/ChampionsData";
import { LOL_CHAMPIONS_JSON_URL } from "@constants/RiotDataURL";

export const getChampionsData = async (): Promise<Champion[]> => {
  const res = await fetch(LOL_CHAMPIONS_JSON_URL, {
    next: {
      revalidate: 86400,
    },
  });
  const data: ChampionsData = await res.json();
  const champions: Champion[] = Object.values(data.data);

  return champions;
};
