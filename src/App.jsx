import { useState } from "react";
import "./App.css";
import { useScoreboardStore } from "./store/useScoreboardStore";

function App() {
  const { players, addPlayer, incrementScore, decrementScore, removePlayer } = useScoreboardStore();
  const [name, setName] = useState("");

  return (
    <>
      <h3>Players Scores</h3>
      <div>
        <input type="text" placeholder="Player name..." onChange={(e)=> setName(e.target.value)} />
        <button onClick={()=> addPlayer(name)}>Add Player</button>
      </div>
      {players.map((player) => (
        <div key={player.id}>
          <p>
            {player.name}: {player.score}
          </p>
          <button onClick={()=> incrementScore(player.id)}>+1</button>
          <button onClick={()=> decrementScore(player.id)}>-1</button>
          <button onClick={()=> removePlayer(player.id)}>Remove Player</button>
        </div>
      ))}
    </>
  );
}

export default App;
