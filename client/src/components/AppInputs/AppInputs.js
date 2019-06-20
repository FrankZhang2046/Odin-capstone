import React from 'react';
import './AppInputs.scss'


const AppInputs = ({playing, handleChangeWPM, wordsPerDisplay, handleChangeWordsPerDisplay, wpm}) => {

    return <div className="app-inputs">
        <div className="app-inputs__group">
            
            <label htmlFor="wpm-input">
                <input  className="wpm-form" type="text" id="wpm-input" value={wpm} disabled={playing}
                       onChange={handleChangeWPM}/> 
            </label>
            <div className="wpm-form__label">wpm</div>
        </div>
        <div className="app-inputs__group">

        </div>
    </div>

}



export default AppInputs