import { IMG_TYPE, LOL_CHAMPION_SPLASH_IMG_URL } from "@constants/RiotImgURL";
import { LOL_REQUEST_BASE_URL } from "@constants/RiotDataURL";
import {
  formatChampionTags,
  formatChampionTitle,
  formatUrl,
} from "@utils/formatValue";
import { getChampionDataById } from "@utils/serverApi";
import SpellSection from "@components/champions/SpellSection";
import PassiveSection from "@components/champions/PassiveSection";
import { Metadata } from "next";
import { Card, CardContent } from "@components/ui/card";
import SplashHeader from "@components/champions/SplashHeader";
import ChampionStatBar from "@components/champions/ChampionStatBar";

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const champion = await getChampionDataById(params.id);
  const url = await formatUrl(LOL_REQUEST_BASE_URL, "img");
  const championImgUrl = url + IMG_TYPE.CHAMPION + champion.image.full;

  return {
    title: champion.name,
    description: champion.blurb,
    openGraph: {
      title: champion.name,
      description: champion.blurb,
      images: [
        {
          url: championImgUrl,
          width: 100,
          height: 100,
        },
      ],
    },
  };
}

const ChampionDetailPage = async ({ params }: Props) => {
  const champion = await getChampionDataById(params.id);
  const url = await formatUrl(LOL_REQUEST_BASE_URL, "img");
  const formattedTitle = formatChampionTitle(champion.title);
  const formattedTags = formatChampionTags(champion.tags);
  const default_num = champion.skins![0].num;
  const championImgUrl = url + IMG_TYPE.CHAMPION + champion.image.full;
  const splashImgUrl = `${LOL_CHAMPION_SPLASH_IMG_URL}${champion.id}_${default_num}.jpg`;
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 pb-16 text-white">
      {/* 스플래시 이미지 헤더 */}
      <SplashHeader
        {...{ splashImgUrl, championImgUrl }}
        name={champion.name}
        title={formattedTitle}
        tags={formattedTags}
      />

      {/* 메인 콘텐츠 */}
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
          {/* 왼쪽 사이드바 */}
          <section>
            {/* 챔피언 정보 */}
            <Card className="border-2 border-purple-800 bg-slate-900">
              <CardContent className="p-6">
                <h2 className="mb-4 text-xl font-bold text-purple-400">Lore</h2>
                <p className="text-gray-300">{champion.blurb}</p>
              </CardContent>
            </Card>

            {/* 챔피언 스탯 */}
            {champion.info && (
              <Card className="mt-6 border-2 border-green-800 bg-slate-900">
                <CardContent className="p-6">
                  <h2 className="mb-4 text-xl font-bold text-green-400">
                    Champion Stats
                  </h2>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <ChampionStatBar
                      status={champion.info.attack}
                      statusType="공격력"
                      color="red"
                    />
                    <ChampionStatBar
                      status={champion.info.defense}
                      statusType="방어력"
                      color="green"
                    />
                    <ChampionStatBar
                      status={champion.info.magic}
                      statusType="주문력"
                      color="purple"
                    />
                    <ChampionStatBar
                      status={champion.info.difficulty}
                      statusType="난이도"
                      color="yellow"
                    />
                  </div>
                </CardContent>
              </Card>
            )}
          </section>

          {/* 오른쪽 메인 콘텐츠 */}
          <section className="space-y-6">
            <Card className="border-2 border-blue-800 bg-slate-900">
              <CardContent className="p-6">
                <h2 className="mb-6 text-2xl font-bold text-blue-400">
                  Abilities
                </h2>

                {/* Passive */}
                <div className="mb-8">
                  <h3 className="mb-4 text-xl font-semibold text-yellow-400">
                    Passive
                  </h3>
                  <div className="rounded-lg bg-slate-800 p-4">
                    <PassiveSection passive={champion.passive!} url={url} />
                  </div>
                </div>

                {/* Spells */}
                <div>
                  <h3 className="mb-4 text-xl font-semibold text-yellow-400">
                    Spells
                  </h3>
                  <div className="space-y-4">
                    {champion.spells!.map((spell, idx) => (
                      <div
                        key={spell.id}
                        className="rounded-lg bg-slate-800 p-4"
                      >
                        <SpellSection spell={spell} url={url} index={idx} />
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </main>
  );
};

export default ChampionDetailPage;
