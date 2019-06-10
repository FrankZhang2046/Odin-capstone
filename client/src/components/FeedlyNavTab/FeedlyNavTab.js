import React from 'react';
import './FeedlyNavTab.scss';
import feedlyTabIcon from '../../assets/feedly-tab-icon.svg';

const FeedlyNavTab = (props) => {
    return(
        <div className="feedlyNavTab">
            <img className="feedlyNavTab__icon" src={feedlyTabIcon} alt="feedly-tab-icon"/>
            <p className="feedlyNavTab__text">FEEDLY</p>
        </div>
    )
}

export default FeedlyNavTab;