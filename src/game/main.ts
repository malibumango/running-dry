import { Boot } from "./scenes/Boot";
import { GameOver } from "./scenes/GameOver";
import { Game as MainGame } from "./scenes/Game";
import { MainMenu } from "./menu/MainMenu";
import World from "./world/World";
import { AUTO, Game } from "phaser";
import { Preloader } from "./scenes/Preloader";

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config: Phaser.Types.Core.GameConfig = {
  type: AUTO,
  width: 1024,
  height: 768,
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
    key: "MainMenu",
    scene: MainMenu,
  },
  {
    key: "MainGame",
    scene: MainGame,
  },
  {
    key: "GameOver",
    scene: GameOver,
  },
  {
    key: "World",
    scene: World,
  },
];

const StartGame = (parent: string) => {
  return new Game({ ...config, parent });
};

export default StartGame;
