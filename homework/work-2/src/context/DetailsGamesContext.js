import React, { createContext, useState, useEffect } from "react";
import { gamesGetById } from "./../constants";

export const DetailsGamesContext = createContext();

const DetailsGamesContextProvider = ({ children }) => {
  const game_id = window.location.pathname.split("/")[3];
  const [doneFetchGameDetail, setDoneFetchGameDetail] = useState(false);
  const [game, setGame] = useState([]);

  useEffect(() => {
    getDetailsGame(game_id);
  }, [game_id]);

  const getDetailsGame = (game_id) => {
    fetch(gamesGetById(game_id))
      .then((res) => res.json())
      .then((data) => {
        setDoneFetchGameDetail(true);
        !Array.isArray(data) && setGame(data);
      })
      .catch((err) => console.log(err));
  };

  return(
      <DetailsGamesContext.Provider value={{ doneFetchGameDetail, game }}>
          {children}
      </DetailsGamesContext.Provider>
  );
};

export default DetailsGamesContextProvider;
