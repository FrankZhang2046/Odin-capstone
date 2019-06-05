import React from 'react';
import gungnirIcon from '../../assets/gungnir-icon.svg';
import './Feature-speed.scss';
import {useSpring, animated} from 'react-spring';

const FeatureSpeed = (props) => {
    const fade = useSpring({opacity: 1, marginLeft:0, from: {opacity: 0, marginLeft:-414}, config: {duration: 2500}})
    return( 
        <animated.div style={fade} className="speed">
            <img className="speed__icon" src={gungnirIcon} alt="speed-icon"/>
            <div className="speed__text-container">
                <h2 className="speed__heading">SPEED READING</h2>
                <p className="speed__intro">Have a huge backlog of articles to burn through? ODIN helps you read faster by using the built-in single word fixation speed reader</p>
                <p className="speed__mytho">Gungnir: in Norse mythology, Gungnir is the spear of the god Odin</p>
            </div>
        </animated.div>
    )
}

export default FeatureSpeed;