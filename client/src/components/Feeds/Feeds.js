import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import CardContainer from '../CardContainer/CardContainer';
import FeedlyCardContainer from '../FeedlyCardContainer/FeedlyCardContainer';

export default class Feeds extends React.Component{
    render(){
        return (
            <div>
                <Sidebar />
                {window.location.href.includes('pocket') ? <CardContainer /> : <FeedlyCardContainer />}
            </div>
        )
    }
}