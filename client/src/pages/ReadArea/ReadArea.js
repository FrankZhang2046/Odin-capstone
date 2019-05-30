import React from 'react';
import Axios from 'axios';
import Article from '../../components/Article/Article';

export default class ReadArea extends React.Component{
    state={
        category: []
    }
    
    componentDidMount(){
        Axios.post('http://localhost:8080/feedly/stream', {id: this.props.location.state.categoryId})
            .then(result => this.setState({category: result.data.ids}))
    }

    render(){
        return (
            <div>
                <div>this is the read area component</div>
                {this.state.category.map(id=>{
                    return <Article entryId={id} />
                })}
            </div>
        )
    }
}