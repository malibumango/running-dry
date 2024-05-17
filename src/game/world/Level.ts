import { Scene } from "phaser";
import Interactable from "./placeables/interactables/InteractiveObject";
import LevelSetting from "./settings/LevelSetting";
import Collidable from "./placeables/collidables/Collidable";
import Enemy from "./placeables/enemies/Enemy";
import Platform from "./placeables/collidables/Platform";
import Player from "../player/player";

export default class Level {
  public interactives: Array<Interactable> = [];
  public collidables: Array<Collidable> = [];
  public enemies: Array<Enemy> = [];
  private levelSettings: LevelSetting;
  private platformGroup: Phaser.Physics.Arcade.StaticGroup | undefined;

  private scene: Scene;
  private mfplayer: Player;

  constructor(data: LevelSetting, scene: Scene, player: Player) {
    this.levelSettings = data;
    this.scene = scene;
    this.mfplayer = player;

    this.parseCollidables();
  }

  parseCollidables() {
    this.platformGroup = this.scene.physics.add.staticGroup({
      name: "platformGroup",
    });
    this.levelSettings.platforms.forEach((platformSetting, index) => {
      if (this.platformGroup) {
        const platform = new Platform(
          platformSetting.origin,
          platformSetting.texture,
          platformSetting.area,
          this.scene
        );
        // platform.name = `platform${index}`;
        this.collidables.push(platform);
      } else {
        console.error("No platform group found");
      }
    });
  }

  createCollidables() {
    const children: Phaser.Types.Physics.Arcade.ImageWithStaticBody[] = [];
    this.collidables.forEach((collidable) => {
      children.push(collidable.render());
    });

    this.platformGroup = this.scene.physics.add.staticGroup(children, {
      name: "platformGroup",
    });
    if (this.mfplayer.sprite && this.platformGroup) {
      this.scene.physics.add.collider(this.mfplayer.sprite, this.platformGroup, (context: any) => {
        let touchDown = false;
        if ("body" in context) {
          touchDown = (context as Phaser.Types.Physics.Arcade.GameObjectWithBody).body.touching.down;
        }
        if (touchDown) this.mfplayer.canJump = true;
        setTimeout(() => {
          this.mfplayer.canJump = false;
        }, 250);
      });
    }
  }
  createInteractables() {}
  createEnemies() {}

  getAmountChargeStations() {
    return this.levelSettings ? this.levelSettings.chargingStations.length : 0;
  }

  renderLevel() {
    this.createCollidables();
    this.createInteractables();
    this.createEnemies();
  }
}
