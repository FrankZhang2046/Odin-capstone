import React from 'react';
import './PocketNavTab.scss';
import pocketTabIcon from '../../assets/pocket-tab-icon.svg';

class PocketNavTab extends React.Component{
    state={
        toggled: false
    }

    render(){
        return(
            <div className={this.props.toggled ? "pocketNavTab--toggled" : "pocketNavTab"} >
                <img className="pocketNavTab__icon" src={pocketTabIcon} alt="pocket-tab-icon"/>
                <p className="pocketNavTab__text">POCKET</p>
            </div>
        )
    }
}

export default PocketNavTab;