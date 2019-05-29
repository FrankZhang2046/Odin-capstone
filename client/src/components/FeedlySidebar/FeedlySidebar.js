import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class FeedlySidebar extends React.Component{
    state={
        categories: [],
        showCategories: false
    }

    toggleCategories=()=>{
        this.setState({showCategories: !this.state.showCategories})
    }

    componentDidMount(){
        axios.get(`http://localhost:8080/feedly`)
            .then(result => this.setState({categories: result.data})
            )
    }

    render(){
        return(
            <div>
                <h3 onClick={this.toggleCategories}>Feedly</h3> 
                {this.state.showCategories === true ? this.state.categories.map(category=> {return <Link to={{pathname: `/feedly/${category.label}`, state:{categoryId: category.id}}}><p>{category.label}</p></Link>}) : null}
            </div>
        )
    }
}