// Time complexity O(n)
// + Shortest Path
// + Closer Nodes
// - Require more memory

//        9
//     /     \
//   4        20   
//  / \      /  \ 
// 1   6   15   170

//
//[9,4,20,1,6,15,170]

export function breadthFirstSearch() {
    let currentNode = this.root
    let list = []
    let queue = [currentNode]

    while(queue.length > 0) {
        currentNode = queue.shift()
        list.push(currentNode.value)
        if (currentNode.left) {
            queue.push(currentNode.left)
        }
        if (currentNode.right) {
            queue.push(currentNode.right)
        }
    }

    return list
}

export function breadthFirstSearchRecursive(queue = [this.root], list = []) {
    if (!queue.length) {
        return list
    }

    let currentNode = queue.shift()
    list.push(currentNode.value)

    if (currentNode.left) {
        queue.push(currentNode.left)
    }
    if (currentNode.right) {
        queue.push(currentNode.right)
    }

    return this.breadthFirstSearchRecursive(queue, list)
}