import React from "react";

import "./animals.collection.styles.scss";

import "bootstrap/dist/css/bootstrap.css";

const AnimalsCollection = ({ name, weight, imageUrl }) => {
  return (
    <div className="collection-item d-flex">
      <img className="image" src={imageUrl} />
      <div className="collection-footer d-flex flex-wrap text-center">
        <span className="name">Raza: {name}</span>
        <span className="weight w-100">Peso: {weight}</span>
      </div>
    </div>
  );
};

export default AnimalsCollection;
