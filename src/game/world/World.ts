import { Scene } from "phaser";
import GameStateManager from "../GameStateManager";
import WorldSetting from "./settings/WorldSetting";
import Level from "./Level";
import Controls from "../player/controls";
import Movement from "../player/movement";
import Player from "../player/player";

export default class World extends Scene {
  public static SCENE_KEY = "World";

  private worldSettings: WorldSetting | undefined;

  private currentLevel: number;
  private controls: Controls | undefined;
  private mfplayer: Player | undefined;
  private levels: Array<Level> = [];

  private onMovement: ((movement: Movement) => void) | undefined;

  constructor() {
    super(World.SCENE_KEY);
    this.currentLevel = 0;
  }

  private returnToMainMenu() {
    this.add.text(100, 100, "No World Found. Returning to Main Menu...", {
      fontFamily: "Arial Black",
      fontSize: 38,
      color: "#ffffff",
      stroke: "#000000",
      strokeThickness: 4,
      align: "center",
    });
    setTimeout(() => {
      GameStateManager.getInstance().openMainMenu(World.SCENE_KEY);
    }, 3000);
  }

  getTotalChargeStations() {
    if (this.levels && this.levels !== undefined) {
      return this.levels.map((levels) => levels.getAmountChargeStations()).reduce((previous, now) => previous + now, 0);
    }
    return 0;
  }

  private loadLevel(levelToLoad: number) {
    // TODO
    const level = this.levels && this.levels[levelToLoad];
    level.renderLevel();
  }

  private loadNextLevel() {
    this.loadLevel(this.currentLevel);
    this.currentLevel += 1;
  }

  init(data: { world: WorldSetting; onMovement: (movement: Movement) => void; mfplayer: Player }) {
    console.debug("Data is", data);
    this.mfplayer = data.mfplayer;
    this.worldSettings = data.world;
    // TODO Might be dangerous when we game over
    this.worldSettings.level.forEach((levelSetting) => {
      this.levels.push(new Level(levelSetting, this, data.mfplayer));
    });
    this.controls = new Controls(this.input);
    this.onMovement = data.onMovement;
  }

  // Phaser internal method called each frame
  update() {
    if (this.controls && this.onMovement) {
      const move = this.controls.getMovement();
      this.onMovement(move);
    }
  }

  create() {
    if (!this.worldSettings || !(this.worldSettings instanceof WorldSetting)) {
      this.returnToMainMenu();
    }

    const text = this.add.text(0, 0, "Main Menu", {
      fontFamily: "Arial Black",
      fontSize: 38,
      color: "#ffffff",
      stroke: "#000000",
      strokeThickness: 4,
      align: "center",
    });
    text.setInteractive();
    text.on("pointerdown", () => {
      GameStateManager.getInstance().openMainMenu(World.SCENE_KEY);
    });

    this.mfplayer?.loadSprite(this.physics);

    this.loadNextLevel();
  }
}
