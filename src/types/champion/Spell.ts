import { Image } from "@/types/common/Image";
import { LevelTip } from "@/types/champion/LevelTip";

export interface Spell {
  id: string;
  name: string;
  description: string;
  tooltip: string;
  leveltip: LevelTip;
  maxrank: number;
  cooldown: number[];
  cooldownBurn: string;
  cost: number[];
  costBurn: string;
  datavalues: Record<string, any>;
  effect: Array<number[] | null>;
  effectBurn: Array<string | null>;
  vars: any[];
  costType: string;
  maxammo: string;
  range: number[];
  rangeBurn: string;
  image: Image;
  resource: string;
}
