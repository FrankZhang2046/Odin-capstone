import React from "react";
import "./FeedlyCard.scss";
import { Link } from "react-router-dom";
import feedlyIcon from '../../assets/feedly-icon-large.svg';

const FeedlyCard = props => {
  const { title } = props.article;


  return (
    <Link
      to={{
        pathname: "/reading-area",
        state: {
          url: ''
        }
      }}
    >
      <div className="feedlyCard">
        <img src={feedlyIcon} alt="top-url" className="feedlyCard__img" />
        <div className="feedlyCard__textContainer">
          <h4 className="feedlyCard__textContainer--header">
            {title.length > 0
              ? `${title.toUpperCase().substr(0, 27)}...`
              : "CLICK TO VIEW FULL ARTICLE"}
          </h4>
          <p className="feedlyCard__textContainer--paragraph"></p>
        </div>
      </div>
    </Link>
  );
};

export default FeedlyCard;
