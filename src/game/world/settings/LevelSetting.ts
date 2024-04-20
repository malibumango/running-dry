type Dimensions = {
  origin: Phaser.Math.Vector2;
  area: Phaser.Math.Vector2;
};

export default class LevelSetting {
  // Dummy platform create
  public platform: Dimensions;
  public spawnPoint: Phaser.Math.Vector2;
  public backgroundPath: string | undefined;
  public backgroundMusicPath: string | undefined;
  public completed: boolean = false;

  public chargingStations: Phaser.Math.Vector2[];

  constructor() {
    console.debug("Created");
    this.platform = {
      origin: new Phaser.Math.Vector2(0, 1),
      area: new Phaser.Math.Vector2(10, 1),
    };

    this.spawnPoint = new Phaser.Math.Vector2(1, 2);

    this.chargingStations = [
      new Phaser.Math.Vector2(5, 1),
      new Phaser.Math.Vector2(10, 1),
    ];
  }
}
