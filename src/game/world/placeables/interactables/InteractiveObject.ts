import Placeable from "../Placeables";

export default abstract class InteractiveObject implements Placeable {
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
