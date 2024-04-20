import { GameObjects, Scene } from "phaser";
import { EventBus } from "../EventBus";

const PADDING = 20;

export const DEFAULT_STYLE = {
  fontFamily: "Arial Black",
  fontSize: 38,
  color: "#ffffff",
  stroke: "#000000",
  strokeThickness: 4,
  align: "center",
};

export const DEFAULT_TITLE = {
  fontFamily: "Arial Black",
  fontSize: 38,
  color: "#ffffff",
  stroke: "#000000",
  strokeThickness: 8,
  align: "center",
};

export type MenuPointSettings = {
  title: string;
  textStyle?: Phaser.Types.GameObjects.Text.TextStyle;
  origin: number;
  depth: number;
  onClick?: () => void;
};

export default class Menu extends Scene {
  background: GameObjects.Image | undefined;
  backgroundPath: string;
  title: string;
  startGame: GameObjects.Text | undefined;
  logoTween: Phaser.Tweens.Tween | null | undefined;

  public menuPoints: MenuPointSettings[] = [];

  constructor(sceneName: string, backgroundPath: string, title?: string) {
    super(sceneName);
    this.title = title || "";
    this.backgroundPath = backgroundPath;
  }

  protected addTitle() {
    return this.add
      .text(512, 460, this.title, DEFAULT_TITLE)
      .setOrigin(0.5)
      .setDepth(100);
  }

  protected addMenuPoint(
    menuPointSettings: MenuPointSettings,
    position: Phaser.Math.Vector2
  ) {
    const menuPoint = this.add
      .text(
        position.x,
        position.y,
        menuPointSettings.title,
        menuPointSettings.textStyle
          ? menuPointSettings.textStyle
          : DEFAULT_STYLE
      )
      .setOrigin(menuPointSettings.origin)
      .setDepth(menuPointSettings.depth);

    if (menuPointSettings.onClick) {
      menuPoint.setInteractive();
      menuPoint.on("pointerdown", () => {
        menuPointSettings.onClick && menuPointSettings.onClick();
      });
    }
  }

  addAllMenuPoints() {
    if (this.menuPoints && this.menuPoints.length > 0) {
      const oldPosition = new Phaser.Math.Vector2(500, 500);
      this.menuPoints.forEach((menuPoint) => {
        if (!menuPoint.textStyle) {
          menuPoint.textStyle = DEFAULT_STYLE;
        }
        this.addMenuPoint(menuPoint, oldPosition);
        oldPosition.y += 38 + PADDING;
      });
    }
  }

  create() {
    this.background = this.add.image(512, 384, this.backgroundPath);

    if (this.title) {
      this.addTitle();
    }
    EventBus.emit("current-scene-ready", this);
  }
}
