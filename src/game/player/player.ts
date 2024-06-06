import Movement from "./movement";

const DEFAULT_MOVE_SPEED = 100;
const SPRITE_SIZE = 64;

export default class Player {
  private maxEnergy: number;
  private currentEnergy: number;
  public sprite: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody | undefined;
  public canJump: boolean = false;
  private isCrouching: boolean = false;

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
        this.sprite.flipX = true;
        this.sprite.anims.play("left", true);
      } else if (right) {
        this.sprite.setVelocityX(moveSpeed);
        this.sprite.flipX = false;
        this.sprite.anims.play("right", true);
      } else {
        this.sprite.setVelocityX(0);
      }
      if (crouch && jump) {
        this.sprite.setVelocityX(4 * moveSpeed);
        this.sprite.stop();
      }
      if (crouch && this.canJump) {
        if (!this.isCrouching) {
          this.isCrouching = true;
          this.sprite.scaleY = 0.5;
          this.sprite.y += SPRITE_SIZE / 4;
        }
      } else {
        if (this.isCrouching) {
          this.isCrouching = false;
          this.sprite.scaleY = 1;
          this.sprite.y -= SPRITE_SIZE / 4;
        }
      }
      if (!crouch && jump && this.canJump) {
        this.canJump = false;
        this.sprite.setVelocityY(-moveSpeed * 3);
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
      repeat: 0,
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
        end: 1,
      }),
      frameRate: 10,
      repeat: 0,
    });

    this.sprite.setBounce(0.2);
    this.sprite.setCollideWorldBounds(true, 0.4, 0.5, true);

    return this.sprite;
  }
}
