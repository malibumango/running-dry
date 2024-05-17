import Placeable from "../Placeables";

export default abstract class Collidable implements Placeable {
  origin: Phaser.Math.Vector2;
  texture: string;

  abstract render(): Phaser.Types.Physics.Arcade.ImageWithStaticBody;
  abstract unrender(): void;

  constructor(origin: Phaser.Math.Vector2, texture: string) {
    this.origin = origin;
    this.texture = texture;
  }
}
