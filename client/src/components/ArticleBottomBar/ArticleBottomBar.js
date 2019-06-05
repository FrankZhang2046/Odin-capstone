import React from 'react';
import './ArticleBottomBar.scss';

const ArticleBottomBar = (props) => {
    return(
        <div className="articleBottomBar">
                <p className="articleBottomBar__speed-read">SPEED READ</p>
                <p className="articleBottomBar__long-form">LONG-FORM</p>
        </div>
    )
}

export default ArticleBottomBar;