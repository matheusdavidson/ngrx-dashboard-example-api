import { readFile, writeFile } from "fs/promises";
import { join } from "path";

import { Items } from "../items/items.interface";
import { Menus } from "../menus/menus.interface";

const itemsDbPath = join(__dirname, "items.json");
const menusDbPath = join(__dirname, "menus.json");

const readJson = async (path: string): Promise<unknown> => {
  const fileContent: string = await readFile(path, "utf-8");
  return JSON.parse(fileContent) as Items;
};

const writeJson = async (path: string, content: unknown) => {
  await writeFile(path, JSON.stringify(content), { encoding: "utf-8" });
};

export const getItemsDb = async () => {
  return (await readJson(itemsDbPath)) as Items;
};

export const getMenusDb = async () => {
  return (await readJson(menusDbPath)) as Menus;
};

export const updateItemsDb = async (updatedDb: Items) => {
  await writeJson(itemsDbPath, updatedDb);
};

export const updateMenusDb = async (updatedDb: Menus) => {
  await writeJson(menusDbPath, updatedDb);
};
