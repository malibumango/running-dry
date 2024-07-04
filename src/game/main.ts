import { Boot } from "./scenes/Boot";
import { MainMenu } from "./menu/MainMenu";
import { GameOverMenu } from "./menu/GameOverMenu";
import World from "./world/World";
import { AUTO, Game } from "phaser";
import { Preloader } from "./scenes/Preloader";

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config: Phaser.Types.Core.GameConfig = {
  type: AUTO,
  width: 1024,
  height: 768,
  scale: {
    // Fit to window
    mode: Phaser.Scale.FIT,
    // Center vertically and horizontally
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  parent: "game-container",
  backgroundColor: "#028af8",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { x: 0, y: 300 },
      debug: false,
    },
  },
  scene: [Boot, Preloader, MainMenu],
};

export const sceneMap = [
  {
    key: "Boot",
    scene: Boot,
  },
  {
    key: "Preloader",
    scene: Preloader,
  },
  {
    key: MainMenu.SCENE_KEY,
    scene: MainMenu,
  },
  {
    key: World.SCENE_KEY,
    scene: World,
  },
  {
    key: GameOverMenu.SCENE_KEY,
    scene: GameOverMenu,
  },
];

const StartGame = (parent: string) => {
  return new Game({ ...config, parent });
};

export default StartGame;
