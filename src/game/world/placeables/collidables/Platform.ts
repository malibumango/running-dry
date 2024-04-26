import { SPRITE_SIZE_X, SPRITE_SIZE_Y } from "../../../GameStateManager";
import Collidable from "./Collidable";

export default class Platform extends Collidable {
  private dimension: Phaser.Math.Vector2;
  private scene: Phaser.Scene;

  constructor(origin: Phaser.Math.Vector2, texture: string, dimension: Phaser.Math.Vector2, scene: Phaser.Scene) {
    super(origin, texture);
    this.dimension = dimension;
    this.scene = scene;
  }

  render() {
    return this.scene.physics.add
      .staticImage(this.origin.x + this.dimension.x / 2, this.origin.y + this.dimension.y / 2, this.texture)
      .setScale(this.dimension.x / SPRITE_SIZE_X, this.dimension.y / SPRITE_SIZE_Y)
      .refreshBody();
  }

  unrender() {}
}
