import React, { Component } from "react";
import axios from "axios";
import ConsumerKey from "../../data/consumerKey";
import { Link } from "react-router-dom";
const domainName = window.location.href;

class Login extends Component {
  state = {
    token: "",
    baseUrl: ""
  };

  getRequestToken = () => {
    axios
      .post(`http://localhost:8080`, {
        key: ConsumerKey,
        uri: `${domainName}/login`
      })
      .then(result => {
        const token = result.data;
        const cleanToken = token.slice(5, token.length);
        localStorage.setItem("token", cleanToken);
        this.setState({
          token: result.data,
          pocketAuthenticated: true,
          baseUrl: `https://getpocket.com/auth/authorize?request_token=${cleanToken}&redirect_uri=${domainName}/login`
        });
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          justifyContent: "center"
        }}
      >
        <div>
          <h1>Authenticate your Pocket account</h1>
          <button onClick={this.getRequestToken} style={{ height: "48px" }}>
            AUTHENTICATE
          </button>
          <a href={this.state.baseUrl}>Login</a>
          <button onClick={this.getAccessToken}>Get access token</button>
        </div>
        <div>
          <h1>Authenticate your Feedly account</h1>
          <input
            type="text"
            name="feedly-account"
            id="feedly-account"
            value="frankbusinessmail@gmail.com"
            style={{ width: "200px" }}
          />
          <input
            type="password"
            name="feedly-account"
            id="feedly-account"
            value="frankbusinessmail@gmail.com"
            style={{ width: "200px" }}
          />
          
        </div>
       
          <Link to="/repository">
            <button
              style={{
                height: "48px",
                backgroundColor: "blue",
                color: "white",
                marginTop: "20px"
              }}
            >
              Access Repository
            </button>
          </Link>
       
      </div>
    );
  }
}

export default Login;
