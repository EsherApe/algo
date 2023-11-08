const longestSubstringBruteForce = (s) => {
    let max = 0

    for (let i = 0; i < s.length; i++) {
        let substring = ''

        for (let j = i; j < s.length; j++) {
            if (substring.includes(s[j])) {
                break
            } else {
                substring += s[j]
                if (substring.length > max) {
                    max++
                }
            }
        }
    }

    return max
} // time: O(n^2), space: O(n)

// Sliding window technique
const longestSubstring = (s) => {
    if (s.length <= 1) {
        return s.length
    }

    let charMap = {}
    let maxSize = 0
    let left = 0

    for (let right = 0; right < s.length; right++) {
        const currentChar = s[right]
        const prevSeenChar = charMap[currentChar]

        if (prevSeenChar >= left) {
            left = prevSeenChar + 1
        }

        charMap[currentChar] = right
        maxSize = Math.max(maxSize, right - left + 1)
    }

    return maxSize
} // time: O(n), space: O(n)

longestSubstring("abba")
