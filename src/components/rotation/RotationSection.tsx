"use client";

import { useEffect, useState } from "react";
import { getChampionsData } from "@utils/serverApi";
import { useRotateChampions } from "@hooks/queries";
import { Champion } from "@/types/champion/Champion";
import RotationChampionCard from "@components/rotation/RotationChampionCard";
import { LOL_REQUEST_BASE_URL } from "@constants/RiotDataURL";
import { formatUrl } from "@utils/formatValue";

const RotationSection = () => {
  const { data: rotationChampions, isPending, isError } = useRotateChampions();
  const [champions, setChampions] = useState<Champion[]>([]);
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const championsData = await getChampionsData();
      const freeIds = rotationChampions?.freeChampionIds ?? [];
      const freeIdsSet = new Set(freeIds.map((id) => id.toString()));

      const championsInRotation = championsData.filter((champion) =>
        freeIdsSet.has(champion.key),
      );

      const url = await formatUrl(LOL_REQUEST_BASE_URL, "img");

      setChampions(championsInRotation);
      setUrl(url);
    };
    fetchData();
  }, [rotationChampions]);

  if (isPending || champions.length === 0) {
    return <div>isPending...</div>;
  }

  if (isError) {
    return <div>isError...</div>;
  }

  return (
    <div className="flex flex-row flex-wrap items-center justify-evenly">
      {champions.map((champion) => {
        return (
          <div key={champion.key}>
            <RotationChampionCard champion={champion} url={url} />
          </div>
        );
      })}
    </div>
  );
};

export default RotationSection;
