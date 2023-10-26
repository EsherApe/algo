export const capitalize = (str) => {
    if (!str) {
        return ''
    }

    const strArr = str.split(' ')
    const newArrStr = []

    for (let word of strArr) {
        let firstChar = word[0].toUpperCase()
        let newWord = firstChar + word.slice(1)

        newArrStr.push(newWord)
    }

    return newArrStr.join(' ')
}
