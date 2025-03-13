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
      <Image
        src={`${url}${IMG_TYPE.PASSIVE}${passive.image.full}`}
        alt={passive.name}
        width={100}
        height={100}
      />
      <h3>P - {passive.name}</h3>
      <p>{formatText(passive.description)}</p>
    </section>
  );
};

export default PassiveSection;
