const base_url = "https://free-to-play-games-database.p.rapidapi.com/api/games";
const filter_id = "&game_id=";
const api_key = "?rapidapi-key=6c11314079msh55ef69e7aff5242p173d6djsn1817dfc9659c";


export const gamesGet = () => `${base_url}${ api_key }`;
export const gamesGetById = game_id => `${base_url}${ api_key }${ filter_id }${ game_id }`;