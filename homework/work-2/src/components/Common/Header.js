import React from "react";
import logo from '../../assets/img/logo.png';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-default" role="navigation">
        <div className="container">
          <div className="navbar-header col-12 w-100">
            <a className="navbar-brand" href="/">
              <img className="img-responsive imgHeader" src={logo} alt="Logo" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
