import { Application, Assets, Sprite } from "pixi.js";

export const makeTable = async (app: Application) => {
  const table = new Sprite(await Assets.load("/table.svg"));
  table.width = 150;
  table.height = 90;
  table.x = 200;
  table.y = 200;

  app.stage.addChild(table);
};
