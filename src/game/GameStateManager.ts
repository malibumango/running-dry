import StartGame, { sceneMap } from "./main";
import { MainMenu } from "./menu/MainMenu";
import { GameOverMenu } from "./menu/GameOverMenu";
import World from "./world/World";
import Controls from "./player/controls";
import Player from "./player/player";
import WorldSetting from "./world/settings/WorldSetting";
import { Scene } from "phaser";

export const SPRITE_SIZE_X = 64;
export const SPRITE_SIZE_Y = 64;
export const MAX_ENERGY = 100;

export default class GameStateManager {
  private static _instance: GameStateManager;
  private game: Phaser.Game;
  private controls: Controls | undefined;
  private mfplayer: Player | undefined;
  private currentScene: Scene | undefined;

  private worldSettings: WorldSetting;

  private constructor() {
    this.game = StartGame("game-container");
    this.worldSettings = this.getWorldSettings();
  }

  /**
   * Dynamically loads and unloads a scene
   */
  private switchScene(currentScene: string, nextScene: string, customSettings?: any) {
    console.debug("Moving from", currentScene, "to", nextScene);
    this.game.scene.remove(currentScene);
    if (!this.game.scene.getScene(nextScene)) {
      const sceneToLoad = sceneMap.filter((scene) => scene.key === nextScene)[0];
      console.debug("Custom settings are", customSettings);
      this.game.scene.add(sceneToLoad.key, sceneToLoad.scene, true, customSettings);
    }
    this.game.scene.start(nextScene, {
      enableControls: (scene: Scene) => {
        this.currentScene = scene;
        this.controls = new Controls(this.currentScene?.input);
        this.mfplayer = new Player(MAX_ENERGY, MAX_ENERGY);
        this.game.loop.callback = () => {
          if (this.controls && this.mfplayer) {
            const move = this.controls.getMovement();
            this.mfplayer.applyMovement(move);
          }
        };
      },
    });
  }

  public startGame(currentScene: string) {
    this.switchScene(currentScene, World.SCENE_KEY, this.worldSettings);
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
