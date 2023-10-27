export const steps = (n) => {
    if (!n) {
        return null
    }

    for (let i = 1; i <= n; i++) {
        let line = ''
        for (let j = 1; j <= n; j++) {
            if (j <= i) {
                line += '#'    
            } else {
                line += ' '
            }
        }

        console.log(line)
    }
}

const steps2 = (n) => {
    if (n === 0) {
        return ''
    }

    let line = steps2(n-1) + '#'
    console.log(line)

    return line
}

steps2(5)