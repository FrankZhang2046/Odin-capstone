import React from 'react';
import stashIcon from '../../assets/stash-icon.svg';
import './Feature-stash.scss';
import {useSpring, animated} from 'react-spring';


const FeatureStash = (props) => {
    const fade = useSpring({opacity: 1, marginTop:0, from: {opacity: 0, marginTop:-80}, config: {duration: 2500}})

    return(
        <animated.div  style={fade} className="stash">
            <img className="stash__icon" src={stashIcon} alt="stash-icon"/>
            <div className="stash__text-container">
                <h2 className="stash__heading">CENTRALIZED REPOSITORY</h2>
                <p className="stash__intro">ODIN connects to all your reading services and congregates your articles in one place. No longer do you need to switch between apps to get your news fix.</p>
                <p className="stash__mytho">Gladsheim: a realm in Asgard where Odin's hall of Valhalla is located</p>
            </div>
        </animated.div>
    )
}

export default FeatureStash;