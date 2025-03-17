import { REGION } from "@/constants/RiotDataURL";
import { Info } from "@/types/champion/Info";
import { getVersion } from "@utils/serverApi";

export const formatChampionInfo = (info: Info): Info => {
  const attack = (info.attack / 10) * 100;
  const defense = (info.defense / 10) * 100;
  const magic = (info.magic / 10) * 100;
  const difficulty = (info.difficulty / 10) * 100;

  return { attack, defense, magic, difficulty };
};

export const formatText = (originalText: string): string => {
  return originalText.replace(/<\/?[^>]+>/g, "").trim();
};

export const formatLastChar = (str: string): string => {
  if (!str) return "";
  return str[str.length - 1];
};

export const formatUrl = async (
  BASE_URL: string,
  type: string,
  region?: keyof typeof REGION,
): Promise<string> => {
  const release_version = await getVersion();

  switch (type) {
    case FORMAT_TYPE.DATA:
      return `${BASE_URL}${release_version}/data${REGION[region!]}`;

    case FORMAT_TYPE.IMG:
      return `${BASE_URL}${release_version}/img/`;

    default:
      return "";
  }
};

const FORMAT_TYPE: Record<string, string> = {
  DATA: "data",
  IMG: "img",
};
