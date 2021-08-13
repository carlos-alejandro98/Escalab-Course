import "./App.css";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import Animals from "./pages/animals/animals.component";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/mascotas" component={Animals} />
      </Switch>
    </>
  );
}

export default App;
