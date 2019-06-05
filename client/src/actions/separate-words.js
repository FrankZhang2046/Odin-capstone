/**
 * Separate words by number
 * @param text
 * @param wordsPerGroup
 * @returns {Array}
 */
export default function separateWords(text, wordsPerGroup = 1) {
    const wordsArray = text
        //force to string
        .toString()
        //remove line breaks
        .replace(/(\r\n|\n|\r)/gm, " ")
        //split
        .split(" ")
        //only strings with length please
        .filter((item)=>item.length > 0);


    const newWordsArray = [];

    for (let i = 0; i < wordsArray.length;) {

        const newWordGroup = wordsArray.slice(i, i + wordsPerGroup).join(" ");

        if (newWordGroup.trim() === "") {
            break;
        }
        newWordsArray.push(newWordGroup);

        // new index to go
        i += wordsPerGroup;
    }

    return newWordsArray;
}