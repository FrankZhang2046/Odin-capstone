import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import CardContainer from '../CardContainer/CardContainer';
import FeedlyCardContainer from '../FeedlyCardContainer/FeedlyCardContainer';

export default class Feeds extends React.Component{
    state={

    };

    toggleTab=()=>{
        this.setState({
            feedlyToggled: !this.state.feedlyToggled,
            pocketToggled: !this.state.pocketToggled
        })
    };

    render(){
        return (
            <div>
                <Sidebar />
                {window.location.href.includes('pocket') ? <CardContainer /> : <FeedlyCardContainer feedlyCategory={this.props.feedlyCategory}/>}
            </div>
        )
    }
}