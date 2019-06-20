import React from 'react';
import htmlToText from 'html-to-text';
import './FeedlyArticle.scss';
import FeedlyArticleBottomBar from '../FeedlyArticleBottomBar/FeedlyArticleBottomBar';
let text = '';

const FeedlyArticle = (props) => {
    const url = props.location.state.article.alternate[0].href;

    if(props.location.state.article.content.content && props.location.state.article.content.content !== undefined){
        text = htmlToText.fromString(props.location.state.article.content.content.replace(/\\/g,''),{
            ignoreHref: true,
            ignoreImage: true
          })
    }
    else text = 'no text content received from the feed, please click on the LONG FORM button to scrape the full article.'


    
    return (
        <>
        <div className="feedlyArticle">{text}</div>
        <FeedlyArticleBottomBar url={url}/>
        </>
    )
}

export default FeedlyArticle;