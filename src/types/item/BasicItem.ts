import { BasicStats } from "./BasicStats";
import { Gold } from "./Gold";
import { Rune } from "./Rune";

export interface BasicItem {
  name: string;
  rune: Rune;
  gold: Gold;
  group: string;
  description: string;
  colloq: string;
  plaintext: string;
  consumed: boolean;
  stacks: number;
  depth: number;
  consumeOnFull: boolean;
  from: string[];
  into: string[];
  specialRecipe: number;
  inStore: boolean;
  hideFromAll: boolean;
  requiredChampion: string;
  requiredAlly: string;
  stats: BasicStats;
  tags: string[];
  maps: Record<string, boolean>;
}
