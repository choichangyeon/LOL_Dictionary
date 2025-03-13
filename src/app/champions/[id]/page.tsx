import { IMG_TYPE } from "@constants/RiotImgURL";
import { LOL_REQUEST_BASE_URL } from "@constants/RiotDataURL";
import { formatUrl } from "@utils/formatValue";
import { getChampionDataById } from "@utils/serverApi";
import Image from "next/image";
import SpellSection from "@components/champions/SpellSection";
import PassiveSection from "@components/champions/PassiveSection";

type Props = {
  params: {
    id: string;
  };
};

const ChampionDetailPage = async ({ params }: Props) => {
  const champion = await getChampionDataById(params.id);
  const url = await formatUrl(LOL_REQUEST_BASE_URL, "img");
  // 추후에 Splash 이미지로 변경 가능성 고려
  const championImgUrl = url + IMG_TYPE.CHAMPION + champion.image.full;

  return (
    <main>
      <header>
        <h1>{champion.name}</h1>
        <h3>{champion.title}</h3>
        <Image
          src={championImgUrl}
          alt={champion.name}
          width={100}
          height={100}
        />
      </header>
      <PassiveSection passive={champion.passive!} url={url} />
      {champion.spells!.map((spell) => {
        return <SpellSection key={spell.id} spell={spell} url={url} />;
      })}
    </main>
  );
};

export default ChampionDetailPage;
