import React from "react";
import "./PocketLoggedIn.scss";
import axios from 'axios';
import pocketIcon from "../../assets/pocket-icon-large-golden.svg";
import SweetAlert from 'sweetalert2-react';
import ConsumerKey from "../../data/consumerKey";

export default class PocketLoggedIn extends React.Component {
    state = {
        show: false
    };

    componentDidMount() {
        this.setState({show: true})
    }

    getAccessToken = () => {
        axios
            .post(`https://odin-pocket-client.herokuapp.com/pocket`, {
                key: ConsumerKey,
                token: localStorage.getItem("token")
            })
            .then(result => {
                localStorage.setItem('accessToken', result.data.slice(13));
                console.log(result.data);
            });
    };

    render() {
        return (
            <div className="pocketLoggedIn">
                <img className="pocketLoggedIn__icon" src={pocketIcon} alt="pocket-icon"/>
                <div className="pocketLoggedIn__control">
                    <p className="pocketLoggedIn__control--cta">
                        YOUR POCKET ACCOUNT IS ONLINE
                    </p>
                    <div className="pocketLoggedIn__control-button">

                        <button className="pocketLoggedIn__control-button-authen">
                            AUTHENTICATE
                        </button>

                        <button className="pocketLoggedIn__control-button-get-articles">
                            GET ARTICLES
                        </button>
                    </div>
                </div>

                <SweetAlert
                    show={this.state.show}
                    title="Pocket account successfully connected"
                    text="Please click on the GO TO MY REPOSITORY button at the bottom of the screen to go to view your articles."
                    onConfirm={() => {
                        this.getAccessToken();
                        this.setState({show: false});
                    }}
                />
            </div>
        );
    }
}
