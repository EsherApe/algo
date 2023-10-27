export const areAnagrams = (str1, str2) => {
    const createMapFromString = (str) => {
        const clearedStr = str.replace(/[^\w]/g, '').toLowerCase()
        const map = {}

        for (let char of clearedStr) {
            if (!map[char]) {
                map[char] = 1
            } else {
                map[char]++
            }
        }

        return map
    }

    const map1 = createMapFromString(str1)
    const map2 = createMapFromString(str2)

    if (Object.keys(map1).length !== Object.keys(map2).length) {
        return false
    }

    for (let key in map1) {
        if (map1[key] !== map2[key]) {
            return false
        }
    }

    return true
}

export const areAnagrams2 = (str1, str2) => {
    const formatString = (str) => {
        return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
    }

    return formatString(str1) === formatString(str2)
}
