import StartGame from './main';
import World from './world/World';

export default class GameStateManager {
  private scene: Phaser.Game;

  constructor() {
    this.scene = StartGame('game-container');
  }

  createWorld() {
    return new World();
  }

  getScene() {
    return this.scene;
  }
}
