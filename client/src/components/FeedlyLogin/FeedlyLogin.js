import React from "react";
import "./FeedlyLogin.scss";
import feedlyIcon from "../../assets/feedly-icon-large.svg";

export default class FeedlyLogin extends React.Component {
  render() {
    return (
      <div className="feedlyLogin">
        <img className="feedlyLogin__icon" src={feedlyIcon} alt="feedly-icon" />
        <div className="feedlyLogin__control">
          <p className="feedlyLogin__control--cta">
            CONNECT YOUR FEEDLY ACCOUNT
          </p>
          <div className="feedlyLogin__control-button">
              <button className="feedlyLogin__control-button-authen">
                AUTHENTICATE
              </button>
            <button
              className="feedlyLogin__control-button-get-articles"
            >
              GET ARTICLES
            </button>
          </div>
        </div>
      </div>
    );
  }
}
