import React from "react";
import "./PocketLogin.scss";
import axios from 'axios';
import pocketIcon from "../../assets/pocket-icon-large.svg";

export default class PocketLogin extends React.Component {
  imageClick = () => {
    this.props.getRequestToken();
  }

  getArticle=()=> {
    this.props.getAccessToken();
    const {myKey, token} = this.props;
    

    axios({
      method: 'post',
      url: 'http://localhost:8080/pocket/get',
      data: {
        token: localStorage.getItem('accessToken')
      }
    }).then(result => {
      if(result.data.length===0){
        alert(`got no articles in db, performing article scraping`)
        axios.post(`http://localhost:8080/pocket/write`, {
        key: myKey,
        token: token
      })
        .then(result=> console.log(result))
      }
        else {
          alert(`we got your pocket articles`)
          console.log(result.data)}
    })
  }
  
  read=()=>{
    

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
            <button onClick={()=>this.getArticle()} className="pocketLogin__control-button-get-articles">
              GET ARTICLES
            </button>
          </div>
        </div>
      </div>
    );
  }
}
