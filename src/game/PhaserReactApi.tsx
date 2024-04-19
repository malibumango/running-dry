import { forwardRef, useLayoutEffect, useRef } from 'react';
import GameStateManager from './GameStateManager';

export interface IRefPhaserGame {
  game: Phaser.Game | null;
  scene: Phaser.Scene | null;
}

interface IProps {}

export const PhaserReactApi = forwardRef<IRefPhaserGame, IProps>(
  function PhaserGame({}, ref) {
    const game = useRef<Phaser.Game | null>(null!);

    useLayoutEffect(() => {
      if (game.current === null) {
        const gameState = GameStateManager.getInstance();
        game.current = gameState.getScene();

        if (typeof ref === 'function') {
          ref({ game: game.current, scene: null });
        } else if (ref) {
          ref.current = { game: game.current, scene: null };
        }
      }

      return () => {
        if (game.current) {
          game.current.destroy(true);
          if (game.current !== null) {
            game.current = null;
          }
        }
      };
    }, [ref]);

    return <div id="game-container"></div>;
  },
);
