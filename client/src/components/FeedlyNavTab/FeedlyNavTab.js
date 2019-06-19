import React from 'react';
import './FeedlyNavTab.scss';
import feedlyTabIcon from '../../assets/feedly-tab-icon.svg';

class FeedlyNavTab extends React.Component{
    state={
    };

    clickHandler=()=>{
        this.props.toggleTab();
    };

   render(){
    return(
        <div className={this.props.toggled ? "feedlyNavTab--toggled" : "feedlyNavTab"} onClick={this.clickHandler}>
            <img className="feedlyNavTab__icon" src={feedlyTabIcon} alt="feedly-tab-icon"/>
            <p className="feedlyNavTab__text">FEEDLY</p>
        </div>
    )
   }
}

export default FeedlyNavTab;