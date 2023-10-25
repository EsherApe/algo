//  lookup O(n)
//  pop O(1)
//  push O(1)
//  peek O(1)
import Node from "./NodeTree.mjs"

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
