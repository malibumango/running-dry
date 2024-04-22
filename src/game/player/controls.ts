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
    keyBoardPlugin.addCapture("W,S,A,D,E,SPACE,SHIFT,ESC");
    console.log("Key down", keyBoardPlugin);

    keyBoardPlugin.on("keydown", (event: KeyboardEvent) => {
      console.log("Key up", event);
      this.handleKey(event, true);
    });

    keyBoardPlugin.on("keydown", (event: KeyboardEvent) => {
      console.log("Key up", event);
      this.handleKey(event, false);
    });
  }

  handleKey(event: KeyboardEvent, state: boolean) {
    const keyName = event.key;
    if (keyName === "W") {
      this.movement.up = state;
    }
    if (keyName === "S") {
      this.movement.crouch = state;
    }
    if (keyName === "A") {
      this.movement.left = state;
    }
    if (keyName === "D") {
      this.movement.right = state;
    }
    if (keyName === "E") {
      this.movement.use = state;
    }
    if (keyName === "SPACE") {
      this.movement.jump = state;
    }
    if (keyName === "SHIFT") {
      this.movement.run = state;
    }
    if (keyName === "ESC") {
      this.movement.pause = state;
    }
  }

  getMovement() {
    return this.movement;
  }
}
