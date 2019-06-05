import React from 'react'
import PropTypes from 'prop-types'

const ControlButtons = ({playing, start, stop, reset}) => {
    return <div className="button-container">

        <button id="start-reading" className="start-reading" disabled={playing}
                onClick={start}>Start
        </button>
        <button id="stop-reading" className="stop-reading" disabled={!playing}
                onClick={stop}>Stop
        </button>
        <button id="reset-reading" className="reset-reading"
                onClick={reset}>Reset
        </button>
    </div>

}

ControlButtons.propTypes = {
    playing: PropTypes.bool.isRequired,
    start: PropTypes.func.isRequired,
    stop: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
}

export default ControlButtons