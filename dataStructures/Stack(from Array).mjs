//  lookup O(n)
//  pop O(1)
//  push O(1)
//  peek O(1)

class Stack {
    constructor() {
        this.array = []
    }

    peek() {
        return this.array[this.data.length - 1]
    }

    push(value) {
        this.array.push(value)

        return this
    }

    pop() {
        return this.array.pop().value
    }

    isEmpty() {
        return !this.array.length
    }
}