import React from "react";
import "./PocketLogin.scss";
import pocketIcon from "../../assets/pocket-icon-large.svg";

export default class PocketLogin extends React.Component {
  render() {
    return (
      <div className="pocketLogin">
        <img className="pocketLogin__icon" src={pocketIcon} alt="pocket-icon" />
        <div className="pocketLogin__control">
          <p className="pocketLogin__control--cta">
            CONNECT YOUR POCKET ACCOUNT
          </p>
          <div className="pocketLogin__control-button">
            <button className="pocketLogin__control-button-authen">
              AUTHENTICATE
            </button>
            <button className="pocketLogin__control-button-get-articles">
              GET ARTICLES
            </button>
          </div>
        </div>
      </div>
    );
  }
}
