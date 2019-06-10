import React, { Component } from "react";
import axios from "axios";
import ConsumerKey from "../../data/consumerKey";
import { Link } from "react-router-dom";
import PocketLogin from "../PocketLogin/PocketLogin";
import FeedlyLogin from "../FeedlyLogin/FeedlyLogin";
import RepositoryButton from "../RepositoryButton/RepositoryButton";
import './Login.scss';

const domainName = window.location.href;

class Login extends Component {
  state = {
    token: "",
    baseUrl: ""
  };

  componentDidMount(){
    localStorage.setItem('myKey', ConsumerKey);
  }

  getRequestToken = () => {
    axios
      .post(`http://localhost:8080`, {
        key: ConsumerKey,
        uri: `${domainName}`
      })
      .then(result => {
        const token = result.data;
        const cleanToken = token.slice(5, token.length);
        localStorage.setItem("token", cleanToken);
        this.setState({
          token: result.data,
          pocketAuthenticated: true,
          baseUrl: `https://getpocket.com/auth/authorize?request_token=${cleanToken}&redirect_uri=http://localhost:3000/login`
        });
        console.log(localStorage.getItem('token'))
      });
  };

  getAccessToken = () => {
    axios
      .post(`http://localhost:8080/pocket`, {
        key: ConsumerKey,
        token: localStorage.getItem("token")
      })
      .then(result => {
        localStorage.setItem('accessToken',result.data.slice(13));
        console.log(result.data);
      });
  };

  render() {
    return (
      <div className="login">
          <PocketLogin link={this.state.baseUrl} getRequestToken={this.getRequestToken} getAccessToken={this.getAccessToken}
          myKey={localStorage.getItem('myKey')}
          token={localStorage.getItem('accessToken')}
          />
          <FeedlyLogin />
          <RepositoryButton />
      </div>
    );
  }
}

export default Login;
