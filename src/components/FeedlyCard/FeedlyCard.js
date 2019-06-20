import React from "react";
import "./FeedlyCard.scss";
import { Link } from "react-router-dom";
import feedlyIcon from '../../assets/feedly-icon-large.svg';
import htmlToText from 'html-to-text';
let text = '';

const FeedlyCard = props => {
  const { title, content } = props.article;
  
  if(content && content.content){text = htmlToText.fromString(content.content.replace(/\\/g,''),{
    ignoreHref: true,
    ignoreImage: true
  })
}
else text = 'ITEM DID NOT RETURN ANY CONTENT, WEB SCRAPING IS RECOMMENDED.'; 

  return (
    <Link
      to={{
        pathname: "/feedly-reading-area",
        state: {
          article: props.article
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
          <p className="feedlyCard__textContainer--paragraph">{text.substring(0, 200)}</p>
        </div>
        
      </div>
    </Link>
  );
};

export default FeedlyCard;
