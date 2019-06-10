import React from 'react';
import './PocketNavTab.scss';
import pocketTabIcon from '../../assets/pocket-tab-icon.svg';

const PocketNavTab = (props) => {
    return(
        <div className="pocketNavTab">
            <img className="pocketNavTab__icon" src={pocketTabIcon} alt="pocket-tab-icon"/>
            <p className="pocketNavTab__text">POCKET</p>
        </div>
    )
}

export default PocketNavTab;