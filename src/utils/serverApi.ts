import { Champion } from "@/types/champion/Champion";
import { ChampionsData } from "@/types/ChampionsData";
import { ItemDetail } from "@/types/item/ItemDetail";
import { ItemsData } from "@/types/ItemsData";
import {
  LOL_CHAMPIONS_JSON_URL,
  LOL_ITEMS_JSON_URL,
} from "@constants/RiotDataURL";

export const getChampionsData = async (): Promise<Record<string, Champion>> => {
  const res = await fetch(LOL_CHAMPIONS_JSON_URL, {
    next: {
      revalidate: 86400,
    },
  });
  const data: ChampionsData = await res.json();
  const champions: Record<string, Champion> = data.data;

  return champions;
};

export const getItemsData = async (): Promise<Record<string, ItemDetail>> => {
  const res = await fetch(LOL_ITEMS_JSON_URL, { cache: "force-cache" });
  const data: ItemsData = await res.json();
  const items: Record<string, ItemDetail> = data.data;

  return items;
};
