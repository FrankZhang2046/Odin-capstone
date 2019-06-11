import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './Sidebar.scss';
import PocketNavTab from '../PocketNavTab/PocketNavTab';
import FeedlyNavTab from '../FeedlyNavTab/FeedlyNavTab';

export default class Sidebar extends React.Component{
    state={
        categories: [],
        showCategories: false
    }

    toggleCategories=()=>{
        this.setState({showCategories: !this.state.showCategories})
    }

    componentDidMount(){
        axios.get('http://localhost:8080/feedly/category')
             .then(result => this.setState({categories: result.data}))
    }

    render(){
        return(
            <div className="sidebar" >
                <Link to={'/repository/pocket'}><PocketNavTab className="sidebar__pocket"/></Link>
                <FeedlyNavTab className="sidebar__feedly" toggleCategories={this.toggleCategories}/>
                {this.state.showCategories ? this.state.categories.map((category, index) => {
                    return <Link to={`/repository/feedly/${category}`}><div className="sidebar__category">{category.toUpperCase()}</div></Link>
                }) : null}
            </div>
        )
    }
}