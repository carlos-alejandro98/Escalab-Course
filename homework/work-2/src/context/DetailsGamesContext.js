import React, { createContext, useState, useEffect } from "react";
import { gamesGetById } from "./../constants";

export const DetailsGamesContext = createContext();

const DetailsGamesContextProvider = ({ children }) => {
  const game_id = window.location.pathname.split("/")[2];
  const [doneFetchGameDetail, setDoneFetchGameDetail] = useState(false);
  const [game, setGame] = useState([]);
  const [images, setImages] = useState([]);
  const [requirements, setRequirements] = useState([]);

  useEffect(() => {
    getDetailsGame(game_id);
  }, [game_id]);

  const getDetailsGame = (game_id) => {
    fetch(gamesGetById(game_id))
      .then((res) => res.json())
      .then((data) => {
        setDoneFetchGameDetail(true);
        !Array.isArray(data) && setGame(data);
        !Array.isArray(data) && setImages(data.screenshots);
        !Array.isArray(data) && setRequirements(data.minimum_system_requirements);
      })
      .catch((err) => console.log(err));
  };

  return(
      <DetailsGamesContext.Provider value={{ doneFetchGameDetail, game, images, requirements }}>
          {children}
      </DetailsGamesContext.Provider>
  );
};

export default DetailsGamesContextProvider;
