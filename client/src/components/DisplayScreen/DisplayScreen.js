import React  from 'react'
import PropTypes from 'prop-types'
import './DisplayScreen.scss'

const DisplayScreen = ({text})=> <div className="display-screen">{text}</div>;

DisplayScreen.propTypes = {
    text : PropTypes.string.isRequired
}

export default DisplayScreen;