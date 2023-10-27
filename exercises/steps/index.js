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

steps(5)