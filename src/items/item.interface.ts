// src/items/item.interface.ts

export interface BaseItem {
  name: string;
  price: number;
  tagline: string;
  description: string;
  image: string;
  calories: number;
  category: string;
}

export interface Item extends BaseItem {
  id: string;
}
