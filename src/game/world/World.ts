import { EventBus } from '../EventBus';
import { Scene } from 'phaser';
import GameStateManager from '../GameStateManager';

export default class World extends Scene {
  public static SCENE_KEY = 'World';
  constructor() {
    super(World.SCENE_KEY);
  }

  create() {
    const background = this.add.image(512, 384, 'background');
    background.setAlpha(0.5);
    this.add.image(512, 400, 'logo').setDepth(100);
    EventBus.emit('current-scene-ready', this);

    const text = this.add.text(100, 100, 'foobar', {
      fontFamily: 'Arial Black',
      fontSize: 38,
      color: '#ffffff',
      stroke: '#000000',
      strokeThickness: 4,
      align: 'center',
    });
    text.setInteractive();
    text.on('pointerdown', () => {
      GameStateManager.getInstance().openMainMenu(World.SCENE_KEY);
    });
  }
}
