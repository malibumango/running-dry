import { GameObjects } from 'phaser';
import { EventBus } from '../EventBus';
import Menu from './Menu';

export class MainMenu extends Menu {
  logo: GameObjects.Image;

  constructor() {
    super('MainMenu', 'Main Menu', 'background');
  }

  create() {
    this.logo = this.add.image(512, 300, 'logo').setDepth(100);

    const startGameSettings = {
      title: 'Start Game',
      textStyle: {
        fontFamily: 'Arial Black',
        fontSize: 38,
        color: '#ffffff',
        stroke: '#000000',
        strokeThickness: 4,
        align: 'center',
      },
      origin: 0.5,
      depth: 100,
    };

    const startPosition = new Phaser.Math.Vector2(512, 560);

    this.addMenuPoint(startGameSettings, startPosition, () => {
      this.changeSceneToGame();
    });

    const endGameSettings = {
      title: 'End Game',
      textStyle: {
        fontFamily: 'Arial Black',
        fontSize: 38,
        color: '#ffffff',
        stroke: '#000000',
        strokeThickness: 4,
        align: 'center',
      },
      origin: 0.5,
      depth: 100,
    };

    const endGamePosition = new Phaser.Math.Vector2(512, 620);

    this.addMenuPoint(endGameSettings, endGamePosition, () => {
      this.changeSceneToGame();
    });

    EventBus.emit('current-scene-ready', this);
  }

  changeSceneToGameOver() {
    this.scene.start('GameOver');
  }

  changeSceneToGame() {
    this.scene.start('Game');
  }
}
