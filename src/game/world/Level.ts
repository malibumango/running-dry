import { Scene } from "phaser";
import InteractiveObject from "./placeables/interactables/InteractiveObject";
import LevelSetting from "./settings/LevelSetting";
import Collidable from "./placeables/collidables/Collidable";
import Enemy from "./placeables/enemies/Enemy";
import Platform from "./placeables/collidables/Platform";

export default class Level {
  public interactives: Array<InteractiveObject> = [];
  public collidables: Array<Collidable> = [];
  public enemies: Array<Enemy> = [];
  private levelSettings: LevelSetting;

  private scene: Scene;

  constructor(data: LevelSetting, scene: Scene) {
    this.levelSettings = data;
    this.scene = scene;

    this.parseCollidables();
  }

  parseCollidables() {
    this.levelSettings.platforms.forEach((platformSetting, index) => {
      const platform = new Platform(
        platformSetting.origin,
        platformSetting.texture,
        this.scene,
        platformSetting.scale
      );
      // platform.name = `platform${index}`;
      this.collidables.push(platform);
    });
  }

  createCollidabes() {
    this.collidables.forEach((collidable) => {
      collidable.render();
    });
  }
  createInteractables() {}
  createEnemies() {}

  getAmountChargeStations() {
    return this.levelSettings ? this.levelSettings.chargingStations.length : 0;
  }

  renderLevel() {
    this.createCollidabes();
    this.createInteractables();
    this.createEnemies();
  }
}
