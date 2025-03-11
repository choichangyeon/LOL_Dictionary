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
  stats: Record<string, number>; // 아이템마다 적용되는 스탯은 가변적이므로 Record<string, number>로 표현
}
