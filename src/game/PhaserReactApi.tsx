import React, { useLayoutEffect, useState } from 'react';
import GameStateManager from './GameStateManager';

function PhaserReactApi() {
  const [game, setGame] = useState<Phaser.Game | null>(null!);

  useLayoutEffect(() => {
    if (game === null) {
      const gameState = GameStateManager.getInstance();
      setGame(gameState.getGame());
    }

    return () => {
      if (game) {
        game.destroy(true);
        if (game !== null) {
          setGame(null);
        }
      }
    };
  }, []);

  return <div id="game-container"></div>;
}

export default PhaserReactApi;
