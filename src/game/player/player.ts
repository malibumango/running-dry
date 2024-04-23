import Movement from "./movement";

const DEFAULT_MOVE_SPEED = 50;

export default class Player {
  private maxEnergy: number;
  private currentEnergy: number;
  private sprite: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody | undefined;

  constructor(maxEnergy: number, currentEnergy: number) {
    this.maxEnergy = maxEnergy;
    this.currentEnergy = currentEnergy;
  }

  public subtractMaxEnergy(diff: number) {
    this.maxEnergy -= diff;
  }

  public applyMovement(move: Movement) {
    if (this.sprite) {
      const { left, right, crouch, jump, run } = move;
      let moveSpeed = DEFAULT_MOVE_SPEED;
      if (run) {
        moveSpeed *= 2;
      }
      if (left) {
        this.sprite.setVelocityX(-moveSpeed);
        this.sprite.anims.play("left", true);
      } else if (right) {
        this.sprite.setVelocityX(moveSpeed);
        this.sprite.anims.play("right", true);
      }
      if (crouch && jump) {
        this.sprite.setVelocityX(-2 * moveSpeed);
      }
      if (jump) {
        this.sprite.setVelocityY(-moveSpeed);
      }
    }
  }

  public loadSprite(physics: Phaser.Physics.Arcade.ArcadePhysics) {
    this.sprite = physics.add.sprite(32, 32, "batteryBoy");

    this.sprite.anims.create({
      key: "left",
      frames: this.sprite.anims.generateFrameNumbers("batteryBoy", {
        start: 0,
        end: 3,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.sprite.anims.create({
      key: "turn",
      frames: [{ key: "batteryBoy", frame: 3 }],
      frameRate: 20,
    });

    this.sprite.anims.create({
      key: "right",
      frames: this.sprite.anims.generateFrameNumbers("batteryBoy", {
        start: 4,
        end: 7,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.sprite.setBounce(0.2);
    this.sprite.setCollideWorldBounds(true);
    return this.sprite;
  }
}
