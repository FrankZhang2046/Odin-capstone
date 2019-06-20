import React from 'react'
import playIcon from '../../assets/play-icon.svg';
import stopIcon from '../../assets/stop-icon.svg';
import resetIcon from '../../assets/reset-icon.svg';
import './ControlButtons.scss';

const ControlButtons = ({playing, start, stop, reset}) => {
    return <div className="button-container">

        <img id="start-reading" className="start-reading" disabled={playing} src={playIcon} alt="play-icon"
                onClick={start} />
        <img  id="stop-reading" className="stop-reading" disabled={!playing}
                onClick={stop}  src={stopIcon} alt="stop-icon" />
        <img id="reset-reading" className="reset-reading"
                onClick={reset} src={resetIcon} alt="reset-icon"/>
    </div>

}

export default ControlButtons