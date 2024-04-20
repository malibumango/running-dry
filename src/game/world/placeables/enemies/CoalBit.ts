import Enemy from "./Enemy";

export default class CoalBit extends Enemy {
  constructor(coordinate: Phaser.Math.Vector2, texture: string, scene: Phaser.Scene) {
    super(coordinate, texture, scene);
  }

  render() {}
  unrender() {}
}
