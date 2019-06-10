import React from 'react';
import './RepositoryButton.scss';
import {Link} from 'react-router-dom';

const RepositoryButton = (props) => {
    return(
        <div className="repositoryButton">
            <Link to='/repository'>
                <p className="repositoryButton__text">GO TO MY REPOSITORY</p>
            </Link>
        </div>
    )
}

export default RepositoryButton;