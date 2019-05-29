import React, { Component } from "react";
import axios from "axios";
import ConsumerKey from "../../data/consumerKey";


class Main extends Component {
  state={
      token: '',
      baseUrl: ''
  }  

  componentDidMount() {
  }

  getAccessToken=()=>{
    axios
    .post(`http://localhost:8080`, {
      key: ConsumerKey,
      uri: "http:localhost:3001/test"
    })
    .then(result => {
        const token = result.data;
        const cleanToken = token.slice(5, token.length);
        console.log(token, cleanToken);
        this.setState({
            token: result.data,
            baseUrl: `https://getpocket.com/auth/authorize?request_token=${cleanToken}&redirect_uri=http://localhost:3001`
        })
    });
  }


  render() {
    return (
      <>
        {console.log(typeof(this.state.baseUrl))}
        <h1>authenticating your Pocket account</h1>
        <button onClick={this.getAccessToken} style={{height:'48px'}}>AUTHENTICATE</button>
        {this.state.token === '' ? null: <a href={this.state.baseUrl}>Login</a>}
     </>
    );
  }
}

export default Main;
