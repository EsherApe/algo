//  prepend O(1)
//  append O(1)
//  insert O(n)
//  lookup O(n)
//  delete O(n)
//  could take more memory O(n)

import Node from "./Node.mjs"

class LinkedList {
    constructor(value) {
        this.head = new Node(value)
        this.tail = this.head
        this.length = 1
    }

    append(value) {
        const newNode = new Node(value)
        this.tail.next = newNode
        this.tail = newNode
        this.length++

        return this
    }

    prepend(value) {
        const newNode = new Node(value, this.head)
        this.head = newNode
        this.length++

        return this
    }

    insert(index, value) {
        if (index >= this.length) {
            return this.append(value)
        }

        
        const leader = this.traverseToIndex(index - 1)
        const newNode = new Node(value, leader.next)
        leader.next = newNode
        this.length++

        return this
    }

    remove(index) {
        if (index === 0) {
            this.head = this.head.next
            return this
        }

        if (index > this.length) {
            return this
        }

        
        const leader = this.traverseToIndex(index - 1)
        leader.next = leader.next.next
        this.length--

        return this
    }

    reverse() {
        if (!this.head.next) {
            return this.head
        }

        let prev = this.head
        this.tail = this.head
        let current = prev.next

        // [prev] [current] [next]
        while(current) {
            // temporary save next node
            const next = current.next
            // set pointer to previous node
            current.next = prev
            // make current node previous
            prev = current;
            // make next node current to change its pointer to previous mode
            current = next
        }
        // this is a tail (line 77), set pointer to null
        this.head.next = null
        // after loop prev its a last node with pointer
        this.head = prev
    }

    printList() {
        const array = []
        let currentNode = this.head

        while(currentNode !== null) {
            array.push(currentNode.value)
            currentNode = currentNode.next
        }

        console.log(array)
    }

    traverseToIndex(index) {
        let counter = 0
        let currentNode = this.head
        
        while(counter !== index) {
            currentNode = currentNode.next
            counter++
        }

        return currentNode
    }
}

const myLinkedList = new LinkedList(1)

myLinkedList.append(2)
myLinkedList.append(3)
myLinkedList.append(4)
myLinkedList.append(5)
myLinkedList.printList()
myLinkedList.reverse()
myLinkedList.printList()
