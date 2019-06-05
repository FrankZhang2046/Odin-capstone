import React from 'react';
import './ArticleBottomBar.scss';

class ArticleBottomBar extends React.Component {
    callSpeedReader = () => {
        this.props.clickHandler();
    }
    
    render(){
        return(
            <div className="articleBottomBar">
                    <p onClick={this.callSpeedReader} className="articleBottomBar__speed-read">SPEED READ</p>
                    <p className="articleBottomBar__long-form">LONG-FORM</p>
            </div>
        )
    }
    
}

export default ArticleBottomBar;