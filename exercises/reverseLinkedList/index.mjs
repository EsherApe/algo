import { LinkedList } from '../../dataStructures/LinkedList.mjs'

const reverseList = (head) => {
    if (!head || !head.next) {
        return head
    }

    let prev = null
    let current = head

    while(current) {
        let next = current.next

        current.next = prev

        prev = current
        current = next
    }

    return prev
} // time: O(n), space O(1)

const myLinkedList = new LinkedList(1)
myLinkedList.append(2)
myLinkedList.append(3)
myLinkedList.append(4)
myLinkedList.append(5)

console.log(reverseList(myLinkedList.head))
