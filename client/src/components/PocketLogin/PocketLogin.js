import React from "react";
import "./PocketLogin.scss";
import axios from "axios";
import pocketIcon from "../../assets/pocket-icon-large.svg";
import {Link} from 'react-router-dom';

export default class PocketLogin extends React.Component {

  // getArticle = () => {
  //   this.props.getAccessToken();
  //   const { myKey, token } = this.props;

  //   axios({
  //     method: "post",
  //     url: "https://odin-pocket-client.herokuapp.com/pocket/get",
  //     data: {
  //       token: localStorage.getItem("accessToken")
  //     }
  //   }).then(result => {
  //     if (result.data.length === 0) {
  //       alert(`got no articles in db, performing article scraping`);
  //       axios
  //         .post(`https://odin-pocket-client.herokuapp.com/pocket/write`, {
  //           key: myKey,
  //           token: token
  //         })
  //         .then(result => console.log(result));
  //     } else {
  //       alert(`we got your pocket articles`);
  //       console.log(result.data);
  //     }
  //   });
  // };

  read = () => {};

  render() {
    return (
      <div className="pocketLogin">
        <img
          className="pocketLogin__icon"
          src={pocketIcon}
          alt="pocket-icon"
        />
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
            
            <Link to={'/repository/pocket'}>
            <button
              className="pocketLogin__control-button-get-articles"
            >
              FRANK'S ACCOUNT
            </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
