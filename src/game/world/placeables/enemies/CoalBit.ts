import Enemy from "./Enemy";

export default class CoalBit extends Enemy {
  constructor(
    coordinate: Phaser.Math.Vector2,
    texture: Phaser.Textures.Texture
  ) {
    super(coordinate, texture);
  }

  render() {}

  unrender() {}
}
