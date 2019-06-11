import React, {Component} from 'react';
import './FeedlyCardContainer.scss';
import Card from '../Card/Card';
import Axios from 'axios';
import FeedlyCard from '../FeedlyCard/FeedlyCard';

export default class FeedlyCardContainer extends Component{
    state={
        articles: [],
        
    }

    componentDidMount(){
        const url = window.location.href;

        const feedlyCategory = url.substring(url.search('feedly')+7);

        console.log(feedlyCategory)
        
        Axios.post('http://localhost:8080/feedly/get', {category: feedlyCategory})
            .then(result => this.setState({articles: result.data}))
            
    }

    componentDidUpdate(){
        
    }

    render(){
        return(
            <div className="feedlyCardContainer">
                {/* {this.state.articles.map(article => {
                    return <Card article={article}/>
                })} */}
                {this.state.articles.map(article => {
                    return <FeedlyCard article = {article} content={article.content.content} />
                })}
            </div>
        )
    }
}