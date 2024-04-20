import { SPRITE_SIZE_X, SPRITE_SIZE_Y } from "../../../GameStateManager";
import Collidable from "./Collidable";

export default class Platform extends Collidable {
  private dimension: Phaser.Math.Vector2;

  constructor(origin: Phaser.Math.Vector2, texture: string, scene: Phaser.Scene, dimension: Phaser.Math.Vector2) {
    super(origin, texture, scene);
    this.dimension = dimension;
  }
  render() {
    // Group can take a config describing the classType which is usually a Sprite
    const platformGroup = this.scene.physics.add.staticGroup({
      name: "platformGroup",
      // classType: Phaser.GameObjects.Image,
    });

    const platform = platformGroup
      .create(this.origin.x + this.dimension.x / 2, this.origin.y + this.dimension.y / 2, this.texture)
      .setScale(this.dimension.x / SPRITE_SIZE_X, this.dimension.y / SPRITE_SIZE_Y)
      .refreshBody();
  }

  unrender() {}
}
