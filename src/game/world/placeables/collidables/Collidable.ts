import Placeable from "../Placeables";

export default abstract class Collidable implements Placeable {
  origin: Phaser.Math.Vector2;
  texture: string;
  group: Phaser.Physics.Arcade.StaticGroup;

  abstract render(): void;
  abstract unrender(): void;

  constructor(
    origin: Phaser.Math.Vector2,
    texture: string,
    group: Phaser.Physics.Arcade.StaticGroup
  ) {
    this.origin = origin;
    this.texture = texture;
    this.group = group;
  }
}
