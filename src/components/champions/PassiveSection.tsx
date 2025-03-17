import { Passive } from "@/types/champion/Passive";
import { IMG_TYPE } from "@constants/RiotImgURL";
import Image from "next/image";
import { formatText } from "../../utils/formatValue";

const PassiveSection = ({
  passive,
  url,
}: Readonly<{ passive: Passive; url: string }>) => {
  return (
    <section>
      <div className="flex gap-4">
        <div className="flex-shrink-0">
          <div className="relative h-[64px] w-[64px] overflow-hidden border-2 border-yellow-500 bg-slate-800">
            <Image
              src={`${url}${IMG_TYPE.PASSIVE}${passive.image.full}`}
              alt={passive.name}
              width={64}
              height={64}
              className="h-full w-full object-cover"
            />
            <div className="absolute right-0 bottom-0 flex h-[20px] w-[20px] items-center justify-center rounded-full bg-yellow-600 text-xs font-bold text-white">
              P
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="mb-2 text-lg font-semibold text-yellow-400">
            {passive.name}
          </h3>
          <p className="text-sm leading-relaxed text-gray-300">
            {formatText(passive.description)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PassiveSection;
