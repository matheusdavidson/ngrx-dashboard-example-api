import { Item } from "../items/item.interface";

export interface Menu {
  id: string;
  items: string[];
}

export interface FullMenu {
  id: string;
  items: Item[];
}
