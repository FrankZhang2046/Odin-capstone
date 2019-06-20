import React  from 'react'
import './PageNumberAndWmpCounter.scss'

const PageNumberAndWpmCounter = ({currentIndex,total,wpm})=> <div className="number-of-pages">
    <span>{currentIndex}</span> / <span>{total}</span> on <span>{wpm}</span> wpm
</div>

export default PageNumberAndWpmCounter;