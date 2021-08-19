import React, { createContext, useState, useEffect } from "react";
import { gamesGet } from '../constants';

export const GamesContext = createContext();

const GamesContextProvider = ({children}) => {
    const [doneGames, setDoneGames] = useState(false);
    const [games, setGames] = useState([]);

    useEffect(() => getGames(), []);

    const getGames = () => {
        fetch(gamesGet())
            .then((res) => res.json())
            .then((data) => {
                setDoneGames(true);
                setGames(data);
            })
            .catch((err) => console.log(err));
    }

    return (
        <GamesContext.Provider value={{doneGames, games}}>
            {children}
        </GamesContext.Provider>
    );
};

export default GamesContextProvider;
