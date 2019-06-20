import React from 'react';
import './BottomBar.scss';
import {Link} from 'react-router-dom';

const BottomBar = (props) => {
    return(
        <div className="bottomBar">
            <Link to='/login'>
                <p className="bottomBar__text">CONNECT MY SERVICES</p>
            </Link>
        </div>
    )
};

export default BottomBar;