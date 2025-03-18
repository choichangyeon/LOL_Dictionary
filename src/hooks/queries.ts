import { ChampionsRotationData } from "@/types/ChampionsRotationData";
import { useQuery } from "@tanstack/react-query";

export const useRotateChampions = () => {
  return useQuery<ChampionsRotationData>({
    queryKey: ["rotationChampions"],
    queryFn: async () => {
      const res = await fetch("https://lol-dictionary.vercel.app/api/rotation");
      const data: ChampionsRotationData = await res.json();
      return data;
    },
  });
};
