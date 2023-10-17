//  lookup O(n)
//  pop O(1)
//  push O(1)
//  peek O(1)
import Node from "./Node.mjs"

class Stack {
    constructor() {
        this.top = null
        this.bottom = null
        this.length = 0
    }

    peek() {
        return this.top
    }

    push(value) {
        const newNode = new Node(value)

        if (this.length === 0) {
            this.top = newNode
            this.bottom = newNode
        } else {
            newNode.next = this.top
            this.top = newNode
        }

        this.length++

        return this
    }

    pop() {
        if (this.length === 0) {
            return null
        }

        if (this.length === 1) {
            this.bottom = null
        }

        const poppedValue = this.top.value

        this.top = this.top.next
        this.length--
        return poppedValue
    }

    isEmpyt() {
        return !this.length
    }
}

const myStack = new Stack()

console.log(myStack.peek())

myStack.push('google')
myStack.push('udemy')
myStack.push('cursera')

console.log(myStack.peek())

console.log(myStack.pop())
console.log(myStack.pop())
console.log(myStack.pop())

console.log(myStack)