import { IMG_TYPE } from "@/constants/RiotImgURL";
import React from "react";
import Image from "next/image";
import { ItemDetail } from "@/types/item/ItemDetail";
import { formatText, formatUrl } from "@utils/formatValue";
import { LOL_REQUEST_BASE_URL } from "@constants/RiotDataURL";
import { Card, CardContent } from "@components/ui/card";

const ItemCard = async ({ item }: Readonly<{ item: ItemDetail }>) => {
  const url = await formatUrl(LOL_REQUEST_BASE_URL, "img");
  const imgUrl = url + IMG_TYPE.ITEM + item.image.full;

  if (
    item.name === "광휘의 특이점" ||
    item.name === "갱플랭크 Placeholder" ||
    item.name === "잠긴 무기 슬롯"
  ) {
    return null;
  }

  return (
    <Card className="group h-[350px] w-[280px] overflow-hidden border-2 bg-gradient-to-b from-slate-900 to-slate-800 text-white shadow-lg transition-transform duration-300 hover:scale-105">
      <CardContent className="relative z-10 flex h-full flex-col items-center justify-center p-4">
        {/* Item Image */}
        <div className="mb-3 h-[100px] w-[100px] overflow-hidden bg-slate-700">
          <Image
            src={imgUrl || "/placeholder.svg?height=100&width=100"}
            width={100}
            height={100}
            alt={item.name}
            className="h-full w-full object-contain p-1"
          />
        </div>

        {/* Item Name */}
        <h3 className="mb-1 text-center text-lg font-bold text-yellow-400">
          {formatText(item.name)}
        </h3>

        {/* Item Description */}
        {item.plaintext && (
          <p className="text-center text-sm text-gray-300">
            {formatText(item.plaintext)}
          </p>
        )}

        {/* Item Price (if available) */}
        {item.gold && (
          <div className="mt-2 flex items-center gap-1 text-sm text-yellow-300">
            <span>{item.gold.total}</span>
            <span className="text-xs">gold</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ItemCard;
