export const maxChar = (str) => {
    if (!str) {
        return ''
    }

    const map = {}
    let maxCount = 0
    let maxChar = null

    for (let char of str) {
        if (map[char]) {
            map[char]++
        } else {
            map[char] = 1
        }
    }

    for (let char in map) {
        if (map[char] > maxCount) {
            maxChar = char
            maxCount = map[char]
        }
    }

    return maxChar
}
