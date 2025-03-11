import { Image } from "@/types/common/Image";
import { Info } from "@/types/champion/Info";
import { Skin } from "@/types/champion/Skin";
import { Spell } from "@/types/champion/Spell";
import { Passive } from "@/types/champion/Passive";
import { Stats } from "@/types/champion/Stats";

export interface Champion {
  id: string;
  key: string;
  name: string;
  title: string;
  image: Image;
  skins?: Skin[];
  lore?: string;
  blurb: string;
  allytips?: string[];
  enemytips?: string[];
  tags: string[];
  partype: string;
  info: Info;
  stats: Stats;
  spells?: Spell[];
  passive?: Passive;
  recommended?: any[];
  version?: string;
}
