import Movement from "./movement";

export default class Player {
  private maxEnergy: number;
  private currentEnergy: number;

  constructor(maxEnergy: number, currentEnergy: number) {
    this.maxEnergy = maxEnergy;
    this.currentEnergy = currentEnergy;
  }

  public subtractMaxEnergy(diff: number) {
    this.maxEnergy -= diff;
  }

  public applyMovement(move: Movement) {
    // do movemento
  }
}
