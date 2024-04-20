import { GameObjects } from "phaser";
import Menu from "./Menu";
import GameStateManager from "../GameStateManager";

export class GameOverMenu extends Menu {
  static SCENE_KEY = "GameOverMenu";
  private logo: GameObjects.Image | undefined;

  constructor() {
    super(GameOverMenu.SCENE_KEY, "background", "Game Over Menu");
  }

  create() {
    this.logo = this.add.image(512, 300, "logo").setDepth(100);

    this.menuPoints.push({
      title: "Continue",
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
      title: "Restart",
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
      title: "End game",
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
        this.changeSceneToMainMenu();
      },
    });

    this.addAllMenuPoints();
  }
  changeSceneToMainMenu() {
    this.scene.start("MainMenu");
  }

  changeSceneToGame() {
    GameStateManager.getInstance().startGame(GameOverMenu.SCENE_KEY);
  }
}
