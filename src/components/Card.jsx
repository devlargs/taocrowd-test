import React from "react";
import { DEFAULT_IMAGE } from "../constants/defaultImage";

const Card = ({ name, imageSource }) => {
  return (
    <article className="card">
      <div className="article-wrapper">
        <figure>
          <img
            src={imageSource}
            alt={name + " Image"}
            onError={(e) => (e.currentTarget.src = DEFAULT_IMAGE)}
          />
        </figure>
        <div className="article-body">
          <h2>{name}</h2>
        </div>
      </div>
    </article>
  );
};

export default Card;
