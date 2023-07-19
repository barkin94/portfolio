import './style.css';
import { Application } from "pixi.js";

import { makeCharacter } from "./rendering/character-sprite";
import { makeReception } from "./rendering/reception";
import { initInteractionDetector, registerInteraction } from "./entities/interaction-detector";


(async () => {
  const app = new Application({
    width: visualViewport?.width,
    height: visualViewport?.height,
  });

  (globalThis as any).__PIXI_APP__ = app;
  const character = await makeCharacter(app);
  const reception = await makeReception(app);

  initInteractionDetector(app, character);
  registerInteraction(reception)

  document.body.appendChild(app.view as any);
})();
