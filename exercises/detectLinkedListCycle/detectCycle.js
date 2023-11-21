const detectCycle = function(head) {
    if (!head) {
        return head
    }

    let tortois = head
    let hare = head

    while(true) {
        tortois = tortois.next
        hare = hare.next

        if (hare === null || hare.next === null) {
            return null
        } else {
            hare = hare.next
        }

        if (tortois === hare) {
            break
        }
    }

    let p1 = head
    let p2 = tortois

    while(p1 !== p2) {
        p1 = p1.next
        p2 = p2.next
    }

    return p1
}
