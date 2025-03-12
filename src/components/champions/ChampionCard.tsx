import { IMG_TYPE, LOL_IMG_URL } from "@/constants/RiotImgURL";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Champion } from "@/types/champion/Champion";

const ChampionCard = ({ champion }: Readonly<{ champion: Champion }>) => {
  const imgUrl = LOL_IMG_URL + IMG_TYPE.CHAMPION + champion.image.full;
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

export default ChampionCard;
