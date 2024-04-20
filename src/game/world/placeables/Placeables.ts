export default interface Placeable {
  coordinate: Phaser.Math.Vector2;
  texture: Phaser.Textures.Texture;

  render(): void;
  unrender(): void;
}
