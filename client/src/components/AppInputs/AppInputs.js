import React from 'react'
import PropTypes from 'prop-types'


const AppInputs = ({playing, handleChangeWPM, wordsPerDisplay, handleChangeWordsPerDisplay, wpm}) => {

    return <div className="app-inputs">
        <div className="app-inputs__group">
            <label htmlFor="wpm-input">
                <input type="text" id="wpm-input" value={wpm} disabled={playing}
                       onChange={handleChangeWPM}/> wpm
            </label>
        </div>
        <div className="app-inputs__group">

            <label htmlFor="words-per-display-input">
                <input type="range" min="1" max="10" id="words-per-display-input"
                       value={wordsPerDisplay}
                       disabled={playing}
                       onChange={handleChangeWordsPerDisplay}/> {wordsPerDisplay} words per
                display
            </label>
        </div>
    </div>

}

AppInputs.propTypes = {
    playing: PropTypes.bool.isRequired,
    wpm: PropTypes.number.isRequired,
    wordsPerDisplay: PropTypes.number.isRequired,
    handleChangeWordsPerDisplay: PropTypes.func.isRequired,
    handleChangeWPM: PropTypes.func.isRequired,
}



export default AppInputs