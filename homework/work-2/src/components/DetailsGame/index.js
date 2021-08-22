import React, { useContext } from "react";
import { DetailsGamesContext } from "../../context/DetailsGamesContext";

const DetailsGame = () => {
  const { doneFetchGameDetail, game } = useContext(DetailsGamesContext);
  return <p>Hello am DetailsGame</p>;
};

export default DetailsGame;