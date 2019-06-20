import React from 'react';
import './Navbar.scss';
import odinIcon from '../../assets/odin-icon.svg';
import {Link} from 'react-router-dom';

const Navbar =(props)=> {
    return (
        <div className="navbar">
           <Link to={'/repository/pocket'}>
           <img src={odinIcon} alt="odin-icon" className="navbar__odin-icon"/>
           </Link>
           <div className="navbar__text-container">
               <h1 className="navbar__title" >PROJECT - ODIN</h1>
                <p className="navbar__description">The only Internet articles repository you will ever need</p>
            </div>
        </div>
    )
}

export default Navbar;
