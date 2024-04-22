import Movement from './movement';

export default class Controls {
  private movement: Movement;
  private inputManager: Phaser.Input.InputManager;

  constructor(inputManager: Phaser.Input.InputManager) {
    this.movement = new Movement();
    this.inputManager = inputManager;
    this.setupInputManager();
  }

  setupInputManager() {
    const keyBoardManager = this.inputManager.keyboard;
    keyBoardManager.addCapture('S,A,D,E,SPACE,SHIFT,ESC');

    this.inputManager.keyboard.createCursorKeys();

    keyboardManager.onKeyDown = (event) => this.handleKey(event, true);
    keyboardManager.onKeyUp = (event) => this.handleKey(event, false);
  }

  handleKey(event, state) {
    const keyName = event.key;
    if (keyName === 'S') {
      this.movement.slide.triggered = state;
    }
    if (keyName === 'A') {
      this.movement.left.triggered = state;
    }
    if (keyName === 'D') {
      this.movement.right.triggered = state;
    }
    if (keyName === 'E') {
      this.movement.use.triggered = state;
    }
    if (keyName === 'SPACE') {
      this.movement.jump.triggered = state;
    }
    if (keyName === 'SHIFT') {
      this.movement.run.triggered = state;
    }
    if (keyName === 'ESC') {
      this.movement.pause.triggered = state;
    }
  }

  getMovement() {
    return this.movement;
  }
}
