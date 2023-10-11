//  prepend O(1)
//  append O(1)
//  insert O(n)
//  lookup O(n)
//  delete O(n)
//  could take more memory O(n)

class Node {
    constructor(value, next = null) {
        this.value = value
        this.next = next
    }
}

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

const myLinkedList = new LinkedList(10)

myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
myLinkedList.insert(2, 99)
myLinkedList.printList()
myLinkedList.remove(0)
myLinkedList.printList()

console.log(myLinkedList)