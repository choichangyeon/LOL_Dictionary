import { IMG_TYPE } from "@constants/RiotImgURL";
import { Spell } from "@/types/champion/Spell";
import Image from "next/image";
import { formatLastChar } from "@/utils/formatValue";
import { formatText } from "../../utils/formatValue";

const SpellSection = ({
  spell,
  url,
}: Readonly<{ spell: Spell; url: string }>) => {
  const skillSet = formatLastChar(spell.id);
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
