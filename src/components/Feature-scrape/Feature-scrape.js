import React from 'react';
import sleipnir from '../../assets/sleipnir-icon.svg';
import './Feature-scrape.scss';
import {useSpring, animated} from 'react-spring';

const FeatureScrape = (props) => {
    const fade = useSpring({opacity: 1, from: {opacity: 0}, config: {duration: 4000}})
    return( 
        <animated.div style={fade} className="scrape">
            <img className="scrape__icon" src={sleipnir} alt="scrape-icon"/>
            <div className="scrape__text-container">
                <h2 className="scrape__heading">ARTICLE SCRAPING</h2>
                <p className="scrape__intro">Tired of the truncated articles in your RSS feed? ODIN saves you the pain of having to go to other sites by scraping and retrieving the long-form contents for you</p>
                <p className="scrape__mytho">Sleipnir: in Norse mythology, sleipnir is an eight-legged horse ridden by Odin</p>
            </div>
        </animated.div>
    )
}

export default FeatureScrape;