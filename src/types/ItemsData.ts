import { BasicItem } from "@/types/item/BasicItem";
import { ItemDetail } from "@/types/item/ItemDetail";

export interface ItemsData {
  type: string;
  version: string;
  basic: BasicItem;
  data: Record<string, ItemDetail>;
}
