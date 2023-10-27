export const palindrome = (str) => {
    // Remove spaces and punctuation and convert to lowercase
    const cleanedStr = str.replace(/[^\w]/g, '').toLowerCase()

    const reversedStr = cleanedStr.split('').reverse().join('')
    return cleanedStr === reversedStr
}
