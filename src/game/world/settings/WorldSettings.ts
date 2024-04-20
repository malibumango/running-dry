import LevelSettings from "./LevelSettings";

export default class WorldSettings {
  public level: LevelSettings[];

  constructor() {
    this.level = [
      new LevelSettings(),
      new LevelSettings(),
      new LevelSettings(),
    ];
  }
}
