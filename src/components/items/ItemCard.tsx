import { IMG_TYPE, LOL_IMG_URL } from "@/constants/RiotImgURL";
import React from "react";
import Image from "next/image";
import { ItemDetail } from "@/types/item/ItemDetail";
import { formatText } from "../../utils/formatValue";

const ItemCard = ({ item }: Readonly<{ item: ItemDetail }>) => {
  const imgUrl = LOL_IMG_URL + IMG_TYPE.ITEM + item.image.full;
  return (
    <div className="mx-[20px] my-[10px] flex h-[200px] w-[300px] flex-col items-center justify-center border-[3px] bg-green-500">
      <Image src={imgUrl} width={100} height={100} alt={item.name}></Image>
      <p>{formatText(item.name)}</p>
      <p>{formatText(item.plaintext)}</p>
    </div>
  );
};

export default ItemCard;
