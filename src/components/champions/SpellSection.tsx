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
      <Image
        src={`${url}${IMG_TYPE.SPELL}${spell.id}.png`}
        alt={spell.id}
        width={100}
        height={100}
      />
      <h3>
        {skillSet} - {spell.name}
      </h3>
      <p>{formatText(spell.description)}</p>
    </section>
  );
};

export default SpellSection;
