import { LOL_REQUEST_VERSION_URL, REGION } from "@/constants/RiotDataURL";

export const formatText = (originalText: string): string => {
  return originalText.replace(/<\/?[^>]+>/g, "").trim();
};

export const formatUrl = async (
  BASE_URL: string,
  type: string,
  region?: keyof typeof REGION,
): Promise<string> => {
  const res = await fetch(LOL_REQUEST_VERSION_URL);
  const data = await res.json();
  const release_version = data[0];
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
