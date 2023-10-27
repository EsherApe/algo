const vowels = (str) => {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let count = 0

    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++
        }
    }

    return count
}

const vowels2 = (str) => {
    const matches = str.match(/[aeiou]/gi)

    return matches ? matches.length : 0
}
