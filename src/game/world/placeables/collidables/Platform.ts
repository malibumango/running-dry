import Collidable from "./Collidable";

export default class Platform extends Collidable {
  constructor(
    coordinate: Phaser.Math.Vector2,
    texture: Phaser.Textures.Texture
  ) {
    super(coordinate, texture);
  }

  render() {}

  unrender() {}
}
