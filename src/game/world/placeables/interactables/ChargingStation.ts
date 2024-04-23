import Interactable from "./InteractiveObject";

export default class ChargeStation extends Interactable {
  constructor(coordinate: Phaser.Math.Vector2, texture: string, scene: Phaser.Scene) {
    super(coordinate, texture, scene);
  }

  render() {}
  unrender() {}
}
