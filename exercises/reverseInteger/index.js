export const reverseInteger = (int) => {
    const intStr = String(int)
    let reversed = ''
    
    for (let char of intStr) {
        reversed = char + reversed
    }

    if (int < 0) {
        return parseInt(reversed) * -1
    }

    return parseInt(reversed)
}
