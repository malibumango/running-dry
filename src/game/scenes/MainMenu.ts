import { GameObjects, Scene } from 'phaser';

import { EventBus } from '../EventBus';

export class MainMenu extends Scene {
  background: GameObjects.Image;
  logo: GameObjects.Image;
  title: GameObjects.Text;
  startGame: GameObjects.Text;
  logoTween: Phaser.Tweens.Tween | null;

  constructor() {
    super('MainMenu');
  }

  create() {
    this.background = this.add.image(512, 384, 'background');

    this.logo = this.add.image(512, 300, 'logo').setDepth(100);

    this.title = this.add
      .text(512, 460, 'Main Menu', {
        fontFamily: 'Arial Black',
        fontSize: 38,
        color: '#ffffff',
        stroke: '#000000',
        strokeThickness: 8,
        align: 'center',
      })
      .setOrigin(0.5)
      .setDepth(100);

    const startGame = this.add
      .text(512, 560, 'Start Game', {
        fontFamily: 'Arial Black',
        fontSize: 38,
        color: '#ffffff',
        stroke: '#000000',
        strokeThickness: 4,
        align: 'center',
      })
      .setOrigin(0.5)
      .setDepth(100);

    startGame.setInteractive();

    startGame.on('pointerdown', () => {
      this.changeSceneToGame();
    });

    const endGame = this.add
      .text(512, 600, 'End Game', {
        fontFamily: 'Arial Black',
        fontSize: 38,
        color: '#ffffff',
        stroke: '#000000',
        strokeThickness: 4,
        align: 'center',
      })
      .setOrigin(0.5)
      .setDepth(100);

    endGame.setInteractive();

    endGame.on('pointerdown', () => {
      this.changeSceneToGame();
    });

    EventBus.emit('current-scene-ready', this);
  }

  stopTween() {
    if (this.logoTween) {
      this.logoTween.stop();
      this.logoTween = null;
    }
  }

  changeSceneToGameOver() {
    this.stopTween();
    this.scene.start('GameOver');
  }

  changeSceneToGame() {
    this.stopTween();
    this.scene.start('Game');
  }

  moveLogo(vueCallback: ({ x, y }: { x: number; y: number }) => void) {
    if (this.logoTween) {
      if (this.logoTween.isPlaying()) {
        this.logoTween.pause();
      } else {
        this.logoTween.play();
      }
    } else {
      this.logoTween = this.tweens.add({
        targets: this.logo,
        x: { value: 750, duration: 3000, ease: 'Back.easeInOut' },
        y: { value: 80, duration: 1500, ease: 'Sine.easeOut' },
        yoyo: true,
        repeat: -1,
        onUpdate: () => {
          if (vueCallback) {
            vueCallback({
              x: Math.floor(this.logo.x),
              y: Math.floor(this.logo.y),
            });
          }
        },
      });
    }
  }
}
