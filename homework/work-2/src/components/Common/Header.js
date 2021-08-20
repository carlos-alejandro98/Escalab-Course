import React from "react";
import logo from '../../assets/img/logo.png';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-default" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              <img className="img-responsive" src={logo} alt="Logo" />
            </a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1" >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#games">Games</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
