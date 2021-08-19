import React, { Fragment, useContext } from "react";
import { GamesContext } from "../../context/GamesContext";
import Games from "./Games";

const GamesIndex = () => {
  const { doneGames, games } = useContext(GamesContext);
  return (
    <div className="works" id="games">
      <div className="container">
        <div className="default-heading">
          <h2>Games</h2>
        </div>
        {doneGames ? (
          games.length ? (
            <Games games={games} />
          ) : null //<Message text={text} />
        ) : null //<ProgressBar />
        }
      </div>
    </div>
  );
};

export default GamesIndex;
