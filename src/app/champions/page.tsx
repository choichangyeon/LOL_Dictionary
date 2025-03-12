import { Champion } from "@/types/champion/Champion";
import { ChampionsData } from "@/types/ChampionsData";

const ChampionsPage = async () => {
  const res = await fetch("http://localhost:3000/api/champions", {
    next: { revalidate: 86400 },
  });

  const data: ChampionsData = await res.json();
  const champions: Champion[] = Object.values(data.data);

  return (
    <div>
      ChampionsPage
      {champions.map((champion) => {
        return (
          <div key={champion.key}>
            <div>{champion.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ChampionsPage;
