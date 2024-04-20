import InteractiveObject from "./InteractiveObject";

export default class ChargeStation extends InteractiveObject {
  constructor(
    coordinate: Phaser.Math.Vector2,
    texture: Phaser.Textures.Texture
  ) {
    super(coordinate, texture);
  }

  render() {}

  unrender() {}
}
