import express, { Response, Request } from "express";
import * as MenuService from "./menus.service";
import { FullMenu } from "./menu.interface";

export const menusRouter = express.Router();

menusRouter.get("/", async (req: Request, res: Response) => {
  try {
    const menus: FullMenu[] = await MenuService.findAll();

    res.status(200).send(menus);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
