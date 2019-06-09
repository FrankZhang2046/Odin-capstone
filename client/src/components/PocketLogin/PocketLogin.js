import React from "react";
import "./PocketLogin.scss";
import pocketIcon from "../../assets/pocket-icon-large.svg";

export default class PocketLogin extends React.Component {
  imageClick = () => {
    this.props.getRequestToken();
  }

  writeArticle=()=> {
    this.props.getAccessToken();
  }
  
  render() {
    return (
      <div className="pocketLogin">
        <img className="pocketLogin__icon" src={pocketIcon} alt="pocket-icon" onClick={()=>{this.imageClick()}}/>
        <div className="pocketLogin__control">
          <p className="pocketLogin__control--cta">
            CONNECT YOUR POCKET ACCOUNT
          </p>
          <div className="pocketLogin__control-button">
            <a href={this.props.link}>
            <button className="pocketLogin__control-button-authen">
            AUTHENTICATE
            </button>
            </a>
            <button onClick={()=>this.writeArticle()} className="pocketLogin__control-button-get-articles">
              GET ARTICLES
            </button>
          </div>
        </div>
      </div>
    );
  }
}
