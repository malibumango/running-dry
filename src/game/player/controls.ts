import { Input } from "phaser";
import Movement from "./movement";

export default class Controls {
  private movement: Movement;
  private inputPlugin: Phaser.Input.InputPlugin;

  constructor(inputPlugin: Phaser.Input.InputPlugin) {
    console.log("Key down", inputPlugin);
    this.movement = new Movement();
    this.inputPlugin = inputPlugin;
    this.setupInputManager();
  }

  setupInputManager() {
    const keyBoardPlugin = this.inputPlugin.keyboard
      ? this.inputPlugin.keyboard
      : new Input.Keyboard.KeyboardPlugin(this.inputPlugin);
    keyBoardPlugin.addCapture("W,S,A,D,E,SPACE,Shift,Escape");

    keyBoardPlugin.on("keydown", (event: KeyboardEvent) => {
      this.handleKey(event, true);
    });

    keyBoardPlugin.on("keyup", (event: any) => {
      this.handleKey(event, false);
    });
  }

  handleKey(event: KeyboardEvent, state: boolean) {
    const keyName = event.key;
    if (keyName === "w") {
      this.movement.up = state;
    }
    if (keyName === "s") {
      this.movement.crouch = state;
    }
    if (keyName === "a") {
      this.movement.left = state;
    }
    if (keyName === "d") {
      this.movement.right = state;
    }
    if (keyName === "e") {
      this.movement.use = state;
    }
    if (event.code === "Space") {
      this.movement.jump = state;
    }
    if (keyName === "Shift") {
      this.movement.run = state;
    }
    if (keyName === "Escape") {
      this.movement.pause = state;
    }
  }

  getMovement() {
    return this.movement;
  }
}
