import { GameObjects } from "phaser";
import Menu from "./Menu";
import GameStateManager from "../GameStateManager";

export class MainMenu extends Menu {
  static SCENE_KEY = "MainMenu";
  private logo: GameObjects.Image | undefined;

  constructor() {
    super(MainMenu.SCENE_KEY, "background", "Main Menu");

    this.menuPoints.push({
      title: "Start Game",
      textStyle: {
        fontFamily: "Arial Black",
        fontSize: 38,
        color: "#ffffff",
        stroke: "#000000",
        strokeThickness: 4,
        align: "center",
      },
      origin: 0.5,
      depth: 100,
      onClick: () => {
        this.changeSceneToGame();
      },
    });

    this.menuPoints.push({
      title: "Credits",
      textStyle: {
        fontFamily: "Arial Black",
        fontSize: 38,
        color: "#ffffff",
        stroke: "#000000",
        strokeThickness: 4,
        align: "center",
      },
      origin: 0.5,
      depth: 100,
      onClick: () => {
        this.changeSceneToGameOverMenu();
      },
    });

    this.menuPoints.push({
      title: "Options",
      textStyle: {
        fontFamily: "Arial Black",
        fontSize: 38,
        color: "#ffffff",
        stroke: "#000000",
        strokeThickness: 4,
        align: "center",
      },
      origin: 0.5,
      depth: 100,
      onClick: () => {
        this.changeSceneToGameOverMenu();
      },
    });
  }

  create() {
    this.logo = this.add.image(512, 300, "logo").setDepth(100);
    this.addAllMenuPoints();
  }

  changeSceneToGameOverMenu() {
    GameStateManager.getInstance().openGameOverMenu(MainMenu.SCENE_KEY);
  }

  changeSceneToGame() {
    GameStateManager.getInstance().startGame(MainMenu.SCENE_KEY);
  }
}
