import Placeable from "../Placeables";

export default abstract class Interactable implements Placeable {
  origin: Phaser.Math.Vector2;
  texture: string;
  scene: Phaser.Scene;

  abstract render(): void;
  abstract unrender(): void;

  constructor(origin: Phaser.Math.Vector2, texture: string, scene: Phaser.Scene) {
    this.origin = origin;
    this.texture = texture;
    this.scene = scene;
  }
}
