import React from "react";

const Game = ({id, title, thumbnail, genre}) => {
  return (
      <div className="col-md-3">
        <div className="work-item">
          <img className="img-responsive" src={thumbnail} alt="" />
          <h3>
            <a href="#">{title}</a>
          </h3>
          <span className="org">{genre}</span>
        </div>
      </div>
  );
};

export default Game;
