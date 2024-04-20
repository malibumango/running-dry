import StartGame, { sceneMap } from './main';
import { MainMenu } from './menu/MainMenu';
import World from './world/World';

export default class GameStateManager {
  private static _instance: GameStateManager;
  private game: Phaser.Game;

  private constructor() {
    this.game = StartGame('game-container');
  }

  /**
   * Dynamically loads and unloads a scene
   */
  private switchScene(currentScene: string, nextScene: string) {
    console.debug('Moving from', currentScene, 'to', nextScene);
    this.game.scene.remove(currentScene);
    if (!this.game.scene.getScene(nextScene)) {
      const sceneToLoad = sceneMap.filter(
        (scene) => scene.key === nextScene,
      )[0];
      this.game.scene.add(sceneToLoad.key, sceneToLoad.scene);
    }
    this.game.scene.start(nextScene);
  }

  public startGame(currentScene: string) {
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
