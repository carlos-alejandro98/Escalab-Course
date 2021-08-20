const cors_anywhere = "https://cors-anywhere.herokuapp.com/";
const base_url = "https://free-to-play-games-database.p.rapidapi.com/api/games";
const api_key = "?rapidapi-key=6c11314079msh55ef69e7aff5242p173d6djsn1817dfc9659c";


export const gamesGet = () => `${base_url}${ api_key }`;