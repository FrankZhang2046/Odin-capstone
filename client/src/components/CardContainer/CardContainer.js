import React, {Component} from 'react';
import './CardContainer.scss';
import Card from '../Card/Card';
import Axios from 'axios';

export default class CardContainer extends Component{
    state={
        articles: [],
        
    }

    componentDidMount(){
       
            if (localStorage.getItem('accessToken') === null) {
                Axios.post('https://odin-pocket-client.herokuapp.com/pocket/get', {token: "832f27b9-2943-1093-dfa8-f84094&username=yun.frank.zhang%40outlook.com"})
                .then(result => this.setState({articles: result.data}))
            } else {
                Axios.post('https://odin-pocket-client.herokuapp.com/pocket/get', {token: localStorage.getItem('accessToken')})
                .then(result => this.setState({articles: result.data}))
            }

           
    }

    componentDidUpdate(){
        
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