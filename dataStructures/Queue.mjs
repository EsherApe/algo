//  lookup O(n)
//  enqueue O(1)
//  dequeue O(1)
//  peek O(1)

import Node from './NodeTree.mjs'

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.length = 0
    }

    peek() {
        return this.first
    }

    enqueue(value) {
        const newNode = new Node(value)

        if (this.length === 0) {
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }

        this.length++
        return this
    }

    dequeue() {
        if (!this.first) {
            return null
        }

        if (this.first === this.last) {
            this.last = null
        }

        const oldFirst = this.first

        this.first = this.first.next
        this.length--

        return oldFirst.value
    }

    isEmpty() {
        return !this.length 
    }
}