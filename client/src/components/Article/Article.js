import React from 'react';
import content from '../data/content';
import SpeedyReader from 'react-speedy-reader';
import ArticleBottomBar from '../ArticleBottomBar/ArticleBottomBar';


class Article extends React.Component{
    state={
        content: content,
        showContent: true,
        speedRead: false
    };

    speedRead=()=>{
        this.setState({showContent: !this.state.showContent, speedRead: !this.state.speedRead})
    };

    render(){
        return (
            <>
              {this.state.showContent===true? <p>{this.state.content}</p>: null}
              {this.state.speedRead===true? <div className="demo">
                  <SpeedyReader 
                    autoPlay
                    inputText={this.state.content}
                  />
              </div> : null}
              <button onClick={this.speedRead}>Speed Read</button>
              <ArticleBottomBar />
            </>
        )
    }
}

export default Article;