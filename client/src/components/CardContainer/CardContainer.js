import React, {Component} from 'react';
import './CardContainer.scss';
import Card from '../Card/Card';
import Axios from 'axios';

export default class CardContainer extends Component{
    state={
        articles: []
    }

    componentDidMount(){
        Axios.post('http://localhost:8080/pocket/get', {token: localStorage.getItem('accessToken')})
             .then(result => this.setState({articles: result.data}))
    }

    render(){
        return(
            <div className="cardContainer">
                {this.state.articles.map(article => {
                    return <Card article={article}/>
                })}
            </div>
        )
    }
}