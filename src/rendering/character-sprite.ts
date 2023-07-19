import { Application, Assets, Sprite } from "pixi.js";

export const makeCharacter = async (app: Application) => {
  const allowedKeys: string[] = ["w", "a", "s", "d"];
  const relevantKeys = new Set(allowedKeys);

  const keyPress: Record<string, boolean> = {
    w: false,
    a: false,
    s: false,
    d: false,
  };

  window.addEventListener("keydown", (e) => {
    if (!relevantKeys.has(e.key)) return;
    keyPress[e.key] = true;
  });

  window.addEventListener("keyup", (e) => {
    if (!relevantKeys.has(e.key)) return;
    keyPress[e.key] = false;
  });

  const character = new Sprite(await Assets.load("/character.svg"));
  character.width = 50;
  character.height = 90;
  character.x = character.width;
  character.y = character.height;

  app.stage.addChild(character);

  app.ticker.add((delta) => {
    const directionX = +keyPress.a * -1 + +keyPress.d * 1;
    const directionY = +keyPress.w * -1 + +keyPress.s * 1;

    const speed = 5;

    character.x += speed * delta * directionX;
    character.y += speed * delta * directionY;
  });
	
  return character;
};
