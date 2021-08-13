import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/animals.svg";

import "bootstrap/dist/css/bootstrap.css";

import "./header.styles.scss";


const Header = () => {
  return (
    <div className="header d-flex flex-wrap">
      <div className="col-6 mt-4">
        <Link to="/">
          <Logo className="logo" />
        </Link>
      </div>
      <div className="col-6 align-self-center second-logo-header">
        <Link to="/mascotas">
          VER MASCOTAS
        </Link>
      </div>
    </div>
  );
};

export default Header;
