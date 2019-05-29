import React, { Component } from "react";
import axios from "axios";
import ConsumerKey from "../../data/consumerKey";
const domainName = window.location.href;


class Login extends Component {
  state={
      token: '',
      baseUrl: ''
  }  

  getAccessToken=()=>{
    axios
    .post(`http://localhost:8080`, {
      key: ConsumerKey,
      uri: `${domainName}`
    })
    .then(result => {
        const token = result.data;
        const cleanToken = token.slice(5, token.length);
        console.log(token, cleanToken);
        this.setState({
            token: result.data,
            pocketAuthenticated: true,
            baseUrl: `https://getpocket.com/auth/authorize?request_token=${cleanToken}&redirect_uri=${domainName}loggedIn`
        })
    });
  }


  render() {
    return (
      <div style={{display: 'flex', flexDirection:'column', width:'50%', justifyContent:'center'}}>
        <div>
          <h1>Authenticate your Pocket account</h1>
          <button onClick={this.getAccessToken} style={{height:'48px'}}>AUTHENTICATE</button>
          {this.state.token === '' ? null: <a href={this.state.baseUrl}>Login</a>}
        </div>
        <div>
          <h1>Authenticate your Feedly account</h1>
          <input type="text" name="feedly-account" id="feedly-account" value="frankbusinessmail@gmail.com" style={{width:'200px'}}/>
          <input type="password" name="feedly-account" id="feedly-account" value="frankbusinessmail@gmail.com" style={{width:'200px'}}/>
        </div>
        {(window.location.href.includes('loggedIn')) ? (<button style={{height: '48px', backgroundColor:'red', color:'white'}}>Access Repository</button>) : null}
     </div>
    );
  }
}

export default Login;
