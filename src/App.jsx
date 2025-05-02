import { useState } from "react";
import "./App.css";
import { useScoreboardStore } from "./store/useScoreboardStore";

function App() {
  const { players, addPlayer, incrementScore, decrementScore } = useScoreboardStore();
  const [name, setName] = useState("");



  return (
    <>
      <h3>Players Scores</h3>
      <div>
        <input type="text" placeholder="Player name..." onChange={(e)=> setName(e.target.value)} />
        <button onClick={()=> addPlayer(name)}>Add Player</button>
      </div>
      {players.map((player) => (
        <div>
          <p>
            {player.name}: {player.score}
          </p>
          <button onClick={()=> incrementScore(player.id)}>+1</button>
          <button onClick={()=> decrementScore(player.id)}>-1</button>
        </div>
      ))}
    </>
  );
}

export default App;
