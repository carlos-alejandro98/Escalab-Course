import React from "react";
import "../assets/static/images/error.png";
import errorImage from "../assets/styles/components/Error.scss";

const Error = () => (
  <div className="error">
    <img className="error-img" src={errorImage} alt="Morty scared" />
    <span className="error-text">Sorry, an error has ocurred.</span>
  </div>
);

export default Error;
