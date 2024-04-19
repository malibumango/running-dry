import StartGame from './main';
import { MainMenu } from './menu/MainMenu';
import World from './world/World';

export default class GameStateManager {
  private static _instance: GameStateManager;
  private game: Phaser.Game;

  private constructor() {
    console.log('build');
    this.game = StartGame('game-container');
  }

  private switchScene(currentScene: string, nextScene: string) {
    console.log('Moving from', currentScene, 'to', nextScene);
    //    this.game.scene.remove(currentScene);
    //    if (this.game.scene.getScene(nextScene)) {
    //      this.game.scene.add(nextScene, MainMenu);
    //    }
    this.game.scene.start(nextScene);
    console.log('Started');
  }

  public startGame(currentScene: string) {
    console.log(World.SCENE_KEY);
    this.switchScene(currentScene, World.SCENE_KEY);
  }

  public openMainMenu(currentScene: string) {
    this.switchScene(currentScene, MainMenu.SCENE_KEY);
  }

  createWorld() {
    return new World();
  }

  getGame() {
    return this.game;
  }

  public static getInstance() {
    if (!GameStateManager._instance) {
      GameStateManager._instance = new GameStateManager();
    }
    return GameStateManager._instance;
  }
}
