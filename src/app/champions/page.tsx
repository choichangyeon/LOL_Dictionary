import { Champion } from "@/types/champion/Champion";
import { ChampionsData } from "@/types/ChampionsData";
import ChampionCard from "@components/champions/ChampionCard";

const ChampionsPage = async () => {
  const res = await fetch("http://localhost:3000/api/champions", {
    next: { revalidate: 86400 },
  });

  const data: ChampionsData = await res.json();
  const champions: Champion[] = Object.values(data.data);

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
