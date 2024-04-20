import Collidable from "./Collidable";

export default class Platform extends Collidable {
  private dimension: Phaser.Math.Vector2;

  constructor(
    origin: Phaser.Math.Vector2,
    texture: string,
    scene: Phaser.Scene,
    dimension: Phaser.Math.Vector2
  ) {
    super(origin, texture, scene);
    this.dimension = dimension;
  }

  render() {
    // Group can take a config describing the classType which is usually a Sprite
    const platformGroup = this.scene.physics.add.staticGroup({
      name: "platformGroup",
    });

    (
      platformGroup.create(
        this.origin.x,
        this.origin.y,
        this.texture
      ) as Phaser.GameObjects.Sprite
    ).setScale(this.dimension.x, this.dimension.y);
  }

  unrender() {}
}
