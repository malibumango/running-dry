import Placeable from "../Placeables";

export default abstract class Collidable implements Placeable {
  coordinate: Phaser.Math.Vector2;
  texture: Phaser.Textures.Texture;

  abstract render(): void;
  abstract unrender(): void;

  constructor(
    coordinate: Phaser.Math.Vector2,
    texture: Phaser.Textures.Texture
  ) {
    this.coordinate = coordinate;
    this.texture = texture;
  }
}
