import { LinkedList } from '../../dataStructures/LinkedList.mjs'

const reverseLinkedList2 = (head, left, right) => {
    let currentPos = 1, currentNode = head
    let start = head
  
    while(currentPos < left) {
        start = currentNode
        currentNode = currentNode.next
        currentPos++
    }
  
    let newList = null, tail = currentNode
  
    while(currentPos >= left && currentPos <= right) {
        const next = currentNode.next
        currentNode.next = newList
        newList = currentNode
        currentNode = next
        currentPos++
    }
  
    start.next = newList
    tail.next = currentNode
  
    left > 1 ? head : newList
} // time: O(n) space: O(1)

const myLinkedList = new LinkedList(1)
myLinkedList.append(2)
myLinkedList.append(3)

reverseLinkedList2(myLinkedList.head, 1,3)