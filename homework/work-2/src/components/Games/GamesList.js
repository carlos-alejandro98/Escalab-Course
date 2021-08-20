import React from "react";
import Game from "./Game";

const GamesList = ({ games }) => (
  <div className="row">
    {games.map((game) => {
      console.log(game.title);
      const { id, title, thumbnail, genre, platform } = game;
      return (
        <Game
          key={id}
          title={title}
          thumbnail={thumbnail}
          genre={genre}
          platform={platform}
          id={id}
        />
      );
    })};
  </div>
);

export default GamesList;
