import { Champion } from "@/types/champion/Champion";
import { ChampionsData } from "@/types/ChampionsData";
import { ChampionsRotationData } from "@/types/ChampionsRotationData";
import { ItemDetail } from "@/types/item/ItemDetail";
import { ItemsData } from "@/types/ItemsData";
import {
  LOL_REQUEST_BASE_URL,
  LOL_REQUEST_VERSION_URL,
} from "@constants/RiotDataURL";
import { formatUrl } from "@utils/formatValue";

// 모든 챔피언 GET 요청
export const getChampionsData = async (): Promise<Champion[]> => {
  const url = await formatUrl(LOL_REQUEST_BASE_URL, "data", "KOR");
  const res = await fetch(`${url}/champion.json`, {
    next: {
      revalidate: 86400,
    },
  });
  const data: ChampionsData = await res.json();
  const champions: Champion[] = Object.values(data.data);

  return champions;
};

// 특정 챔피언 GET 요청
export const getChampionDataById = async (id: string): Promise<Champion> => {
  const url = await formatUrl(LOL_REQUEST_BASE_URL, "data", "KOR");
  const res = await fetch(`${url}/champion/${id}.json`, { cache: "no-store" });
  const data: ChampionsData = await res.json();
  const champion: Champion = Object.values(data.data)[0];

  return champion;
};

// 모든 아이템 GET 요청
export const getItemsData = async (): Promise<Record<string, ItemDetail>> => {
  const url = await formatUrl(LOL_REQUEST_BASE_URL, "data", "KOR");
  const res = await fetch(`${url}/item.json`, { cache: "force-cache" });
  const data: ItemsData = await res.json();
  const items: Record<string, ItemDetail> = data.data;

  return items;
};

// 최신 version 정보 GET
export const getVersion = async (): Promise<string> => {
  const res = await fetch(LOL_REQUEST_VERSION_URL);
  const data = await res.json();
  const release_version = data[0];

  return release_version;
};
