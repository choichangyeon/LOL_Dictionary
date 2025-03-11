import { BasicItem } from "./item/BasicItem";
import { ItemDetail } from "./item/ItemDetail";

export interface ItemsData {
  type: string;
  version: string;
  basic: BasicItem;
  data: Record<string, ItemDetail>;
}
