import { Application } from "pixi.js";
import { Entity } from "../shared/types";

const collisionDistance = 50;
const _watchingSprites: Entity[] = [];
const _interactingSpritesSet = new Set<string>();

export function initInteractionDetector(app: Application, character: Entity) {
  app.ticker.add(() => {
    for (let sprite of _watchingSprites) {
      if (
        character.x > sprite.x - collisionDistance &&
        character.x < sprite.x + collisionDistance
      ) {
        _interactingSpritesSet.add(sprite?.name ?? "");
      } else {
        _interactingSpritesSet.delete(sprite?.name ?? "");
      }
    }
  });
}

export function registerInteraction(obj: Entity) {
  _watchingSprites.push(obj);
}

export function getInteractingEntitySet() {
  return new Set(_interactingSpritesSet);
}
