import React from 'react';
import './ArticleBottomBar.scss';
import spearheadIcon from '../../assets/spearhead.svg';
import horseIcon from '../../assets/sleipnir-horse-icon.svg';
import verticalBar from '../../assets/Line.svg';

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
                    <img src={horseIcon} alt="horse-icon"/>
                    <p className="articleBottomBar__long-form">LONG-FORM</p>
            </div>
        )
    }
    
}

export default ArticleBottomBar;