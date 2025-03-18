import { IMG_TYPE } from "@constants/RiotImgURL";
import { SKILL_SET } from "@constants/SkillSet";
import { Spell } from "@/types/champion/Spell";
import { formatText } from "@utils/formatValue";
import Image from "next/image";

const SpellSection = ({
  spell,
  url,
  index,
}: Readonly<{ spell: Spell; url: string; index: number }>) => {
  const skillSet = SKILL_SET[index];

  return (
    <section>
      <div className="flex gap-4">
        <div className="flex-shrink-0">
          <div
            className={`relative h-16 w-16 overflow-hidden rounded-full border-2 ${getBorderColor(skillSet)} bg-slate-800`}
          >
            <Image
              src={`${url}${IMG_TYPE.SPELL}${spell.id}.png`}
              alt={spell.id}
              width={64}
              height={64}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="flex-1">
          <h3
            className={`mb-2 flex items-center gap-2 text-lg font-semibold ${getTitleColor(skillSet)}`}
          >
            <span>
              {spell.name} - {skillSet}
            </span>
          </h3>
          <p className="text-sm leading-relaxed text-gray-300">
            {formatText(spell.description)}
          </p>
        </div>
      </div>
    </section>
  );
};

// 스킬 키에 따른 색상 설정
const getBorderColor = (skillSet: string): string => {
  switch (skillSet) {
    case "Q":
      return "border-blue-500";
    case "W":
      return "border-green-500";
    case "E":
      return "border-purple-500";
    case "R":
      return "border-red-500";
    default:
      return "border-blue-500";
  }
};

const getTitleColor = (skillSet: string): string => {
  switch (skillSet) {
    case "Q":
      return "text-blue-400";
    case "W":
      return "text-green-400";
    case "E":
      return "text-purple-400";
    case "R":
      return "text-red-400";
    default:
      return "text-blue-400";
  }
};

export default SpellSection;
