import { forwardRef, useLayoutEffect, useRef } from 'react';
import GameStateManager from './GameStateManager';

export interface IRefPhaserGame {
  game: Phaser.Game | null;
}

interface IProps {}

export const PhaserReactApi = forwardRef<IRefPhaserGame, IProps>(
  function PhaserGame({}, ref) {
    const game = useRef<Phaser.Game | null>(null!);

    useLayoutEffect(() => {
      console.log('Layout Effect');
      if (game.current === null) {
        const gameState = GameStateManager.getInstance();
        game.current = gameState.getGame();
        console.log('game is', game, game.current);
        console.log('ref is', ref);

        if (typeof ref === 'function') {
          ref({ game: game.current });
        } else if (ref) {
          ref.current = { game: game.current };
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
