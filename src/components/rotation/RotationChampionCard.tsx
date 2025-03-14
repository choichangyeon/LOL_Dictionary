import Image from "next/image";
import Link from "next/link";
import { Champion } from "@/types/champion/Champion";
import { IMG_TYPE } from "@/constants/RiotImgURL";

const RotationChampionCard = ({
  champion,
  url,
}: Readonly<{ champion: Champion; url: string }>) => {
  const imgUrl = url + IMG_TYPE.CHAMPION + champion.image.full;
  return (
    <Link
      href={`/champions/${champion.id}`}
      className="mx-[20px] my-[10px] flex h-[200px] w-[300px] flex-col items-center justify-center border-[3px] bg-green-500"
    >
      <Image src={imgUrl} width={100} height={100} alt={champion.name}></Image>
      <p>{champion.name}</p>
      <p>{champion.title}</p>
    </Link>
  );
};

export default RotationChampionCard;
