import { Scene } from "phaser";
import GameStateManager from "../GameStateManager";
import WorldSettings from "./settings/WorldSettings";

export default class World extends Scene {
  public static SCENE_KEY = "World";

  private worldSettings: WorldSettings | undefined;

  constructor() {
    super(World.SCENE_KEY);
  }

  private returnToMainMenu() {
    this.add.text(100, 100, "No World Found. Click to go back to Main Menu", {
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

  init(data: WorldSettings) {
    this.worldSettings = data;
  }

  create() {
    console.debug("data is", this.worldSettings);

    if (!this.worldSettings || !(this.worldSettings instanceof WorldSettings)) {
      this.returnToMainMenu();
    }

    const text = this.add.text(100, 100, "foobar", {
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
  }
}
