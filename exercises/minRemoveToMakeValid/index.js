const minRemoveToMakeValid = (s) => {
    const stack = []
    let res = s.split('')

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i)
        } else if (s[i] === ')' && stack.length) {
            stack.pop()
        } else if (s[i] === ')') {
            res[i] = ''
        }
    }

    while(stack.length) {
        res[stack.pop()] = ''
    }

    return res.join('')
}

minRemoveToMakeValid('lee(t(c)o)de)')
