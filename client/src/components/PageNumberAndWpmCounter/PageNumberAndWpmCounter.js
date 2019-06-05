import React  from 'react'
import PropTypes from 'prop-types'

const PageNumberAndWpmCounter = ({currentIndex,total,wpm})=> <div className="number-of-pages">
    <span>{currentIndex}</span> / <span>{total}</span> on <span>{wpm}</span> wpm
</div>

PageNumberAndWpmCounter.propTypes = {
    currentIndex : PropTypes.number.isRequired,
    total : PropTypes.number.isRequired,
    wpm : PropTypes.number.isRequired,
}

export default PageNumberAndWpmCounter;