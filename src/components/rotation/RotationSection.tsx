"use client";

import { Suspense, useEffect, useState } from "react";
import { getChampionsData } from "@utils/serverApi";
import { useRotateChampions } from "@hooks/queries";
import { Champion } from "@/types/champion/Champion";
import RotationChampionCard from "@components/rotation/RotationChampionCard";
// import ChampionCard from "@components/champions/ChampionCard";
// import ChampionList from "@components/rotation/ChampionList";

const RotationSection = () => {
  const { data: rotationChampions, isPending, isError } = useRotateChampions();
  const [champions, setChampions] = useState<Champion[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const championsData = await getChampionsData();
      const freeIds = rotationChampions?.freeChampionIds ?? [];
      const freeIdsSet = new Set(freeIds.map((id) => id.toString()));

      const championsInRotation = championsData.filter((champion) =>
        freeIdsSet.has(champion.key),
      );

      setChampions(championsInRotation);
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
    // <ChampionList champions={champions} />
    <Suspense>
      <div className="flex flex-row flex-wrap items-center justify-evenly">
        {champions.map((champion) => {
          return (
            <div key={champion.key}>
              <RotationChampionCard champion={champion} imgUrl="" />
            </div>
          );
        })}
      </div>
    </Suspense>
  );
};

export default RotationSection;
