import React, { Fragment, useContext } from "react";
import { GamesContext } from "../../context/GamesContext";
import GamesList from "./GamesList";

const Games = () => {
  const { doneGames, games } = useContext(GamesContext);
  return (
    <div className="works" id="games">
      <div className="container">
        <div className="default-heading">
          <h2>Games</h2>
        </div>
        {doneGames ? (
          games.length ? (
            <GamesList games={games} />
          ) : null //<Message text={text} />
        ) : null //<ProgressBar />
        }
      </div>
    </div>
  );
};

export default Games;
