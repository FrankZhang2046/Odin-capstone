import React from 'react';
import './FeedlyNavTab.scss';
import feedlyTabIcon from '../../assets/feedly-tab-icon.svg';

class FeedlyNavTab extends React.Component{
    state={
        toggled: false
    }

    clickHandler=()=>{
        this.props.toggleCategories();
        this.setState({toggled: !this.state.toggled})
    }

   render(){
    return(
        <div className={this.state.toggled ? "feedlyNavTab--toggled" : "feedlyNavTab"} onClick={this.clickHandler}>
            <img className="feedlyNavTab__icon" src={feedlyTabIcon} alt="feedly-tab-icon"/>
            <p className="feedlyNavTab__text">FEEDLY</p>
        </div>
    )
   }
}

export default FeedlyNavTab;