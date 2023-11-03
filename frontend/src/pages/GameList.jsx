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
  console.log(games);
  return (
    <div>
      <h2>Games</h2>
      <div className="gamesGlobalList">
        {games.map((game) => (
          <GameCard
            key={game.produit_id}
            name={game.titre}
            description={game.description}
            releaseDate={game.date_sortie}
            console={game.plateforme}
            editor={game.editeur}
            disponibility={game.en_stock}
          />
        ))}
      </div>
    </div>
  );
}

export default GameList;
