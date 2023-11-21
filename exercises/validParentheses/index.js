const validParentheses = (str) => {
    if (!str.length) {
        return true
    }

    const stack = []
    const map = {
        '(': ')',
        '{': '}',
        '[': ']',
    }

    for (let char of str) {
        if (map[char]) {
            stack.push(map[char])
        } else if (char !== stack.pop()) {
            console.log('false')
            return false
        }
    }

    return stack.length === 0
} // time: O(n), space: O(n)

validParentheses('[{()}]')
