import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

const Card = props => {
  const { given_title, top_image_url, excerpt, resolved_url } = props.article;

  return (
    <Link
      to={{
        pathname: "/reading-area",
        state: {
          url: resolved_url
        }
      }}
    >
      <div className="card">
        <img src={top_image_url} alt="top-url" className="card__img" />
        <div className="card__textContainer">
          <h4 className="card__textContainer--header">
            {given_title.length > 0
              ? `${given_title.toUpperCase().substr(0, 27)}...`
              : "CLICK TO VIEW FULL ARTICLE"}
          </h4>
          <p className="card__textContainer--paragraph">{excerpt}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
