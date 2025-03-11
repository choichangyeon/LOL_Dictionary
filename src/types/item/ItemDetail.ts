import { Image } from "../common/Image";
import { Gold } from "./Gold";

export interface ItemDetail {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  into: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Record<string, boolean>;
  stats: Record<string, number>;
}
