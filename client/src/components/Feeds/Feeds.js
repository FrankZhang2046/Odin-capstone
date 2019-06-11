import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import CardContainer from '../CardContainer/CardContainer';

export default class Feeds extends React.Component{
    render(){
        return (
            <div>
                <Sidebar />
                <CardContainer />
            </div>
        )
    }
}