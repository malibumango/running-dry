import { useRef } from 'react';
import { IRefPhaserGame, GameStateManager } from './game/GameStateManager';

function App() {
  //  References to the PhaserGame component (game and scene are exposed)
  const phaserRef = useRef<IRefPhaserGame | null>(null);

  return (
    <div id="app">
      <GameStateManager ref={phaserRef} />
    </div>
  );
}

export default App;
