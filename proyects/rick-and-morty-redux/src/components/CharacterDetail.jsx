import React from "react";
import "../assets/styles/components/CharacterDetail.scss";

const CharacterDetail = (props) => {
  const { data } = props;
  const { image, name, status, species, gender, origin, location, episode } =
    data;

  return (
    <div className="characterDetail">
      <img className="character-detail-img" src={image} alt={name} />
      <div className="characterDetail__container">
        <h2 className="characterDetail-name">{name}</h2>
        <p className="characterDetail__item">
          <span className="characterDetail__item-type">Status: </span> {status}
        </p>
        <p className="characterDetail__item">
          <span className="characterDetail__item-type">Species: </span>{" "}
          {species}
        </p>
        <p className="characterDetail__item">
          <span className="characterDetail__item-type">gender: </span> {gender}
        </p>
        <p className="characterDetail__item">
          <span className="characterDetail__item-type">Origin: </span>{" "}
          {origin.name}
        </p>
        <p className="characterDetail__item">
          <span className="characterDetail__item-type">Location: </span>{" "}
          {location.name}
        </p>
        <p className="characterDetail__item">
          <span className="characterDetail__item-type">Episodes: </span>{" "}
          {episode.length}
        </p>
      </div>
    </div>
  );
};

export default CharacterDetail;
