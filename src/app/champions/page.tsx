import ChampionCard from "@components/champions/ChampionCard";
import { getChampionsData } from "@utils/serverApi";

const ChampionsPage = async () => {
  const champions = await getChampionsData();

  return (
    <main className="flex min-h-screen justify-center bg-gradient-to-b from-slate-950 to-slate-900 py-8 text-white">
      <div className="container min-w-screen">
        <h1 className="mb-8 text-center text-[36px] font-bold text-yellow-400">
          League of Legends Champions
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-[25px]">
          {champions.map((champion) => (
            <div
              key={champion.key}
              className="transition-transform duration-300 hover:scale-105"
            >
              <ChampionCard champion={champion} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ChampionsPage;
