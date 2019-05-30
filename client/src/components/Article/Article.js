import React from 'react';
import Axios from 'axios';

class Article extends React.Component{
    state={
        article: []
    }
    componentDidMount(){
        Axios.post(`http://localhost:8080/feedly/entry`, {id: this.props.entryId})
            .then(result => this.setState({article: result.data}))
    }
    
    render(){
        return(
            <div>
                <h3>{this.state.article}</h3>
            </div>
        )
    }
}

export default Article;