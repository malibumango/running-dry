import Movement from './movement';

export default class Controls {
  private movement: Movement;
  private inputManager: Phaser.Input.InputManager;

  constructor(inputManager: Phaser.Input.InputManager) {
    console.log('Key down', inputManager);
    this.movement = new Movement();
    this.inputManager = inputManager;
    this.setupInputManager();
  }

  setupInputManager() {
    const keyBoardPlugin = this.inputManager.keyboard
      ? this.inputManager.keyboard
      : new Phaser.Input.Keyboard.KeyboardManager(this.inputManager);
    keyBoardPlugin.addCapture('W,S,A,D,E,SPACE,SHIFT,ESC');
    console.log('Key down', keyBoardPlugin);

      keyBoardPlugin.on('keydown', (event: KeyboardEvent)=> {
      console.log('Key up', event);
      this.handleKey(event, true);
    })

    keyBoardPlugin.on('keydown', (event: KeyboardEvent)=> {
      console.log('Key up', event);
      this.handleKey(event, false);
    })
  }

  handleKey(event: KeyboardEvent, state: boolean) {
    const keyName = event.key;
    if (keyName === 'W') {
      this.movement.up = state;
    }
    if (keyName === 'S') {
      this.movement.crouch = state;
    }
    if (keyName === 'A') {
      this.movement.left = state;
    }
    if (keyName === 'D') {
      this.movement.right = state;
    }
    if (keyName === 'E') {
      this.movement.use = state;
    }
    if (keyName === 'SPACE') {
      this.movement.jump = state;
    }
    if (keyName === 'SHIFT') {
      this.movement.run = state;
    }
    if (keyName === 'ESC') {
      this.movement.pause = state;
    }
  }

  getMovement() {
    return this.movement;
  }
}
