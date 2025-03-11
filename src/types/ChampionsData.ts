import { Champion } from "./champion/Champion";

export interface ChampionsData {
  type: string;
  format: string;
  version: string;
  data: Record<string, Champion>;
}
