import React from 'react';
import Feeds from '../../components/Feeds/Feeds';
import RepositoryBottomBar from '../../components/RepositoryBottomBar/RepositoryBottomBar';
let feedlyCategory = '';

const Repository = (props) => {
    if(props.match.params.id !== undefined){
        feedlyCategory = props.match.params.id;
    }

    return (
        <div className="repository">
            <Feeds />
            <RepositoryBottomBar />
        </div>
    )
}

export default Repository;