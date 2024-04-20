type Dimensions = {
  origin: Phaser.Math.Vector2;
  area: Phaser.Math.Vector2;
};

type DimensionsWithTexture = {
  origin: Phaser.Math.Vector2;
  scale: Phaser.Math.Vector2;
  texture: string;
};

export default class LevelSetting {
  // Dummy platform create
  public platforms: DimensionsWithTexture[];
  public spawnPoint: Phaser.Math.Vector2;
  public backgroundPath: string | undefined;
  public backgroundMusicPath: string | undefined;
  public completed: boolean = false;

  public chargingStations: Phaser.Math.Vector2[];

  constructor() {
    console.debug("Created");
    this.platforms = [
      {
        origin: new Phaser.Math.Vector2(1000, 300),
        scale: new Phaser.Math.Vector2(100, 1),
        texture: "sandMiddle",
      },
    ];

    this.spawnPoint = new Phaser.Math.Vector2(1, 2);

    this.chargingStations = [
      new Phaser.Math.Vector2(5, 1),
      new Phaser.Math.Vector2(10, 1),
    ];
  }
}
