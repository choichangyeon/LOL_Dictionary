import ChampionCard from "@components/champions/ChampionCard";
import { getChampionsData } from "@/utils/serverApi";

const ChampionsPage = async () => {
  const champions = await getChampionsData();

  return (
    <div className="flex flex-row flex-wrap items-center justify-evenly">
      {champions.map((champion) => {
        return (
          <div key={champion.key}>
            <ChampionCard
              name={champion.name}
              title={champion.title}
              image={champion.image.full}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ChampionsPage;
