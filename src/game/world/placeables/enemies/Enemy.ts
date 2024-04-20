import Placeable from "../Placeables";

export default abstract class Enemy implements Placeable {
  origin: Phaser.Math.Vector2;
  texture: string;

  abstract render(): void;
  abstract unrender(): void;

  constructor(origin: Phaser.Math.Vector2, texture: string) {
    this.origin = origin;
    this.texture = texture;
  }
}
