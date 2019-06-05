import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import category from '../data/feedlyCategory';
import './FeedlySidebar.scss';

export default class FeedlySidebar extends React.Component{
    state={
        categories: category,
        showCategories: false
    }

    toggleCategories=()=>{
        this.setState({showCategories: !this.state.showCategories})
    }

    componentDidMount(){
        // axios.get(`http://localhost:8080/feedly`)
        //     .then(result => this.setState({categories: result.data})
        //     )
    }

    render(){
        return(
            <div>
                <h3 onClick={this.toggleCategories}>Feedly</h3> 
                {this.state.categories.map(category=> {return <Link to={{pathname: `/feedly/${category}`
                , state:{categoryId: category}}}><p>{category}</p></Link>})}
            </div>
        )
    }
}