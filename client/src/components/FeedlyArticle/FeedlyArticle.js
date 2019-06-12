import React from 'react';
import htmlToText from 'html-to-text';
import './FeedlyArticle.scss';
import ArticleBottomBar from '../ArticleBottomBar/ArticleBottomBar';

const FeedlyArticle = (props) => {
    const url = props.location.state.article.alternate[0].href;

    const text = htmlToText.fromString(props.location.state.article.content.content.replace(/\\/g,''),{
        ignoreHref: true,
        ignoreImage: true
      })

    return (
        <>
        <div className="feedlyArticle">{text}</div>
        <ArticleBottomBar url={url}/>
        </>
    )
}

export default FeedlyArticle;