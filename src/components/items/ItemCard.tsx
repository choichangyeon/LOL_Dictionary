import { IMG_TYPE } from "@/constants/RiotImgURL";
import React from "react";
import Image from "next/image";
import { ItemDetail } from "@/types/item/ItemDetail";
import { formatText, formatUrl } from "../../utils/formatValue";
import { LOL_REQUEST_BASE_URL } from "@/constants/RiotDataURL";

const ItemCard = async ({ item }: Readonly<{ item: ItemDetail }>) => {
  const url = await formatUrl(LOL_REQUEST_BASE_URL, "img");
  const imgUrl = url + IMG_TYPE.ITEM + item.image.full;
  return (
    <div className="mx-[20px] my-[10px] flex h-[200px] w-[300px] flex-col items-center justify-center border-[3px] bg-green-500">
      <Image src={imgUrl} width={100} height={100} alt={item.name}></Image>
      <p>{formatText(item.name)}</p>
      <p>{formatText(item.plaintext)}</p>
    </div>
  );
};

export default ItemCard;
