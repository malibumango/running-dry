import { GameObjects, Scene } from 'phaser';

export const DEFAULT_STYLE = {
  fontFamily: 'Arial Black',
  fontSize: 38,
  color: '#ffffff',
  stroke: '#000000',
  strokeThickness: 4,
  align: 'center',
};

export type MenuPointSettings = {
  title: string;
  textStyle?: Phaser.Types.GameObjects.Text.TextStyle;
  origin: number;
  depth: number;
};

export default class Menu extends Scene {
  background: GameObjects.Image;
  backgroundPath: string;
  title: string;
  startGame: GameObjects.Text;
  logoTween: Phaser.Tweens.Tween | null;

  constructor(sceneName: string, title: string, backgroundPath: string) {
    super(sceneName);
    this.title = title;
    this.backgroundPath = backgroundPath;
  }

  protected addTitle() {
    return this.add
      .text(512, 460, this.title, {
        fontFamily: 'Arial Black',
        fontSize: 38,
        color: '#ffffff',
        stroke: '#000000',
        strokeThickness: 8,
        align: 'center',
      })
      .setOrigin(0.5)
      .setDepth(100);
  }

  protected addMenuPoint(
    menuPointSettings: MenuPointSettings,
    position: Phaser.Math.Vector2,
    onClick?: () => void,
  ) {
    const startGame = this.add
      .text(
        position.x,
        position.y,
        menuPointSettings.title,
        menuPointSettings.textStyle
          ? menuPointSettings.textStyle
          : DEFAULT_STYLE,
      )
      .setOrigin(menuPointSettings.origin)
      .setDepth(menuPointSettings.depth);

    if (onClick) {
      startGame.setInteractive();
      startGame.on('pointerdown', () => {
        onClick();
      });
    }
  }

  create() {
    this.background = this.add.image(512, 384, this.backgroundPath);

    this.addTitle();
  }
}
