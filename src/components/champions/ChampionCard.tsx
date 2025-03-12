import { IMG_TYPE, LOL_IMG_URL } from "@/constants/RiotImgURL";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const ChampionCard = ({
  name,
  title,
  image,
  id,
}: Readonly<{ name: string; title: string; image: string; id: string }>) => {
  const imgUrl = LOL_IMG_URL + IMG_TYPE.CHAMPION + image;
  return (
    <Link
      href={`/champions/${id}`}
      className="mx-[20px] my-[10px] flex h-[200px] w-[300px] flex-col items-center justify-center border-[3px] bg-green-500"
    >
      <Image src={imgUrl} width={100} height={100} alt={name}></Image>
      <p>{name}</p>
      <p>{title}</p>
    </Link>
  );
};

export default ChampionCard;
