import React, {Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import PocketLogin from "../PocketLogin/PocketLogin";
import FeedlyLogin from "../FeedlyLogin/FeedlyLogin";
import RepositoryButton from "../RepositoryButton/RepositoryButton";
import './LoggedIn.scss';
import PocketLoggedIn from "../PocketLoggedIn/PocketLoggedIn";
import ConsumerKey from "../../data/consumerKey";

class LoggedIn extends Component {
    state = {
        token: "",
        baseUrl: ""
    };



    componentDidMount() {
    }

    render() {
        return (
            <div className="login">
                <PocketLoggedIn/>
                <FeedlyLogin/>
                <RepositoryButton/>
            </div>
        );
    }
}

export default LoggedIn;
