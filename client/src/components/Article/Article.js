import React from 'react';
import Axios from 'axios';
import titles from '../data/archTitles'

class Article extends React.Component{
    state={
        article: []
    };

    componentDidMount(){
        // Axios.post(`http://localhost:8080/feedly/entry`, {id: this.props.entryId})
        //     .then(result => this.setState({article: result.data}))
        this.setState({article: this.props.article})
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