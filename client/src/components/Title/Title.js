import React from 'react';
import Axios from 'axios';
import {Link} from "react-router-dom";

class Title extends React.Component{
    state={
        article: []
    };

    componentDidMount(){
        // Axios.post(`https://odin-pocket-client.herokuapp.com/feedly/entry`, {id: this.props.entryId})
        //     .then(result => this.setState({article: result.data}))
        this.setState({article: this.props.article})
    }
    
    render(){
        return(
            <div>
                <Link to={`/feedly/article/read`}><h3>{this.state.article}</h3></Link>
            </div>
        )
    }
}

export default Title;