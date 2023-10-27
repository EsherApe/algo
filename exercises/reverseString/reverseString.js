export const reverse1 = (str) => {
    return str.split('').reverse().join('')
}

export const reverse2 = (str) => {
    let reversed = ''

    for (let char of str) {
        reversed = char + reversed
    }

    return reversed
}

export const reverse3 = (str) => {
    const arr = str.split('')
    const reversed = []

    while(arr.length) {
        reversed.push(arr.pop())
    }

    return reversed.join('')
}

export const reverse4 = (str) => {
    const arr = str.split('')

    return arr.reduce((acc, curr) => curr + acc, '')
}
