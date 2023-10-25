// Time complexity O(n)
// + Less Memory
// + Does Path Exist?
// - Can Get Slow

//        9
//     /     \
//   4        20   
//  / \      /  \ 
// 1   6   15   170

// inOrder -   [1,4,6,9,15,20,170]
export function depthFirstSearchInOrder() {
    return traverseInOrder(this.root, [])
}

// preOrder -  [9,4,1,6,20,15,170]
export function depthFirstSearchPreOrder() {
    return traversePreOrder(this.root, [])
}

// postOrder - [1,6,4,15,170,20,9]
export function depthFirstSearchPostOrder() {
    return traversePostOrder(this.root, [])
}

function traverseInOrder(node, list) {
    if (node.left) {
        traverseInOrder(node.left, list)
    }

    list.push(node.value)

    if (node.right) {
        traverseInOrder(node.right, list)
    }

    return list
}

function traversePreOrder(node, list) {
    list.push(node.value)

    if (node.left) {
        traversePreOrder(node.left, list)
    }

    if (node.right) {
        traversePreOrder(node.right, list)
    }

    return list
}

function traversePostOrder(node, list) {
    if (node.left) {
        traversePostOrder(node.left, list)
    }

    if (node.right) {
        traversePostOrder(node.right, list)
    }

    list.push(node.value)

    return list
}