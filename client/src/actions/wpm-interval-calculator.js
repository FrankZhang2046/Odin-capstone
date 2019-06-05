/**
 * Calculate interval when desired WPM and number of words per display given
 */
export default function wpmIntervalCalculator(wpm, noOfWordPerDisplay = 1) {
    const minuteAsMs = 60000;

    // how long we have for a word?
    const secondPerWord = minuteAsMs / wpm;

    return secondPerWord * noOfWordPerDisplay;
}