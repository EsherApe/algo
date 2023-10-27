export const pyramid = (n) => {
    if (!n) {
        return null
    }

    const midpoint = Math.floor((2 * n - 1) / 2)

    for (let row = 0; row < n; row++) {
        let line = ''

        for (let column = 0; column < 2 * n - 1; column++) {
            if (midpoint - row <= column && midpoint + row >= column) {
                line += '#'
            } else {
                line += ' '
            }
        }

        console.log(line)
    }
}
