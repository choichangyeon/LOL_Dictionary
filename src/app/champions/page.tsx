import ChampionCard from "@components/champions/ChampionCard";
import { getChampionsData } from "@/utils/serverApi";

const ChampionsPage = async () => {
  const champions = await getChampionsData();

  return (
    <div className="flex flex-row flex-wrap items-center justify-evenly">
      {Object.entries(champions).map(([key, champion]) => {
        return (
          <div key={key}>
            <ChampionCard champion={champion} />
          </div>
        );
      })}
    </div>
  );
};

export default ChampionsPage;
