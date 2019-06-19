import React from 'react';
import './ArticleBottomBar.scss';
import spearheadIcon from '../../assets/spearhead.svg';
import horseIcon from '../../assets/sleipnir-horse-icon.svg';
import verticalBar from '../../assets/Line.svg';
import {Link} from 'react-router-dom';

class ArticleBottomBar extends React.Component {
    callSpeedReader = () => {
        this.props.clickHandler();
    }
    
    render(){
        return(
            <div className="articleBottomBar">
                    <img src={spearheadIcon} alt="spearhead-icon"/>
                    <p onClick={this.callSpeedReader} className="articleBottomBar__speed-read">SPEED READ</p>
                    <img src={verticalBar} alt="vertical-bar"/>
                    
                    <img className="articleBottomBar__horse" src={horseIcon} alt="horse-icon"/>
                    <Link to={{pathname:'/scraped-reading-area', state:{
                        url: this.props.url
                    }}}>
                    <p className="articleBottomBar__long-form">LONG-FORM</p> </Link>
            </div>
        )
    }
    
}

export default ArticleBottomBar;