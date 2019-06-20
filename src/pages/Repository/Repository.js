import React from 'react';
import Feeds from '../../components/Feeds/Feeds';
import RepositoryBottomBar from '../../components/RepositoryBottomBar/RepositoryBottomBar';

class Repository extends React.Component{

    state={
        feedlyCategory: ''
    }

    componentDidUpdate(){
        if (this.state.feedlyCategory !== this.props.match.params.id) {
            this.setState({feedlyCategory: this.props.match.params.id})
        }
    }

    render(){
        return (
            <div className="repository">
                <Feeds feedlyCategory={this.state.feedlyCategory}/>
                <RepositoryBottomBar />
            </div>
        )

    }
};

export default Repository;