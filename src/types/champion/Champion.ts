import { Image } from "./Image";
import { Info } from "./Info";
import { Skin } from "./Skin";
import { Spell } from "./Spell";
import { Passive } from "./Passive";
import { Stats } from "./Stats";

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
