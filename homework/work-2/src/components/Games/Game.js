import React from "react";
import { Link } from "react-router-dom";

const Game = ({id, title, thumbnail, genre}) => {
  return (
      <div className="col-md-4">
        <div className="work-item">
          <img className="img-responsive" src={thumbnail} alt="" />
          <h3>
            <Link to={`/game/${id}`}>{title}</Link>
          </h3>
          <span className="org">{genre}</span>
        </div>
      </div>
  );
};

export default Game;
