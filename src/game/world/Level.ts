import InteractiveObject from "./placeables/interactables/InteractiveObject";
import LevelSetting from "./settings/LevelSetting";

export default class Level {
  public interactives: Array<InteractiveObject> | undefined;
  private levelSettings: LevelSetting | undefined;

  constructor() {}

  init(data: LevelSetting) {
    this.levelSettings = data;
  }

  getAmountChargeStations() {
    return this.levelSettings ? this.levelSettings.chargingStations.length : 0;
  }

  create() {}
}
