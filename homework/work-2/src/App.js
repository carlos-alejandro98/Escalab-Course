import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import GamesContextProvider from "./context/GamesContext";

import "./assets/css/bootstrap.css";
import "./assets/css/style.css";
import Banner from "./components/Common/Banner";
import Footer from "./components/Common/Footer";

import DetailGame from './components/DetailsGame';
import Header from "./components/Common/Header";
import Games from "./components/Games";
import DetailsGamesContextProvider from "./context/DetailsGamesContext";
import NotFound from "./components/NotFound";

const App = () => (
    <BrowserRouter className="wrapper">
      <Header />
      <Banner />
      <Switch>
        <Route exact path="/">
          <GamesContextProvider>
            <Games />
          </GamesContextProvider>
        </Route>
        <Route path="/game/:game_id">
          <DetailsGamesContextProvider>
            <DetailGame />
          </DetailsGamesContextProvider>
        </Route>
        <Route component={NotFound} />
      </Switch>

      <Footer />
    </BrowserRouter>
)

export default App;
