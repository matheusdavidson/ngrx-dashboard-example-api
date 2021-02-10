import { Item } from "../items/item.interface";
import { FullMenu, Menu } from "./menu.interface";

import { getItemsDb, getMenusDb } from "../database/database.service";

/**
 * Service Methods
 */

export const find = async (id: string): Promise<FullMenu> => {
  const menusDb = await getMenusDb();
  const itemsDb = await getItemsDb();
  const menu = menusDb[id] as Menu;

  const menuItems: Item[] = menu.items.map((itemId) => itemsDb[itemId]);

  return {
    id,
    items: menuItems,
  };
};

export const findAll = async (): Promise<FullMenu[]> => {
  const menusDb = await getMenusDb();
  const menus = Object.values(menusDb);
  const fullMenus = [];

  for (let i = 0; i < menus.length; i++) {
    fullMenus.push(await find(menus[i].id));
  }

  return fullMenus;
};
