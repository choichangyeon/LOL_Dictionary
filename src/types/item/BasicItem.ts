import { BasicStats } from "@/types/item/BasicStats";
import { Gold } from "@/types/item/Gold";
import { Rune } from "@/types/item/Rune";

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
