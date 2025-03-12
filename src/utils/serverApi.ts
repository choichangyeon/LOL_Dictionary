import { Champion } from "@/types/champion/Champion";
import { ChampionsData } from "@/types/ChampionsData";
import { ItemDetail } from "@/types/item/ItemDetail";
import { ItemsData } from "@/types/ItemsData";
import {
  LOL_CHAMPIONS_JSON_URL,
  LOL_ITEMS_JSON_URL,
} from "@constants/RiotDataURL";

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

export const getItemsData = async (): Promise<ItemDetail[]> => {
  const res = await fetch(LOL_ITEMS_JSON_URL, { cache: "force-cache" });
  const data: ItemsData = await res.json();
  const items: ItemDetail[] = Object.values(data.data);

  return items;
};
