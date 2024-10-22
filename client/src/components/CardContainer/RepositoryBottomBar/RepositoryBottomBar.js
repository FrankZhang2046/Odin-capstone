import React from "react";
import "./RepositoryBottomBar.scss";
import { Link } from "react-router-dom";
import gearIcon from "../../assets/gear-icon.svg";
import bookIcon from "../../assets/book-icon.svg";
import searchIcon from "../../assets/search-icon.svg";
import statsIcon from "../../assets/stats-icon.svg";


const RepositoryBottomBar = props => {
  return (
    <div className="repositoryBottomBar">
      <div className="repositoryBottomBar__icon">
        <Link to='/login'>
        <img
        className="repositoryBottomBar__icon--gear"
        src={gearIcon}
        alt="gear-icon"
        /></Link>
        
        <img
        className="repositoryBottomBar__icon--book"
        src={bookIcon}
        alt="gear-icon"
        />
        
        <img
          className="repositoryBottomBar__icon--search"
          src={searchIcon}
          alt="gear-icon"
        />
        <Link to={'/stats'}>
        <img
          className="repositoryBottomBar__icon--stats"
          src={statsIcon}
          alt="gear-icon"
        /></Link>
      </div>
    </div>
  );
};

export default RepositoryBottomBar;
