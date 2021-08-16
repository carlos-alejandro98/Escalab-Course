import React from "react";

import "./assets/css/bootstrap.css";
import "./assets/css/style.css";
import Banner from "./components/Common/Banner";
import Footer from "./components/Common/Footer";

import Header from "./components/Common/Header";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Banner />

      

      <Footer />
    </div>
  );
}

export default App;
