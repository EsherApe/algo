//  prepend O(1)
//  append O(1)
//  insert O(n)
//  lookup O(n)
//  delete O(n)
//  could take more memory O(n)

import Node from "./NodeTree.mjs"

class DoublyLinkedList {
    constructor(value) {
        this.head = new Node(value)
        this.tail = this.head
        this.length = 1
    }

    append(value) {
        const newNode = new Node(value)
        newNode.prev = this.tail // (2)
        this.tail.next = newNode
        this.tail = newNode
        this.length++

        return this
    }

    prepend(value) {
        const newNode = new Node(value, this.head)
        this.head.prev = newNode // (3)
        this.head = newNode
        this.length++

        return this
    }

    insert(index, value) {
        if (index >= this.length) {
            return this.append(value)
        }

        
        const leader = this.traverseToIndex(index - 1)
        // (4)
        const follower = leader.next
        const newNode = new Node(value, follower, leader)
        leader.next = newNode
        follower.prev = newNode
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
        // (5)
        const follower = leader.next
        leader.next = follower.next
        follower.next.prev = leader
        this.length--

        return this
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

const myLinkedList = new DoublyLinkedList(10)

myLinkedList.append(11)
myLinkedList.append(30)
myLinkedList.prepend(5) // 5, 10, 11, 30
// myLinkedList.insert(1, 99)
myLinkedList.remove(2)
myLinkedList.printList()

console.log(myLinkedList)