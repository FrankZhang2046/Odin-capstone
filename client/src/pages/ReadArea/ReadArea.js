import React from 'react';
import Axios from 'axios';
import Article from '../../components/Article/Article';
import titles from '../../../src/components/data/archTitles'

export default class ReadArea extends React.Component{
    state={
        category: titles
    }
    
    componentDidMount(){
        // Axios.post('http://localhost:8080/feedly/stream', {id: this.props.location.state.categoryId})
        //     .then(result => this.setState({category: result.data.ids}))
    }

    render(){
        return (
            <div>
                <div>this is the read area component</div>
                {this.state.category.map(title=>{
                    return <Article article={title.title} />
                })}
            </div>
        )
    }
}