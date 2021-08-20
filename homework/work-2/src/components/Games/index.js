import React, { useContext } from "react";
import { GamesContext } from "../../context/GamesContext";
import GamesList from "./GamesList";
import ProgressBar from "../Common/ProgressBar";

const Games = () => {
  const { doneGames, games } = useContext(GamesContext);
  return (
    <div className="works" id="games">
      <div className="container">
        <div className="default-heading">
          <h2>Games</h2>
        </div>
        {doneGames ? (
          <GamesList games={games} />
        ) : <ProgressBar />
        }
      </div>
    </div>
  );
};

export default Games;
