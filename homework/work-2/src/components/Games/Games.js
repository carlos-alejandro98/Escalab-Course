import React from "react";
import Game from "./Game";

const Games = ({ games }) => {
  console.log(games);
  <>
  {games.map((game) => {
      const { id, title, thumbnail, genre, platform } = game;
      return (
        <Game
          key={id}
          title={title}
          thumbnail={thumbnail}
          genre={genre}
          platform={platform}
        />
      );
    })};
  </>
};

export default Games;
