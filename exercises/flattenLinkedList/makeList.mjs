export const makeLists = (array) => {
    /**
     * Recursively generates the complete graph from given serialization
     * Parameter:
     *   array - serialization of the list as JavaScript array
     * Returns:
     *   head to the topmost list (first node of the graph)
     */
  
    let head = null
    let prev = null
    let i = 0
  
    while (i < array.length) {
        if (array[i] !== null) {
            const node = { val: array[i], prev: prev, next: null, child: null }
  
            if (prev === null) {
                head = prev = node
            } else {
                prev.next = node
                prev = node
            }
  
            i += 1
        } else {
            let node = head
            let end = false
  
            while (array[i] === null) {
                if (node.next === null) {
                    end = true
                } else {
                    node = node.next
                }
  
                i += 1
            }
  
            if (end) {
                node.child = makeLists(array.slice(i))
            } else {
                node.prev.child = makeLists(array.slice(i))
            }
  
            break
        }
    }

    return head
}