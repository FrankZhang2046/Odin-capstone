import React, { Component } from "react";
import axios from "axios";
import ConsumerKey from "../../data/consumerKey";
import { Link } from "react-router-dom";
import PocketLogin from "../PocketLogin/PocketLogin";
import FeedlyLogin from "../FeedlyLogin/FeedlyLogin";
import RepositoryButton from "../RepositoryButton/RepositoryButton";
import './Login.scss';
import SweetAlert from 'sweetalert2-react';

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
      .post(`https://odin-pocket-client.herokuapp.com`, {
        key: ConsumerKey,
        uri: `https://odin.frankzhang.dev`
      })
      .then(result => {
        const token = result.data;
        const cleanToken = token.slice(5, token.length);
        localStorage.setItem("token", cleanToken);
        this.setState({
          token: result.data,
          pocketAuthenticated: true,
          baseUrl: `https://getpocket.com/auth/authorize?request_token=${cleanToken}&redirect_uri=https://odin.frankzhang.dev/loggedin`
        });
        console.log(localStorage.getItem('token'))
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
          {console.log(this.state.baseUrl)}
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
