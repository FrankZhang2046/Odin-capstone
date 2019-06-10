import React from 'react';
import Feeds from '../../components/Feeds/Feeds';
import RepositoryBottomBar from '../../components/RepositoryBottomBar/RepositoryBottomBar';

const Repository = (props) => {
    return (
        <div className="repository">
            <Feeds />
            <RepositoryBottomBar />
        </div>
    )
}

export default Repository;