import React, { Component } from "react";
import axios from "axios";
import ConsumerKey from "../../data/consumerKey";
import { Link } from "react-router-dom";
import PocketLogin from "../PocketLogin/PocketLogin";
import FeedlyLogin from "../FeedlyLogin/FeedlyLogin";
import RepositoryButton from "../RepositoryButton/RepositoryButton";
import './Login.scss';
import SweetAlert from 'sweetalert2-react';

const domainName = window.location.href;

class Login extends Component {
  state = {
    token: "",
    baseUrl: "",
    show:false
  };

  componentDidMount(){
    localStorage.setItem('myKey', ConsumerKey);
    this.getRequestToken();
    this.setState({show:true})
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
          baseUrl: `https://getpocket.com/auth/authorize?request_token=${cleanToken}&redirect_uri=http://localhost:3000/loggedin`
        });
        console.log(localStorage.getItem('token'))
      });
  };

  // getAccessToken = () => {
  //   axios
  //     .post(`http://localhost:8080/pocket`, {
  //       key: ConsumerKey,
  //       token: localStorage.getItem("token")
  //     })
  //     .then(result => {
  //       localStorage.setItem('accessToken',result.data.slice(13));
  //       console.log(result.data);
  //     });
  // };

  render() {
    return (
      <div className="login">
          <PocketLogin link={this.state.baseUrl} getRequestToken={this.getRequestToken} getAccessToken={this.getAccessToken}
          myKey={localStorage.getItem('myKey')}
          token={localStorage.getItem('accessToken')}
          />
          <FeedlyLogin />
          <RepositoryButton />

          <SweetAlert
            show={this.state.show}
            title="Re: your pocket account"
            text="If you'd like to sign in to your personal POCKET account via OAuth, feel free to so by clicking on AUTHENTICATE, else click on FRANK'S ACCOUNT to load demo articles from the DB."
            onConfirm={() => this.setState({ show: false })}
          />
      </div>
    );
  }
}

export default Login;
