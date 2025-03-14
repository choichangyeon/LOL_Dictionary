import Image from "next/image";
import Link from "next/link";
import { IMG_TYPE } from "@constants/RiotImgURL";
import { Champion } from "@/types/champion/Champion";
import { LOL_REQUEST_BASE_URL } from "@constants/RiotDataURL";
import { formatUrl } from "@utils/formatValue";
import { Card, CardContent } from "@components/ui/card";
import { Badge } from "@components/ui/badge";
import { Shield, Sword, Wand, BarChart2 } from "lucide-react";

const ChampionCard = async ({ champion }: Readonly<{ champion: Champion }>) => {
  const url = await formatUrl(LOL_REQUEST_BASE_URL, "img");
  const imgUrl = url + IMG_TYPE.CHAMPION + champion.image.full;

  // Format the champion title to capitalize first letter of each word
  const formattedTitle = champion.title
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // Calculate stat percentages for the stat bars
  const attackPercent = (champion.info.attack / 10) * 100;
  const defensePercent = (champion.info.defense / 10) * 100;
  const magicPercent = (champion.info.magic / 10) * 100;
  const difficultyPercent = (champion.info.difficulty / 10) * 100;

  return (
    // <Link
    //   href={`/champions/${champion.id}`}
    //   className="mx-[20px] my-[10px] flex h-[200px] w-[300px] flex-col items-center justify-center border-[3px] bg-green-500"
    // >
    //   <Image src={imgUrl} width={100} height={100} alt={champion.name}></Image>
    //   <p>{champion.name}</p>
    //   <p>{champion.title}</p>
    // </Link>
    <Link
      href={`/champions/${champion.id}`}
      className="block transition-transform duration-300 hover:scale-105"
    >
      <Card className="group relative h-[320px] w-[280px] overflow-hidden border-2 bg-gradient-to-b from-slate-900 to-slate-800 text-white shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70" />

        <CardContent className="relative z-10 flex h-full flex-col p-4">
          {/* Champion Image */}
          <div className="mx-auto mt-2 mb-2 h-[120px] w-[120px] overflow-hidden rounded-full border-2 border-yellow-500">
            <Image
              src={imgUrl}
              width={120}
              height={120}
              alt={champion.name}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Champion Name and Title */}
          <div className="mb-2 text-center">
            <h2 className="text-xl font-bold text-yellow-400">
              {champion.name}
            </h2>
            <p className="text-sm text-gray-300 italic">{formattedTitle}</p>
          </div>

          {/* Tags */}
          <div className="mb-3 flex flex-wrap justify-center gap-1">
            {champion.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="border-blue-500 bg-blue-950/50 text-blue-300"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Stats - CSS로 hover 효과 구현 */}
          <div className="mt-auto opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="grid grid-cols-[auto_1fr] gap-x-2 gap-y-1">
              <Sword className="h-4 w-4 text-red-400" />
              <div className="h-2 w-full rounded-full bg-gray-700">
                <div
                  className="h-2 rounded-full bg-red-500"
                  style={{ width: `${attackPercent}%` }}
                />
              </div>

              <Shield className="h-4 w-4 text-green-400" />
              <div className="h-2 w-full rounded-full bg-gray-700">
                <div
                  className="h-2 rounded-full bg-green-500"
                  style={{ width: `${defensePercent}%` }}
                />
              </div>

              <Wand className="h-4 w-4 text-purple-400" />
              <div className="h-2 w-full rounded-full bg-gray-700">
                <div
                  className="h-2 rounded-full bg-purple-500"
                  style={{ width: `${magicPercent}%` }}
                />
              </div>

              <BarChart2 className="h-4 w-4 text-yellow-400" />
              <div className="h-2 w-full rounded-full bg-gray-700">
                <div
                  className="h-2 rounded-full bg-yellow-500"
                  style={{ width: `${difficultyPercent}%` }}
                />
              </div>
            </div>

            <div className="mt-2 text-center text-xs text-gray-400">
              {champion.partype}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ChampionCard;
