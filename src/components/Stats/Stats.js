import React from 'react';
import RepositoryBottomBar from '../RepositoryBottomBar/RepositoryBottomBar';
import './Stats.scss';
import statsGraph from '../../assets/stats.svg';

const Stats = (props) => {
    return (
        <div className="stats">
        <img className="stats__graph" src={statsGraph} alt=""/>
        <RepositoryBottomBar />
        </div>
    )
}

export default Stats;