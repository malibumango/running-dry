export default interface Placeable {
  origin: Phaser.Math.Vector2;
  texture: string;

  render(): void;
  unrender(): void;
}
