import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './Sidebar.scss';
import PocketNavTab from '../PocketNavTab/PocketNavTab';
import FeedlyNavTab from '../FeedlyNavTab/FeedlyNavTab';

export default class Sidebar extends React.Component {
    state = {
        categories: [],
        showCategories: false,
        pocketToggled: true,
        feedlyToggled: false
    };

    // toggleCategories = () => {
    //     this.setState({showCategories: !this.state.showCategories})
    // }

    componentDidMount() {
        axios.get('http://localhost:8080/feedly/category')
            .then(result => this.setState({categories: result.data}))
    };

    togglePocketTab=()=>{
        if(window.location.href.includes('feedly')){
            this.setState({
                feedlyToggled: !this.state.feedlyToggled,
                pocketToggled: !this.state.pocketToggled
            });
        }
    };
    toggleFeedlyTab=()=>{
        if(window.location.href.includes('pocket')){
            this.setState({
                feedlyToggled: !this.state.feedlyToggled,
                pocketToggled: !this.state.pocketToggled
            });
        }
    };

    render() {
        return (
            <div className="sidebar">
                <Link to={'/repository/pocket'} onClick={this.togglePocketTab}><PocketNavTab className="sidebar__pocket" toggled={this.state.pocketToggled}/></Link>
                
                <Link to={'/repository/feedly'}>
                <FeedlyNavTab className="sidebar__feedly" toggleTab={this.toggleFeedlyTab} toggled={this.state.feedlyToggled}/>
                </Link>

                {this.state.feedlyToggled ? this.state.categories.map((category, index) => {
                    return <Link to={`/repository/feedly/${category}`}>
                        <div className="sidebar__category">{category.toUpperCase()}</div>
                    </Link>
                }) : null}
            </div>
        )
    }
}