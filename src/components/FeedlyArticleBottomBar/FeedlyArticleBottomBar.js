import React from 'react';
import './FeedlyArticleBottomBar.scss';
import spearheadIcon from '../../assets/spearhead.svg';
import horseIcon from '../../assets/sleipnir-horse-icon.svg';
import verticalBar from '../../assets/Line.svg';
import {Link} from 'react-router-dom';
import SweetAlert from 'sweetalert2-react';

class FeedlyArticleBottomBar extends React.Component {
    state={
        show:false
    }

    callSpeedReader = () => {
        this.setState({show:true})
    }
    
    render(){
        return(
            <div className="FeedlyArticleBottomBar">
                    <img src={spearheadIcon} alt="spearhead-icon"/>
                    <p onClick={this.callSpeedReader} className="FeedlyArticleBottomBar__speed-read">SPEED READ</p>
                    <img src={verticalBar} alt="vertical-bar"/>
                    
                    <img className="FeedlyArticleBottomBar__horse" src={horseIcon} alt="horse-icon"/>
                    <Link to={{pathname:'/scraped-reading-area', state:{
                        url: this.props.url
                    }}}>
                    <p className="FeedlyArticleBottomBar__long-form">LONG-FORM</p> </Link>
                    <SweetAlert
                    show={this.state.show}
                    title="uh-oh"
                    text="Cannot perform speed-reading on a truncated article, please click on LONG-FORM to scrape the original content before performing speed-reading."
                    onConfirm={() => this.setState({ show: false })}
      />
            </div>
        )
    }
    
}

export default FeedlyArticleBottomBar;