import StartGame, { sceneMap } from "./main";
import { MainMenu } from "./menu/MainMenu";
import World from "./world/World";
import WorldSettings from "./world/settings/WorldSettings";

export default class GameStateManager {
    private static _instance: GameStateManager;
    private game: Phaser.Game;

    private worldSettings: WorldSettings;

    private constructor() {
        this.game = StartGame("game-container");
        this.worldSettings = this.getWorldSettings();
    }

    /**
     * Dynamically loads and unloads a scene
     */
    private switchScene(
        currentScene: string,
        nextScene: string,
        customSettings?: any
    ) {
        console.debug("Moving from", currentScene, "to", nextScene);
        this.game.scene.remove(currentScene);
        if (!this.game.scene.getScene(nextScene)) {
            const sceneToLoad = sceneMap.filter(
                (scene) => scene.key === nextScene
            )[0];
            console.debug("Custom settings are", customSettings);
            this.game.scene.add(
                sceneToLoad.key,
                sceneToLoad.scene,
                true,
                customSettings
            );
        }
        this.game.scene.start(nextScene);
    }

    public startGame(currentScene: string) {
        this.switchScene(currentScene, World.SCENE_KEY, this.worldSettings);
    }

    public openMainMenu(currentScene: string) {
        this.switchScene(currentScene, MainMenu.SCENE_KEY);
    }

    getWorldSettings() {
        return new WorldSettings();
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

