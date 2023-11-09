const palindromeBruteForce1 = (s) => {
    // Remove spaces and punctuation and convert to lowercase
    const cleanedStr = s.replace(/[\W_]/g, '').toLowerCase()
    const reversedStr = cleanedStr.split('').reverse().join('')

    return cleanedStr === reversedStr
}// time O(n), space O(n)

const palindromeBruteForce2 = (s) => {
    // Remove spaces and punctuation and convert to lowercase
    const cleanedStr = s.replace(/[\W_]/g, '').toLowerCase()
    let reversedStr = ''

    for (let char of cleanedStr) {
        reversedStr = char + reversedStr
    }

    return cleanedStr === reversedStr
}// time O(n), space O(n)

const palindrome1 = (s) => {
    const cleanedStr = s.replace(/[\W_]/g, '').toLowerCase()
    let left = 0
    let right = cleanedStr.length - 1

    while (left < right) {
        if (cleanedStr[left] !== cleanedStr[right]) {
            return false
        }

        left++
        right--
    }

    return true
}// time O(n), space O(1)

const palindrome2 = (s) => {
    const cleanedStr = s.replace(/[\W_]/g, '').toLowerCase()
    let middle = Math.floor(cleanedStr.length / 2)
    let right = middle
    let left = cleanedStr % 2 === 0 ? middle - 1 : middle

    while (left >= 0 && right <= cleanedStr.length - 1) {
        if (cleanedStr[left] !== cleanedStr[right]) {
            return false
        }

        left--
        right++
    }

    return true
}// time O(n), space O(1)

const almostPalindrome = (s) => {
    const cleanedStr = s.replace(/[\W_]/g, '').toLowerCase()
    let left = 0
    let right = cleanedStr.length - 1

    const isPalindrome = (s, left, right) => {
        while (left < right) {
            if (s[left] !== s[right]) {
                return false
            }
    
            left++
            right--
        }
    
        return true
    }

    while (left < right) {
        if (cleanedStr[left] !== cleanedStr[right]) {
            return isPalindrome(cleanedStr, left, right - 1) || isPalindrome(cleanedStr, left + 1, right)
        }

        left++
        right--
    }

    console.log('true')
    return true
}// time O(n), space O(1)

almostPalindrome('ebcbbececabbacecbbcbe')