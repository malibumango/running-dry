import { useRef } from 'react';
import { IRefPhaserGame, PhaserReactApi } from './game/PhaserReactApi';

function App() {
  //  References to the PhaserGame component (game and scene are exposed)
  const phaserRef = useRef<IRefPhaserGame | null>(null);

  return (
    <div id="app">
      <PhaserReactApi ref={phaserRef} />
    </div>
  );
}

export default App;
