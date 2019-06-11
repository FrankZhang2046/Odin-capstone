import React from 'react';
import './PocketNavTab.scss';
import pocketTabIcon from '../../assets/pocket-tab-icon.svg';

class PocketNavTab extends React.Component{
    state={
        toggled: false
    }

    togglePocket=()=>{
        this.setState({toggled: !this.state.toggled})
    }

    render(){
        return(
            <div className={this.state.toggled ? "pocketNavTab--toggled" : "pocketNavTab"} onClick={this.togglePocket}>
                <img className="pocketNavTab__icon" src={pocketTabIcon} alt="pocket-tab-icon"/>
                <p className="pocketNavTab__text">POCKET</p>
            </div>
        )
    }
}

export default PocketNavTab;