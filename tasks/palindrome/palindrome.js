export const palindrome = (str) => {
    // Remove spaces and punctuation and convert to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()

    const reversedStr = cleanedStr.split('').reverse().join('')
    return cleanedStr === reversedStr
}
