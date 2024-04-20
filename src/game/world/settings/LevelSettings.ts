type Dimensions = {
  origin: Phaser.Math.Vector2;
  area: Phaser.Math.Vector2;
};

export default class LevelSettings {
  // Dummy platform create
  public platform: Dimensions;

  constructor() {
    console.debug("Created");
    this.platform = {
      origin: new Phaser.Math.Vector2(0, 1),
      area: new Phaser.Math.Vector2(10, 1),
    };
  }
}
