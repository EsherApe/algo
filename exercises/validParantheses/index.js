var isValid = function(s) {
    if (s.length % 2 !== 0) {
        return false
    }

    const openedBrackets = {
        '(': ')',
        '{': '}',
        '[': ']',
    }

    const stack = []

    for (let char of s) {
        if (openedBrackets[char]) {
            stack.push(openedBrackets[char])
        } else if (!stack.length || char !== stack.pop()) {
            return false
        }
    }

    return stack.length === 0
}
