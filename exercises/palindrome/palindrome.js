const palindromeBruteForce = (s) => {
    // Remove spaces and punctuation and convert to lowercase
    const cleanedStr = s.replace(/[\W_]/g, '').toLowerCase()

    const reversedStr = cleanedStr.split('').reverse().join('')
    return cleanedStr === reversedStr
}

const palindrome = (s) => {
    const cleanedStr = s.replace(/[\W]/, '').toLowerCase()


}
