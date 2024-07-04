import StartGame, { sceneMap } from "./main";
import { MainMenu } from "./menu/MainMenu";
import { GameOverMenu } from "./menu/GameOverMenu";
import World from "./world/World";
import Controls from "./player/controls";
import Player from "./player/player";
import WorldSetting from "./world/settings/WorldSetting";
import { Scene } from "phaser";
import Movement from "./player/movement";

export const SPRITE_SIZE_X = 64;
export const SPRITE_SIZE_Y = 64;
export const MAX_ENERGY = 100;

export default class GameStateManager {
  private static _instance: GameStateManager;
  private game: Phaser.Game;
  private controls: Controls | undefined;
  private mfplayer: Player | undefined;
  private worldSettings: WorldSetting;

  private constructor() {
    this.game = StartGame("game-container");
    this.worldSettings = this.getWorldSettings();
    this.mfplayer = new Player(MAX_ENERGY, MAX_ENERGY);
  }

  /**
   * Dynamically loads and unloads a scene
   */
  private switchScene(currentScene: string, nextScene: string, customSettings?: any) {
    console.debug("Moving from", currentScene, "to", nextScene);
    // Remove current scene
    this.game.scene.remove(currentScene);
    // If we don't find the scene manager
    if (!this.game.scene.getScene(nextScene)) {
      // Search for the scene in our lookup table
      const sceneToLoad = sceneMap.filter((scene) => scene.key === nextScene)[0];
      // Add the scene to the scene manager
      this.game.scene.add(sceneToLoad.key, sceneToLoad.scene, true, customSettings);
    }
    // Start the scene
    this.game.scene.start(nextScene);
  }

  public startGame(currentScene: string) {
    this.switchScene(currentScene, World.SCENE_KEY, {
      world: this.worldSettings,
      onMovement: (move: Movement) => {
        // console.log(move);
        if (this.mfplayer) {
          this.mfplayer.applyMovement(move);
        }
      },
      mfplayer: this.mfplayer,
    });
  }

  public openMainMenu(currentScene: string) {
    this.switchScene(currentScene, MainMenu.SCENE_KEY);
  }

  public openGameOverMenu(currentScene: string) {
    this.switchScene(currentScene, GameOverMenu.SCENE_KEY);
  }

  getWorldSettings() {
    return new WorldSetting();
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
