const base_url = "https://free-to-play-games-database.p.rapidapi.com/api/games";
const base_filter = "https://free-to-play-games-database.p.rapidapi.com/api/game"
const filter_id = "&id=";
const api_key = "?rapidapi-key=6c11314079msh55ef69e7aff5242p173d6djsn1817dfc9659c";


export const gamesGet = () => `${base_url}${ api_key }`;
export const gamesGetById = (game_id) => `${base_filter}${ api_key }${ filter_id }${ game_id }`;