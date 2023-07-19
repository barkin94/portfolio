import { Application, Assets, Sprite, Container } from "pixi.js";

export const makeReception = async (app: Application) => {
  const tableLoadAction = Assets.load("/table.svg");
  const npcLoadAction = Assets.load("/character.svg");
  const container = new Container()

  const [tableSprite, npcSprite] = await Promise.all([
    tableLoadAction,
    npcLoadAction,
  ]);

  const npc = new Sprite(npcSprite);
  npc.width = 50;
  npc.height = 90;
  npc.anchor.set(0.5, 1)
  
  const table = new Sprite(tableSprite);
  table.width = 150;
  table.height = 90;
  table.anchor.set(0.5);

  container.addChild(npc);
  container.addChild(table);
  container.x = 250;
  container.y = 200;
  container.name = 'reception';
  app.stage.addChild(container);

  return container;
};
