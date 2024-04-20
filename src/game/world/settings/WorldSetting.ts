import LevelSetting from "./LevelSetting";

export default class WorldSetting {
  public level: LevelSetting[];

  constructor() {
    this.level = [new LevelSetting(), new LevelSetting(), new LevelSetting()];
  }
}
