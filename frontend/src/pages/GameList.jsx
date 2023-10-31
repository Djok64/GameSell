import { useState, useEffect } from "react";
import GameApi from "../services/GameApi";
import GameCard from "../components/GameCard";

import "./GameList.css";

function GameList() {
  const [games, setGames] = useState([]);
  useEffect(() => {
    GameApi.get("/api/games")
      .then((res) => setGames(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h2>Games</h2>
      <div className="gamesGlobalList">
        {games.map((game) => (
          <GameCard
            key={game.id}
            name={game.name}
            description={game.description}
          />
        ))}
      </div>
    </div>
  );
}

export default GameList;
