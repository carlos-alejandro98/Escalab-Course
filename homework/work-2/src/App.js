import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import GamesContextProvider from "./context/GamesContext";

import "./assets/css/bootstrap.css";
import "./assets/css/style.css";
import Banner from "./components/Common/Banner";
import Footer from "./components/Common/Footer";

import Header from "./components/Common/Header";
import Games from "./components/Games/Games";

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
      </Switch>

      <Footer />
    </BrowserRouter>
)

export default App;
